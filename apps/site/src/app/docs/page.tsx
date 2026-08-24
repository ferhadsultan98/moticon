import { CodeBlock } from "@/components/CodeBlock";
import { Footer } from "@/components/Footer";
import { Bell } from "@moticon/react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

const installVariants = `npm install moticon
pnpm add moticon
yarn add moticon
bun add moticon`;

const usageCode = `import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}`;

const propsCode = `interface MoticonIconProps {
  size?: number;        // optional — default: 24px
  color?: string;       // optional — inherits currentColor
  strokeWidth?: number; // optional — default: 2
  className?: string;   // optional — your CSS class
}`;

const stylingCode = `<Bell
  size={32}
  color="#3dff9e"
  strokeWidth={1.75}
  className="notification-icon"
/>`;

const accessibleCode = `<button aria-label="Open notifications">
  <Bell aria-hidden="true" />
</button>`;

const nextCode = `// app/components/notification.tsx
"use client";

import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}`;

export default function DocsPage() {
  return (
    <>
      <main className="mx-auto w-full min-w-0 max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <div className="w-full max-w-3xl">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Docs" }]}
          />
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            documentation
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
            Get started with moticon
          </h1>
          <p className="mb-12 max-w-xl text-base text-muted">
            328 animated React icons, each modeling a real physical mechanic.
            Zero config, fully typed, tree-shakeable.
          </p>

        <section className="mb-14">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
            01 · Install
          </h2>
          <CodeBlock code={installVariants} lang="bash" />
        </section>

        <section className="mb-14">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
            02 · Usage
          </h2>
          <p className="mb-4 text-sm text-muted">
            Import any icon by name and drop it in — animation triggers
            automatically on hover or tap depending on the icon.
          </p>
          <CodeBlock code={usageCode} />
          <div className="mt-4 flex h-24 items-center justify-center rounded-lg border border-border bg-background">
            <Bell size={32} strokeWidth={1.75} className="text-accent" />
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
            03 · Props
          </h2>
          <p className="mb-4 text-sm text-muted">
            Every icon accepts the same typed prop shape. In TypeScript, the
            question mark means that prop is optional—you can omit it and use
            the documented default.
          </p>
          <CodeBlock code={propsCode} lang="ts" />
        </section>

        <section className="mb-14">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
            04 · Styling
          </h2>
          <p className="mb-4 text-sm leading-6 text-muted">
            Icons inherit the current text color by default. Override size,
            color and stroke directly or with a class name.
          </p>
          <CodeBlock code={stylingCode} />
        </section>

        <section className="mb-14">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
            05 · Next.js
          </h2>
          <p className="mb-4 text-sm leading-6 text-muted">
            Animated icons are interactive Client Components. Add the client
            boundary to the component that imports them.
          </p>
          <CodeBlock code={nextCode} />
        </section>

        <section className="mb-14">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
            06 · Accessibility
          </h2>
          <p className="mb-4 text-sm leading-6 text-muted">
            Label the interactive control, not the decorative icon inside it.
            Tap icons remain keyboard-operable when placed inside a button.
          </p>
          <CodeBlock code={accessibleCode} />
        </section>

        <section className="mb-14">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
            07 · Reduced motion
          </h2>
          <p className="text-sm text-muted">
            Icons respect{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs">
              prefers-reduced-motion
            </code>{" "}
            automatically — no extra configuration needed. Users who disable
            motion in their OS settings see the static icon only.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-mono text-sm uppercase tracking-wider text-foreground">
            Need a live example?
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Use the playground to test every prop and copy the generated code.
          </p>
          <Link
            href="/playground"
            className="mt-5 inline-flex font-mono text-xs text-accent hover:underline"
          >
            Open playground →
          </Link>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
