/**
 * Bundles everything the MCP server needs about the moticon catalog into ONE
 * artifact: packages/mcp/src/generated/icon-data.json.
 *
 * Why an artifact and not a runtime read of @moticon/react:
 *   - the published @moticon/react tarball ships src/icons/*.tsx (bare
 *     geometry) but NOT src/enhanced/*.tsx (the animated layer). A server that
 *     read the installed package at runtime could only ever hand back
 *     un-animated icons.
 *   - reading a sibling package's private src/ layout at runtime is brittle
 *     coupling. Freezing the data at build time removes it.
 *
 * The generated JSON is committed (small, ~1 MB) and also rebuilt on
 * `prebuild`, so `npm pack` always ships a current copy inside dist/.
 *
 * Source of truth: packages/moticon/src/enhanced/*.tsx + its registry export.
 * Transforms are the shared ones in packages/moticon/scripts/lib/icon-source.mjs
 * — the exact same code the shadcn registry uses, so an icon added via
 * `add_icon` is byte-for-byte what `npx shadcn add` would write.
 *
 * Deterministic: run twice, no diff.
 */
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import {
  inlinePropsType,
  helperSource,
  usesHelper,
  slugify,
} from "../../moticon/scripts/lib/icon-source.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const mcpRoot = join(__dirname, "..");
const moticonRoot = join(mcpRoot, "..", "moticon");
const enhancedDir = join(moticonRoot, "src", "enhanced");
const registryModule = join(moticonRoot, "dist", "registry.js");
const outDir = join(mcpRoot, "src", "generated");
const outFile = join(outDir, "icon-data.json");

const { iconRegistry } = await import(pathToFileURL(registryModule).href);
const metaByName = new Map(iconRegistry.map((m) => [m.name, m]));

const files = readdirSync(enhancedDir)
  .filter((f) => f.endsWith(".tsx") && f !== "createEnhancedIcon.tsx")
  .sort();

const helper = helperSource(
  readFileSync(join(enhancedDir, "createEnhancedIcon.tsx"), "utf-8"),
);

const slugs = new Map();
const icons = [];

for (const file of files) {
  const name = file.replace(/\.tsx$/, "");
  const meta = metaByName.get(name);
  if (!meta) {
    throw new Error(`enhanced/${file} has no registry metadata entry`);
  }

  const slug = slugify(name);
  if (slugs.has(slug)) {
    throw new Error(
      `slug collision "${slug}": ${slugs.get(slug)} and ${name}`,
    );
  }
  slugs.set(slug, name);

  const raw = readFileSync(join(enhancedDir, file), "utf-8");
  // props type inlined, but the `./createEnhancedIcon` import is left as-is —
  // the writer rewrites it to the concrete path it puts the helper at.
  const source = inlinePropsType(raw);

  icons.push({
    name,
    slug,
    trigger: meta.trigger,
    mechanic: meta.mechanic,
    category: meta.category,
    categories: meta.categories ?? [meta.category],
    tags: meta.tags ?? [],
    aliases: meta.aliases ?? [],
    deprecated: meta.deprecated ?? false,
    capabilities: {
      stateful: meta.capabilities?.stateful ?? false,
      states: meta.capabilities?.states,
      controllable: meta.capabilities?.controllable ?? false,
    },
    needsHelper: usesHelper(raw),
    source,
  });
}

// --- validate the curated synonym map against the real catalog ---------
const liveNames = new Set(icons.map((i) => i.name));
const synonyms = JSON.parse(readFileSync(join(mcpRoot, "src", "synonyms.json"), "utf-8"));
const badSynonyms = [];
for (const [phrase, targets] of Object.entries(synonyms)) {
  for (const t of targets) {
    if (!liveNames.has(t)) badSynonyms.push(`${phrase} -> ${t}`);
  }
}
if (badSynonyms.length) {
  throw new Error(
    `synonyms.json points at ${badSynonyms.length} icon(s) not in the catalog:\n  ` +
      badSynonyms.join("\n  "),
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(
  outFile,
  JSON.stringify(
    {
      generatedFrom: "packages/moticon/src/enhanced",
      iconCount: icons.length,
      helper: { name: "createEnhancedIcon", source: helper },
      icons,
    },
    null,
    2,
  ) + "\n",
);

console.log(
  `icon-data.json: ${icons.length} icons + 1 helper -> ${outFile.replace(mcpRoot, "packages/mcp")}`,
);
