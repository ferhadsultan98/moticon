"use client";

// Auto-generated enhanced copy. src/icons/X.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalX({
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
        style={{ originX: "12px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "spin" : "rest"}
        whileHover={reduced ? undefined : "spin"}
        variants={{
          rest: { rotate: 0, scale: 1 },
          spin: { rotate: 180, scale: 1.1, transition: { duration: 0.35, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </motion.g>
    </svg>
  );
}

export const X = createEnhancedIcon(OriginalX, {"name":"X","mechanic":"spin","profile":"orbit","director":{"accent":"orbit","anchor":[12,12],"vector":[3,3],"duration":0.518,"intensity":1.062,"complexity":1.0278}});
