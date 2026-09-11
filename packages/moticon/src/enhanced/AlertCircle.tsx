"use client";

// Auto-generated enhanced copy. src/icons/AlertCircle.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalAlertCircle({
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
      <motion.g initial="rest" animate={force && !reduced ? "alert" : "rest"} whileHover={reduced ? undefined : "alert"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.circle
          cx="12"
          cy="12"
          r="10"
          style={{ transformOrigin: "12px 12px" }}
          variants={{
            rest: { scale: 1 },
            alert: {
              scale: [1, 1.03, 0.99, 1.008, 1],
              transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.24, 0.5, 0.74, 1] },
            },
          }}
        />

        <motion.line
          x1="12"
          x2="12"
          y1="8"
          y2="12"
          style={{ transformOrigin: "12px 8px" }}
          variants={{
            rest: { scaleY: 1, opacity: 1 },
            alert: {
              scaleY: [1, 0.6, 1.05, 1],
              opacity: [1, 0.35, 1, 1],
              transition: { duration: 0.4, ease: "easeOut", times: [0, 0.3, 0.65, 1] },
            },
          }}
        />

        <motion.line
          x1="12"
          x2="12.01"
          y1="16"
          y2="16"
          style={{ transformOrigin: "12px 16px" }}
          variants={{
            rest: { scale: 1, opacity: 1 },
            alert: {
              scale: [1, 1.5, 0.9, 1],
              opacity: [1, 0.3, 1, 1],
              transition: { duration: 0.4, ease: "easeOut", delay: 0.12, times: [0, 0.3, 0.65, 1] },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}

export const AlertCircle = createEnhancedIcon(OriginalAlertCircle, {"name":"AlertCircle","mechanic":"alert","profile":"oscillate","director":{"accent":"echo","anchor":[12,12],"vector":[3,3],"duration":0.51,"intensity":0.908,"complexity":4.0091}});
