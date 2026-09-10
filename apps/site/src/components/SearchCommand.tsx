"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { CornerDownRight, Search } from "@moticon/react";
import { iconComponents } from "@/lib/icon-components";
import { iconMeta } from "@/lib/icons";

/**
 * Controlled search palette. `SearchCommandLazy` owns `open` and mounts this
 * dynamically on first open, so the 343-icon barrel never lands in a page's
 * initial bundle.
 */
export function SearchCommand({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const close = onClose;

  // SearchCommandLazy remounts this with a fresh key on each open, so query /
  // selection start clean — no state to reset in an effect.
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return iconMeta
      .filter(
        (item) =>
          !normalized ||
          item.name.toLowerCase().includes(normalized) ||
          item.mechanic.toLowerCase().includes(normalized)
      )
      .slice(0, 40);
  }, [query]);

  useEffect(() => {
    if (open) window.requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const lastFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;
      // Focus trap: only the input and the result buttons are tabbable targets.
      const dialog = document.querySelector<HTMLElement>('[role="dialog"][aria-modal="true"]');
      if (!dialog) return;
      const focusables = [
        ...dialog.querySelectorAll<HTMLElement>("input, button:not([disabled])"),
      ];
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
      lastFocused?.focus?.();
    };
  }, [open, close]);

  function goToResult(index: number) {
    const result = results[index];
    if (!result) return;
    close();
    setQuery("");
    router.push(`/icons/${result.name}`);
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setSelected((current) => {
        const direction = event.key === "ArrowDown" ? 1 : -1;
        return (current + direction + results.length) % Math.max(results.length, 1);
      });
    }
    if (event.key === "Enter") {
      event.preventDefault();
      goToResult(Math.min(selected, results.length - 1));
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search moticon icons"
      className="fixed inset-0 z-[100] flex items-start justify-center bg-background/20 px-3 pb-3 pt-[max(1rem,8vh)] backdrop-blur-lg sm:px-4 sm:pt-[15vh]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      {/* enter animation only — closing is instant so there is no
          AnimatePresence exit to get stuck */}
      <motion.div
        initial={{ opacity: 0, y: -18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border-strong bg-surface/78 shadow-[0_24px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
      >
            <div className="shrink-0 border-b border-border p-2.5 sm:p-3">
              <div className="flex items-center gap-2 rounded-lg border border-border-strong bg-background/58 px-3 py-2 transition-colors focus-within:border-accent sm:gap-3">
                <Search size={18} className="shrink-0 text-muted" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setSelected(0);
                  }}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Search icons by name or mechanic..."
                  className="focus-shell-input min-w-0 flex-1 rounded-lg bg-transparent font-mono text-sm text-foreground placeholder:text-muted"
                />
                <kbd className="rounded-lg border border-border bg-surface/70 px-2 py-1 font-mono text-[10px] text-muted">
                  Esc
                </kbd>
              </div>
            </div>

            <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto p-2 sm:max-h-[56vh]">
          {results.length ? (
            results.map((item, index) => {
              const Icon = iconComponents[item.name];
              const active = index === Math.min(selected, results.length - 1);
              return (
                <button
                  key={item.name}
                  type="button"
                  onMouseEnter={() => setSelected(index)}
                  onClick={() => goToResult(index)}
                  className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors ${
                    active
                      ? "border-accent/35 bg-accent-dim"
                      : "border-transparent hover:bg-background"
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground">
                    <Icon size={21} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-mono text-sm text-foreground">
                      {item.name}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
                      {item.mechanic} · {item.trigger}
                    </span>
                  </span>
                  <span className="hidden rounded-lg border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-muted sm:inline-flex">
                    moticon
                  </span>
                </button>
              );
            })
          ) : (
            <div className="px-4 py-14 text-center font-mono text-sm text-muted">
              No icons found for “{query}”
            </div>
          )}
            </div>

            <div className="flex shrink-0 items-center justify-between border-t border-border bg-background/55 px-3 py-2.5 font-mono text-[9px] text-muted sm:px-4 sm:text-[10px]">
              <span>↑↓ navigate</span>
              <span className="flex items-center gap-1.5">
                <CornerDownRight size={12} /> open
              </span>
              <span>{results.length} of {iconMeta.length}</span>
            </div>
      </motion.div>
    </div>
  );
}
