"use client";

import Link from "next/link";
import { iconComponents } from "@/lib/icon-components";
import type { IconMeta } from "@/lib/icons";
import { AutoAnimateIcon } from "@/components/AutoAnimateIcon";
import { CopyButton } from "@/components/CopyButton";

export function IconCell({ meta }: { meta: IconMeta }) {
  const Icon = iconComponents[meta.name];
  const isTap = meta.trigger === "tap";

  if (!Icon) return null;

  const snippet = `import { ${meta.name} } from "@moticon/react";\n\n<${meta.name} size={24} />`;

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
        <CopyButton
          value={snippet}
          label=""
          iconOnly
          size={11}
          ariaLabel={`Copy ${meta.name} import code`}
          variant="inline"
          event="icon_import_copied"
          eventDetail={{ from: "icon_grid" }}
          className="shrink-0 opacity-100 focus:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        />
      </div>
    </article>
  );
}
