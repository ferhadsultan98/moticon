"use client";

import { Code, Star } from "@moticon/react";
import { REPO_URL, NPM_URL } from "@/lib/site";
import { formatStars } from "@/lib/github/format-stars";
import { trackEvent } from "@/lib/analytics";

/**
 * Replaces the old "Sponsor / Coffee / Donate · soon" section — three cards
 * that linked nowhere. This is a compact real-links strip: the repo, the
 * package, the licence. The star count is only shown when it was actually
 * fetched (null on rate-limit).
 */
export function OpenSourceStrip({ stars }: { stars: number | null }) {
  const starsLabel = stars !== null ? formatStars(stars) : null;

  return (
    <section className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            open source
          </p>
          <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
            MIT licensed. Contributions welcome.
          </h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">
            New icons, new mechanics and fixes all go through the repo. Star it
            to follow along, or open a pull request.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("github_cta", { from: "opensource_strip" })}
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <Code size={14} /> GitHub
            {starsLabel && (
              <>
                <span className="h-3 w-px bg-border-strong" />
                <Star size={12} /> {starsLabel}
              </>
            )}
          </a>
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("npm_cta", { from: "opensource_strip" })}
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            @moticon/react on npm
          </a>
          <a
            href={`${REPO_URL}/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            MIT license
          </a>
        </div>
      </div>
    </section>
  );
}
