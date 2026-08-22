import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Changelog",
  description: "New icons, improvements and releases from moticon.",
};

const releases = [
  {
    version: "0.1.0",
    date: "August 22, 2026",
    title: "The first motion set",
    items: [
      "328 hand-animated React icons",
      "Hover and tap interaction mechanics",
      "TypeScript props and tree-shakeable exports",
      "Reduced-motion support",
      "Interactive playground and icon detail pages",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <div className="w-full max-w-3xl">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Changelog" }]}
          />
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          release notes
        </p>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Changelog
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          New mechanics, new icons and meaningful refinements.
        </p>

        <div className="mt-12 space-y-12">
          {releases.map((release) => (
            <article
              key={release.version}
              className="grid gap-5 border-t border-border pt-8 sm:grid-cols-[140px_1fr]"
            >
              <div className="font-mono text-xs text-muted">
                <p className="text-accent">v{release.version}</p>
                <p className="mt-1">{release.date}</p>
              </div>
              <div>
                <h2 className="text-xl font-medium tracking-tight">
                  {release.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {release.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
