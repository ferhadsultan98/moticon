"use client";

// Auto-generated enhanced copy. src/icons/UserPlus.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalUserPlus({
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
      <motion.g initial="rest" animate={force && !reduced ? "add" : "rest"} whileHover={reduced ? undefined : "add"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <motion.g
          style={{ originX: "19px", originY: "11px" }}
          variants={{
            rest: { scale: 1, rotate: 0 },
            add: { scale: [1, 1.3, 1], rotate: [0, 90, 90], transition: { duration: 0.35, ease: "easeOut" } },
          }}
        >
          <line x1="19" x2="19" y1="8" y2="14" />
          <line x1="22" x2="16" y1="11" y2="11" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const UserPlus = createEnhancedIcon(OriginalUserPlus, {"name":"UserPlus","mechanic":"add","profile":"reveal","director":{"accent":"burst","anchor":[19,11],"vector":[3,3],"duration":0.514,"intensity":0.998,"complexity":2.0177}});
