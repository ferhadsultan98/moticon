"use client";

// Auto-generated enhanced copy. src/icons/Syringe.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSyringe({
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
        initial="rest" animate={force && !reduced ? "inject" : "rest"}
        whileTap={reduced ? undefined : "inject"}
        variants={{
          rest: { x: 0, y: 0 },
          inject: { x: [0, -3, 0], y: [0, 3, 0], transition: { duration: 0.4, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m18 2 4 4" />
        <path d="m17 7 3-3" />
        <path
          fill="transparent"
          d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
        />
        <path d="m9 11 4 4" />
        <path d="m5 19-3 3" />
        <path d="m14 4 6 6" />
      </motion.g>
    </svg>
  );
}

export const Syringe = createEnhancedIcon(OriginalSyringe, {"name":"Syringe","mechanic":"inject","profile":"impact","director":{"accent":"impact","anchor":[9.19,6.33],"vector":[-3,3],"duration":0.584,"intensity":1.093,"complexity":1.0653}});
