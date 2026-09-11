"use client";

// Auto-generated enhanced copy. src/icons/Target.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalTarget({
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
      <motion.g initial="rest" animate={force && !reduced ? "focus" : "rest"} whileTap={reduced ? undefined : "focus"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <motion.circle
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { scale: 1 },
            focus: { scale: [1, 1.6, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          cx="12"
          cy="12"
          r="2"
        />
      </motion.g>
    </svg>
  );
}

export const Target = createEnhancedIcon(OriginalTarget, {"name":"Target","mechanic":"focus","profile":"precision","director":{"accent":"scan","anchor":[12,12],"vector":[3,3],"duration":0.46,"intensity":0.994,"complexity":2.0059}});
