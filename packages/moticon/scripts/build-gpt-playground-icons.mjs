import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const metaDir = join(root, "src", "icons");
const outputDir = join(root, "playground-icons", "generated");
const productionDir = join(root, "src", "enhanced");
const capabilitiesFile = join(root, "src", "capabilities.json");

const capabilities = JSON.parse(await readFile(capabilitiesFile, "utf8"));
const custom = new Set([
  "Heart", "Bell", "Rocket", "Sparkles", "Download",
  "Eye", "EyeOff", "Fingerprint", "Gift", "GraduationCap",
  "Home", "Keyboard", "Lamp", "Menu",
  // Stateful pilot — hand-written controlled-morph components. The generator
  // must not overwrite these.
  "Play", "Volume2", "Sun", "Lock", "Check", "Wifi",
]);

// Of the pilot set, these have a finished hand-written `state` prop and can
// show state buttons in the playground. Widen as each icon is completed.
const stateReady = new Set(["Menu", "Play", "Volume2"]);

const groups = {
  energy: new Set("beat blink bloom bubble buzz charge fizz flicker glow hum light lit mine ping play pulse record shine signal sizzle steam strike twinkle warn wonder zest".split(" ")),
  oscillate: new Set("alert blare coo creak jingle nod ring shake speak tick wiggle wobble".split(" ")),
  orbit: new Set("arc cycle loop orbit rev revolve roll rotate spin swirl twist unwind".split(" ")),
  travel: new Set("blow bob bounce climb drift drive drop enter exit fall flap float fly launch lift out pickup raise reach ride rise run sail scurry send shoot slide swim takeoff toss transmit travel walk wave".split(" ")),
  impact: new Set("bite clash click close crumble crunch cut hangup hit inject knock mark mute pause peel pop press reject remove slash snip squash stick stop tap tear tighten".split(" ")),
  sway: new Set("awning cheer hangup perk pitch strum sway swing tilt unfurl".split(" ")),
  flow: new Set("broadcast connect count drip drizzle flow in link listen pair plug plugin pour process progress receive reply ripple sync total".split(" ")),
  reveal: new Set("add apart bars cancel capture check collapse compare compose confirm cross draw expand fill find fold frame grin grow guard huddle lock open paint paste peek plot read recognize reveal save scan set silence spread stack strap stretch stroke trace type unfold unlatch unlock unpack unwrap verify write".split(" ")),
};

function profileFor(mechanic) {
  for (const [profile, mechanics] of Object.entries(groups)) {
    if (mechanics.has(mechanic)) return profile;
  }
  return "precision";
}

const accentGroups = {
  ripple: new Set("beat bounce drip drop pulse ripple bob wobble".split(" ")),
  echo: new Set("alert broadcast ping receive ring signal transmit warn".split(" ")),
  trail: new Set("climb drift drive enter exit fall flap float fly launch lift out reach ride rise run sail scurry send slide swim takeoff toss travel walk".split(" ")),
  impact: new Set("bite clash click close crunch cut hangup hit inject knock peel press reject remove slash snip squash stick stop strike tap tear tighten".split(" ")),
  orbit: new Set("arc cycle loop orbit rev revolve roll rotate spin swirl twist unwind".split(" ")),
  scan: new Set("aim find fix focus pan point recognize scan sift".split(" ")),
  draw: new Set("bars compose count draw fill mark paint plot progress read stroke total trace type write".split(" ")),
  glow: new Set("blink charge flicker glow light lit mine on record reveal shine twinkle".split(" ")),
  burst: new Set("add bloom bubble buzz cheer coo fizz grin perk pop puff shoot sizzle zest".split(" ")),
  flow: new Set("connect drizzle flow hum in link listen pair plugin pour process reply steam switch sync".split(" ")),
  hinge: new Set("awning fold open peek pitch settle strap sway swing tilt unfold unfurl unlatch unlock unpack unwrap".split(" ")),
  stretch: new Set("apart collapse compare expand grow huddle pull raise spread stack stretch".split(" ")),
  dust: new Set("crumble fall mix".split(" ")),
  wave: new Set("blare blow mute play silence speak wave".split(" ")),
  confirm: new Set("cancel capture check confirm cross guard lock save verify".split(" ")),
};

