"use client";

// Auto-generated enhanced copy. src/icons/CalendarClock.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCalendarClock({
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
      <motion.g initial="rest" animate={force && !reduced ? "tick" : "rest"} whileHover={reduced ? undefined : "tick"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M16 2v3" />
        <path d="M21 7.338V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2.338" />
        <path d="M3 9h5.859" />
        <path d="M8 2v3" />
        <circle cx="16" cy="16" r="6" />
        <motion.path
          style={{ originX: "16px", originY: "16px" }}
          variants={{
            rest: { rotate: 0 },
            tick: { rotate: 360, transition: { duration: 0.7, ease: "easeInOut" } },
          }}
          d="M16 14v2.2l1.6 1"
        />
      </motion.g>
    </svg>
  );
}

export const CalendarClock = createEnhancedIcon(OriginalCalendarClock, {"name":"CalendarClock","mechanic":"tick","profile":"oscillate","director":{"accent":"spark","anchor":[16,16],"vector":[3,3],"duration":0.88,"intensity":1.045,"complexity":2.0575}});
