import Link from "next/link";
import type { IconMeta } from "@/lib/icons";
import { relatedIcons } from "@/lib/related";
import { humanizeName } from "@/lib/icon-copy";
import { StaticGlyph } from "@/components/StaticGlyph";

/**
 * Server-rendered "related icons" block. Static — draws each icon's geometry
 * from the generated icon-details.json (the same source the OG images use) so
 * it ships no client JS and every link is in the crawlable HTML.
 */
export function RelatedIcons({ meta }: { meta: IconMeta }) {
  const related = relatedIcons(meta, 8);
  if (related.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-10" aria-labelledby="related-heading">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
        related icons
      </p>
      <h2 id="related-heading" className="mb-6 text-xl font-medium tracking-tight">
        Icons related to {humanizeName(meta.name)}
      </h2>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {related.map((item) => (
          <li key={item.name}>
            <Link
              href={`/icons/${item.name}`}
              className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-surface p-3 text-muted transition-colors hover:border-border-strong hover:text-accent"
            >
              <StaticGlyph name={item.name} size={28} />
              <span className="max-w-full truncate font-mono text-[10px]">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
