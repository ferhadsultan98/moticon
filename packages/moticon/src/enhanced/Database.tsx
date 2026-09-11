"use client";

// Auto-generated enhanced copy. src/icons/Database.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalDatabase({
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
      <motion.g initial="rest" animate={force && !reduced ? "sync" : "rest"} whileHover={reduced ? undefined : "sync"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.ellipse
          style={{ originX: "12px", originY: "5px" }}
          variants={{
            rest: { scaleX: 1 },
            sync: { scaleX: [1, 0.85, 1], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          cx="12"
          cy="5"
          rx="9"
          ry="3"
        />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </motion.g>
    </svg>
  );
}

export const Database = createEnhancedIcon(OriginalDatabase, {"name":"Database","mechanic":"sync","profile":"flow","director":{"accent":"flow","anchor":[12,5],"vector":[3,3],"duration":0.568,"intensity":1.007,"complexity":2.029}});
