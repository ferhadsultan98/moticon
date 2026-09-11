"use client";

// Auto-generated enhanced copy. src/icons/ScanFace.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalScanFace({
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
      <motion.g initial="rest" animate={force && !reduced ? "recognize" : "rest"} whileTap={reduced ? undefined : "recognize"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            recognize: { pathLength: [0, 1], transition: { duration: 0.7, ease: "easeOut" } },
          }}
          d="M8 14s1.5 2 4 2 4-2 4-2"
        />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </motion.g>
    </svg>
  );
}

export const ScanFace = createEnhancedIcon(OriginalScanFace, {"name":"ScanFace","mechanic":"recognize","profile":"reveal","director":{"accent":"scan","anchor":[5,5],"vector":[3,3],"duration":0.888,"intensity":1.052,"complexity":2.0766}});
