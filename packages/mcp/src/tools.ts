import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { iconRegistry, type MoticonIconMeta } from "moticon/registry";

const __dirname = dirname(fileURLToPath(import.meta.url));

// moticon's own package root — resolved relative to this file so it works
// whether this package is linked in a monorepo or installed from npm.
const moticonPkgRoot = dirname(
  fileURLToPath(import.meta.resolve("moticon/package.json"))
);
const iconsSourceDir = join(moticonPkgRoot, "src", "icons");

export const LIBRARIES = [
  {
    id: "moticon",
    name: "moticon",
    description:
      "328 hand-animated React icons, each modeling a real physical mechanic (swing, drip, unfurl, snap) instead of a generic scale/opacity tween.",
    iconCount: iconRegistry.length,
  },
] as const;

function score(meta: MoticonIconMeta, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;

  const name = meta.name.toLowerCase();
  if (name === q) return 100;
  if (name.startsWith(q)) return 80;
  if (name.includes(q)) return 60;

  if (meta.aliases.some((a) => a.toLowerCase() === q)) return 90;
  if (meta.aliases.some((a) => a.toLowerCase().includes(q))) return 50;

  if (meta.category.toLowerCase().includes(q)) return 40;
  if (meta.tags.some((t) => t.toLowerCase() === q)) return 45;
  if (meta.tags.some((t) => t.toLowerCase().includes(q))) return 30;
  if (meta.mechanic.toLowerCase().includes(q)) return 25;

  return 0;
}

export function searchIcons(query: string, limit = 20) {
  return iconRegistry
    .filter((m) => !m.deprecated)
    .map((meta) => ({ meta, s: score(meta, query) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s || a.meta.name.localeCompare(b.meta.name))
    .slice(0, limit)
    .map(({ meta }) => summarize(meta));
}

function summarize(meta: MoticonIconMeta) {
  return {
    name: meta.name,
    category: meta.category,
    mechanic: meta.mechanic,
    trigger: meta.trigger,
    tags: meta.tags,
    aliases: meta.aliases,
  };
}

export function getIconMeta(name: string): MoticonIconMeta | undefined {
  return iconRegistry.find((m) => m.name === name);
}

export function getIconSource(name: string): string | null {
  try {
    return readFileSync(join(iconsSourceDir, `${name}.tsx`), "utf-8");
  } catch {
    return null;
  }
}

export function importSnippet(name: string): string {
  return `import { ${name} } from "moticon";\n\n<${name} size={24} />`;
}
