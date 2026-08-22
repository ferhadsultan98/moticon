const features = [
  {
    title: "Real mechanics",
    body: "Each animation is modeled on how the real object moves — a pendulum, a drip, a fold. Not a generic scale/rotate tween.",
  },
  {
    title: "Tree-shakeable",
    body: "Import only the icons you use. Each is its own module — no monolithic sprite sheet or icon-font bundle.",
  },
  {
    title: "TypeScript-first",
    body: "Every icon ships typed props: size, color, strokeWidth. Full IntelliSense, zero config.",
  },
  {
    title: "prefers-reduced-motion aware",
    body: "Animations respect the user's motion preference automatically — no extra setup required.",
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
              <h3 className="mb-2 font-mono text-sm text-accent">
                {f.title}
              </h3>
              <p className="text-sm text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
