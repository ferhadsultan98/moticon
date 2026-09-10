"use client";

// Auto-generated enhanced copy. src/icons/Monitor.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMonitor({
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
      <motion.g initial="rest" animate={force && !reduced ? "on" : "rest"} whileHover={reduced ? undefined : "on"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.rect
          variants={{
            rest: { opacity: 1 },
            on: { opacity: [0.4, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          width="20"
          height="14"
          x="2"
          y="3"
          rx="2"
        />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </motion.g>
    </svg>
  );
}

export const Monitor = createEnhancedIcon(OriginalMonitor, {"name":"Monitor","mechanic":"on","profile":"precision","director":{"accent":"glow","anchor":[12,12],"vector":[3,3],"duration":0.46,"intensity":1.006,"complexity":2.0054}});
