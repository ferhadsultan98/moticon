"use client";

import { track } from "@vercel/analytics";

/**
 * Named, privacy-safe conversion events. No PII, no user-entered text (icon
 * search queries are never sent). Each is a fixed string + at most one
 * low-cardinality property. If Vercel Analytics custom events are not enabled
 * for the project these calls are inert — `track` no-ops.
 */
export type ConversionEvent =
  | "install_copied"
  | "icon_import_copied"
  | "mcp_command_copied"
  | "browse_icons_cta"
  | "docs_cta"
  | "github_cta"
  | "npm_cta"
  | "playground_cta";

export function trackEvent(
  event: ConversionEvent,
  detail?: { manager?: string; from?: string },
) {
  try {
    track(event, detail ?? {});
  } catch {
    /* analytics must never break the UI */
  }
}
