"use client";

import { AutoAnimateIcon } from "@/components/AutoAnimateIcon";

const marqueeIcons = [
  "Bell",
  "CalendarClock",
  "Rocket",
  "CloudRain",
  "Heart",
  "Settings",
  "Download",
  "Sparkles",
  "AlarmClock",
  "Wifi",
  "ShoppingCart",
  "Sun",
  "MoonStar",
  "Camera",
  "Coffee",
  "BatteryCharging",
];

export function IconMarquee() {
  return (
    <section className="border-b border-border py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              live motion stream
            </p>
            <p className="mt-1 text-sm text-muted">
              Visible icons replay automatically. Hover to pause the stream.
            </p>
          </div>
          <span className="hidden font-mono text-[10px] text-muted sm:block">
            328 mechanics
          </span>
        </div>

        <div className="icon-marquee relative overflow-hidden rounded-xl border border-border py-3">
          <div className="icon-marquee-viewport overflow-hidden">
            <div className="icon-marquee-track">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  aria-hidden={group === 1 ? "true" : undefined}
                  className="flex shrink-0 gap-3 pr-3"
                >
                  {marqueeIcons.map((name, index) => (
                    <div
                      key={`${group}-${name}`}
                      className="flex h-28 w-32 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-accent"
                    >
                      <AutoAnimateIcon
                        name={name}
                        size={34}
                        interval={2200 + index * 90}
                      />
                      <span className="max-w-[104px] truncate font-mono text-[9px]">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
