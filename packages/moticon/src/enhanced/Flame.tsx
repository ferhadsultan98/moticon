"use client";

// Auto-generated enhanced copy. src/icons/Flame.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalFlame({
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
        style={{ originX: "12px", originY: "21px" }}
        initial="rest" animate={force && !reduced ? "flicker" : "rest"}
        whileHover={reduced ? undefined : "flicker"}
        variants={{
          rest: { scaleY: 1, scaleX: 1, skewX: 0 },
          flicker: {
            scaleY: [1, 1.08, 0.97, 1.05, 1],
            scaleX: [1, 0.96, 1.03, 0.98, 1],
            skewX: [0, 2, -2, 1, 0],
            transition: { duration: 0.7, ease: "easeInOut" },
          },
        }}
        d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
      />
    </svg>
  );
}

export const Flame = createEnhancedIcon(OriginalFlame, {"name":"Flame","mechanic":"flicker","profile":"energy","director":{"accent":"glow","anchor":[12,21],"vector":[3,3],"duration":0.864,"intensity":1.056,"complexity":1.0168}});
