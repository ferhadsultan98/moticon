import { iconMeta, type IconMeta } from "@/lib/icons";

/**
 * Deterministic related-icon ranking. No randomness, no client state — the same
 * icon always yields the same ordered list, so the links are stable for
 * crawlers and across renders.
 *
 * Priority (higher scores first, ties broken by name):
 *   1. same category
 *   2. shared alias or tag
 *   3. same mechanic
 *   4. same trigger
 */
export function relatedIcons(target: IconMeta, limit = 8): IconMeta[] {
  const targetTags = new Set(
    [...target.tags, ...target.aliases].map((t) => t.toLowerCase()),
  );

  return iconMeta
    .filter((i) => i.name !== target.name && !i.deprecated)
    .map((i) => {
      let score = 0;
      if (i.category === target.category) score += 8;
      const shared = [...i.tags, ...i.aliases].filter((t) =>
        targetTags.has(t.toLowerCase()),
      ).length;
      score += Math.min(shared, 3) * 3;
      if (i.mechanic && i.mechanic === target.mechanic) score += 2;
      if (i.trigger === target.trigger) score += 1;
      return { icon: i, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.icon.name.localeCompare(b.icon.name))
    .slice(0, limit)
    .map((x) => x.icon);
}
