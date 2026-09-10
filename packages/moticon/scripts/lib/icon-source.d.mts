export const PROPS_TYPE: string;
export const DEFAULT_HELPER_IMPORT: string;
export function usesHelper(source: string): boolean;
export function inlinePropsType(source: string): string;
export function rewriteHelperImport(source: string, specifier?: string): string;
export function toStandaloneSource(
  source: string,
  opts?: { helperImport?: string },
): string;
export function helperSource(rawCreateEnhancedIcon: string): string;
export function slugify(name: string): string;
export function humanize(name: string): string;
export function normalizeName(input: string): string;
export function resolveName(input: string, names: string[]): string | null;
export function nearestNames(input: string, names: string[], count?: number): string[];
