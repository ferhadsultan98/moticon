"use client";

// Auto-generated enhanced copy. src/icons/Rainbow.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalRainbow({
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
      <motion.g initial="rest" animate={force && !reduced ? "arc" : "rest"} whileHover={reduced ? undefined : "arc"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            arc: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0 } },
          }}
          d="M22 17a10 10 0 0 0-20 0"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            arc: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.12 } },
          }}
          d="M6 17a6 6 0 0 1 12 0"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            arc: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.24 } },
          }}
          d="M10 17a2 2 0 0 1 4 0"
        />
      </motion.g>
    </svg>
  );
}

export const Rainbow = createEnhancedIcon(OriginalRainbow, {"name":"Rainbow","mechanic":"arc","profile":"orbit","director":{"accent":"orbit","anchor":[5,7.73],"vector":[3,3],"duration":0.472,"intensity":0.93,"complexity":4.0313}});
