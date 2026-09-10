"use client";

// Auto-generated enhanced copy. src/icons/Swing.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSwing({
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
      <motion.g initial="rest" animate={force && !reduced ? "swing" : "rest"} whileHover={reduced ? undefined : "swing"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3 21 6 4" />
        <path d="M21 21 18 4" />
        <path d="M4.5 12h15" />
        <motion.g
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            swing: {
              rotate: [0, 22, -22, 15, -10, 0],
              transition: { duration: 1.3, ease: "easeInOut" },
            },
          }}
        >
          <path d="M8 12v6" />
          <path d="M16 12v6" />
          <rect x="7" y="18" width="10" height="2.5" rx="1" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const Swing = createEnhancedIcon(OriginalSwing, {"name":"Swing","mechanic":"swing","profile":"sway","director":{"accent":"hinge","anchor":[12,12],"vector":[3,3],"duration":1.05,"intensity":1.042,"complexity":2.0526}});
