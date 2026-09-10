/**
 * Shared icon-source utilities.
 *
 * Source of truth for the animated component layer is
 *   packages/moticon/src/enhanced/*.tsx
 * — the exact files @moticon/react publishes. Two consumers turn those files
 * into stand-alone components a project can vendor:
 *
 *   - apps/site/scripts/build-registry.mjs   (the shadcn registry)
 *   - packages/mcp                           (the `add_icon` MCP tool)
 *
 * Both need the same three transforms, so they live here once instead of being
 * copy-pasted (and drifting) in each place:
 *
 *   inlinePropsType(src)      strip the `../icons/types` import, inline the
 *                             MoticonIconProps interface
 *   rewriteHelperImport(src)  point `./createEnhancedIcon` at a consumer path
 *   usesHelper(src)           does this icon need the shared helper at all
 *
 * Plus deterministic name helpers (slug / normalize / nearest) used by search
 * and by the registry slug map.
 *
 * Pure string / array functions, no fs, no network — safe to import from a
 * build script or from server runtime code.
 */

/** The inlined form of packages/moticon/src/icons/types.ts. */
export const PROPS_TYPE = `interface MoticonIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}`;

/** Default consumer import specifier for the shared helper. */
export const DEFAULT_HELPER_IMPORT = "@/lib/moticon-motion";

const TYPES_IMPORT_RE =
  /^import\s+type\s+\{\s*MoticonIconProps\s*\}\s+from\s+["'](?:\.\/types|\.\.\/icons\/types)["'];?\s*$/m;

const HELPER_IMPORT_RE = /from\s+["']\.\/createEnhancedIcon["']/;

/** Does this enhanced source depend on the shared createEnhancedIcon helper? */
export function usesHelper(source) {
  return HELPER_IMPORT_RE.test(source);
}

/**
 * Replace the `import type { MoticonIconProps } from "../icons/types"` line with
 * the interface itself, so the file is self-contained. Collapses the blank-line
 * run the replacement can leave behind.
 */
export function inlinePropsType(source) {
  return source
    .replace(TYPES_IMPORT_RE, `\n${PROPS_TYPE}\n`)
    .replace(/\n{3,}/g, "\n\n");
}

/**
 * Point the `./createEnhancedIcon` import at `specifier` (default
 * `@/lib/moticon-motion`). No-op for self-contained icons. shadcn rewrites a
 * `@/lib/...` specifier to the consumer's own alias on install; the MCP writer
 * passes the concrete relative path it just wrote the helper to.
 */
export function rewriteHelperImport(source, specifier = DEFAULT_HELPER_IMPORT) {
  return source.replace(HELPER_IMPORT_RE, `from "${specifier}"`);
}

/**
 * Full transform: self-contained TSX for `name`, ready to drop into a project.
 * `helperImport` is only consulted when the icon actually uses the helper.
 */
export function toStandaloneSource(source, { helperImport = DEFAULT_HELPER_IMPORT } = {}) {
  let out = inlinePropsType(source);
  if (usesHelper(out)) out = rewriteHelperImport(out, helperImport);
  return out;
}

/** The helper file itself, props-type inlined. */
export function helperSource(rawCreateEnhancedIcon) {
  return inlinePropsType(rawCreateEnhancedIcon);
}

/**
 * PascalCase icon name -> kebab slug. Bell -> bell, BellRing -> bell-ring.
 * Trailing digits stay attached (BarChart2 -> bar-chart2, Volume1 -> volume1)
 * — this MUST match the shadcn registry's public route slugs.
 */
export function slugify(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/** PascalCase -> spaced words. BellRing -> "Bell Ring". */
export function humanize(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}

/**
 * Normalize any user spelling of an icon name to a comparison key:
 * lower-case, separators (space / _ / - / camelCase boundary) removed.
 * "BellRing" / "bell-ring" / "bell ring" / "bell_ring" -> "bellring".
 */
export function normalizeName(input) {
  return String(input)
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/[\s._-]+/g, "");
}

/**
 * Resolve a loose name to an exact component name from `names`.
 * Exact match wins; then normalized match. Returns null on no match.
 */
export function resolveName(input, names) {
  if (names.includes(input)) return input;
  const key = normalizeName(input);
  return names.find((n) => normalizeName(n) === key) ?? null;
}

/** Cheap Levenshtein (iterative, two rows). */
function editDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  let curr = new Array(b.length + 1);
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[b.length];
}

/** The `count` names closest to `input` by normalized edit distance. */
export function nearestNames(input, names, count = 3) {
  const key = normalizeName(input);
  return names
    .map((n) => ({ n, d: editDistance(key, normalizeName(n)) }))
    .sort((a, b) => a.d - b.d || a.n.localeCompare(b.n))
    .slice(0, count)
    .map((x) => x.n);
}
