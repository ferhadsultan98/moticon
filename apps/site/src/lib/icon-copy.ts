import iconDetails from "@/generated/icon-details.json";
import type { IconMeta } from "@/lib/icons";

export interface IconGeometry {
  paths: string[];
  circles: { cx: string; cy: string; r: string }[];
  lines: { x1: string; y1: string; x2: string; y2: string }[];
  polylines: string[];
}

export interface IconDetail {
  motionElementCount: number;
  movingShapes: string[];
  properties: string[];
  propertyLabels: string[];
  origin: string;
  repeats: boolean;
  secondaryMotion: boolean;
  triggers: string[];
  geometry?: IconGeometry;
}

const details = iconDetails as Record<string, IconDetail>;

export function getIconDetail(name: string): IconDetail | undefined {
  return details[name];
}

/** Split a PascalCase icon name into words: "BellRing" -> "Bell Ring". */
export function humanizeName(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}

/**
 * Recommended-use phrases per category. Kept short and concrete — these feed
 * both the "Best for" list and the meta description, so they must read as real
 * UI contexts, not marketing filler.
 */
const CATEGORY_USES: Record<string, string[]> = {
  "Animals": ["nature and pet apps", "playful empty states", "kids' product UI"],
  "Arrows & Navigation": ["navigation controls", "carousels and steppers", "back/forward affordances"],
  "Charts & Data": ["dashboards", "analytics summaries", "report headers"],
  "Commerce & Finance": ["checkout flows", "pricing pages", "wallet and billing screens"],
  "Communication": ["notification centers", "inbox and chat UI", "contact actions"],
  "Devices & Tech": ["settings screens", "device managers", "connectivity status"],
  "Files & Documents": ["file managers", "upload and export actions", "document toolbars"],
  "Food & Drink": ["menu and ordering UI", "recipe apps", "delivery tracking"],
  "Health & Science": ["health dashboards", "lab and research tools", "medical records UI"],
  "Interface & Actions": ["toolbars and menus", "primary action buttons", "inline controls"],
  "Media & Entertainment": ["media players", "streaming UI", "content libraries"],
  "Miscellaneous": ["general-purpose UI", "onboarding flows", "marketing sections"],
  "Objects & Tools": ["utility panels", "editor toolbars", "settings and preferences"],
  "People & Body": ["account and profile screens", "team and member lists", "auth flows"],
  "Security & Access": ["login and auth screens", "permission dialogs", "security settings"],
  "Status & Alerts": ["toasts and banners", "form validation", "system status indicators"],
  "Time & Calendar": ["scheduling UI", "calendars and reminders", "timers and countdowns"],
  "Weather & Nature": ["weather widgets", "forecast screens", "outdoor and travel apps"],
};

export function recommendedUses(meta: IconMeta): string[] {
  return CATEGORY_USES[meta.category] ?? CATEGORY_USES["Miscellaneous"];
}

/** One-sentence summary of what the icon depicts / is for. */
export function purposeSentence(meta: IconMeta): string {
  const human = humanizeName(meta.name).toLowerCase();
  const uses = recommendedUses(meta);
  return `The ${human} icon is built for ${uses[0]} and ${uses[1]}, where a small, meaningful motion communicates state or invites an action.`;
}

/**
 * Describes the actual animation in plain language, derived from the parsed
 * source — so every icon's paragraph differs by mechanic, moving-part count,
 * transform channels and origin.
 */
export function motionSentence(meta: IconMeta, detail?: IconDetail): string {
  const human = humanizeName(meta.name).toLowerCase();
  const mech = meta.mechanic || "animate";

  if (!detail) {
    return `On ${meta.trigger}, the ${human} icon plays a "${mech}" animation.`;
  }

  const partCount = detail.motionElementCount;
  const parts =
    partCount <= 1
      ? "the whole shape"
      : partCount === 2
        ? "two parts of the icon"
        : `${partCount} parts of the icon`;

  const channels = detail.propertyLabels.length
    ? detail.propertyLabels.slice(0, 3).join(", ")
    : "position";

  let sentence = `On ${meta.trigger}, ${parts} perform a "${mech}" motion — driven by ${channels}`;

  if (detail.origin && detail.origin !== "its center") {
    sentence += `, pivoting from ${detail.origin} of the icon`;
  } else {
    sentence += `, centered on the icon`;
  }
  sentence += ".";

  if (detail.secondaryMotion) {
    sentence += ` Individual parts start on staggered delays, giving the movement a natural, physical follow-through.`;
  }
  if (detail.repeats) {
    sentence += ` The motion loops continuously while active, so it works as a live status indicator.`;
  }
  if (meta.duration) {
    sentence += ` A full cycle runs about ${meta.duration}s${meta.ease ? ` on an ${meta.ease} curve` : ""}.`;
  }

  return sentence;
}

/** Interaction spec rows for the detail table. */
export function interactionRows(meta: IconMeta, detail?: IconDetail): [string, string][] {
  const rows: [string, string][] = [
    ["Trigger", meta.trigger === "tap" ? "tap / press" : "hover / pointer-enter"],
    ["Mechanic", meta.mechanic || "—"],
    ["Animation engine", "motion/react"],
    ["Component", `<${meta.name} />`],
    ["Framework", "React 18+"],
  ];
  if (detail) {
    rows.splice(2, 0, [
      "Moving parts",
      detail.motionElementCount <= 1
        ? "single shape"
        : `${detail.motionElementCount} independent parts`,
    ]);
    if (detail.propertyLabels.length) {
      rows.splice(3, 0, ["Transform channels", detail.propertyLabels.join(", ")]);
    }
    if (detail.origin) {
      rows.splice(4, 0, ["Motion origin", detail.origin]);
    }
    rows.push(["Loops", detail.repeats ? "yes — while active" : "no — plays once"]);
  }
  rows.push(["Reduced motion", "respected — renders static"]);
  return rows;
}

/** 150–160 char meta description, unique per icon. */
export function metaDescription(meta: IconMeta): string {
  const human = humanizeName(meta.name);
  const mech = meta.mechanic || "animated";
  const use = recommendedUses(meta)[0];
  const base = `${human} is an animated React icon with a ${mech} motion on ${meta.trigger}. Copy-paste component for ${use}. Free, open-source, tree-shakeable.`;
  return base.length <= 160 ? base : base.slice(0, 157) + "…";
}

export function pageTitle(meta: IconMeta): string {
  return `${humanizeName(meta.name)} — animated React icon`;
}

export function pageHeading(meta: IconMeta): string {
  return `Animated ${humanizeName(meta.name)} icon for React`;
}
