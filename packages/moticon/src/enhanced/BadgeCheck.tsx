"use client";

// Auto-generated enhanced copy. src/icons/BadgeCheck.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBadgeCheck({
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
      <motion.g initial="rest" animate={force && !reduced ? "verify" : "rest"} whileTap={reduced ? undefined : "verify"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.path
          style={{ transformOrigin: "12px 12px" }}
          variants={{
            rest: { rotate: 0, scale: 1 },
            verify: {
              rotate: [0, 48, 45],
              scale: [1, 1.08, 1],
              transition: { duration: 0.42, ease: "easeOut", times: [0, 0.72, 1] },
            },
          }}
          fill="transparent"
          d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        />

        <motion.path
          d="m9 12 2 2 4-4"
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            verify: {
              pathLength: [0, 1],
              opacity: [0, 1],
              transition: { duration: 0.28, ease: "easeOut", delay: 0.16 },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}

export const BadgeCheck = createEnhancedIcon(OriginalBadgeCheck, {"name":"BadgeCheck","mechanic":"verify","profile":"reveal","director":{"accent":"confirm","anchor":[5,5],"vector":[3,3],"duration":0.518,"intensity":0.976,"complexity":3.0278}});
