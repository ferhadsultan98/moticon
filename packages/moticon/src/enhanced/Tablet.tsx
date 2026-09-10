"use client";

// Auto-generated enhanced copy. src/icons/Tablet.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalTablet({
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
        initial="rest" animate={force && !reduced ? "rotate" : "rest"}
        whileHover={reduced ? undefined : "rotate"}
        variants={{
          rest: { rotate: 0 },
          rotate: { rotate: 90, transition: { duration: 0.4, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <line x1="12" x2="12.01" y1="18" y2="18" />
      </motion.g>
    </svg>
  );
}

export const Tablet = createEnhancedIcon(OriginalTablet, {"name":"Tablet","mechanic":"rotate","profile":"orbit","director":{"accent":"orbit","anchor":[12,12],"vector":[3,3],"duration":0.56,"intensity":1.051,"complexity":1.002}});
