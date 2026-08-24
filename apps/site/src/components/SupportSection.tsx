import { Code, Coffee, Heart, Star } from "@moticon/react";
import { formatStars } from "@/lib/github/format-stars";

const REPO_URL = "https://github.com/ferhadsultan98/moticon";

const supportOptions = [
  {
    title: "Sponsor moticon",
    body: "Help fund new icon mechanics and accessibility work.",
    label: "Sponsors · soon",
    Icon: Heart,
  },
  {
    title: "Buy me a coffee",
    body: "A small thank-you for keeping the library open source.",
    label: "Coffee · soon",
    Icon: Coffee,
  },
  {
    title: "One-time donation",
    body: "Support maintenance without a recurring commitment.",
    label: "Donate · soon",
    Icon: Star,
  },
];

export function SupportSection({ stars }: { stars: number | null }) {
  const starsLabel = stars !== null ? formatStars(stars) : null;
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              support the motion
            </p>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Open source stays open with support.
            </h2>
          </div>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <Code size={15} /> GitHub
            {starsLabel && (
              <>
                <span className="h-3 w-px bg-border-strong" />
                <Star size={13} /> {starsLabel}
              </>
            )}
          </a>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {supportOptions.map(({ title, body, label, Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-accent">
                <Icon size={20} />
              </div>
              <h3 className="font-medium text-foreground">{title}</h3>
              <p className="mt-2 min-h-10 text-sm leading-5 text-muted">{body}</p>
              <span className="mt-5 inline-flex rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                {label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
