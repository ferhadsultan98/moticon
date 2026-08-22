import Link from "next/link";

export function Breadcrumb({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="custom-scrollbar mb-8 max-w-full overflow-x-auto pb-1">
      <ol className="flex w-max items-center gap-1 rounded-xl border border-border bg-surface p-1 font-mono text-xs shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && (
                <span aria-hidden className="px-1 text-muted/55">
                  ›
                </span>
              )}
              {item.href && !current ? (
                <Link
                  href={item.href}
                  className="rounded-lg px-2.5 py-1.5 text-muted transition-colors hover:bg-background hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={current ? "page" : undefined}
                  className="rounded-lg bg-background px-2.5 py-1.5 text-foreground"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
