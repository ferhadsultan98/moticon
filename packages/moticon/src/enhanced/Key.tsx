"use client";

// Auto-generated enhanced copy. src/icons/Key.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalKey({
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
        style={{ originX: "7.5px", originY: "15.5px" }}
        initial="rest" animate={force && !reduced ? "turn" : "rest"}
        whileTap={reduced ? undefined : "turn"}
        variants={{
          rest: { rotate: 0 },
          turn: { rotate: 35, transition: { duration: 0.35, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
        <path d="m21 2-9.6 9.6" />
        <circle cx="7.5" cy="15.5" r="5.5" />
      </motion.g>
    </svg>
  );
}

export const Key = createEnhancedIcon(OriginalKey, {"name":"Key","mechanic":"turn","profile":"precision","director":{"accent":"spark","anchor":[7.5,15.5],"vector":[3,3],"duration":0.518,"intensity":1.056,"complexity":1.026}});
