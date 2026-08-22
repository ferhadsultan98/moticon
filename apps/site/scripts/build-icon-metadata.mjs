import { readFileSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(__dirname, "..");
const packageIconsDir = join(siteRoot, "..", "..", "packages", "moticon", "src", "icons");
const outDir = join(siteRoot, "src", "generated");
const outFile = join(outDir, "icon-metadata.json");

const files = readdirSync(packageIconsDir).filter((f) => f.endsWith(".json"));

const entries = files.map((file) => {
  const name = file.replace(/\.json$/, "");
  const raw = JSON.parse(readFileSync(join(packageIconsDir, file), "utf-8"));

  return {
    name,
    trigger: raw.motion?.trigger ?? "hover",
    mechanic: raw.motion?.mechanic ?? "",
    duration: raw.motion?.duration ?? null,
    ease: raw.motion?.ease ?? null,
    stiffness: raw.motion?.stiffness ?? null,
    category: raw.categories?.[0] ?? "Miscellaneous",
    tags: raw.tags ?? [],
    aliases: raw.aliases ?? [],
    contributors: raw.contributors ?? [],
    deprecated: raw.deprecated ?? false,
  };
});

entries.sort((a, b) => a.name.localeCompare(b.name));

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JSON.stringify(entries, null, 2) + "\n");

console.log(`Generated ${entries.length} icon metadata entries -> ${outFile}`);
