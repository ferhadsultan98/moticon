"use client";

// Auto-generated enhanced copy. src/icons/Wine.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalWine({
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
        style={{ originX: "12px", originY: "22px" }}
        initial="rest" animate={force && !reduced ? "swirl" : "rest"}
        whileHover={reduced ? undefined : "swirl"}
        variants={{
          rest: { rotate: 0 },
          swirl: { rotate: [0, -4, 4, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M8 22h8" />
        <path d="M7 10h10" />
        <path d="M12 15v7" />
        <path
          fill="transparent"
          d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
        />
      </motion.g>
    </svg>
  );
}

export const Wine = createEnhancedIcon(OriginalWine, {"name":"Wine","mechanic":"swirl","profile":"orbit","director":{"accent":"orbit","anchor":[12,22],"vector":[3,3],"duration":0.676,"intensity":1.076,"complexity":1.0435}});
