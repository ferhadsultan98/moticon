"use client";

// Auto-generated enhanced copy. src/icons/Timer.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalTimer({
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
      <motion.g initial="rest" animate={force && !reduced ? "start" : "rest"} whileTap={reduced ? undefined : "start"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <line x1="10" x2="14" y1="2" y2="2" />
        <circle cx="12" cy="14" r="8" />
        <motion.line
          style={{ originX: "12px", originY: "14px" }}
          variants={{
            rest: { rotate: 0 },
            start: { rotate: 270, transition: { duration: 0.5, ease: "easeOut" } },
          }}
          x1="12"
          x2="15"
          y1="14"
          y2="11"
        />
      </motion.g>
    </svg>
  );
}

export const Timer = createEnhancedIcon(OriginalTimer, {"name":"Timer","mechanic":"start","profile":"precision","director":{"accent":"spark","anchor":[12,14],"vector":[3,3],"duration":0.66,"intensity":0.993,"complexity":2.0075}});
