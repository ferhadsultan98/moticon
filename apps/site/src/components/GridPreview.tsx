import Link from "next/link";
import { iconMeta } from "@/lib/icons";
import { StaticGlyph } from "@/components/StaticGlyph";

/**
 * Homepage catalog teaser. A varied, deterministic 32-icon sample — one per
 * distinct mechanic first, then filled by name — rendered as server-side
 * static geometry (no @moticon/react barrel, no client JS). Every cell is a
 * real crawlable link to the icon page; the live animation lives on those
 * pages and on /icons.
 */
function sample(count: number) {
  const seenMechanic = new Set<string>();
  const picked: typeof iconMeta = [];
  for (const m of iconMeta) {
    if (m.deprecated) continue;
    if (!seenMechanic.has(m.mechanic)) {
      seenMechanic.add(m.mechanic);
      picked.push(m);
      if (picked.length === count) return picked;
    }
  }
  for (const m of iconMeta) {
    if (m.deprecated || picked.includes(m)) continue;
    picked.push(m);
    if (picked.length === count) break;
  }
  return picked;
}

export function GridPreview() {
  const icons = sample(32);

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              browse the set
            </p>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              A different mechanic for every object.
            </h2>
          </div>
          <Link
            href="/icons"
            className="shrink-0 rounded-md border border-border-strong bg-surface px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent/40"
          >
            Browse all icons →
          </Link>
        </div>

        <ul className="grid grid-cols-4 gap-1 rounded-lg border border-border bg-background p-2 min-[480px]:grid-cols-6 sm:grid-cols-8 md:grid-cols-8">
          {icons.map((meta) => (
            <li key={meta.name}>
              <Link
                href={`/icons/${meta.name}`}
                title={`${meta.name} — ${meta.mechanic} on ${meta.trigger}`}
                className="flex min-w-0 flex-col items-center gap-2 rounded-md border border-transparent p-2 text-foreground/70 transition-colors hover:border-border hover:bg-surface hover:text-accent sm:gap-2.5 sm:p-3"
              >
                <StaticGlyph name={meta.name} size={26} />
                <span className="w-full truncate text-center font-mono text-[10px] text-muted">
                  {meta.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
