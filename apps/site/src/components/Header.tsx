"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bell, Code, Menu, Search, Star, X } from "moticon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SEARCH_EVENT } from "@/components/SearchCommand";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function openSearch() {
    window.dispatchEvent(new Event(SEARCH_EVENT));
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <Bell size={18} strokeWidth={1.75} className="text-accent" />
          <span className="font-mono text-sm font-medium tracking-tight text-foreground">
            moticon
          </span>
        </Link>

        <nav className="hidden items-center gap-5 font-mono text-xs text-muted md:flex">
          <Link
            href="/icons"
            className="transition-colors hover:text-foreground"
          >
            Icons
          </Link>
          <Link
            href="/playground"
            className="transition-colors hover:text-foreground"
          >
            Playground
          </Link>
          <Link
            href="/docs"
            className="transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/examples"
            className="transition-colors hover:text-foreground"
          >
            Examples
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={openSearch}
            className="hidden items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground sm:flex"
          >
            <Search size={13} />
            <span>Search icons</span>
            <kbd className="rounded-lg border border-border-strong bg-background px-1.5 py-0.5 text-[10px]">
              Ctrl K
            </kbd>
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="moticon on GitHub, 1.2 thousand stars"
            className="hidden items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1.5 font-mono text-[10px] text-muted transition-colors hover:border-border-strong hover:text-foreground lg:flex"
          >
            <Code size={14} />
            <span>GitHub</span>
            <span className="mx-0.5 h-3 w-px bg-border-strong" />
            <Star size={12} />
            <span>1.2k</span>
          </a>

          <ThemeToggle />

          <motion.button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground sm:hidden"
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.16 }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={mobileOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: mobileOpen ? -35 : 35, scale: 0.72 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: mobileOpen ? 35 : -35, scale: 0.72 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center"
              >
                {mobileOpen ? (
                  <X size={18} strokeWidth={1.75} />
                ) : (
                  <Menu size={18} strokeWidth={1.75} />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background/88 backdrop-blur-xl sm:hidden"
          >
            <motion.nav
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="custom-scrollbar flex max-h-[calc(100dvh-3.5rem)] flex-col gap-1 overflow-y-auto px-4 py-4 font-mono text-sm"
            >
            <button
              type="button"
              onClick={openSearch}
              className="mb-2 flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5 text-left text-muted transition-colors hover:text-foreground"
            >
              <span className="flex items-center gap-2">
                <Search size={15} /> Search icons
              </span>
              <kbd className="rounded-lg border border-border-strong bg-background px-1.5 py-0.5 text-[10px]">
                Ctrl K
              </kbd>
            </button>
            <Link
              href="/icons"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              Icons
            </Link>
            <Link
              href="/playground"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              Playground
            </Link>
            <Link
              href="/docs"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="/examples"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              Examples
            </Link>
            <Link
              href="/changelog"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              Changelog
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              GitHub
            </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
