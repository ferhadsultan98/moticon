"use client";

// Auto-generated enhanced copy. src/icons/Flower2.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalFlower2({
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
      <motion.g initial="rest" animate={force && !reduced ? "sway" : "rest"} whileHover={reduced ? undefined : "sway"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
        <circle cx="12" cy="8" r="2" />
        <motion.path
          style={{ originX: "12px", originY: "22px" }}
          variants={{
            rest: { rotate: 0 },
            sway: { rotate: [0, 4, -3, 0], transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="M12 10v12"
        />
        <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
        <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
      </motion.g>
    </svg>
  );
}

export const Flower2 = createEnhancedIcon(OriginalFlower2, {"name":"Flower2","mechanic":"sway","profile":"sway","director":{"accent":"hinge","anchor":[12,22],"vector":[3,3],"duration":0.776,"intensity":1.027,"complexity":2.0453}});
