import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..", "src", "moticon", "icons");
const outPath = join(__dirname, "..", "src", "lib", "metadata.json");

const files = readdirSync(iconsDir).filter((f) => f.endsWith(".json"));

const merged = files
  .map((file) => {
    const name = file.replace(/\.json$/, "");
    const data = JSON.parse(readFileSync(join(iconsDir, file), "utf-8"));
    return {
      name,
      trigger: data.motion?.trigger ?? "hover",
      mechanic: data.motion?.mechanic ?? "",
      duration: data.motion?.duration ?? null,
      ease: data.motion?.ease ?? null,
      stiffness: data.motion?.stiffness ?? null,
      category: data.categories?.[0] ?? "Miscellaneous",
      tags: data.tags ?? [],
      aliases: data.aliases ?? [],
      contributors: data.contributors ?? [],
      deprecated: data.deprecated ?? false,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

writeFileSync(outPath, JSON.stringify(merged, null, 2) + "\n");
console.log(`wrote ${merged.length} icons to src/lib/metadata.json`);
