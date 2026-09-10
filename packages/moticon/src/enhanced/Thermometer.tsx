"use client";

// Auto-generated enhanced copy. src/icons/Thermometer.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalThermometer({
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
        initial="rest" animate={force && !reduced ? "rise" : "rest"}
        whileHover={reduced ? undefined : "rise"}
        variants={{
          rest: { scaleY: 1 },
          rise: { scaleY: 1.06, transition: { duration: 0.4, ease: "easeOut" } },
        }}
        d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}

export const Thermometer = createEnhancedIcon(OriginalThermometer, {"name":"Thermometer","mechanic":"rise","profile":"travel","director":{"accent":"trail","anchor":[12,21],"vector":[3,-5],"duration":0.564,"intensity":1.051,"complexity":1.0153}});
