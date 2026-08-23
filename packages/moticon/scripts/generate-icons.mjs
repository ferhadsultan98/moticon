import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const lucideDir = join(root, "node_modules", "lucide-static", "icons");
const outDir = join(root, "src", "icons");

mkdirSync(outDir, { recursive: true });

// icon name -> { lucide source file, animation preset, component name }
const ICONS = {
  heart: { preset: "beatOnTap", name: "Heart" },
  bell: { preset: "ringOnHover", name: "Bell" },
  star: { preset: "sparkleOnHover", name: "Star" },
  check: { preset: "popOnTap", name: "Check" },
  trash: { preset: "shakeOnHover", name: "Trash" },
  search: { preset: "circleOnHover", name: "Search" },
  settings: { preset: "spinOnHover", name: "Settings" },
  mail: { preset: "popOnTap", name: "Mail" },
  download: { preset: "bounceOnHover", name: "Download" },
  plus: { preset: "spinOnTap", name: "Plus" },
};

function extractInner(svg) {
  const match = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  return match[1].trim();
}

function extractPaths(inner) {
  const tags = [];
  const re = /<(path|circle|line|rect|polyline|polygon)\b([^>]*)\/>/g;
  let m;
  while ((m = re.exec(inner))) {
    tags.push({ tag: m[1], attrs: m[2].trim() });
  }
  return tags;
}

function attrsToJsx(attrs) {
  return attrs.replace(/([a-z-]+)="([^"]*)"/g, (_, key, val) => {
    const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return `${camel}="${val}"`;
  });
}

const PRESETS = {
  beatOnTap: (tags) => ({
    trigger: "whileTap",
    variantName: "beat",
    wrap: "path",
    variants: `{
          rest: { scale: 1 },
          beat: { scale: [1, 1.3, 0.9, 1.15, 1], transition: { duration: 0.5, ease: "easeInOut" } },
        }`,
    origin: "12px 12px",
  }),
  ringOnHover: () => ({
    trigger: "whileHover",
    variantName: "ring",
    wrap: "group",
    variants: `{
          rest: { rotate: 0 },
          ring: { rotate: [0, -14, 12, -9, 6, -3, 0], transition: { duration: 0.6, ease: "easeInOut" } },
        }`,
    origin: "12px 4px",
  }),
  sparkleOnHover: () => ({
    trigger: "whileHover",
    variantName: "sparkle",
    wrap: "group",
    variants: `{
          rest: { scale: 1, rotate: 0 },
          sparkle: { scale: [1, 1.25, 1], rotate: [0, 15, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }`,
    origin: "12px 12px",
  }),
  popOnTap: () => ({
    trigger: "whileTap",
    variantName: "pop",
    wrap: "group",
    variants: `{
          rest: { scale: 1 },
          pop: { scale: [1, 0.85, 1.08, 1], transition: { duration: 0.35, ease: "easeInOut" } },
        }`,
    origin: "12px 12px",
  }),
  shakeOnHover: () => ({
    trigger: "whileHover",
    variantName: "shake",
    wrap: "group",
    variants: `{
          rest: { x: 0, rotate: 0 },
          shake: { x: [0, -1.5, 1.5, -1.5, 0], rotate: [0, -4, 4, -2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
        }`,
    origin: "12px 3px",
  }),
  circleOnHover: () => ({
    trigger: "whileHover",
    variantName: "look",
    wrap: "group",
    variants: `{
          rest: { rotate: 0, scale: 1 },
          look: { rotate: [0, -10, 10, 0], scale: [1, 1.08, 1], transition: { duration: 0.5, ease: "easeInOut" } },
        }`,
    origin: "11px 11px",
  }),
  spinOnHover: () => ({
    trigger: "whileHover",
    variantName: "spin",
    wrap: "group",
    variants: `{
          rest: { rotate: 0 },
          spin: { rotate: 90, transition: { duration: 0.4, ease: "easeInOut" } },
        }`,
    origin: "12px 12px",
  }),
  bounceOnHover: () => ({
    trigger: "whileHover",
    variantName: "bounce",
    wrap: "group",
    variants: `{
          rest: { y: 0 },
          bounce: { y: [0, 3, -2, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }`,
    origin: "12px 12px",
  }),
  spinOnTap: () => ({
    trigger: "whileTap",
    variantName: "spin",
    wrap: "group",
    variants: `{
          rest: { rotate: 0, scale: 1 },
          spin: { rotate: 180, scale: [1, 1.2, 1], transition: { duration: 0.4, ease: "easeInOut" } },
        }`,
    origin: "12px 12px",
  }),
};

function buildComponent(componentName, tags, presetConf) {
  const staticTags = tags
    .map((t) => `        <${t.tag} ${attrsToJsx(t.attrs)} />`)
    .join("\n");

  if (presetConf.wrap === "path") {
    const [first, ...rest] = tags;
    const restJsx = rest.map((t) => `        <${t.tag} ${attrsToJsx(t.attrs)} />`).join("\n");
    return `"use client";

import { motion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ${componentName}({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}: MoticonIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      {...props}
    >
      <motion.${first.tag}
        fill="transparent"
        style={{ originX: "${presetConf.origin.split(" ")[0]}", originY: "${presetConf.origin.split(" ")[1]}" }}
        initial="rest"
        ${presetConf.trigger}="${presetConf.variantName}"
        variants={${presetConf.variants}}
        ${attrsToJsx(first.attrs)}
      />
${restJsx}
    </svg>
  );
}
`;
  }

  return `"use client";

import { motion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ${componentName}({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}: MoticonIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      {...props}
    >
      <motion.g
        style={{ originX: "${presetConf.origin.split(" ")[0]}", originY: "${presetConf.origin.split(" ")[1]}" }}
        initial="rest"
        ${presetConf.trigger}="${presetConf.variantName}"
        variants={${presetConf.variants}}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
${staticTags}
      </motion.g>
    </svg>
  );
}
`;
}

for (const [file, conf] of Object.entries(ICONS)) {
  const svgPath = join(lucideDir, `${file}.svg`);
  const svg = readFileSync(svgPath, "utf-8");
  const inner = extractInner(svg);
  const tags = extractPaths(inner);
  const presetConf = PRESETS[conf.preset]();
  const code = buildComponent(conf.name, tags, presetConf);
  writeFileSync(join(outDir, `${conf.name}.tsx`), code);
  console.log(`generated ${conf.name}.tsx (${conf.preset})`);
}

// shared types
writeFileSync(
  join(outDir, "types.ts"),
  `export interface MoticonIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}
`
);

// barrel export
const names = Object.values(ICONS).map((c) => c.name);
writeFileSync(
  join(root, "src", "index.ts"),
  names.map((n) => `export { ${n} } from "./icons/${n}";`).join("\n") +
    `\nexport type { MoticonIconProps } from "./icons/types";\n`
);
console.log("generated src/index.ts");
