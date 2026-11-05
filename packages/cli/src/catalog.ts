import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { iconRegistry, type MoticonIconMeta } from "@moticon/react/registry";

// @moticon/react's own package root, resolved relative to this file so it works
// whether linked in the monorepo or installed from npm alongside this CLI.
const moticonPkgRoot = dirname(
  fileURLToPath(import.meta.resolve("@moticon/react/package.json")),
);
const iconsSourceDir = join(moticonPkgRoot, "src", "icons");

export type { MoticonIconMeta };
export const registry = iconRegistry;

export function getMeta(name: string): MoticonIconMeta | undefined {
  return iconRegistry.find((m) => m.name.toLowerCase() === name.toLowerCase());
}

/** Read an icon's raw .tsx component source. */
export function getSource(name: string): string | null {
  const meta = getMeta(name);
  if (!meta) return null;
  try {
    return readFileSync(join(iconsSourceDir, `${meta.name}.tsx`), "utf-8");
  } catch {
    return null;
  }
}

function score(meta: MoticonIconMeta, q: string): number {
  const name = meta.name.toLowerCase();
  if (name === q) return 100;
  if (name.startsWith(q)) return 80;
  if (name.includes(q)) return 60;
  if (meta.aliases.some((a) => a.toLowerCase() === q)) return 90;
  if (meta.aliases.some((a) => a.toLowerCase().includes(q))) return 50;
  if (meta.tags.some((t) => t.toLowerCase() === q)) return 45;
  if (meta.category.toLowerCase().includes(q)) return 40;
  if (meta.tags.some((t) => t.toLowerCase().includes(q))) return 30;
  if (meta.mechanic.toLowerCase().includes(q)) return 25;
  return 0;
}

export function search(query: string, limit = 25): MoticonIconMeta[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return iconRegistry
    .filter((m) => !m.deprecated)
    .map((m) => ({ m, s: score(m, q) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.m.name.localeCompare(b.m.name))
    .slice(0, limit)
    .map((x) => x.m);
}

/**
 * Resolve one or more user-typed names against the catalog. Case-insensitive,
 * and suggests close matches for misses.
 */
export function resolveNames(input: string[]): {
  found: MoticonIconMeta[];
  missing: { query: string; suggestions: string[] }[];
} {
  const found: MoticonIconMeta[] = [];
  const missing: { query: string; suggestions: string[] }[] = [];
  for (const raw of input) {
    const meta = getMeta(raw);
    if (meta) {
      if (!found.some((f) => f.name === meta.name)) found.push(meta);
    } else {
      missing.push({
        query: raw,
        suggestions: search(raw, 5).map((m) => m.name),
      });
    }
  }
  return { found, missing };
}
