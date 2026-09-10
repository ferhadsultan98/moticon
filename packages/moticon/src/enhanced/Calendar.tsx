"use client";

// Auto-generated enhanced copy. src/icons/Calendar.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCalendar({
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
      <motion.g initial="rest" animate={force && !reduced ? "flip" : "rest"} whileHover={reduced ? undefined : "flip"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <motion.path
          style={{ originX: "8px", originY: "2px" }}
          variants={{
            rest: { rotate: 0 },
            flip: { rotate: [0, -25, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="M8 2v3"
        />
        <motion.path
          style={{ originX: "16px", originY: "2px" }}
          variants={{
            rest: { rotate: 0 },
            flip: { rotate: [0, -25, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.08 } },
          }}
          d="M16 2v3"
        />
      </motion.g>
    </svg>
  );
}

export const Calendar = createEnhancedIcon(OriginalCalendar, {"name":"Calendar","mechanic":"flip","profile":"precision","director":{"accent":"spark","anchor":[8,2],"vector":[3,3],"duration":0.572,"intensity":0.976,"complexity":3.0326}});
