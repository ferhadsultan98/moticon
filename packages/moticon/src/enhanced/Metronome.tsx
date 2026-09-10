"use client";

// Auto-generated enhanced copy. src/icons/Metronome.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMetronome({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  force = false,
  ...props
}: MoticonIconProps & { force?: boolean }) {
  const reduced = useReducedMotion();
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
      <motion.g initial="rest" animate={force && !reduced ? "tick" : "rest"} whileHover={reduced ? undefined : "tick"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M8 21h8" />
        <path d="M6 21 12 3l6 18" />
        <motion.line
          x1="12"
          y1="18"
          x2="12"
          y2="8"
          style={{ originX: "12px", originY: "18px" }}
          variants={{
            rest: { rotate: 0 },
            tick: {
              rotate: [0, 18, -18, 18, -18, 0],
              transition: { duration: 1, ease: "easeInOut" },
            },
          }}
        />
        <circle cx="12" cy="18" r="1" fill={color} />
      </motion.g>
    </svg>
  );
}

export const Metronome = createEnhancedIcon(OriginalMetronome, {"name":"Metronome","mechanic":"tick","profile":"oscillate","director":{"accent":"spark","anchor":[12,18],"vector":[3,3],"duration":1.05,"intensity":1.022,"complexity":2.0276}});
