"use client";

import Link from "next/link";
import { useState } from "react";
import { iconMeta } from "@/lib/icons";
import { AutoAnimateIcon } from "@/components/AutoAnimateIcon";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SyntaxCode } from "@/components/SyntaxCode";
import { CopyButton } from "@/components/CopyButton";
import { humanizeName, pageHeading } from "@/lib/icon-copy";
import { slugify } from "@/lib/site";

export function IconDetail({ name }: { name: string }) {
  const meta = iconMeta.find((item) => item.name === name);
  const [size, setSize] = useState(96);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState("#3dff9e");
  const [previewBackground, setPreviewBackground] = useState("#0a0a0b");

  if (!meta) return null;

  const importCode = `import { ${name} } from "@moticon/react";`;
  const jsxCode = `<${name} size={${size}} color="${color}" strokeWidth={${strokeWidth}} />`;

  return (
    <main className="mx-auto w-full min-w-0 max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Icons", href: "/icons" },
          { label: meta.category, href: `/icons/category/${slugify(meta.category)}` },
          { label: name },
        ]}
      />

      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
        <section className="min-w-0 overflow-hidden rounded-xl border border-border bg-surface">
          <div
            className="preview-grid flex min-h-[300px] items-center justify-center p-5 sm:min-h-[420px] sm:p-10"
            style={{ backgroundColor: previewBackground }}
          >
            <div
              className="flex h-40 w-40 max-w-full items-center justify-center rounded-xl text-white sm:h-48 sm:w-48"
            >
              <AutoAnimateIcon
                name={name}
                size={size}
                color={color}
                strokeWidth={strokeWidth}
                interval={2600}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 border-t border-border px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-5">
            <p className="min-w-0 font-mono text-xs leading-5 text-muted">
              Auto-replays while visible · {meta.trigger} anytime
            </p>
            <div className="flex gap-2">
              {[
                ["#0a0a0b", "Dark"],
                ["#ffffff", "Light"],
                ["#173d2d", "Tint"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPreviewBackground(value)}
                  aria-label={`${label} preview background`}
                  className={`h-6 w-6 rounded-lg border transition-transform hover:scale-110 ${
                    previewBackground === value
                      ? "border-accent ring-2 ring-accent/20"
                      : "border-border-strong"
                  }`}
                  style={{ backgroundColor: value }}
                />
              ))}
            </div>
          </div>
        </section>

        <aside className="min-w-0 rounded-xl border border-border bg-surface p-4 sm:p-6">
          <div className="mb-7">
            <div className="mb-3 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider">
              <Link
                href={`/icons/category/${slugify(meta.category)}`}
                className="rounded-lg border border-border px-2.5 py-1 text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                {meta.category}
              </Link>
              <span className="rounded-lg bg-accent-dim px-2.5 py-1 text-accent">
                {meta.mechanic}
              </span>
              <span className="rounded-lg border border-border px-2.5 py-1 text-muted">
                {meta.trigger}
              </span>
              {meta.duration && (
                <span className="rounded-lg border border-border px-2.5 py-1 text-muted">
                  {meta.duration}s
                </span>
              )}
            </div>
            <h1 className="break-words text-2xl font-medium tracking-tight sm:text-3xl">
              {pageHeading(meta)}
            </h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              <code className="font-mono text-xs text-foreground">{`<${name} />`}</code>{" "}
              — a {meta.mechanic} animation on {meta.trigger}, from the{" "}
              {humanizeName(meta.category)} set.
            </p>
          </div>

          <div className="space-y-5">
            <Control label="Size" value={`${size}px`}>
              <input
                type="range"
                min="24"
                max="160"
                value={size}
                onChange={(event) => setSize(Number(event.target.value))}
                className="w-full accent-[var(--accent)]"
              />
            </Control>
            <Control label="Stroke" value={String(strokeWidth)}>
              <input
                type="range"
                min="0.5"
                max="4"
                step="0.25"
                value={strokeWidth}
                onChange={(event) => setStrokeWidth(Number(event.target.value))}
                className="w-full accent-[var(--accent)]"
              />
            </Control>
            <Control label="Color" value={color}>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                  className="h-9 w-12 cursor-pointer rounded border border-border bg-transparent"
                />
                <input
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                  aria-label="Icon color"
                  className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs focus:border-accent"
                />
              </div>
            </Control>
          </div>

          <div className="mt-7 space-y-2">
            <CopyButton
              value={importCode}
              label="Copy import"
              variant="ghost"
              event="icon_import_copied"
              eventDetail={{ from: "icon_detail" }}
              className="w-full justify-between"
            />
            <CopyButton
              value={jsxCode}
              label="Copy JSX"
              variant="ghost"
              className="w-full justify-between"
            />
          </div>
        </aside>
      </div>

      <section className="code-editor mt-6 min-w-0 overflow-hidden rounded-xl">
        <div className="code-editor-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Generated component
          </span>
          <CopyButton
            value={`${importCode}\n\n${jsxCode}`}
            label="Copy"
            event="icon_import_copied"
            eventDetail={{ from: "icon_detail_code" }}
          />
        </div>
        <pre className="custom-scrollbar max-w-full overflow-x-auto p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm sm:leading-7">
          <SyntaxCode code={`${importCode}\n\n${jsxCode}`} language="tsx" />
        </pre>
      </section>

      {/* Related icons render server-side (RelatedIcons) below IconContent,
          with deterministic ranking and no client bundle cost. */}
    </main>
  );
}

function Control({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
        <span>{label}</span>
        <span className="text-foreground">{value}</span>
      </span>
      {children}
    </label>
  );
}

