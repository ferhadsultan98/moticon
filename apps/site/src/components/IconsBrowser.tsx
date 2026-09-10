"use client";

import { useEffect, useMemo, useState } from "react";
import { iconMeta } from "@/lib/icons";
import { IconCell } from "@/components/IconCell";
import { Footer } from "@/components/Footer";
import { Search } from "@moticon/react";
import { SelectMenu } from "@/components/SelectMenu";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function IconsPage() {
  const [query, setQuery] = useState("");
  const [trigger, setTrigger] = useState<"all" | "hover" | "tap">("all");
  const [mechanic, setMechanic] = useState("all");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<"name" | "mechanic">("name");

  const mechanics = useMemo(
    () => [...new Set(iconMeta.map((item) => item.mechanic))].sort(),
    []
  );

  const categories = useMemo(
    () => [...new Set(iconMeta.map((item) => item.category))].sort(),
    []
  );

  useEffect(() => {
    const initialCategory = new URLSearchParams(window.location.search).get(
      "category"
    );
    if (initialCategory && categories.includes(initialCategory)) {
      const frame = window.requestAnimationFrame(() => setCategory(initialCategory));
      return () => window.cancelAnimationFrame(frame);
    }
  }, [categories]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return iconMeta
      .filter(
        (item) =>
          (!q ||
            item.name.toLowerCase().includes(q) ||
            item.mechanic.toLowerCase().includes(q)) &&
          (trigger === "all" || item.trigger === trigger) &&
          (mechanic === "all" || item.mechanic === mechanic) &&
          (category === "all" || item.category === category)
      )
      .toSorted((a, b) =>
        sort === "name"
          ? a.name.localeCompare(b.name)
          : a.mechanic.localeCompare(b.mechanic) || a.name.localeCompare(b.name)
      );
  }, [category, mechanic, query, sort, trigger]);

  const hasFilters =
    query || trigger !== "all" || mechanic !== "all" || category !== "all";

  function clearFilters() {
    setQuery("");
    setTrigger("all");
    setMechanic("all");
    setCategory("all");
  }

  return (
    <>
      <main className="mx-auto w-full min-w-0 max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Icons" }]}
        />
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          {iconMeta.length} icons
        </p>
        <h1 className="mb-6 text-2xl font-medium tracking-tight sm:text-3xl">
          Browse the full set
        </h1>

        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2.5 focus-within:border-accent">
            <Search size={16} strokeWidth={1.75} className="text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search icons by name or mechanic…"
              className="focus-shell-input min-w-0 w-full rounded-lg bg-transparent font-mono text-sm text-foreground placeholder:text-muted"
            />
            <span className="font-mono text-[10px] text-muted">{filtered.length}</span>
          </div>

          <div className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2 sm:flex sm:flex-wrap sm:items-center">
            <div className="grid w-full grid-cols-3 rounded-md border border-border bg-surface p-1 min-[480px]:col-span-2 sm:flex sm:w-auto">
              {(["all", "hover", "tap"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTrigger(value)}
                  className={`rounded px-3 py-1.5 font-mono text-[11px] capitalize transition-colors ${
                    trigger === value
                      ? "bg-accent-dim text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            <SelectMenu
              value={category}
              onChange={setCategory}
              ariaLabel="Filter by category"
              className="w-full sm:w-48"
              options={[
                { value: "all", label: "All categories" },
                ...categories.map((value) => ({ value, label: value })),
              ]}
            />

            <SelectMenu
              value={mechanic}
              onChange={setMechanic}
              ariaLabel="Filter by mechanic"
              className="w-full sm:w-44"
              options={[
                { value: "all", label: "All mechanics" },
                ...mechanics.map((value) => ({ value, label: value })),
              ]}
            />

            <SelectMenu
              value={sort}
              onChange={(value) => setSort(value as "name" | "mechanic")}
              ariaLabel="Sort icons"
              className="w-full sm:w-40"
              options={[
                { value: "name", label: "Sort: name" },
                { value: "mechanic", label: "Sort: mechanic" },
              ]}
            />

            <div className="flex items-center justify-between gap-4 min-[480px]:col-span-2 sm:ml-auto">
              <span className="font-mono text-xs text-muted">
                {filtered.length} results
              </span>

              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="font-mono text-xs text-muted transition-colors hover:text-accent"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center font-mono text-sm text-muted">
            No icons match &ldquo;{query}&rdquo;
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-1 rounded-lg border border-border bg-background p-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
            {filtered.map((meta) => (
              <IconCell key={meta.name} meta={meta} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
