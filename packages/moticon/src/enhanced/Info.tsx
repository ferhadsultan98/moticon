"use client";

// Auto-generated enhanced copy. src/icons/Info.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalInfo({
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
        initial="rest" animate={force && !reduced ? "tilt" : "rest"}
        whileTap={reduced ? undefined : "tilt"}
        variants={{
          rest: { rotate: 0, scale: 1 },
          tilt: { rotate: [0, -10, 0], scale: [1, 1.08, 1], transition: { duration: 0.35, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </motion.g>
    </svg>
  );
}

export const Info = createEnhancedIcon(OriginalInfo, {"name":"Info","mechanic":"tilt","profile":"sway","director":{"accent":"hinge","anchor":[12,12],"vector":[3,3],"duration":0.518,"intensity":1.067,"complexity":1.0237}});
