"use client";

// Auto-generated enhanced copy. src/icons/Anchor.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalAnchor({
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
        style={{ transformOrigin: "12px 4px" }}
        initial="rest" animate={force && !reduced ? "sway" : "rest"}
        whileHover={reduced ? undefined : "sway"}
        variants={{
          rest: { rotate: 0 },
          sway: {
            rotate: [0, 7, -8, 5, -2.5, 0],
            transition: { duration: 0.78, ease: "easeInOut", times: [0, 0.22, 0.48, 0.7, 0.87, 1] },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 6v16" />
        <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
        <path d="M9 11h6" />
        <circle cx="12" cy="4" r="2" />
      </motion.g>
    </svg>
  );
}

export const Anchor = createEnhancedIcon(OriginalAnchor, {"name":"Anchor","mechanic":"sway","profile":"sway","director":{"accent":"hinge","anchor":[6.5,6.83],"vector":[3,3],"duration":0.772,"intensity":1.075,"complexity":1.0342}});
