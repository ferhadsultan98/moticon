"use client";

// Auto-generated enhanced copy. src/icons/CalendarX.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCalendarX({
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
      <motion.g initial="rest" animate={force && !reduced ? "cancel" : "rest"} whileTap={reduced ? undefined : "cancel"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M8 2v3" />
        <path d="M16 2v3" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <motion.path
          style={{ originX: "12px", originY: "15px" }}
          variants={{
            rest: { rotate: 0 },
            cancel: { rotate: 90, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m14 13-4 4"
        />
        <motion.path
          style={{ originX: "12px", originY: "15px" }}
          variants={{
            rest: { rotate: 0 },
            cancel: { rotate: -90, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m10 13 4 4"
        />
      </motion.g>
    </svg>
  );
}

export const CalendarX = createEnhancedIcon(OriginalCalendarX, {"name":"CalendarX","mechanic":"cancel","profile":"reveal","director":{"accent":"confirm","anchor":[12,15],"vector":[3,3],"duration":0.48,"intensity":0.996,"complexity":3.0564}});
