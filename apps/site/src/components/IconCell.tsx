"use client";

import Link from "next/link";
import { useState } from "react";
import { iconComponents, type IconMeta } from "@/lib/icons";
import { Check, Copy } from "@moticon/react";
import { AutoAnimateIcon } from "@/components/AutoAnimateIcon";

export function IconCell({ meta }: { meta: IconMeta }) {
  const Icon = iconComponents[meta.name];
  const [copied, setCopied] = useState(false);
  const isTap = meta.trigger === "tap";

  if (!Icon) return null;

  function copyCode() {
    navigator.clipboard.writeText(
      `import { ${meta.name} } from "@moticon/react";\n\n<${meta.name} size={24} />`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <article
      className="group relative flex min-w-0 flex-col items-center gap-2 rounded-md border border-transparent p-2 transition-colors hover:border-border hover:bg-surface sm:gap-3 sm:p-3"
      title={`${meta.name} — ${meta.mechanic} on ${meta.trigger}`}
    >
      <span
        className={`absolute right-1 top-1 rounded px-1 py-0.5 font-mono text-[8px] uppercase tracking-wide transition-opacity ${
          isTap
            ? "bg-accent-dim text-accent opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            : "opacity-0"
        }`}
      >
        {isTap ? "click" : ""}
      </span>

      <button
        type="button"
        aria-label={`${meta.trigger} ${meta.name} animation`}
        className="flex h-11 w-11 items-center justify-center text-foreground/80 transition-colors group-hover:text-accent focus-visible:text-accent sm:h-12 sm:w-12"
      >
        <AutoAnimateIcon
          name={meta.name}
          size={48}
          interval={2800 + (meta.name.length % 7) * 120}
        />
      </button>

      <div className="flex w-full min-w-0 items-center justify-center gap-1">
        <Link
          href={`/icons/${meta.name}`}
          className="min-w-0 truncate font-mono text-[10px] text-muted transition-colors hover:text-accent group-hover:text-foreground"
        >
          {meta.name}
        </Link>
        <button
          type="button"
          onClick={copyCode}
          aria-label={`Copy ${meta.name} code`}
          className="shrink-0 text-muted opacity-100 transition-all hover:text-accent focus:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
        </button>
      </div>
    </article>
  );
}
