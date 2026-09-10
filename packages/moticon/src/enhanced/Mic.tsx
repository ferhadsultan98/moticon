"use client";

// Auto-generated enhanced copy. src/icons/Mic.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMic({
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
      <motion.g initial="rest" animate={force && !reduced ? "speak" : "rest"} whileTap={reduced ? undefined : "speak"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 19v3" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <motion.rect
          style={{ originX: "12px", originY: "8.5px" }}
          variants={{
            rest: { scaleY: 1 },
            speak: {
              scaleY: [1, 1.08, 0.95, 1.05, 1],
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          x="9"
          y="2"
          width="6"
          height="13"
          rx="3"
        />
      </motion.g>
    </svg>
  );
}

export const Mic = createEnhancedIcon(OriginalMic, {"name":"Mic","mechanic":"speak","profile":"oscillate","director":{"accent":"wave","anchor":[12,8.5],"vector":[3,3],"duration":0.668,"intensity":1.013,"complexity":2.025}});
