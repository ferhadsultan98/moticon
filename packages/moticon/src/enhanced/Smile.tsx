"use client";

// Auto-generated enhanced copy. src/icons/Smile.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSmile({
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
      <motion.g initial="rest" animate={force && !reduced ? "grin" : "rest"} whileHover={reduced ? undefined : "grin"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <path d="M15 10V9" />
        <path d="M9 10V9" />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { scaleX: 1, y: 0 },
            grin: { scaleX: 1.2, y: 0.5, transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="M16.472 15a6 6 0 01-8.943 0"
        />
      </motion.g>
    </svg>
  );
}

export const Smile = createEnhancedIcon(OriginalSmile, {"name":"Smile","mechanic":"grin","profile":"reveal","director":{"accent":"burst","anchor":[12,12],"vector":[3,3],"duration":0.522,"intensity":1.015,"complexity":2.0373}});
