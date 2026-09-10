import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DOC_PAGES, docNeighbors, type DocPage } from "@/lib/docs";

/**
 * Shared chrome for every /docs page: sidebar nav (all doc pages), breadcrumb,
 * and prev/next links. Content is passed as children so each page stays a
 * server component with static HTML.
 */
export function DocsShell({
  current,
  children,
}: {
  current?: DocPage;
  children: React.ReactNode;
}) {
  const { prev, next } = current
    ? docNeighbors(current.slug)
    : { prev: null, next: null };

  return (
    <main className="mx-auto grid w-full min-w-0 max-w-6xl gap-10 px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">
          Documentation
        </p>
        <nav className="flex flex-col gap-0.5 text-sm">
          <Link
            href="/docs"
            className={`rounded-md px-2.5 py-1.5 transition-colors hover:bg-surface hover:text-foreground ${
              current ? "text-muted" : "bg-surface text-foreground"
            }`}
          >
            Overview
          </Link>
          {DOC_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/docs/${page.slug}`}
              aria-current={current?.slug === page.slug ? "page" : undefined}
              className={`rounded-md px-2.5 py-1.5 transition-colors hover:bg-surface hover:text-foreground ${
                current?.slug === page.slug
                  ? "bg-surface text-foreground"
                  : "text-muted"
              }`}
            >
              {page.nav}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="min-w-0">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Docs", href: "/docs" },
            ...(current ? [{ label: current.nav }] : []),
          ]}
        />
        <article className="prose-docs min-w-0">{children}</article>

        {(prev || next) && (
          <div className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/docs/${prev.slug}`}
                className="rounded-lg border border-border p-4 transition-colors hover:border-border-strong"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  ← Previous
                </span>
                <span className="mt-1 block text-sm text-foreground">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/docs/${next.slug}`}
                className="rounded-lg border border-border p-4 text-right transition-colors hover:border-border-strong"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Next →
                </span>
                <span className="mt-1 block text-sm text-foreground">{next.title}</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
