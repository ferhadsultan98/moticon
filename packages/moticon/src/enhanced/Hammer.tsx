"use client";

// Auto-generated enhanced copy. src/icons/Hammer.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalHammer({
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
      <motion.g
        style={{ originX: "5px", originY: "20px" }}
        initial="rest" animate={force && !reduced ? "strike" : "rest"}
        whileTap={reduced ? undefined : "strike"}
        variants={{
          rest: { rotate: 0 },
          strike: { rotate: [0, -25, 0], transition: { duration: 0.3, ease: "easeIn" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" />
        <path d="m18 15 4-4" />
        <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
      </motion.g>
    </svg>
  );
}

export const Hammer = createEnhancedIcon(OriginalHammer, {"name":"Hammer","mechanic":"strike","profile":"energy","director":{"accent":"impact","anchor":[5,20],"vector":[3,3],"duration":0.472,"intensity":1.066,"complexity":1.0304}});
