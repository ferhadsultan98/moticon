"use client";

// Auto-generated enhanced copy. src/icons/HelpCircle.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalHelpCircle({
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
        initial="rest" animate={force && !reduced ? "wonder" : "rest"}
        whileTap={reduced ? undefined : "wonder"}
        variants={{
          rest: { rotate: 0 },
          wonder: { rotate: [0, -8, 8, 0], transition: { duration: 0.4, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </motion.g>
    </svg>
  );
}

export const HelpCircle = createEnhancedIcon(OriginalHelpCircle, {"name":"HelpCircle","mechanic":"wonder","profile":"energy","director":{"accent":"spark","anchor":[12,12],"vector":[3,3],"duration":0.568,"intensity":1.06,"complexity":1.0247}});
