/**
 * Curated intent synonyms — edit src/synonyms.json.
 *
 * The catalog's own tags/aliases are thin. Agents ask for icons by intent word
 * ("notification", "delete", "logout") that never appears in that data. This
 * map (intent phrase -> exact component names) is one more deterministic
 * scoring tier in search — no LLM. Keep it short; it is not a thesaurus.
 *
 * Phrases match on the normalized key (name.ts: lower-case, separators
 * removed). Every target name must exist in the catalog — scripts/build-icon-
 * data.mjs fails the build otherwise.
 */
import data from "./synonyms.json" with { type: "json" };

export const SYNONYMS: Record<string, string[]> = data;
