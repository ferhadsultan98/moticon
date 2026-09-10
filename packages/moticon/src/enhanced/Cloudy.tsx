"use client";

// Auto-generated enhanced copy. src/icons/Cloudy.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCloudy({
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
      <motion.g initial="rest" animate={force && !reduced ? "drift" : "rest"} whileHover={reduced ? undefined : "drift"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0 },
            drift: { x: [0, 2, 0], transition: { duration: 0.8, ease: "easeInOut" } },
          }}
          d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drift: { x: [0, -2, 0], transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61"
        />
      </motion.g>
    </svg>
  );
}

export const Cloudy = createEnhancedIcon(OriginalCloudy, {"name":"Cloudy","mechanic":"drift","profile":"travel","director":{"accent":"trail","anchor":[5,5.3],"vector":[2,3],"duration":0.968,"intensity":0.974,"complexity":3.029}});
