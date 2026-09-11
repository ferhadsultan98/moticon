"use client";

// Auto-generated enhanced copy. src/icons/ArrowRight.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalArrowRight({
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
        initial="rest" animate={force && !reduced ? "slide" : "rest"}
        whileHover={reduced ? undefined : "slide"}
        variants={{
          rest: { x: 0 },
          slide: {
            x: [0, 4.2, 3.4, 3.7],
            transition: { duration: 0.4, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </motion.g>
    </svg>
  );
}

export const ArrowRight = createEnhancedIcon(OriginalArrowRight, {"name":"ArrowRight","mechanic":"slide","profile":"travel","director":{"accent":"trail","anchor":[8,7.75],"vector":[4.2,3],"duration":0.418,"intensity":1.064,"complexity":1.028}});
