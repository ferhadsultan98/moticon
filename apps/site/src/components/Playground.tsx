"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Check, Copy, RefreshCw } from "@moticon/react";
import { iconComponents, iconMeta } from "@/lib/icons";
import { SelectMenu } from "@/components/SelectMenu";
import { AutoAnimateIcon } from "@/components/AutoAnimateIcon";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SyntaxCode } from "@/components/SyntaxCode";

const featuredNames = [
  "Bell",
  "CalendarClock",
  "Heart",
  "Rocket",
  "CloudRain",
  "Sparkles",
  "Settings",
  "Download",
];

export function Playground() {
  const [name, setName] = useState("CalendarClock");
  const [size, setSize] = useState(112);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState("#3dff9e");
  const [background, setBackground] = useState("#0a0a0b");
  const [resetKey, setResetKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const meta = useMemo(
    () => iconMeta.find((item) => item.name === name) ?? iconMeta[0],
    [name]
  );
  const code = `import { ${name} } from "@moticon/react";\n\n<${name}\n  size={${size}}\n  color="${color}"\n  strokeWidth={${strokeWidth}}\n/>`;

  function copyCode() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <main className="mx-auto w-full min-w-0 max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Playground" }]}
      />
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          motion laboratory
        </p>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Tune it. Trigger it. Ship it.
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
          Explore every icon against real sizes, colors and surfaces. The code
          stays in sync with your choices.
        </p>
      </div>

      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-[minmax(0,1.35fr)_360px]">
        <section className="min-w-0 bg-background">
          <div
            className="preview-grid flex min-h-[320px] items-center justify-center p-4 sm:min-h-[420px] sm:p-8 lg:min-h-[470px]"
            style={{ backgroundColor: background }}
          >
            <div
              key={resetKey}
              className="flex h-52 w-52 max-w-full items-center justify-center rounded-xl text-white sm:h-60 sm:w-60"
            >
              <AutoAnimateIcon
                name={name}
                size={size}
                color={color}
                strokeWidth={strokeWidth}
                replayKey={resetKey}
                interval={2600}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 border-t border-border bg-surface px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-5">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider">
              <span className="rounded-lg bg-accent-dim px-2.5 py-1 text-accent">
                {meta.mechanic}
              </span>
              <span className="rounded-lg border border-border px-2.5 py-1 text-muted">
                {meta.trigger}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setResetKey((key) => key + 1)}
              className="flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <RefreshCw size={14} /> Reset preview
            </button>
          </div>
        </section>

        <aside className="min-w-0 space-y-6 bg-surface p-4 sm:p-6">
          <div>
            <span className="mb-2 block font-mono text-xs text-muted">Icon</span>
            <SelectMenu
              value={name}
              onChange={setName}
              ariaLabel="Select an icon"
              options={iconMeta.map((item) => ({
                value: item.name,
                label: item.name,
              }))}
            />
          </div>

          <RangeControl
            label="Size"
            value={`${size}px`}
            min={24}
            max={180}
            step={1}
            current={size}
            onChange={setSize}
          />
          <RangeControl
            label="Stroke width"
            value={String(strokeWidth)}
            min={0.5}
            max={4}
            step={0.25}
            current={strokeWidth}
            onChange={setStrokeWidth}
          />

          <div>
            <span className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
              <span>Icon color</span>
              <span className="text-foreground">{color}</span>
            </span>
            <input
              type="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
              className="h-10 w-full cursor-pointer rounded-md border border-border bg-background p-1"
            />
          </div>

          <div>
            <span className="mb-2 block font-mono text-xs text-muted">
              Preview surface
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["#0a0a0b", "Dark"],
                ["#ffffff", "Light"],
                ["#173d2d", "Tint"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setBackground(value)}
                  className={`rounded-md border px-2 py-2 font-mono text-[10px] transition-colors ${
                    background === value
                      ? "border-accent text-accent"
                      : "border-border text-muted hover:border-border-strong"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <Link
            href={`/icons/${name}`}
            className="block text-center font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            Open {name} detail →
          </Link>
        </aside>
      </div>

      <section className="code-editor mt-6 min-w-0 overflow-hidden rounded-xl">
        <div className="code-editor-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Generated code
          </span>
          <button
            type="button"
            onClick={copyCode}
            className="flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy code"}
          </button>
        </div>
        <pre className="custom-scrollbar max-w-full overflow-x-auto p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm sm:leading-7">
          <SyntaxCode code={code} language="tsx" />
        </pre>
      </section>

      <section className="mt-14">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
          quick picks
        </p>
        <div className="grid grid-cols-2 gap-2 min-[400px]:grid-cols-4 sm:grid-cols-8">
          {featuredNames.map((featuredName) => {
            const FeaturedIcon = iconComponents[featuredName];
            return (
              <button
                key={featuredName}
                type="button"
                onClick={() => setName(featuredName)}
                className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg border p-2 transition-colors ${
                  name === featuredName
                    ? "border-accent bg-accent-dim text-accent"
                    : "border-border bg-surface text-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                <FeaturedIcon size={26} />
                <span className="max-w-full truncate font-mono text-[9px]">
                  {featuredName}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function RangeControl({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
        <span>{label}</span>
        <span className="text-foreground">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-[var(--accent)]"
      />
    </label>
  );
}
