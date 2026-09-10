"use client";

// Auto-generated enhanced copy. src/icons/User.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalUser({
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
      <motion.g initial="rest" animate={force && !reduced ? "nod" : "rest"} whileHover={reduced ? undefined : "nod"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <motion.circle
          style={{ originX: "12px", originY: "7px" }}
          variants={{
            rest: { y: 0, rotate: 0 },
            nod: { y: [0, 1, 0], rotate: [0, 4, -4, 0], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          cx="12"
          cy="7"
          r="4"
        />
      </motion.g>
    </svg>
  );
}

export const User = createEnhancedIcon(OriginalUser, {"name":"User","mechanic":"nod","profile":"oscillate","director":{"accent":"spark","anchor":[12,7],"vector":[3,1],"duration":0.664,"intensity":1.002,"complexity":2.0159}});
