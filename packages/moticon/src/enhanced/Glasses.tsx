"use client";

// Auto-generated enhanced copy. src/icons/Glasses.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalGlasses({
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
      <motion.g initial="rest" animate={force && !reduced ? "peek" : "rest"} whileHover={reduced ? undefined : "peek"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
        <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
        <motion.g
          variants={{
            rest: { y: 0, rotate: 0 },
            peek: { y: 2, rotate: -3, transition: { duration: 0.3, ease: "easeOut" } },
          }}
        >
          <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
          <circle cx="6" cy="15" r="4" />
          <circle cx="18" cy="15" r="4" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const Glasses = createEnhancedIcon(OriginalGlasses, {"name":"Glasses","mechanic":"peek","profile":"reveal","director":{"accent":"hinge","anchor":[6.03,5.55],"vector":[3,3],"duration":0.472,"intensity":1.026,"complexity":2.0338}});
