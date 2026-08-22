"use client";

import { motion } from "motion/react";
import { Bell } from "moticon";

function GenericBell() {
  return (
    <motion.svg
      width={56}
      height={56}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      whileHover={{ scale: 1.15, opacity: 0.6 }}
      transition={{ duration: 0.2 }}
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 4.5 1.5 6 2 7H4c.5-1 2-2.5 2-7Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </motion.svg>
  );
}

export function ProofSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          the same icon, two philosophies
        </p>
        <h2 className="mb-12 max-w-xl text-2xl font-medium tracking-tight md:text-3xl">
          The difference is legible in two seconds.
        </h2>

        <div className="grid grid-cols-1 divide-y divide-border rounded-lg border border-border md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="flex flex-col items-center gap-6 p-6 sm:p-10">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              generic — scale + opacity
            </span>
            <div className="flex h-32 w-32 items-center justify-center rounded-md border border-border bg-surface text-muted">
              <GenericBell />
            </div>
            <p className="text-center text-sm text-muted">
              Fades and grows. Means nothing. Could be any icon.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 p-6 sm:p-10">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              moticon — pendulum swing
            </span>
            <div className="flex h-32 w-32 items-center justify-center rounded-md border border-accent/30 bg-surface text-foreground">
              <Bell size={56} strokeWidth={1.75} />
            </div>
            <p className="text-center text-sm text-muted">
              Pivots from the top, decays like a real bell. Only bells move
              this way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
