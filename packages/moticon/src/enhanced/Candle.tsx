"use client";

// Auto-generated enhanced copy. src/icons/Candle.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCandle({
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
      <motion.g initial="rest" animate={force && !reduced ? "flicker" : "rest"} whileHover={reduced ? undefined : "flicker"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect x="8" y="9" width="8" height="12" rx="1" />
        <path d="M12 9V7" />
        <motion.path
          d="M12 7c1.5-1 2-2.2 0-4-2 1.8-1.5 3-0 4Z"
          fill="transparent"
          style={{ originX: "12px", originY: "7px" }}
          variants={{
            rest: { scaleY: 1, skewX: 0, opacity: 1 },
            flicker: {
              scaleY: [1, 1.25, 0.9, 1.15, 1],
              skewX: [0, -8, 6, -4, 0],
              opacity: [1, 0.7, 1, 0.85, 1],
              transition: { duration: 0.7, ease: "easeInOut", repeat: 2 },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}

export const Candle = createEnhancedIcon(OriginalCandle, {"name":"Candle","mechanic":"flicker","profile":"energy","director":{"accent":"glow","anchor":[12,7],"vector":[3,3],"duration":0.868,"intensity":1.019,"complexity":2.0278}});
