import { SyntaxCode } from "@/components/SyntaxCode";
import { CopyButton } from "@/components/CopyButton";

export function CodeBlock({ code, lang = "tsx" }: { code: string; lang?: string }) {
  return (
    <div className="code-editor group relative w-full min-w-0 overflow-hidden rounded-xl">
      <div className="code-editor-toolbar flex items-center justify-between px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          {lang}
        </span>
        <CopyButton value={code} label="copy" copiedLabel="copied" size={13} />
      </div>
      <pre className="custom-scrollbar max-w-full overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed sm:px-5 sm:py-5 sm:text-sm">
        <SyntaxCode
          code={code}
          language={lang === "bash" ? "bash" : lang === "ts" ? "ts" : "tsx"}
        />
      </pre>
    </div>
  );
}
