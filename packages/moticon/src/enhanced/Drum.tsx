"use client";

// Auto-generated enhanced copy. src/icons/Drum.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalDrum({
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
      <motion.g initial="rest" animate={force && !reduced ? "hit" : "rest"} whileHover={reduced ? undefined : "hit"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          style={{ originX: "12px", originY: "14px" }}
          variants={{
            rest: { scaleY: 1, y: 0 },
            hit: {
              scaleY: [1, 0.92, 1.03, 1],
              y: [0, 1, 0, 0],
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          <path d="m2 2 8 8" />
          <path d="m22 2-8 8" />
          <ellipse cx="12" cy="9" rx="10" ry="5" />
          <path d="M7 13.4v7.9" />
          <path d="M12 14v8" />
          <path d="M17 13.4v7.9" />
          <path d="M2 9v8a10 5 0 0 0 20 0V9" />
        </motion.g>
        <motion.line
          x1="9"
          y1="1"
          x2="9"
          y2="4"
          variants={{
            rest: { y: 0, rotate: 0 },
            hit: {
              y: [0, 4, 0],
              rotate: [0, -12, 0],
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          style={{ originX: "9px", originY: "1px" }}
        />
        <motion.line
          x1="15"
          y1="1"
          x2="15"
          y2="4"
          variants={{
            rest: { y: 0, rotate: 0 },
            hit: {
              y: [0, 4, 0],
              rotate: [0, 12, 0],
              transition: { duration: 0.4, ease: "easeOut", delay: 0.06 },
            },
          }}
          style={{ originX: "15px", originY: "1px" }}
        />
      </motion.g>
    </svg>
  );
}

export const Drum = createEnhancedIcon(OriginalDrum, {"name":"Drum","mechanic":"hit","profile":"impact","director":{"accent":"impact","anchor":[12,14],"vector":[3,1],"duration":0.584,"intensity":0.95,"complexity":4.061}});
