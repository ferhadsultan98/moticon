"use client";

import { useState } from "react";
import { Check, Copy } from "moticon";
import { SyntaxCode } from "@/components/SyntaxCode";

export function CodeBlock({ code, lang = "tsx" }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="code-editor group relative w-full min-w-0 overflow-hidden rounded-xl">
      <div className="code-editor-toolbar flex items-center justify-between px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          {lang}
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors hover:text-accent"
        >
          {copied ? (
            <Check size={13} strokeWidth={2} />
          ) : (
            <Copy size={13} strokeWidth={2} />
          )}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="custom-scrollbar max-w-full overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed sm:px-5 sm:py-5 sm:text-sm">
        <SyntaxCode code={code} language={lang === "bash" ? "bash" : lang === "ts" ? "ts" : "tsx"} />
      </pre>
    </div>
  );
}
