"use client";

// Auto-generated enhanced copy. src/icons/ThumbsUp.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalThumbsUp({
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
        style={{ originX: "7px", originY: "22px" }}
        initial="rest" animate={force && !reduced ? "cheer" : "rest"}
        whileTap={reduced ? undefined : "cheer"}
        variants={{
          rest: { rotate: 0 },
          cheer: { rotate: [0, -16, 4, 0], transition: { duration: 0.4, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
        />
        <path d="M7 10v12" />
      </motion.g>
    </svg>
  );
}

export const ThumbsUp = createEnhancedIcon(OriginalThumbsUp, {"name":"ThumbsUp","mechanic":"cheer","profile":"sway","director":{"accent":"burst","anchor":[7,22],"vector":[3,-3],"duration":0.568,"intensity":1.054,"complexity":1.0263}});
