"use client";

// Auto-generated enhanced copy. src/icons/Bird.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBird({
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
      <motion.g initial="rest" animate={force && !reduced ? "flap" : "rest"} whileHover={reduced ? undefined : "flap"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M16 7h.01" />
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
        <path d="m20 7 2 .5-2 .5" />
        <path d="M10 18v3" />
        <path d="M14 17.75V21" />
        <motion.path
          style={{ originX: "13px", originY: "7px" }}
          variants={{
            rest: { rotate: 0, scaleY: 1 },
            flap: { rotate: [0, -25, 10, 0], scaleY: [1, 0.7, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M7 18a6 6 0 0 0 3.84-10.61"
        />
      </motion.g>
    </svg>
  );
}

export const Bird = createEnhancedIcon(OriginalBird, {"name":"Bird","mechanic":"flap","profile":"travel","director":{"accent":"trail","anchor":[13,7],"vector":[3,3],"duration":0.684,"intensity":1.051,"complexity":2.061}});
