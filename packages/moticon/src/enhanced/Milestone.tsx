"use client";

// Auto-generated enhanced copy. src/icons/Milestone.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMilestone({
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
      <motion.g initial="rest" animate={force && !reduced ? "reach" : "rest"} whileTap={reduced ? undefined : "reach"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 13v8" />
        <path d="M12 3v3" />
        <motion.path
          variants={{
            rest: { scale: 1 },
            reach: { scale: [1, 1.08, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          style={{ originX: "3px", originY: "9px" }}
          fill="transparent"
          d="M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
        />
      </motion.g>
    </svg>
  );
}

export const Milestone = createEnhancedIcon(OriginalMilestone, {"name":"Milestone","mechanic":"reach","profile":"travel","director":{"accent":"trail","anchor":[3,9],"vector":[3,3],"duration":0.472,"intensity":1.03,"complexity":2.0359}});
