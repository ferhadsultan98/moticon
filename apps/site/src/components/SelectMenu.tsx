"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "moticon";

export interface SelectOption {
  value: string;
  label: string;
}

export function SelectMenu({
  value,
  options,
  onChange,
  ariaLabel,
  className = "",
}: {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  ariaLabel: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(() =>
    Math.max(0, options.findIndex((option) => option.value === value))
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    function closeOnOutside(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function openMenu() {
    const index = Math.max(
      0,
      options.findIndex((option) => option.value === value)
    );
    setHighlighted(index);
    setOpen(true);
    window.requestAnimationFrame(() => {
      listRef.current
        ?.querySelector<HTMLElement>(`[data-option-index="${index}"]`)
        ?.scrollIntoView({ block: "nearest" });
    });
  }

  function moveHighlight(direction: number) {
    const next = (highlighted + direction + options.length) % options.length;
    setHighlighted(next);
    window.requestAnimationFrame(() => {
      listRef.current
        ?.querySelector<HTMLElement>(`[data-option-index="${next}"]`)
        ?.scrollIntoView({ block: "nearest" });
    });
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) openMenu();
      else moveHighlight(event.key === "ArrowDown" ? 1 : -1);
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) openMenu();
      else {
        onChange(options[highlighted].value);
        setOpen(false);
      }
    }
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-lg border bg-surface px-3 py-2.5 font-mono text-xs text-foreground transition-colors ${
          open ? "border-accent" : "border-border hover:border-border-strong"
        }`}
      >
        <span className="truncate">{selected.label}</span>
        <ChevronDown
          size={14}
          className={`shrink-0 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          aria-label={ariaLabel}
          className="custom-scrollbar absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-64 overflow-y-auto rounded-lg border border-border-strong bg-surface-raised p-1 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
        >
          {options.map((option, index) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              data-option-index={index}
              onMouseEnter={() => setHighlighted(index)}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left font-mono text-xs transition-colors ${
                highlighted === index
                  ? "bg-accent-dim text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span className="truncate">{option.label}</span>
              {option.value === value && <Check size={13} className="shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
