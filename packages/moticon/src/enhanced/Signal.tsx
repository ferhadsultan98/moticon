"use client";

// Auto-generated enhanced copy. src/icons/Signal.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSignal({
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
      <motion.g initial="rest" animate={force && !reduced ? "bars" : "rest"} whileHover={reduced ? undefined : "bars"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2 20h.01" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            bars: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="M7 20v-4"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            bars: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.08 } },
          }}
          d="M12 20v-8"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            bars: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.16 } },
          }}
          d="M17 20V8"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            bars: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.24 } },
          }}
          d="M22 4v16"
        />
      </motion.g>
    </svg>
  );
}

export const Signal = createEnhancedIcon(OriginalSignal, {"name":"Signal","mechanic":"bars","profile":"reveal","director":{"accent":"draw","anchor":[12,16.8],"vector":[3,3],"duration":0.38,"intensity":0.907,"complexity":5.0558}});
