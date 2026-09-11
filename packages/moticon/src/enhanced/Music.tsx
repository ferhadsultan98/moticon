"use client";

// Auto-generated enhanced copy. src/icons/Music.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMusic({
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
      <motion.g initial="rest" animate={force && !reduced ? "bob" : "rest"} whileHover={reduced ? undefined : "bob"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M9 18V5l12-2v13" />
        <motion.circle
          style={{ originX: "6px", originY: "18px" }}
          variants={{
            rest: { y: 0 },
            bob: { y: [0, -2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          cx="6"
          cy="18"
          r="3"
        />
        <motion.circle
          style={{ originX: "18px", originY: "16px" }}
          variants={{
            rest: { y: 0 },
            bob: { y: [0, -2, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.12 } },
          }}
          cx="18"
          cy="16"
          r="3"
        />
      </motion.g>
    </svg>
  );
}

export const Music = createEnhancedIcon(OriginalMusic, {"name":"Music","mechanic":"bob","profile":"travel","director":{"accent":"ripple","anchor":[6,18],"vector":[3,-2],"duration":0.564,"intensity":0.964,"complexity":3.0113}});
