"use client";

// Auto-generated enhanced copy. src/icons/CheckCircle.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCheckCircle({
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
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <motion.path
          variants={{
            rest: { pathLength: 1, scale: 1 },
            confirm: {
              pathLength: [0, 1],
              scale: [1, 1.15, 1],
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
          d="m9 11 3 3L22 4"
        />
      </motion.g>
    </svg>
  );
}

export const CheckCircle = createEnhancedIcon(OriginalCheckCircle, {"name":"CheckCircle","mechanic":"confirm","profile":"reveal","director":{"accent":"confirm","anchor":[9.54,8],"vector":[3,3],"duration":0.568,"intensity":1.017,"complexity":2.0249}});
