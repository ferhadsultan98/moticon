/**
 * Generates the shadcn registry that the site serves from /r/*.json.
 *
 * Source of truth: packages/moticon/src/enhanced/*.tsx — the exact component
 * layer @moticon/react publishes. An icon installed via
 *   npx shadcn add https://moticon-web.vercel.app/r/bell.json
 * is byte-for-byte the same component (same motion, same reduced-motion
 * behaviour) as `import { Bell } from "@moticon/react"`.
 *
 * Two shapes of source in src/enhanced:
 *   - hand-written (Bell, Menu, Play, Volume2, ...): self-contained, only need
 *     the props type inlined.
 *   - generator-produced (the rest): a local `OriginalX` function plus
 *     `export const X = createEnhancedIcon(OriginalX, {...director})`. These
 *     need the shared `createEnhancedIcon` helper, shipped as its own
 *     registry:lib item and pulled in via registryDependencies.
 *
 * This script does NOT write the served JSON directly. It writes:
 *   apps/site/registry/lib/moticon-motion.tsx
 *   apps/site/registry/moticon/<Name>.tsx        (one per icon)
 *   apps/site/registry.json                       (the shadcn build manifest)
 *
 * `npm run build:registry` then runs `shadcn build` to turn that manifest into
 * apps/site/public/r/*.json (content inlined, schema-validated by shadcn).
 *
 * Deterministic: run twice, no diff. Never hand-edit registry/ or public/r/.
 */
import { readFileSync, readdirSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  inlinePropsType,
  rewriteHelperImport,
  usesHelper,
  helperSource as toHelperSource,
  slugify,
  humanize,
} from "../../../packages/moticon/scripts/lib/icon-source.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(__dirname, "..");
const enhancedDir = join(siteRoot, "..", "..", "packages", "moticon", "src", "enhanced");
const metaPath = join(siteRoot, "src", "generated", "icon-metadata.json");
const registryDir = join(siteRoot, "registry");
const manifestPath = join(siteRoot, "registry.json");

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://moticon-web.vercel.app"
).replace(/\/$/, "");

// Matches the peerDependencies contract of @moticon/react (verified in step 4):
// motion 11, 12 and 13 all pass; 14 is untested. shadcn parses this range and
// installs the newest satisfying version (verified: installs ^13.x).
const MOTION_DEP = "motion@>=11 <14";

// slugify / humanize / inlinePropsType / rewriteHelperImport / usesHelper are
// the shared transforms in packages/moticon/scripts/lib/icon-source.mjs — the
// exact same code the MCP `add_icon` tool uses, so the two never drift.

// --- clean rebuild of the registry source tree --------------------------
rmSync(registryDir, { recursive: true, force: true });
mkdirSync(join(registryDir, "lib"), { recursive: true });
mkdirSync(join(registryDir, "moticon"), { recursive: true });

// --- shared helper (registry:lib) --------------------------------------
const HELPER_SLUG = "moticon-motion";
const helperSource = toHelperSource(
  readFileSync(join(enhancedDir, "createEnhancedIcon.tsx"), "utf-8"),
);
writeFileSync(join(registryDir, "lib", "moticon-motion.tsx"), helperSource);

// --- per-icon source --------------------------------------------------
const files = readdirSync(enhancedDir)
  .filter((f) => f.endsWith(".tsx") && f !== "createEnhancedIcon.tsx")
  .sort();

const meta = JSON.parse(readFileSync(metaPath, "utf-8"));
const metaByName = new Map(meta.map((m) => [m.name, m]));

const seen = new Map(); // slug -> icon name
const manifestItems = [];

for (const file of files) {
  const name = file.replace(/\.tsx$/, "");
  const slug = slugify(name);

  if (seen.has(slug)) {
    throw new Error(
      `slug collision: "${slug}" from both ${seen.get(slug)} and ${name}. Rename one icon.`,
    );
  }
  seen.set(slug, name);
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
    throw new Error(`unsafe slug "${slug}" for icon ${name}`);
  }

  let source = inlinePropsType(readFileSync(join(enhancedDir, file), "utf-8"));

  const iconUsesHelper = usesHelper(source);
  if (iconUsesHelper) {
    // shadcn rewrites this `@/lib/...` import to the consumer's own `lib`
    // alias on install (verified with a custom-alias project).
    source = rewriteHelperImport(source, "@/lib/moticon-motion");
  }

  writeFileSync(join(registryDir, "moticon", `${name}.tsx`), source);

  const m = metaByName.get(name);
  const mechanic = m?.mechanic ?? "";
  const trigger = m?.trigger ?? "hover";
  const category = m?.category ?? "Miscellaneous";

  manifestItems.push({
    name: slug,
    type: "registry:component",
    title: `${humanize(name)} — animated icon`,
    description: `Animated ${humanize(name)} React icon${
      mechanic ? ` with a ${mechanic} motion` : ""
    } on ${trigger}. Models the object's real motion, not a generic tween.`,
    author: "Farhad Sultanov <https://github.com/ferhadsultan98>",
    dependencies: [MOTION_DEP],
    ...(iconUsesHelper
      ? { registryDependencies: [`${SITE_URL}/r/${HELPER_SLUG}.json`] }
      : {}),
    files: [
      {
        path: `registry/moticon/${name}.tsx`,
        type: "registry:component",
        // @components placeholder -> the consumer's configured components dir,
        // so this never hardcodes `@/`, `src/`, or a workspace path.
        target: `@components/moticon/${name}.tsx`,
      },
    ],
    docs: `${SITE_URL}/icons/${name}`,
    categories: ["icons", "animation"],
    meta: { component: name, mechanic, trigger, category, needsHelper: iconUsesHelper },
  });
}

// --- the shadcn build manifest --------------------------------------
const manifest = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "moticon",
  homepage: SITE_URL,
  items: [
    {
      name: HELPER_SLUG,
      type: "registry:lib",
      title: "moticon motion helper",
      description:
        "Shared runtime for moticon's generator-produced animated icons: createEnhancedIcon plus its semantic-accent overlay. Icons that need it declare it as a registryDependency.",
      author: "Farhad Sultanov <https://github.com/ferhadsultan98>",
      dependencies: [MOTION_DEP],
      files: [
        {
          path: "registry/lib/moticon-motion.tsx",
          type: "registry:lib",
          target: "@lib/moticon-motion.tsx",
        },
      ],
    },
    ...manifestItems,
  ],
};

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

console.log(
  `Generated registry source: ${manifestItems.length} icons + 1 helper -> apps/site/registry/ + registry.json`,
);
