"use client";

// Auto-generated enhanced copy. src/icons/Compass.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCompass({
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
      <motion.g initial="rest" animate={force && !reduced ? "find" : "rest"} whileHover={reduced ? undefined : "find"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <motion.path
          fill="transparent"
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            find: { rotate: [0, 35, -20, 0], transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
        />
      </motion.g>
    </svg>
  );
}

export const Compass = createEnhancedIcon(OriginalCompass, {"name":"Compass","mechanic":"find","profile":"reveal","director":{"accent":"scan","anchor":[12,12],"vector":[3,3],"duration":0.764,"intensity":1,"complexity":2.0111}});
