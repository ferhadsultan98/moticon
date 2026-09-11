"use client";

// Auto-generated enhanced copy. src/icons/SkipForward.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSkipForward({
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
      <motion.g initial="rest" animate={force && !reduced ? "skip" : "rest"} whileTap={reduced ? undefined : "skip"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M21 4v16" />

        <motion.path
          variants={{
            rest: { x: 0 },
            skip: {
              x: [0, 3.6, 2.9, 3.15],
              transition: { duration: 0.3, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
            },
          }}
          fill="transparent"
          d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"
        />
      </motion.g>
    </svg>
  );
}

export const SkipForward = createEnhancedIcon(OriginalSkipForward, {"name":"SkipForward","mechanic":"skip","profile":"precision","director":{"accent":"spark","anchor":[5,5],"vector":[3.6,3],"duration":0.38,"intensity":1.016,"complexity":2.0202}});
