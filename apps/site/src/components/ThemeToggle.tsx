"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "@moticon/react";

const THEME_KEY = "moticon-theme";

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function ThemeToggle() {
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = getPreferredTheme();
  }, []);

  function toggleTheme() {
    const next =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-foreground"
    >
      <span className="theme-icon-light pointer-events-none absolute inset-0 flex items-center justify-center">
        <Sun size={17} strokeWidth={1.75} />
      </span>
      <span className="theme-icon-dark pointer-events-none absolute inset-0 flex items-center justify-center">
        <Moon size={17} strokeWidth={1.75} />
      </span>
    </button>
  );
}
