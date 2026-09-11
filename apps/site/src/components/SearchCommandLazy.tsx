"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { SEARCH_EVENT } from "@/lib/search-event";

const SearchCommand = dynamic(
  () => import("@/components/SearchCommand").then((m) => m.SearchCommand),
  { ssr: false },
);

/**
 * The search palette imports every icon component (for result previews), ~1.2 MB
 * of JS. It only shows on Cmd/Ctrl+K or the header Search button, so it must not
 * be in the initial bundle. This wrapper owns the open/close state and mounts
 * the (dynamically-imported) palette on first open. SearchCommand is a
 * controlled component — no internal open state, no fragile signals.
 */
export function SearchCommandLazy() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  // bumped on every open so SearchCommand remounts with clean query/selection
  const [openCount, setOpenCount] = useState(0);

  const openPalette = useCallback(() => {
    setMounted(true);
    setOpen(true);
    setOpenCount((n) => n + 1);
  }, []);
  const closePalette = useCallback(() => setOpen(false), []);

  useEffect(() => {
    window.addEventListener(SEARCH_EVENT, openPalette);
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openPalette();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(SEARCH_EVENT, openPalette);
      window.removeEventListener("keydown", onKey);
    };
  }, [openPalette]);

  if (!mounted) return null;
  return <SearchCommand key={openCount} open={open} onClose={closePalette} />;
}
