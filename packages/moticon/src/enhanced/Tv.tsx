"use client";

// Auto-generated enhanced copy. src/icons/Tv.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalTv({
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
      <motion.g initial="rest" animate={force && !reduced ? "flicker" : "rest"} whileTap={reduced ? undefined : "flicker"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.rect
          variants={{
            rest: { opacity: 1, scaleY: 1 },
            flicker: {
              opacity: [1, 0.3, 1, 0.5, 1],
              scaleY: [1, 0.9, 1],
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
          style={{ originX: "12px", originY: "14.5px" }}
          width="20"
          height="15"
          x="2"
          y="7"
          rx="2"
        />
        <path d="m17 2-5 5-5-5" />
      </motion.g>
    </svg>
  );
}

export const Tv = createEnhancedIcon(OriginalTv, {"name":"Tv","mechanic":"flicker","profile":"energy","director":{"accent":"glow","anchor":[12,14.5],"vector":[3,3],"duration":0.564,"intensity":1.01,"complexity":2.0155}});
