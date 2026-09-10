"use client";

// Auto-generated enhanced copy. src/icons/Plus.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPlus({
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
        initial="rest" animate={force && !reduced ? "pop" : "rest"}
        whileTap={reduced ? undefined : "pop"}
        variants={{
          rest: { scale: 1 },
          pop: { scale: [1, 1.3, 1], transition: { duration: 0.25, ease: "backOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </motion.g>
    </svg>
  );
}

export const Plus = createEnhancedIcon(OriginalPlus, {"name":"Plus","mechanic":"pop","profile":"impact","director":{"accent":"burst","anchor":[12,12],"vector":[3,3],"duration":0.418,"intensity":1.056,"complexity":1.0255}});
