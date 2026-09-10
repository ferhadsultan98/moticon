"use client";

// Auto-generated enhanced copy. src/icons/Globe.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalGlobe({
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
      <motion.g initial="rest" animate={force && !reduced ? "spin" : "rest"} whileHover={reduced ? undefined : "spin"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { scaleX: 1 },
            spin: { scaleX: [1, 0.2, 1], transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
        />
        <path d="M2 12h20" />
      </motion.g>
    </svg>
  );
}

export const Globe = createEnhancedIcon(OriginalGlobe, {"name":"Globe","mechanic":"spin","profile":"orbit","director":{"accent":"orbit","anchor":[12,12],"vector":[3,3],"duration":0.768,"intensity":1.01,"complexity":2.0259}});
