"use client";

// Auto-generated enhanced copy. src/icons/Snowflake.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSnowflake({
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
        initial="rest" animate={force && !reduced ? "spin" : "rest"}
        whileHover={reduced ? undefined : "spin"}
        variants={{
          rest: { rotate: 0 },
          spin: { rotate: 45, transition: { duration: 0.5, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m10 20-1.25-2.5L6 18" />
        <path d="M10 4 8.75 6.5 6 6" />
        <path d="m14 20 1.25-2.5L18 18" />
        <path d="m14 4 1.25 2.5L18 6" />
        <path d="m17 21-3-6h-4" />
        <path d="m17 3-3 6 1.5 3" />
        <path d="M2 12h6.5L10 9" />
        <path d="m20 10-1.5 2 1.5 2" />
        <path d="M22 12h-6.5L14 15" />
        <path d="m4 10 1.5 2L4 14" />
        <path d="m7 21 3-6-1.5-3" />
        <path d="m7 3 3 6h4" />
      </motion.g>
    </svg>
  );
}

export const Snowflake = createEnhancedIcon(OriginalSnowflake, {"name":"Snowflake","mechanic":"spin","profile":"orbit","director":{"accent":"orbit","anchor":[12,12],"vector":[3,3],"duration":0.692,"intensity":1.131,"complexity":1.127}});
