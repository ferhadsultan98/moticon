/**
 * Deterministic icon search. No LLM, no fuzzy-search dependency — a fixed
 * tiered scorer over the frozen catalog.
 *
 * Tiers, highest first:
 *   exact name > exact alias > name prefix > alias prefix > word in name/alias
 *   > category > mechanic > trigger > tag > substring in name/alias/tag
 *
 * All comparisons run on the normalized key (lower-case, separators removed),
 * so "bell-ring", "BellRing" and "bell ring" score identically.
 */
import { icons, type IconEntry } from "./catalog.js";
import { normalizeName } from "./name.js";
import { SYNONYMS } from "./synonyms.js";

const SYNONYM_KEYS = new Map(
  Object.entries(SYNONYMS).map(([phrase, names]) => [normalizeName(phrase), names]),
);

export interface SearchFilters {
  category?: string;
  trigger?: string;
  mechanic?: string;
}

export interface SearchHit {
  name: string;
  aliases: string[];
  category: string;
  mechanic: string;
  trigger: string;
  stateful: boolean;
  controllable: boolean;
  reason: string;
}

interface Scored {
  icon: IconEntry;
  score: number;
  reason: string;
}

function words(value: string): string[] {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/[\s._-]+/)
    .filter(Boolean);
}

function scoreIcon(
  icon: IconEntry,
  q: string,
  qWords: string[],
  synonymNames: string[],
): Scored | null {
  const name = normalizeName(icon.name);
  const aliases = icon.aliases.map(normalizeName);
  const nameWords = words(icon.name);
  const aliasWords = icon.aliases.flatMap(words);

  if (name === q) return { icon, score: 100, reason: "exact name match" };
  if (aliases.includes(q))
    return { icon, score: 92, reason: `exact alias match ("${icon.aliases[aliases.indexOf(q)]}")` };

  const synIndex = synonymNames.indexOf(icon.name);
  if (synIndex !== -1)
    return { icon, score: 88 - synIndex, reason: `common icon for "${q}"` };

  if (name.startsWith(q)) return { icon, score: 80, reason: "name starts with query" };
  if (aliases.some((a) => a.startsWith(q)))
    return { icon, score: 72, reason: "alias starts with query" };

  // every query word is a whole word of the name or an alias
  if (qWords.length && qWords.every((w) => nameWords.includes(w) || aliasWords.includes(w)))
    return { icon, score: 66, reason: "matches every query word" };

  // the icon's whole name is one of the query words ("menu close" -> Menu)
  if (nameWords.length === 1 && qWords.includes(nameWords[0]))
    return { icon, score: 58, reason: `"${icon.name}" is one of the query words` };
  if (qWords.some((w) => aliasWords.includes(w) && w.length > 2))
    return { icon, score: 46, reason: "an alias is one of the query words" };

  if (normalizeName(icon.category) === q || words(icon.category).some((w) => qWords.includes(w)))
    return { icon, score: 44, reason: `category "${icon.category}"` };
  if (normalizeName(icon.mechanic) === q)
    return { icon, score: 40, reason: `motion mechanic "${icon.mechanic}"` };
  if (normalizeName(icon.trigger) === q)
    return { icon, score: 34, reason: `trigger "${icon.trigger}"` };
  if (icon.tags.map(normalizeName).some((t) => t === q))
    return { icon, score: 32, reason: "tag match" };

  if (name.includes(q)) return { icon, score: 24, reason: "query is a substring of the name" };
  if (aliases.some((a) => a.includes(q)))
    return { icon, score: 20, reason: "query is a substring of an alias" };
  if (icon.tags.map(normalizeName).some((t) => t.includes(q)))
    return { icon, score: 16, reason: "query is a substring of a tag" };
  if (qWords.some((w) => icon.mechanic.toLowerCase().includes(w)))
    return { icon, score: 12, reason: `motion mechanic "${icon.mechanic}"` };

  return null;
}

export function searchIcons(
  query: string,
  filters: SearchFilters = {},
  limit = 8,
): SearchHit[] {
  const q = normalizeName(query);
  const qWords = words(query);
  const synonymNames = SYNONYM_KEYS.get(q) ?? [];

  let pool = icons;
  if (filters.category) {
    const c = normalizeName(filters.category);
    pool = pool.filter((i) => normalizeName(i.category) === c);
  }
  if (filters.trigger) {
    const t = normalizeName(filters.trigger);
    pool = pool.filter((i) => normalizeName(i.trigger) === t);
  }
  if (filters.mechanic) {
    const m = normalizeName(filters.mechanic);
    pool = pool.filter((i) => normalizeName(i.mechanic) === m);
  }

  // empty query + filters => just list the filtered pool by name
  if (!q) {
    return pool.slice(0, limit).map((icon) => ({
      ...hit(icon),
      reason: "matches the given filters",
    }));
  }

  return pool
    .map((icon) => scoreIcon(icon, q, qWords, synonymNames))
    .filter((x): x is Scored => x !== null)
    .sort((a, b) => b.score - a.score || a.icon.name.localeCompare(b.icon.name))
    .slice(0, limit)
    .map(({ icon, reason }) => ({ ...hit(icon), reason }));
}

function hit(icon: IconEntry): SearchHit {
  return {
    name: icon.name,
    aliases: icon.aliases,
    category: icon.category,
    mechanic: icon.mechanic,
    trigger: icon.trigger,
    stateful: icon.capabilities.stateful,
    controllable: icon.capabilities.controllable,
    reason: "",
  };
}
