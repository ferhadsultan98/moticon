"use client";

// Auto-generated enhanced copy. src/icons/CornerDownRight.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCornerDownRight({
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
      <motion.g initial="rest" animate={force && !reduced ? "trace" : "rest"} whileHover={reduced ? undefined : "trace"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            trace: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0 } },
          }}
          d="M4 4v7a4 4 0 0 0 4 4h12"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            trace: { pathLength: [0, 1], transition: { duration: 0.2, ease: "easeOut", delay: 0.3 } },
          }}
          d="m15 10 5 5-5 5"
        />
      </motion.g>
    </svg>
  );
}

export const CornerDownRight = createEnhancedIcon(OriginalCornerDownRight, {"name":"CornerDownRight","mechanic":"trace","profile":"reveal","director":{"accent":"trail","anchor":[16,16],"vector":[5,5],"duration":0.468,"intensity":0.78,"complexity":3.027}});
