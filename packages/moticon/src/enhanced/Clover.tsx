"use client";

// Auto-generated enhanced copy. src/icons/Clover.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalClover({
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
      <motion.g
        style={{ originX: "12px", originY: "20px" }}
        initial="rest" animate={force && !reduced ? "wave" : "rest"}
        whileHover={reduced ? undefined : "wave"}
        variants={{
          rest: { rotate: 0 },
          wave: { rotate: [0, -6, 5, 0], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M16.17 7.83 2 22" />
        <path
          fill="transparent"
          d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
        />
        <path d="m7.83 7.83 8.34 8.34" />
      </motion.g>
    </svg>
  );
}

export const Clover = createEnhancedIcon(OriginalClover, {"name":"Clover","mechanic":"wave","profile":"travel","director":{"accent":"wave","anchor":[12,20],"vector":[3,3],"duration":0.772,"intensity":1.073,"complexity":1.0379}});
