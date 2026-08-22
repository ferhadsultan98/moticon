"use client";

import { useState } from "react";
import { Bell } from "moticon";

export function Hero() {
  const [copied, setCopied] = useState(false);

  function copyInstall() {
    navigator.clipboard.writeText("npm install moticon");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section className="relative border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-12 md:py-32">
        <div className="flex flex-col justify-center gap-5 sm:gap-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            328 icons · zero generic tweens
          </p>
          <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
            We don&rsquo;t scale icons.
            <br />
            We model how they move.
          </h1>
          <p className="max-w-md text-sm text-muted sm:text-base">
            Every icon in moticon has a hand-built mechanic — a bell that
            actually swings, a drop that actually falls. No opacity flicker,
            no rotate-and-hope.
          </p>
          <button
            onClick={copyInstall}
            className="group flex w-fit max-w-full items-center gap-2 rounded-md border border-border-strong bg-surface px-3 py-3 font-mono text-[11px] text-foreground transition-colors hover:border-accent/40 min-[360px]:px-4 min-[360px]:text-xs sm:gap-3 sm:text-sm"
          >
            <span className="text-muted">$</span>
            <span>npm install moticon</span>
            <span className="ml-2 text-xs text-muted transition-colors group-hover:text-accent">
              {copied ? "copied" : "copy"}
            </span>
          </button>
        </div>

        <div className="flex items-center justify-center rounded-lg border border-border bg-surface">
          <div className="relative flex h-48 w-48 items-center justify-center sm:h-64 sm:w-64 md:h-80 md:w-80">
            <Bell
              size={140}
              color="var(--accent)"
              strokeWidth={1.25}
              className="h-[100px] w-[100px] sm:h-[140px] sm:w-[140px]"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-muted">
              hover to swing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
