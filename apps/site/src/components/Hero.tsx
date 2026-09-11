"use client";

import Link from "next/link";
import { Bell, Heart, Download, Scissors } from "@moticon/react";
import { CopyButton } from "@/components/CopyButton";
import { trackEvent } from "@/lib/analytics";

const INSTALL = "npm install @moticon/react motion";

// A small, fixed set of direct imports — never the icon barrel. Each shows a
// different real mechanic: a swing, a beat, a drop, a snip.
const DEMO = [
  { Icon: Bell, label: "ring" },
  { Icon: Heart, label: "beat" },
  { Icon: Download, label: "drop" },
  { Icon: Scissors, label: "snip" },
] as const;

export function Hero() {
  return (
    <section className="relative border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-12 md:py-28">
        <div className="flex flex-col justify-center gap-5 sm:gap-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            animated icons · zero generic tweens
          </p>
          <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Animated React icons that move like the objects they represent.
          </h1>
          <p className="max-w-md text-sm leading-6 text-muted sm:text-base">
            Every icon has a hand-built mechanic — a bell rings, a heart beats, a
            download drops. Not a generic scale or rotate tween. TypeScript,
            built on Motion, tree-shakeable, respects{" "}
            <code className="font-mono text-xs text-foreground">prefers-reduced-motion</code>.
          </p>

          <div className="flex max-w-md items-center gap-2 rounded-md border border-border-strong bg-surface px-3 py-3 font-mono text-[11px] min-[360px]:text-xs sm:text-sm">
            <span className="shrink-0 text-muted">$</span>
            <span className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-foreground">
              {INSTALL}
            </span>
            <CopyButton
              value={INSTALL}
              label="Copy"
              iconOnly
              size={14}
              ariaLabel={`Copy install command: ${INSTALL}`}
              variant="inline"
              event="install_copied"
              eventDetail={{ from: "hero", manager: "npm" }}
              className="shrink-0"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/icons"
              onClick={() => trackEvent("browse_icons_cta", { from: "hero" })}
              className="rounded-md bg-accent px-5 py-2.5 font-mono text-xs font-medium text-[#07130d] transition-transform hover:-translate-y-0.5"
            >
              Browse icons →
            </Link>
            <Link
              href="/docs"
              onClick={() => trackEvent("docs_cta", { from: "hero" })}
              className="rounded-md border border-border-strong bg-surface px-4 py-2.5 font-mono text-xs text-foreground transition-colors hover:border-accent/40"
            >
              Read the docs
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 rounded-lg border border-border bg-surface p-2 sm:gap-3 sm:p-3">
          {DEMO.map(({ Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center justify-center gap-2 rounded-md border border-transparent bg-background py-6 text-accent transition-colors hover:border-border sm:py-8"
            >
              <Icon size={56} strokeWidth={1.5} className="sm:h-16 sm:w-16" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {label}
              </span>
            </div>
          ))}
          <p className="col-span-2 pt-1 text-center font-mono text-[10px] uppercase tracking-wider text-muted">
            hover any icon
          </p>
        </div>
      </div>
    </section>
  );
}
