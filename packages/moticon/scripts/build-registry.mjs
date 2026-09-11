import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "..", "src");
const iconsDir = join(srcDir, "icons");
const outFile = join(srcDir, "registry.ts");
const capsFile = join(srcDir, "capabilities.json");

const files = readdirSync(iconsDir).filter((f) => f.endsWith(".json"));

// Capability manifest — the single source of truth for stateful/controllable/etc.
// Merged in below. Keys starting with "$" ($comment, $defaults) are directives,
// not icons. Absent capability fields stay absent (not coerced to false) so a
// later audit can tell "verified not capable" from "not yet checked".
const caps = existsSync(capsFile)
  ? JSON.parse(readFileSync(capsFile, "utf-8"))
  : {};
const capDefaults = caps.$defaults ?? { stateful: false, controllable: true };

function capabilitiesFor(name) {
  const entry = caps[name] ?? {};
  const merged = { ...capDefaults, ...entry };
  // strip directive/comment keys if they ever leak in
  delete merged.$comment;
  return merged;
}

const entries = files.map((file) => {
  const name = file.replace(/\.json$/, "");
  const raw = JSON.parse(readFileSync(join(iconsDir, file), "utf-8"));

  return {
    name,
    trigger: raw.motion?.trigger ?? "hover",
    mechanic: raw.motion?.mechanic ?? "",
    duration: raw.motion?.duration ?? null,
    ease: raw.motion?.ease ?? null,
    stiffness: raw.motion?.stiffness ?? null,
    category: raw.categories?.[0] ?? "Miscellaneous",
    categories: raw.categories ?? [],
    tags: raw.tags ?? [],
    aliases: raw.aliases ?? [],
    contributors: raw.contributors ?? [],
    deprecated: raw.deprecated ?? false,
    capabilities: capabilitiesFor(name),
  };
});

entries.sort((a, b) => a.name.localeCompare(b.name));

// Warn about capability entries that don't match any icon (typo guard).
const iconNames = new Set(entries.map((e) => e.name));
for (const key of Object.keys(caps)) {
  if (key.startsWith("$")) continue;
  if (!iconNames.has(key)) {
    console.warn(`[build-registry] capabilities.json has "${key}" but no icon matches it`);
  }
}

const header = `// Auto-generated from src/icons/*.json + src/capabilities.json by
// scripts/build-registry.mjs. Do not edit by hand — edit the per-icon JSON
// files or capabilities.json and rerun \`npm run build:registry\`.

export interface MoticonIconCapabilities {
  /** Accepts a \`state\` prop that drives distinct named animations. */
  stateful: boolean;
  /** Named states the icon understands, first entry is the default. */
  states?: string[];
  /** Can be driven imperatively via a controls object. */
  controllable: boolean;
  /**
   * Whether the animation has a verified pure-CSS/WAAPI equivalent.
   * Absent = not yet audited (distinct from false = verified incompatible).
   */
  cssCompatible?: boolean;
  /**
   * Whether a verified React Native (Reanimated) renderer exists.
   * Absent = not yet audited.
   */
  reactNativeCompatible?: boolean;
}

export interface MoticonIconMeta {
  name: string;
  trigger: "hover" | "tap";
  mechanic: string;
  duration: number | null;
  ease: string | null;
  stiffness: number | null;
  category: string;
  categories: string[];
  tags: string[];
  aliases: string[];
  contributors: string[];
  deprecated: boolean;
  capabilities: MoticonIconCapabilities;
}

export const iconRegistry: MoticonIconMeta[] = `;

writeFileSync(
  outFile,
  header + JSON.stringify(entries, null, 2) + " as MoticonIconMeta[];\n"
);

console.log(
  `Generated registry.ts with ${entries.length} icons -> ${outFile}`
);
