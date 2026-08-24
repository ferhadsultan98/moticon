"use client";

import { useState } from "react";
import { Copy, Check } from "@moticon/react";
import { SyntaxCode } from "@/components/SyntaxCode";

const exampleCode = `import { Bell, Book, Droplet } from "@moticon/react";

export function Actions() {
  return (
    <nav>
      <Bell size={24} />
      <Book size={24} />
      <Droplet color="#3dff9e" />
    </nav>
  );
}`;

const installCommands = {
  npm: "npm i moticon",
  pnpm: "pnpm add moticon",
  yarn: "yarn add moticon",
  bun: "bun add moticon",
};

type PackageManager = keyof typeof installCommands;

export function ShipIt() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [manager, setManager] = useState<PackageManager>("npm");

  function copy(text: string, flag: "code" | "install") {
    navigator.clipboard.writeText(text);
    if (flag === "code") {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 1200);
    } else {
      setCopiedInstall(true);
      setTimeout(() => setCopiedInstall(false), 1200);
    }
  }

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center md:gap-12">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            03 / ship it
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            One import.
            <br />
            The whole system.
          </h2>
          <p className="max-w-sm text-sm text-muted sm:text-base">
            Drop-in React components. Typed, tree-shakeable and
            reduced-motion aware.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
            <li className="flex items-center gap-1.5">
              <Check size={13} className="text-accent" /> TypeScript
            </li>
            <li className="flex items-center gap-1.5">
              <Check size={13} className="text-accent" /> Tree-shakeable
            </li>
            <li className="flex items-center gap-1.5">
              <Check size={13} className="text-accent" /> Accessible
            </li>
          </ul>
        </div>

        <div className="code-editor min-w-0 overflow-hidden rounded-xl">
          <div className="code-editor-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-1">
              {(Object.keys(installCommands) as PackageManager[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setManager(item)}
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
            <button
              type="button"
              onClick={() => copy(installCommands[manager], "install")}
              className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              {copiedInstall ? (
                <Check size={13} strokeWidth={2} />
              ) : (
                <Copy size={13} strokeWidth={2} />
              )}
              {copiedInstall ? "copied" : "copy install"}
            </button>
          </div>

          <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#0d1117] px-5 py-4 font-mono text-sm">
            <span className="text-accent">$</span>
            <span>{installCommands[manager]}</span>
          </div>

          <div className="code-editor-toolbar flex items-center justify-between gap-3 px-4 py-3">
            <span className="min-w-0 truncate font-mono text-xs text-muted">moticon-example.tsx</span>
            <button
              type="button"
              onClick={() => copy(exampleCode, "code")}
              className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              {copiedCode ? <Check size={13} /> : <Copy size={13} />}
              {copiedCode ? "copied" : "copy code"}
            </button>
          </div>

          <pre className="custom-scrollbar max-w-full overflow-x-auto px-4 py-5 font-mono text-xs leading-relaxed sm:px-5 sm:py-6 sm:text-sm">
            <SyntaxCode code={exampleCode} language="tsx" />
          </pre>
        </div>
      </div>
    </section>
  );
}
