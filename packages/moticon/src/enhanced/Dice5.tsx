"use client";

// Auto-generated enhanced copy. src/icons/Dice5.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalDice5({
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
        initial="rest" animate={force && !reduced ? "roll" : "rest"}
        whileTap={reduced ? undefined : "roll"}
        variants={{
          rest: { rotate: 0 },
          roll: { rotate: 90, transition: { duration: 0.4, ease: "backOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M16 8h.01" />
        <path d="M8 8h.01" />
        <path d="M8 16h.01" />
        <path d="M16 16h.01" />
        <path d="M12 12h.01" />
      </motion.g>
    </svg>
  );
}

export const Dice5 = createEnhancedIcon(OriginalDice5, {"name":"Dice5","mechanic":"roll","profile":"orbit","director":{"accent":"orbit","anchor":[12,12],"vector":[3,3],"duration":0.58,"intensity":1.084,"complexity":1.0518}});
