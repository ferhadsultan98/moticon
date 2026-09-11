"use client";

// Auto-generated enhanced copy. src/icons/Shield.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalShield({
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
        initial="rest" animate={force && !reduced ? "guard" : "rest"}
        whileHover={reduced ? undefined : "guard"}
        variants={{
          rest: { scale: 1, fill: "rgba(0,0,0,0)" },
          guard: {
            scale: [1, 1.05, 1],
            fill: ["rgba(0,0,0,0)", "rgba(128,128,128,0.15)", "rgba(0,0,0,0)"],
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      />
    </svg>
  );
}

export const Shield = createEnhancedIcon(OriginalShield, {"name":"Shield","mechanic":"guard","profile":"reveal","director":{"accent":"confirm","anchor":[12,12],"vector":[3,3],"duration":0.664,"intensity":1.059,"complexity":1.0125}});
