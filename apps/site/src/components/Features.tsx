import Link from "next/link";

const features = [
  {
    title: "Semantic motion",
    body: "The animation is derived from the object, not a preset. A bell pivots and decays; a download drops and settles. The movement carries meaning.",
  },
  {
    title: "Copy only what you use",
    body: "sideEffects: false and one module per icon. Import three icons, bundle three icons — no sprite sheet, no icon font.",
  },
  {
    title: "Motion-aware accessibility",
    body: "prefers-reduced-motion is respected automatically — the icon renders static, no configuration.",
  },
  {
    title: "Works with coding agents",
    body: "An MCP server lets Claude Code, Cursor and other clients search the catalog by intent and add the component for you.",
  },
];

export function Features() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          why moticon
        </p>
        <h2 className="mb-12 max-w-xl text-2xl font-medium tracking-tight md:text-3xl">
          Built for engineers who care what the motion says.
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-5 sm:p-8">
              <h3 className="mb-2 font-mono text-sm text-accent">{f.title}</h3>
              <p className="text-sm leading-6 text-muted">{f.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs text-muted">
          Typed props, built on <span className="text-foreground">Motion</span>,
          Next.js App Router compatible, MIT licensed —{" "}
          <Link
            href="/docs"
            className="text-foreground underline decoration-border-strong underline-offset-2 hover:decoration-accent"
          >
            see the docs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
