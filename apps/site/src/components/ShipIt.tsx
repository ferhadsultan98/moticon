"use client";

import { useState } from "react";
import { SyntaxCode } from "@/components/SyntaxCode";
import { CopyButton } from "@/components/CopyButton";

// Real, type-checked example: these three icons exist and take these props.
const exampleCode = `import { Bell, Heart, Download } from "@moticon/react";

export function Toolbar() {
  return (
    <div>
      <Bell size={24} />
      <Heart size={24} color="#3dff9e" />
      <Download size={24} strokeWidth={1.5} />
    </div>
  );
}`;

const installCommands = {
  npm: "npm install @moticon/react motion",
  pnpm: "pnpm add @moticon/react motion",
  yarn: "yarn add @moticon/react motion",
  bun: "bun add @moticon/react motion",
};

type PackageManager = keyof typeof installCommands;

export function ShipIt() {
  const [manager, setManager] = useState<PackageManager>("npm");

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center md:gap-12">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            install &amp; use
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Install once. Import what you need.
          </h2>
          <p className="max-w-sm text-sm leading-6 text-muted sm:text-base">
            Every icon is its own module, so importing one bundles one — not the
            whole set. <code className="font-mono text-xs text-foreground">motion</code>{" "}
            is a peer dependency, installed alongside so only one copy ships.
          </p>
        </div>

        <div className="code-editor min-w-0 overflow-hidden rounded-xl">
          <div className="code-editor-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-1">
              {(Object.keys(installCommands) as PackageManager[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setManager(item)}
                  aria-pressed={manager === item}
                  className={`rounded-lg px-2.5 py-1.5 font-mono text-[10px] transition-colors ${
                    manager === item
                      ? "bg-accent-dim text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <CopyButton
              value={installCommands[manager]}
              label="copy install"
              copiedLabel="copied"
              event="install_copied"
              eventDetail={{ from: "ship_it", manager }}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto border-b border-[#30363d] bg-[#0d1117] px-5 py-4 font-mono text-sm">
            <span className="shrink-0 text-accent">$</span>
            <span className="whitespace-nowrap">{installCommands[manager]}</span>
          </div>

          <div className="code-editor-toolbar flex items-center justify-between gap-3 px-4 py-3">
            <span className="min-w-0 truncate font-mono text-xs text-muted">
              Toolbar.tsx
            </span>
            <CopyButton
              value={exampleCode}
              label="copy code"
              copiedLabel="copied"
              event="icon_import_copied"
              eventDetail={{ from: "ship_it" }}
            />
          </div>

          <pre className="custom-scrollbar max-w-full overflow-x-auto px-4 py-5 font-mono text-xs leading-relaxed sm:px-5 sm:py-6 sm:text-sm">
            <SyntaxCode code={exampleCode} language="tsx" />
          </pre>
        </div>
      </div>
    </section>
  );
}
