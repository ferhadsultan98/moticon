import { registry, search } from "../catalog.js";
import { c, line } from "../ui.js";

interface ListOptions {
  category?: string;
  mechanic?: string;
  stateful?: boolean;
  json?: boolean;
}

export function list(opts: ListOptions) {
  let items = registry.filter((m) => !m.deprecated);
  if (opts.category) {
    const q = opts.category.toLowerCase();
    items = items.filter((m) => m.category.toLowerCase().includes(q));
  }
  if (opts.mechanic) {
    const q = opts.mechanic.toLowerCase();
    items = items.filter((m) => m.mechanic.toLowerCase() === q);
  }
  if (opts.stateful) {
    items = items.filter((m) => m.capabilities.stateful);
  }

  if (opts.json) {
    line(JSON.stringify(items, null, 2));
    return;
  }

  const width = Math.max(...items.map((m) => m.name.length), 4);
  for (const m of items) {
    const flags = [
      m.capabilities.stateful && c.green("stateful"),
      m.capabilities.controllable && c.dim("controllable"),
    ]
      .filter(Boolean)
      .join(c.dim(" · "));
    line(
      `${m.name.padEnd(width)}  ${c.dim(m.mechanic.padEnd(12))} ${c.dim(m.category.padEnd(22))} ${flags}`,
    );
  }
  line();
  line(c.dim(`${items.length} of ${registry.length} icons`));
}

export function doSearch(query: string, opts: { json?: boolean }) {
  const hits = search(query);
  if (opts.json) {
    line(JSON.stringify(hits, null, 2));
    return;
  }
  if (hits.length === 0) {
    line(c.dim(`no icons matched "${query}"`));
    return;
  }
  const width = Math.max(...hits.map((m) => m.name.length), 4);
  for (const m of hits) {
    const aka = m.aliases.length ? c.dim(` (${m.aliases.join(", ")})`) : "";
    line(`${m.name.padEnd(width)}${aka}  ${c.dim(m.mechanic)} ${c.dim("·")} ${c.dim(m.category)}`);
  }
  line();
  line(c.dim(`${hits.length} match${hits.length === 1 ? "" : "es"} · add with `) + c.cyan(`moticon add ${hits[0].name}`));
}
