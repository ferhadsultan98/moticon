"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "moticon";

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
      <Sun size={17} strokeWidth={1.75} className="theme-icon-light" />
      <Moon size={17} strokeWidth={1.75} className="theme-icon-dark" />
    </button>
  );
}
