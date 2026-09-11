"use client";

// Auto-generated enhanced copy. src/icons/Cross.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCross({
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
      <motion.path
        fill="transparent"
        style={{ originX: "12px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "press" : "rest"}
        whileTap={reduced ? undefined : "press"}
        variants={{
          rest: { scale: 1 },
          press: { scale: [1, 0.85, 1], transition: { duration: 0.35, ease: "easeOut" } },
        }}
        d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"
      />
    </svg>
  );
}

export const Cross = createEnhancedIcon(OriginalCross, {"name":"Cross","mechanic":"press","profile":"impact","director":{"accent":"impact","anchor":[12,12],"vector":[3,3],"duration":0.514,"intensity":1.049,"complexity":1.0144}});
