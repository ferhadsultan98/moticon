/**
 * Single source of truth for the site's public origin.
 *
 * Production builds MUST set NEXT_PUBLIC_SITE_URL (Vercel project env var) so
 * that canonical URLs, OpenGraph URLs, the sitemap and robots.txt all point at
 * the real domain. The fallback is the known production URL rather than
 * localhost so a misconfigured build still emits correct absolute URLs.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://moticon-web.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "moticon";

export const SITE_DESCRIPTION =
  "Open-source React icons, each with a hand-built physical animation. No generic scale/rotate pulses — real mechanics: swing, drip, unfurl, snap.";

/** GitHub repository, used in JSON-LD and links. */
export const REPO_URL = "https://github.com/ferhadsultan98/moticon";

/** npm package the icon components ship in. */
export const NPM_URL = "https://www.npmjs.com/package/@moticon/react";

/** Absolute URL helper — pass a root-relative path ("/icons/Bell"). */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** URL-safe slug for a category or mechanic label. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
