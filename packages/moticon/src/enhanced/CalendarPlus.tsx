"use client";

// Auto-generated enhanced copy. src/icons/CalendarPlus.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCalendarPlus({
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
      <motion.g initial="rest" animate={force && !reduced ? "add" : "rest"} whileTap={reduced ? undefined : "add"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M21 11.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.3" />
        <path d="M3 9h18" />
        <path d="M8 2v3" />
        <path d="M16 2v3" />
        <motion.path
          variants={{
            rest: { scale: 1, rotate: 0 },
            add: { scale: [1, 1.3, 1], rotate: [0, 90], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          style={{ originX: "19px", originY: "18px" }}
          d="M16 18h6"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            add: { opacity: [1, 0], transition: { duration: 0.2 } },
          }}
          d="M19 15v6"
        />
      </motion.g>
    </svg>
  );
}

export const CalendarPlus = createEnhancedIcon(OriginalCalendarPlus, {"name":"CalendarPlus","mechanic":"add","profile":"reveal","director":{"accent":"burst","anchor":[19,18],"vector":[3,3],"duration":0.534,"intensity":1.004,"complexity":3.0647}});
