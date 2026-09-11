import { iconMeta } from "@/lib/icons";
import { slugify } from "@/lib/site";

export interface TaxonomyEntry {
  /** Canonical label as stored in metadata ("Weather & Nature", "swing"). */
  label: string;
  slug: string;
  count: number;
}

function build(values: string[]): TaxonomyEntry[] {
  const counts = new Map<string, number>();
  for (const v of values) {
    if (!v) continue;
    counts.set(v, (counts.get(v) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([label, count]) => ({ label, slug: slugify(label), count }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export const categories = build(iconMeta.map((i) => i.category));
export const mechanics = build(iconMeta.map((i) => i.mechanic));

export function categoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function mechanicBySlug(slug: string) {
  return mechanics.find((m) => m.slug === slug);
}

/**
 * A mechanic only gets an indexable /icons/motion/<slug> page when 2+ icons
 * share it (see the page's generateStaticParams and the sitemap). Use this
 * before linking to one so single-icon mechanics don't produce 404s.
 */
export function hasMechanicPage(label: string): boolean {
  const m = mechanics.find((x) => x.label === label);
  return !!m && m.count >= 2;
}

export function iconsInCategory(label: string) {
  return iconMeta
    .filter((i) => i.category === label)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function iconsWithMechanic(label: string) {
  return iconMeta
    .filter((i) => i.mechanic === label)
    .sort((a, b) => a.name.localeCompare(b.name));
}
