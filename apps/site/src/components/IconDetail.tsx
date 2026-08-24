"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Check, Copy } from "@moticon/react";
import { iconComponents, iconMeta } from "@/lib/icons";
import { AutoAnimateIcon } from "@/components/AutoAnimateIcon";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SyntaxCode } from "@/components/SyntaxCode";

export function IconDetail({ name }: { name: string }) {
  const meta = iconMeta.find((item) => item.name === name);
  const Icon = iconComponents[name];
  const [size, setSize] = useState(96);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState("#3dff9e");
  const [previewBackground, setPreviewBackground] = useState("#0a0a0b");
  const [copied, setCopied] = useState<string | null>(null);

  const related = useMemo(
    () =>
      meta
        ? iconMeta
            .filter(
              (item) => item.mechanic === meta.mechanic && item.name !== name
            )
            .slice(0, 8)
        : [],
    [meta, name]
  );

  const sameCategory = useMemo(
    () =>
      meta
        ? iconMeta
            .filter(
              (item) => item.category === meta.category && item.name !== name
            )
            .slice(0, 8)
        : [],
    [meta, name]
  );

  if (!meta || !Icon) return null;

  const importCode = `import { ${name} } from "@moticon/react";`;
  const jsxCode = `<${name} size={${size}} color="${color}" strokeWidth={${strokeWidth}} />`;

  function copy(value: string, key: string) {
    navigator.clipboard.writeText(value);
    setCopied(key);
    window.setTimeout(() => setCopied(null), 1200);
  }

  return (
    <main className="mx-auto w-full min-w-0 max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Icons", href: "/icons" },
          { label: meta.category, href: `/icons?category=${encodeURIComponent(meta.category)}` },
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
                href={`/icons?category=${encodeURIComponent(meta.category)}`}
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
            <h1 className="break-words text-2xl font-medium tracking-tight sm:text-3xl">{name}</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              A {meta.mechanic} animation designed for {meta.trigger} interaction.
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
              label="Copy import"
              copied={copied === "import"}
              onClick={() => copy(importCode, "import")}
            />
            <CopyButton
              label="Copy JSX"
              copied={copied === "jsx"}
              onClick={() => copy(jsxCode, "jsx")}
            />
          </div>
        </aside>
      </div>

      <section className="code-editor mt-6 min-w-0 overflow-hidden rounded-xl">
        <div className="code-editor-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Generated component
          </span>
          <button
            type="button"
            onClick={() => copy(`${importCode}\n\n${jsxCode}`, "code")}
            className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent"
          >
            {copied === "code" ? <Check size={13} /> : <Copy size={13} />}
            {copied === "code" ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="custom-scrollbar max-w-full overflow-x-auto p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm sm:leading-7">
          <SyntaxCode code={`${importCode}\n\n${jsxCode}`} language="tsx" />
        </pre>
      </section>

      {sameCategory.length > 0 && (
        <section className="mt-14">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            same category
          </p>
          <h2 className="mb-6 text-2xl font-medium tracking-tight">
            More {meta.category} icons
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {sameCategory.map((item) => {
              const RelatedIcon = iconComponents[item.name];
              return (
                <Link
                  key={item.name}
                  href={`/icons/${item.name}`}
                  className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-surface p-3 text-muted transition-colors hover:border-border-strong hover:text-accent"
                >
                  <RelatedIcon size={28} />
                  <span className="max-w-full truncate font-mono text-[10px]">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-14">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            same mechanic
          </p>
          <h2 className="mb-6 text-2xl font-medium tracking-tight">
            More {meta.mechanic} icons
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {related.map((item) => {
              const RelatedIcon = iconComponents[item.name];
              return (
                <Link
                  key={item.name}
                  href={`/icons/${item.name}`}
                  className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-surface p-3 text-muted transition-colors hover:border-border-strong hover:text-accent"
                >
                  <RelatedIcon size={28} />
                  <span className="max-w-full truncate font-mono text-[10px]">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
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

function CopyButton({
  label,
  copied,
  onClick,
}: {
  label: string;
  copied: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
    >
      {copied ? "Copied" : label}
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
