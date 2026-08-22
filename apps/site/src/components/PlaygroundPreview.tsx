"use client";

import Link from "next/link";
import { useState } from "react";
import { Bell, CalendarClock, CloudRain, Rocket } from "moticon";

const previews = [
  ["Bell", Bell],
  ["CalendarClock", CalendarClock],
  ["CloudRain", CloudRain],
  ["Rocket", Rocket],
] as const;

export function PlaygroundPreview() {
  const [active, setActive] = useState(1);
  const ActiveIcon = previews[active][1];

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            try it live
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Find the right motion before you write the code.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">
            Preview mechanics, test contrast, then copy production-ready React.
          </p>
          <Link
            href="/playground"
            className="mt-6 inline-flex rounded-md bg-accent px-4 py-2.5 font-mono text-xs font-medium text-[#07130d] transition-transform hover:-translate-y-0.5"
          >
            Open playground →
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="motion-preview-surface flex min-h-64 items-center justify-center text-accent sm:min-h-72">
            <ActiveIcon size={112} />
          </div>
          <div className="grid grid-cols-4 gap-px border-t border-border bg-border">
            {previews.map(([name, PreviewIcon], index) => (
              <button
                key={name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Preview ${name}`}
                className={`flex h-16 items-center justify-center bg-background transition-colors hover:text-accent ${
                  active === index ? "text-accent" : "text-muted"
                }`}
              >
                <PreviewIcon size={24} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
