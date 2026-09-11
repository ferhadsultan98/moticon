"use client";

// Auto-generated enhanced copy. src/icons/Minus.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMinus({
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
        style={{ originX: "12px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "pop" : "rest"}
        whileTap={reduced ? undefined : "pop"}
        variants={{
          rest: { scaleX: 1 },
          pop: { scaleX: [1, 0.6, 1], transition: { duration: 0.25, ease: "easeOut" } },
        }}
        d="M5 12h14"
      />
    </svg>
  );
}

export const Minus = createEnhancedIcon(OriginalMinus, {"name":"Minus","mechanic":"pop","profile":"impact","director":{"accent":"burst","anchor":[12,12],"vector":[3,3],"duration":0.414,"intensity":1.049,"complexity":1.0117}});
