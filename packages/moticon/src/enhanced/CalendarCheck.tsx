"use client";

// Auto-generated enhanced copy. src/icons/CalendarCheck.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCalendarCheck({
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
      <motion.g initial="rest" animate={force && !reduced ? "confirm" : "rest"} whileTap={reduced ? undefined : "confirm"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M8 2v3" />
        <path d="M16 2v3" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            confirm: { pathLength: [0, 1], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="m9 15 2 2 4-4"
        />
      </motion.g>
    </svg>
  );
}

export const CalendarCheck = createEnhancedIcon(OriginalCalendarCheck, {"name":"CalendarCheck","mechanic":"confirm","profile":"reveal","director":{"accent":"confirm","anchor":[7,6],"vector":[3,3],"duration":0.526,"intensity":1.024,"complexity":2.0457}});
