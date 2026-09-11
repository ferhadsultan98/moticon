"use client";

// Auto-generated enhanced copy. src/icons/Landmark.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalLandmark({
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
      <motion.g initial="rest" animate={force && !reduced ? "stand" : "rest"} whileHover={reduced ? undefined : "stand"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"
        />
        <path d="M3 22h18" />
        <motion.path
          variants={{
            rest: { scaleY: 1 },
            stand: { scaleY: [0, 1], transition: { duration: 0.35, ease: "easeOut", delay: 0 } },
          }}
          style={{ originX: "6px", originY: "18px" }}
          d="M6 18v-7"
        />
        <motion.path
          variants={{
            rest: { scaleY: 1 },
            stand: { scaleY: [0, 1], transition: { duration: 0.35, ease: "easeOut", delay: 0.06 } },
          }}
          style={{ originX: "10px", originY: "18px" }}
          d="M10 18v-7"
        />
        <motion.path
          variants={{
            rest: { scaleY: 1 },
            stand: { scaleY: [0, 1], transition: { duration: 0.35, ease: "easeOut", delay: 0.12 } },
          }}
          style={{ originX: "14px", originY: "18px" }}
          d="M14 18v-7"
        />
        <motion.path
          variants={{
            rest: { scaleY: 1 },
            stand: { scaleY: [0, 1], transition: { duration: 0.35, ease: "easeOut", delay: 0.18 } },
          }}
          style={{ originX: "18px", originY: "18px" }}
          d="M18 18v-7"
        />
      </motion.g>
    </svg>
  );
}

export const Landmark = createEnhancedIcon(OriginalLandmark, {"name":"Landmark","mechanic":"stand","profile":"precision","director":{"accent":"spark","anchor":[6,18],"vector":[3,3],"duration":0.534,"intensity":0.91,"complexity":5.061}});
