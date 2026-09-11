import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";

/** Registry of doc-page bodies, keyed by slug. Server components, static HTML. */
export const DOC_CONTENT: Record<string, () => React.ReactNode> = {
  installation: () => (
    <>
      <h1>Install moticon</h1>
      <p className="lead">
        moticon ships as <code>@moticon/react</code> with a single peer
        dependency, <code>motion</code>. It works with any React 18+ setup.
      </p>

      <h2>Package manager</h2>
      <CodeBlock
        lang="bash"
        code={`npm install @moticon/react motion
pnpm add @moticon/react motion
yarn add @moticon/react motion
bun add @moticon/react motion`}
      />
      <p>
        <code>motion</code> (formerly Framer Motion) is a peer dependency so your
        app controls its version and only one copy is bundled. moticon needs{" "}
        <code>motion</code> 11 or newer.
      </p>

      <h2>Your first icon</h2>
      <CodeBlock
        code={`import { Bell } from "@moticon/react";

export function Example() {
  return <Bell size={24} />;
}`}
      />
      <p>
        Each icon is a named export. The animation runs on hover or tap
        automatically — there is no provider to mount and no stylesheet to
        import.
      </p>

      <h2>Requirements</h2>
      <table>
        <thead>
          <tr>
            <th>Dependency</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>react</td>
            <td>18 or 19</td>
          </tr>
          <tr>
            <td>motion</td>
            <td>≥ 11</td>
          </tr>
          <tr>
            <td>Node (build)</td>
            <td>≥ 18</td>
          </tr>
        </tbody>
      </table>

      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/docs/react">Using moticon in React</Link>
        </li>
        <li>
          <Link href="/docs/nextjs">Using moticon in Next.js</Link>
        </li>
      </ul>
    </>
  ),

  react: () => (
    <>
      <h1>Using moticon in React</h1>
      <p className="lead">
        Import an icon by name and drop it into your JSX. Every icon accepts the
        same four props and animates on a hover or tap gesture.
      </p>

      <h2>Props</h2>
      <CodeBlock
        lang="ts"
        code={`interface MoticonIconProps {
  size?: number;        // px — default 24
  color?: string;       // any CSS color — default "currentColor"
  strokeWidth?: number; // default 2
  className?: string;   // forwarded to the root <svg>
}`}
      />
      <p>
        All props are optional. With no props an icon renders at 24px in the
        current text color.
      </p>

      <h2>Sizing and color</h2>
      <CodeBlock
        code={`<Bell size={32} color="#3dff9e" strokeWidth={1.75} />

// inherit the parent's text color
<span style={{ color: "tomato" }}>
  <Bell />
</span>`}
      />

      <h2>Triggers</h2>
      <p>
        Each icon is authored with the trigger that fits its motion. Hover icons
        replay on pointer-enter; tap icons play on press. Both remain usable with
        a keyboard when placed inside a real <code>&lt;button&gt;</code>. Check an
        icon&rsquo;s page (for example{" "}
        <Link href="/icons/Bell">Bell</Link>) for its exact trigger and mechanic.
      </p>

      <h2>Inside a button</h2>
      <CodeBlock
        code={`<button type="button" aria-label="Open notifications">
  <Bell aria-hidden="true" />
</button>`}
      />
      <p>
        See <Link href="/docs/accessibility">Accessibility</Link> for the full
        pattern.
      </p>
    </>
  ),

  nextjs: () => (
    <>
      <h1>Using moticon in Next.js</h1>
      <p className="lead">
        moticon icons are interactive Client Components — they use{" "}
        <code>motion/react</code> internally. In the App Router, that means the
        component importing an icon needs the client boundary.
      </p>

      <h2>App Router</h2>
      <CodeBlock
        code={`// app/components/notification.tsx
"use client";

import { Bell } from "@moticon/react";

export function Notification() {
  return <Bell size={24} />;
}`}
      />
      <p>
        You do <strong>not</strong> need <code>&quot;use client&quot;</code> on
        the whole page — only on the leaf component that renders the icon. Keep
        pages and layouts as Server Components and push the boundary as far down
        the tree as possible.
      </p>

      <h2>Server Components</h2>
      <p>
        A Server Component can&rsquo;t render an icon directly, but it can render
        a client wrapper that does. The icon&rsquo;s static markup is still sent
        in the initial HTML, so there is no layout shift — only the animation
        hydrates on the client.
      </p>

      <h2>Pages Router</h2>
      <p>
        No boundary directive is needed. Import and render icons anywhere; they
        hydrate like any other interactive component.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/docs/server-components">Server Components &amp; SSR</Link>
        </li>
        <li>
          <Link href="/docs/tree-shaking">Tree-shaking &amp; bundle size</Link>
        </li>
      </ul>
    </>
  ),

  styling: () => (
    <>
      <h1>Styling animated icons</h1>
      <p className="lead">
        Icons are plain SVG under the animation layer. Style them with props for
        the common cases and with CSS or Tailwind for everything else.
      </p>

      <h2>currentColor</h2>
      <p>
        By default an icon&rsquo;s stroke is <code>currentColor</code>, so it
        matches surrounding text. Set <code>color</code> on the icon or on any
        ancestor.
      </p>
      <CodeBlock
        code={`<p className="text-emerald-400">
  <Bell />           {/* emerald */}
  <Bell color="#888" /> {/* overridden */}
</p>`}
      />

      <h2>Tailwind</h2>
      <CodeBlock
        code={`<Bell className="text-accent hover:text-accent/80 transition-colors" />`}
      />
      <p>
        <code>className</code> is forwarded to the root <code>&lt;svg&gt;</code>,
        so utility classes for color, size (<code>size-6</code>), opacity and
        transitions all work.
      </p>

      <h2>Stroke width</h2>
      <p>
        <code>strokeWidth</code> accepts fractional values. Lighter weights
        (1.5&ndash;1.75) read better at small sizes; the default is 2 to match
        Lucide.
      </p>
    </>
  ),

  "server-components": () => (
    <>
      <h1>Server Components &amp; SSR</h1>
      <p className="lead">
        moticon renders correct static SVG on the server and hydrates only the
        animation on the client. This keeps first paint fast and avoids layout
        shift.
      </p>

      <h2>Why a client boundary</h2>
      <p>
        The animation is driven by <code>motion/react</code>, which uses React
        state and effects. Those only run on the client, so the component that
        renders an icon must be a Client Component. The icon&rsquo;s shape still
        server-renders — the <code>&quot;use client&quot;</code> directive
        controls where hydration happens, not where HTML is produced.
      </p>

      <h2>Keeping pages fast</h2>
      <ul>
        <li>Put the client boundary on the smallest component that needs it.</li>
        <li>
          Don&rsquo;t wrap a whole route in <code>&quot;use client&quot;</code>{" "}
          just to show an icon.
        </li>
        <li>
          Import icons individually so only what you use is shipped — see{" "}
          <Link href="/docs/tree-shaking">bundle size</Link>.
        </li>
      </ul>

      <h2>Reduced motion</h2>
      <p>
        When a visitor has <code>prefers-reduced-motion: reduce</code> set, the
        icon renders and stays static — the animation code short-circuits. No
        configuration required.
      </p>
    </>
  ),

  "tree-shaking": () => (
    <>
      <h1>Tree-shaking &amp; bundle size</h1>
      <p className="lead">
        moticon is <code>sideEffects: false</code> and every icon is its own
        module. Importing one icon bundles one icon — not the whole set.
      </p>

      <h2>How to import</h2>
      <CodeBlock
        code={`// good — one icon in your bundle
import { Bell } from "@moticon/react";`}
      />
      <p>
        Named imports from the package entry are tree-shaken by every modern
        bundler (webpack, Turbopack, Vite, Rollup, esbuild). There is no{" "}
        <code>@moticon/react/Bell</code> deep-import to remember.
      </p>

      <h2>What ships</h2>
      <table>
        <thead>
          <tr>
            <th>You import</th>
            <th>Bundle contains</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 icon</td>
            <td>that icon + shared <code>motion</code> runtime (already your dep)</td>
          </tr>
          <tr>
            <td>10 icons</td>
            <td>those 10 icons</td>
          </tr>
          <tr>
            <td>the whole set</td>
            <td>every icon — only if you actually import every icon</td>
          </tr>
        </tbody>
      </table>

      <h2>Verify it</h2>
      <p>
        Run your bundler&rsquo;s analyzer (for example{" "}
        <code>@next/bundle-analyzer</code>) and confirm only the icons you
        imported appear. Each icon is a few hundred bytes of gzipped SVG plus its
        motion spec.
      </p>
    </>
  ),

  typescript: () => (
    <>
      <h1>TypeScript support</h1>
      <p className="lead">
        moticon is written in TypeScript and ships its own types. Every icon is
        typed as <code>{"(props: MoticonIconProps) => JSX.Element"}</code>.
      </p>

      <h2>The props type</h2>
      <CodeBlock
        lang="ts"
        code={`import type { MoticonIconProps } from "@moticon/react";

interface MoticonIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}`}
      />
      <p>
        The <code>?</code> marks each prop optional — omit it and the documented
        default applies. Passing an unknown prop is a type error.
      </p>

      <h2>Typing a wrapper</h2>
      <CodeBlock
        lang="tsx"
        code={`import type { MoticonIconProps } from "@moticon/react";
import { Bell } from "@moticon/react";

export function AlertBell(props: MoticonIconProps) {
  return <Bell strokeWidth={1.75} {...props} />;
}`}
      />

      <h2>The registry</h2>
      <p>
        Icon metadata (name, category, mechanic, trigger, tags) is available as a
        typed array:
      </p>
      <CodeBlock
        lang="ts"
        code={`import { iconRegistry } from "@moticon/react/registry";
import type { MoticonIconMeta } from "@moticon/react/registry";`}
      />
    </>
  ),

  accessibility: () => (
    <>
      <h1>Accessible animated icons</h1>
      <p className="lead">
        An icon is decoration until it&rsquo;s the only label on a control. The
        rules below cover both cases, and reduced motion is handled for you.
      </p>

      <h2>Decorative icons</h2>
      <p>
        An icon next to a text label adds nothing for a screen reader. Hide it:
      </p>
      <CodeBlock code={`<span>
  <Bell aria-hidden="true" /> Notifications
</span>`} />

      <h2>Icon-only controls</h2>
      <p>
        When the icon <em>is</em> the label, name the control — not the icon —
        and hide the icon:
      </p>
      <CodeBlock code={`<button type="button" aria-label="Open notifications">
  <Bell aria-hidden="true" />
</button>`} />
      <p>
        Because the control is a real <code>&lt;button&gt;</code>, it&rsquo;s
        focusable and operable by keyboard. Tap-triggered icons still animate on
        activation.
      </p>

      <h2>Reduced motion</h2>
      <p>
        Every icon checks <code>prefers-reduced-motion</code>. When a visitor has
        motion reduced in their OS, the icon renders in its resting state and the
        animation never runs — no prop, no config.
      </p>

      <h2>Contrast</h2>
      <p>
        Icons inherit <code>currentColor</code>. Make sure that color meets the
        same contrast bar as adjacent text against your background, especially
        for icon-only buttons.
      </p>
    </>
  ),
};