// Visual-review corrections. These are intentionally explicit: each entry records a
// composition decision made while replaying that icon in the playground.
const directorOverrides = {
  BellOff: { accent: "wave", anchor: [14, 9], vector: [3, 0], intensity: .82 },
  Bookmark: { accent: "confirm", anchor: [18, 6], vector: [2, -2], intensity: .78 },
  Camera: { accent: "burst", anchor: [18, 6], vector: [3, -3], intensity: 1.08 },
  Check: { accent: "confirm", anchor: [12, 12], vector: [2, -2], intensity: .76 },
  ClipboardList: { accent: "confirm", anchor: [18, 6], vector: [2, -2], intensity: .74 },
  Coffee: { accent: "flow", anchor: [10, 4], vector: [0, -5], intensity: .82 },
  CornerDownRight: { accent: "trail", anchor: [16, 16], vector: [5, 5], intensity: .78 },
  MicOff: { accent: "wave", anchor: [14, 10], vector: [3, 0], intensity: .78 },
  Mountain: { accent: "glow", anchor: [12, 12], vector: [0, -3], intensity: .72 },
  Save: { accent: "confirm", anchor: [18, 6], vector: [2, -2], intensity: .8 },
  Soup: { accent: "flow", anchor: [12, 5], vector: [0, -5], intensity: .82 },
  VolumeX: { accent: "wave", anchor: [12, 12], vector: [3, 0], intensity: .76 },
};

function accentFor(mechanic) {
  for (const [accent, mechanics] of Object.entries(accentGroups)) {
    if (mechanics.has(mechanic)) return accent;
  }
  return "spark";
}

function firstNumber(source, pattern, fallback) {
  const match = source.match(pattern);
  return match ? Number(match[1]) : fallback;
}

function strongestVector(source, property, fallback) {
  const match = source.match(new RegExp(`\\b${property}\\s*:\\s*\\[([^\\]]+)\\]`));
  if (!match) return fallback;
  const values = [...match[1].matchAll(/-?\d+(?:\.\d+)?/g)].map((entry) => Number(entry[0]));
  if (!values.length) return fallback;
  return values.reduce((strongest, value) => Math.abs(value) > Math.abs(strongest) ? value : strongest, 0) || fallback;
}

function geometryAnchor(source) {
  const xs = [];
  const ys = [];
  for (const path of source.matchAll(/\bd="([^"]+)"/g)) {
    const values = [...path[1].matchAll(/-?\d+(?:\.\d+)?/g)].map((entry) => Number(entry[0]));
    for (let index = 0; index + 1 < values.length; index += 2) {
      if (values[index] >= 0 && values[index] <= 24) xs.push(values[index]);
      if (values[index + 1] >= 0 && values[index + 1] <= 24) ys.push(values[index + 1]);
    }
  }
  const average = (values) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 12;
  return [
    Number(Math.max(5, Math.min(19, average(xs))).toFixed(2)),
    Number(Math.max(5, Math.min(19, average(ys))).toFixed(2)),
  ];
}

function directorFor(source, meta, mechanic, name) {
  const motionCount = (source.match(/<motion\./g) || []).length;
  const pathCount = (source.match(/<(?:motion\.)?path\b/g) || []).length;
  const [geometryX, geometryY] = geometryAnchor(source);
  const anchorX = firstNumber(source, /originX:\s*"(-?\d+(?:\.\d+)?)px"/, geometryX);
  const anchorY = firstNumber(source, /originY:\s*"(-?\d+(?:\.\d+)?)px"/, geometryY);
  const fallbackX = /(?:fly|send|slide|travel|drive|out|exit)/.test(mechanic) ? 5 : 3;
  const fallbackY = /(?:rise|lift|launch|steam|takeoff|toss)/.test(mechanic) ? -5 : 3;
  let vectorX = Math.max(-8, Math.min(8, strongestVector(source, "x", fallbackX)));
  let vectorY = Math.max(-8, Math.min(8, strongestVector(source, "y", fallbackY)));
  if (/Left/.test(name)) vectorX = -Math.abs(vectorX);
  if (/Right/.test(name)) vectorX = Math.abs(vectorX);
  if (/Up/.test(name)) vectorY = -Math.abs(vectorY);
  if (/Down/.test(name)) vectorY = Math.abs(vectorY);
  const baseDuration = Number(meta.motion?.duration) || .55;
  const director = {
    accent: accentFor(mechanic),
    anchor: [anchorX, anchorY],
    vector: [vectorX, vectorY],
    duration: Math.max(.38, Math.min(1.05, Number((baseDuration + .16 + Math.min(pathCount, 8) * .004).toFixed(3)))),
    intensity: Number(Math.max(.58, Math.min(1.15, 1.08 - motionCount * .045 + pathCount * .008 + (source.length % 17) * .001)).toFixed(3)),
    complexity: Number((motionCount + pathCount / 100 + (source.length % 97) / 10000).toFixed(4)),
  };
  return { ...director, ...(directorOverrides[name] || {}) };
}

