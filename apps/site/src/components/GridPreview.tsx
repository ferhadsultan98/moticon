import Link from "next/link";
import { iconMeta } from "@/lib/icons";
import { IconCell } from "@/components/IconCell";

export function GridPreview() {
  const sample = iconMeta.slice(0, 24);

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              browse the set
            </p>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              328 icons. Hover any of them.
            </h2>
          </div>
          <Link
            href="/icons"
            className="shrink-0 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            view all →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-1 rounded-lg border border-border bg-background p-2 min-[480px]:grid-cols-4 sm:grid-cols-6 md:grid-cols-8">
          {sample.map((meta) => (
            <IconCell key={meta.name} meta={meta} />
          ))}
        </div>
      </div>
    </section>
  );
}
