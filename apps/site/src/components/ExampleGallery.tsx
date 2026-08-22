"use client";

import {
  Bell,
  CheckCircle,
  CloudRain,
  Download,
  Heart,
  Search,
  ShoppingCart,
  Sparkles,
} from "moticon";

export function ExampleGallery() {
  return (
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2">
      <ExampleCard number="01" title="Notification action">
        <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background p-3 sm:p-4">
          <div className="min-w-0">
            <p className="text-sm font-medium">Product updates</p>
            <p className="mt-1 text-xs text-muted">3 unread notifications</p>
          </div>
          <button
            type="button"
            aria-label="Open notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted hover:text-accent"
          >
            <Bell size={20} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-lg bg-accent" />
          </button>
        </div>
      </ExampleCard>

      <ExampleCard number="02" title="Success feedback">
        <div className="flex items-start gap-3 rounded-lg border border-accent/25 bg-accent-dim p-4">
          <CheckCircle size={22} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <p className="text-sm font-medium">Changes published</p>
            <p className="mt-1 text-xs leading-5 text-muted">
              Your production deployment is live.
            </p>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard number="03" title="Primary actions">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-[#07130d]">
            <Download size={17} /> Download
          </button>
          <button className="flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm text-muted hover:text-foreground">
            <Heart size={17} /> Save
          </button>
          <button className="flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm text-muted hover:text-foreground">
            <ShoppingCart size={17} /> Add to cart
          </button>
        </div>
      </ExampleCard>

      <ExampleCard number="04" title="Data card">
        <div className="rounded-lg border border-border bg-background p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Baku · Today
              </p>
              <p className="mt-2 text-3xl font-medium">18°</p>
            </div>
            <CloudRain size={44} className="text-accent" />
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-3 text-xs text-muted">
            <span>Rain 72%</span>
            <span>Wind 14 km/h</span>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard number="05" title="Search field">
        <label className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2.5 focus-within:border-accent">
          <Search size={17} className="text-muted" />
          <input
            placeholder="Search your workspace"
            className="focus-shell-input min-w-0 flex-1 rounded-lg bg-transparent text-sm placeholder:text-muted"
          />
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted min-[360px]:inline-block">
            ⌘K
          </kbd>
        </label>
      </ExampleCard>

      <ExampleCard number="06" title="Feature label">
        <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4 sm:gap-4 sm:p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
            <Sparkles size={21} />
          </div>
          <div>
            <p className="text-sm font-medium">Motion with meaning</p>
            <p className="mt-1 text-xs leading-5 text-muted">
              Each animation mirrors the object&apos;s real physical behavior.
            </p>
          </div>
        </div>
      </ExampleCard>
    </div>
  );
}

function ExampleCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="min-w-0 rounded-xl border border-border bg-surface p-4 sm:p-6">
      <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
        <span>{title}</span>
        <span>{number}</span>
      </div>
      {children}
    </article>
  );
}
