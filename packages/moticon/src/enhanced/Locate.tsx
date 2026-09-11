"use client";

// Auto-generated enhanced copy. src/icons/Locate.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalLocate({
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
      <motion.g initial="rest" animate={force && !reduced ? "fix" : "rest"} whileHover={reduced ? undefined : "fix"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <motion.circle
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { scale: 1 },
            fix: { scale: [1, 0.7, 1.1, 1], transition: { duration: 0.4, ease: "easeOut" } },
          }}
          cx="12"
          cy="12"
          r="7"
        />
      </motion.g>
    </svg>
  );
}

export const Locate = createEnhancedIcon(OriginalLocate, {"name":"Locate","mechanic":"fix","profile":"precision","director":{"accent":"scan","anchor":[12,12],"vector":[3,3],"duration":0.56,"intensity":1.004,"complexity":2.0074}});
