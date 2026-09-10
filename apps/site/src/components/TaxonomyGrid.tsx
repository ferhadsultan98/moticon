import Link from "next/link";
import type { IconMeta } from "@/lib/icons";
import { iconComponents } from "@/lib/icon-components";
import { AutoAnimateIcon } from "@/components/AutoAnimateIcon";
import { humanizeName } from "@/lib/icon-copy";

/**
 * Static grid of icons for a taxonomy (category or mechanic) page. Each cell
 * links to the icon's detail page, so these pages act as crawlable hubs that
 * distribute link equity across the icon set.
 */
export function TaxonomyGrid({ icons }: { icons: IconMeta[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {icons.map((meta) => {
        const Icon = iconComponents[meta.name];
        if (!Icon) return null;
        return (
          <Link
            key={meta.name}
            href={`/icons/${meta.name}`}
            className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-surface p-4 text-muted transition-colors hover:border-border-strong hover:text-accent"
          >
            <AutoAnimateIcon name={meta.name} size={32} interval={3200} />
            <span className="max-w-full truncate font-mono text-[11px]">
              {humanizeName(meta.name)}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wide text-muted/70">
              {meta.mechanic}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
