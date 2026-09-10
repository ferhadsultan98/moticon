"use client";

// Auto-generated enhanced copy. src/icons/XCircle.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalXCircle({
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
        style={{ originX: "12px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "reject" : "rest"}
        whileTap={reduced ? undefined : "reject"}
        variants={{
          rest: { scale: 1 },
          reject: { scale: [1, 0.85, 1], transition: { duration: 0.25, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </motion.g>
    </svg>
  );
}

export const XCircle = createEnhancedIcon(OriginalXCircle, {"name":"XCircle","mechanic":"reject","profile":"impact","director":{"accent":"impact","anchor":[12,12],"vector":[3,3],"duration":0.418,"intensity":1.058,"complexity":1.0211}});
