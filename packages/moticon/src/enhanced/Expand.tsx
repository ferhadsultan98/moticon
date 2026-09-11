"use client";

// Auto-generated enhanced copy. src/icons/Expand.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalExpand({
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
      <motion.g initial="rest" animate={force && !reduced ? "grow" : "rest"} whileHover={reduced ? undefined : "grow"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          variants={{
            rest: { x: 0, y: 0 },
            grow: { x: 1, y: 1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
        >
          <path d="m15 15 6 6" />
          <path d="M21 16v5h-5" />
        </motion.g>
        <motion.g
          variants={{
            rest: { x: 0, y: 0 },
            grow: { x: 1, y: -1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
        >
          <path d="m15 9 6-6" />
          <path d="M21 8V3h-5" />
        </motion.g>
        <motion.g
          variants={{
            rest: { x: 0, y: 0 },
            grow: { x: -1, y: 1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
        >
          <path d="M3 16v5h5" />
          <path d="m3 21 6-6" />
        </motion.g>
        <motion.g
          variants={{
            rest: { x: 0, y: 0 },
            grow: { x: -1, y: -1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
        >
          <path d="M3 8V3h5" />
          <path d="M9 9 3 3" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const Expand = createEnhancedIcon(OriginalExpand, {"name":"Expand","mechanic":"grow","profile":"reveal","director":{"accent":"stretch","anchor":[7.94,10.08],"vector":[3,3],"duration":0.442,"intensity":0.932,"complexity":5.0869}});
