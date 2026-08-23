import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..", "src", "icons");
const outFile = join(__dirname, "..", "src", "registry.ts");

const files = readdirSync(iconsDir).filter((f) => f.endsWith(".json"));

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
  };
});

entries.sort((a, b) => a.name.localeCompare(b.name));

const header = `// Auto-generated from src/icons/*.json by scripts/build-registry.mjs
// Do not edit by hand — edit the per-icon JSON files and rerun \`npm run build:registry\`.

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
}

export const iconRegistry: MoticonIconMeta[] = `;

writeFileSync(
  outFile,
  header + JSON.stringify(entries, null, 2) + " as MoticonIconMeta[];\n"
);

console.log(`Generated registry.ts with ${entries.length} icons -> ${outFile}`);
