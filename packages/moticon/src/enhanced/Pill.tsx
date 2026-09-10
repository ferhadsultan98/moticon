"use client";

// Auto-generated enhanced copy. src/icons/Pill.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPill({
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
        initial="rest" animate={force && !reduced ? "roll" : "rest"}
        whileHover={reduced ? undefined : "roll"}
        variants={{
          rest: { rotate: 0 },
          roll: { rotate: 25, transition: { duration: 0.5, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
        />
        <path d="m8.5 8.5 7 7" />
      </motion.g>
    </svg>
  );
}

export const Pill = createEnhancedIcon(OriginalPill, {"name":"Pill","mechanic":"roll","profile":"orbit","director":{"accent":"orbit","anchor":[12,12],"vector":[3,3],"duration":0.668,"intensity":1.057,"complexity":1.0261}});
