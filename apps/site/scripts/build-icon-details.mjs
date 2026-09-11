/**
 * Extracts per-icon animation detail from the real package source so every
 * /icons/[name] page can render genuinely icon-specific content (not the same
 * templated sentence with a swapped name).
 *
 * For each icon we parse <Name>.tsx and derive:
 *   - motionElementCount : how many separate animated parts
 *   - properties         : which transform channels animate (rotate, scale, x,
 *                           y, opacity, pathLength, skew, …)
 *   - origin             : transform-origin, mapped to a human phrase
 *   - repeats            : whether any part loops
 *   - secondaryMotion    : whether parts animate on staggered delays
 *
 * Output: src/generated/icon-details.json  (name -> detail object)
 */
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { inlinePropsType } from "../../../packages/moticon/scripts/lib/icon-source.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..", "..", "..", "packages", "moticon", "src", "enhanced");
const outDir = join(__dirname, "..", "src", "generated");
const outFile = join(outDir, "icon-details.json");
const sourcesFile = join(outDir, "icon-sources.json");

/** Self-contained component source: inline the shared "./types" import. */
const selfContainedSource = inlinePropsType;

const PROP_LABELS = {
  rotate: "rotation",
  scale: "scale",
  scaleX: "horizontal scale",
  scaleY: "vertical scale",
  x: "horizontal shift",
  y: "vertical shift",
  opacity: "fade",
  pathLength: "line draw",
  skewX: "skew",
  skewY: "skew",
  pathOffset: "dash offset",
};

function originPhrase(originX, originY) {
  const x = originX ?? "12px";
  const y = originY ?? "12px";
  const cx = parseFloat(x);
  const cy = parseFloat(y);
  const vy = cy <= 6 ? "top" : cy >= 18 ? "bottom" : "middle";
  const vx = cx <= 6 ? "left" : cx >= 18 ? "right" : "center";
  if (vy === "middle" && vx === "center") return "its center";
  return `the ${vy}-${vx}`.replace("middle-", "").replace("-center", " center");
}

function analyze(src) {
  // strip the invisible hit-area rect so it isn't counted
  const body = src.replace(/<rect[^>]*fill="transparent"[^>]*\/>/g, "");

  const motionEls = [...body.matchAll(/<motion\.(\w+)/g)].map((m) => m[1]);
  const motionElementCount = motionEls.length;

  const props = new Set();
  for (const key of Object.keys(PROP_LABELS)) {
    // property appears as a key inside a variants object: `rotate:` / `rotate :`
    const re = new RegExp(`\\b${key}\\s*:`, "g");
    if (re.test(body)) props.add(key);
  }

  const originXMatch = body.match(/originX:\s*"([^"]+)"/);
  const originYMatch = body.match(/originY:\s*"([^"]+)"/);
  const transformOrigin = body.match(/transformOrigin:\s*"([^"]+)"/);
  let origin;
  if (transformOrigin) {
    const [ox, oy] = transformOrigin[1].split(/\s+/);
    origin = originPhrase(ox, oy);
  } else {
    origin = originPhrase(originXMatch?.[1], originYMatch?.[1]);
  }

  const repeats = /repeat:\s*(Infinity|\d+)/.test(body);
  const secondaryMotion = /delay:\s*0?\.\d/.test(body);
  const hasTap = /whileTap/.test(body);
  const hasHover = /whileHover/.test(body);

  // Extract the static SVG geometry so OG images (which can't run motion) can
  // draw the icon. Grab every d="" from <path>, plus <circle>/<line>/<rect>
  // (non hit-area) primitives, as raw attribute strings.
  const paths = [...body.matchAll(/<(?:motion\.)?path[^>]*\bd="([^"]+)"/g)].map((m) => m[1]);
  const circles = [...body.matchAll(/<(?:motion\.)?circle([^>]*?)\/?>/g)]
    .map((m) => m[1])
    .filter((a) => /\bcx=/.test(a) && !/fill="transparent"/.test(a))
    .map((a) => {
      const cx = a.match(/\bcx="([^"]+)"/)?.[1];
      const cy = a.match(/\bcy="([^"]+)"/)?.[1];
      const r = a.match(/\br="([^"]+)"/)?.[1];
      return cx && cy && r ? { cx, cy, r } : null;
    })
    .filter(Boolean);
  const lines = [...body.matchAll(/<(?:motion\.)?line([^>]*?)\/?>/g)]
    .map((m) => m[1])
    .map((a) => ({
      x1: a.match(/\bx1="([^"]+)"/)?.[1],
      y1: a.match(/\by1="([^"]+)"/)?.[1],
      x2: a.match(/\bx2="([^"]+)"/)?.[1],
      y2: a.match(/\by2="([^"]+)"/)?.[1],
    }))
    .filter((l) => l.x1 && l.y1 && l.x2 && l.y2);
  const polylines = [...body.matchAll(/<(?:motion\.)?polyline[^>]*\bpoints="([^"]+)"/g)].map(
    (m) => m[1]
  );

  return {
    motionElementCount,
    movingShapes: [...new Set(motionEls)],
    properties: [...props],
    propertyLabels: [...props].map((p) => PROP_LABELS[p]),
    origin,
    repeats,
    secondaryMotion,
    triggers: [hasHover && "hover", hasTap && "tap"].filter(Boolean),
    geometry: { paths, circles, lines, polylines },
  };
}

const files = readdirSync(iconsDir).filter((f) => f.endsWith(".tsx") && f !== "createEnhancedIcon.tsx");
const details = {};
const sources = {};

for (const file of files) {
  const name = file.replace(/\.tsx$/, "");
  const src = readFileSync(join(iconsDir, file), "utf-8");
  details[name] = analyze(src);
  sources[name] = selfContainedSource(src);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JSON.stringify(details, null, 2) + "\n");
writeFileSync(sourcesFile, JSON.stringify(sources, null, 2) + "\n");
console.log(
  `Generated animation detail + source for ${Object.keys(details).length} icons -> src/generated/`,
);