function addReplayControl(source, name) {
  const state = source.match(/while(?:Hover|Tap)=\{reduced\s*\?\s*undefined\s*:\s*"([^"]+)"\}/s)?.[1];
  if (!state) throw new Error(`Could not determine the active motion state for ${name}`);

  const propsPattern = /(\s+)\.\.\.props\r?\n}: MoticonIconProps\) \{/;
  if (!propsPattern.test(source)) throw new Error(`Could not add replay props to ${name}`);

  const withForceProp = source.replace(
    propsPattern,
    `$1force = false,$1...props\n}: MoticonIconProps & { force?: boolean }) {`,
  );
  if (!withForceProp.includes('initial="rest"')) {
    throw new Error(`Could not find the root rest state for ${name}`);
  }
  return withForceProp.replace(
    'initial="rest"',
    `initial="rest" animate={force && !reduced ? ${JSON.stringify(state)} : "rest"}`,
  );
}

await mkdir(outputDir, { recursive: true });
await mkdir(productionDir, { recursive: true });
const files = (await readdir(metaDir)).filter((file) => file.endsWith(".json")).sort();
const records = [];

for (const file of files) {
  const name = file.slice(0, -5);
  const meta = JSON.parse(await readFile(join(metaDir, file), "utf8"));
  const originalSource = await readFile(join(metaDir, `${name}.tsx`), "utf8");
  const mechanic = meta.motion?.mechanic || "precision";
  const profile = profileFor(mechanic);
  const director = directorFor(originalSource, meta, mechanic, name);
  const cap = capabilities[name];
  const capStates = cap && cap.stateful && Array.isArray(cap.states) ? cap.states : null;
  // Only surface state buttons for icons whose hand-written `state` prop is done.
  const states = capStates && stateReady.has(name) ? capStates : null;
  records.push({
    name,
    mechanic,
    profile,
    accent: director.accent,
    custom: custom.has(name),
    ...(states ? { states } : {}),
  });
  const source = `// Auto-generated by scripts/build-gpt-playground-icons.mjs.\n// Uses the public enhanced build; retained original files are not imported.\nexport { ${name} as GPT${name} } from "../../dist/enhanced/${name}.js";\n`;
  await writeFile(join(outputDir, `${name}.js`), source, "utf8");

  if (custom.has(name)) continue;

  const copiedSource = addReplayControl(originalSource, name)
    .replace(/^"use client";\s*/, "")
    .replaceAll('from "./types"', 'from "../icons/types"')
    .replace(`export function ${name}(`, `function Original${name}(`);
  const productionSource = `"use client";\n\n// Auto-generated enhanced copy. src/icons/${name}.tsx is not imported at runtime.\nimport { createEnhancedIcon } from "./createEnhancedIcon";\n${copiedSource.trim()}\n\nexport const ${name} = createEnhancedIcon(Original${name}, ${JSON.stringify({ name, mechanic, profile, director })});\n`;
  await writeFile(join(productionDir, `${name}.tsx`), productionSource, "utf8");
}

const loaderLines = records.map(({ name }) =>
  `  ${JSON.stringify(name)}: () => import(${JSON.stringify(`./generated/${name}.js`)}).then((module) => module.GPT${name}),`
).join("\n");
const manifest = `// Auto-generated by scripts/build-gpt-playground-icons.mjs.\nexport const GPT_ICON_MANIFEST = ${JSON.stringify(records, null, 2)};\n\nexport const GPT_ICON_LOADERS = {\n${loaderLines}\n};\n`;
await writeFile(join(root, "playground-icons", "manifest.js"), manifest, "utf8");

const counts = records.reduce((acc, item) => ((acc[item.profile] = (acc[item.profile] || 0) + 1), acc), {});
console.log(`Generated ${records.length - custom.size} GPT icon copies + ${custom.size} custom concepts.`);
console.log(counts);
