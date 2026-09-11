import Link from "next/link";
import type { IconMeta } from "@/lib/icons";
import {
  getIconDetail,
  humanizeName,
  interactionRows,
  motionSentence,
  purposeSentence,
  recommendedUses,
} from "@/lib/icon-copy";
import { slugify } from "@/lib/site";
import { hasMechanicPage } from "@/lib/taxonomy";

/**
 * Server-rendered, icon-specific prose + spec table. This is the content that
 * makes each /icons/[name] page a real documentation page rather than a
 * templated preview — rendered as static HTML so crawlers see it without JS.
 */
export function IconContent({ meta }: { meta: IconMeta }) {
  const detail = getIconDetail(meta.name);
  const human = humanizeName(meta.name);
  const uses = recommendedUses(meta);
  const rows = interactionRows(meta, detail);

  return (
    <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="min-w-0 space-y-10">
        <section>
          <h2 className="mb-3 text-xl font-medium tracking-tight">
            What the {human} icon is for
          </h2>
          <p className="text-sm leading-7 text-muted">{purposeSentence(meta)}</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-medium tracking-tight">Motion behavior</h2>
          <p className="text-sm leading-7 text-muted">{motionSentence(meta, detail)}</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-medium tracking-tight">Best used for</h2>
          <ul className="space-y-1.5 text-sm leading-7 text-muted">
            {uses.map((use) => (
              <li key={use} className="flex gap-2">
                <span className="text-accent">·</span>
                <span className="capitalize">{use}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-medium tracking-tight">
            Using the {meta.name} icon in React
          </h2>
          <p className="mb-4 text-sm leading-7 text-muted">
            Install <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs">@moticon/react</code>{" "}
            and import the component by name. It is a tree-shakeable Client
            Component and ships its own animation — no wrapper or config.
          </p>
          <pre className="custom-scrollbar overflow-x-auto rounded-lg border border-border bg-background p-4 font-mono text-xs leading-6">
{`import { ${meta.name} } from "@moticon/react";

export function Example() {
  return <${meta.name} size={24} />;
}`}
          </pre>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-medium tracking-tight">Accessibility</h2>
          <p className="text-sm leading-7 text-muted">
            The {human} icon is decorative by default. When it sits inside an
            interactive control, label the control and hide the icon from
            assistive tech with{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs">
              aria-hidden=&quot;true&quot;
            </code>
            . The animation is automatically suppressed for users who set{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs">
              prefers-reduced-motion
            </code>
            .
          </p>
        </section>
      </div>

      <aside className="min-w-0">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          Animation spec
        </h2>
        <dl className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface text-sm">
          {rows.map(([label, value]) => (
            <div key={label} className="flex items-start justify-between gap-4 px-4 py-2.5">
              <dt className="text-muted">{label}</dt>
              <dd className="text-right font-mono text-xs text-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <Link
            href={`/icons/category/${slugify(meta.category)}`}
            className="rounded-lg border border-border px-2.5 py-1 text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            All {meta.category} icons
          </Link>
          {meta.mechanic && hasMechanicPage(meta.mechanic) && (
            <Link
              href={`/icons/motion/${slugify(meta.mechanic)}`}
              className="rounded-lg border border-border px-2.5 py-1 text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              All {meta.mechanic} icons
            </Link>
          )}
        </div>
      </aside>
    </div>
  );
}
