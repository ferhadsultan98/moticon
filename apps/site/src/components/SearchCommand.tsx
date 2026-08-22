"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { CornerDownRight, Search } from "moticon";
import { iconComponents, iconMeta } from "@/lib/icons";

export const SEARCH_EVENT = "moticon:open-search";

export function SearchCommand() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
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
    function showSearch() {
      setOpen(true);
      window.requestAnimationFrame(() => inputRef.current?.focus());
    }
    function handleShortcut(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        showSearch();
      }
    }
    window.addEventListener(SEARCH_EVENT, showSearch);
    window.addEventListener("keydown", handleShortcut);
    return () => {
      window.removeEventListener(SEARCH_EVENT, showSearch);
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function goToResult(index: number) {
    const result = results[index];
    if (!result) return;
    setOpen(false);
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Search moticon icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-background/20 px-3 pb-3 pt-[max(1rem,8vh)] backdrop-blur-lg sm:px-4 sm:pt-[15vh]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
