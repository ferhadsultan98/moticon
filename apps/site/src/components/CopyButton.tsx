"use client";

import { useCallback, useRef, useState } from "react";
import { Check, Copy } from "@moticon/react";
import { trackEvent, type ConversionEvent } from "@/lib/analytics";

type Variant = "inline" | "ghost" | "solid";

const VARIANTS: Record<Variant, string> = {
  inline:
    "flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent",
  ghost:
    "flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground",
  solid:
    "flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-xs font-medium text-[#07130d] transition-transform hover:-translate-y-0.5",
};

/**
 * One copy-to-clipboard button used everywhere. Consistent labels
 * (Copy / Copied), an accessible name, a 1.2 s success state, a graceful
 * fallback when the Clipboard API is unavailable, and an optional analytics
 * event.
 */
export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  ariaLabel,
  variant = "inline",
  iconOnly = false,
  size = 13,
  event,
  eventDetail,
  className = "",
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
  ariaLabel?: string;
  variant?: Variant;
  iconOnly?: boolean;
  size?: number;
  event?: ConversionEvent;
  eventDetail?: { manager?: string; from?: string };
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const doCopy = useCallback(async () => {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        ok = true;
      } else {
        // Fallback for non-secure contexts / older browsers.
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      }
    } catch {
      ok = false;
    }

    window.clearTimeout(timer.current);
    if (ok) {
      setCopied(true);
      setFailed(false);
      if (event) trackEvent(event, eventDetail);
      timer.current = window.setTimeout(() => setCopied(false), 1200);
    } else {
      setFailed(true);
      timer.current = window.setTimeout(() => setFailed(false), 2000);
    }
  }, [value, event, eventDetail]);

  const text = failed ? "Press Ctrl+C" : copied ? copiedLabel : label;

  return (
    <button
      type="button"
      onClick={doCopy}
      aria-label={ariaLabel ?? `${label}: ${value}`}
      data-copied={copied || undefined}
      className={`${VARIANTS[variant]} ${className}`}
    >
      {copied ? <Check size={size} strokeWidth={2} /> : <Copy size={size} strokeWidth={2} />}
      {!iconOnly && <span aria-live="polite">{text}</span>}
    </button>
  );
}
