"use client";

// Auto-generated enhanced copy. src/icons/Pause.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPause({
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
      <motion.g initial="rest" animate={force && !reduced ? "pause" : "rest"} whileTap={reduced ? undefined : "pause"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.rect
          style={{ originX: "16.5px", originY: "12px" }}
          variants={{
            rest: { scaleY: 1 },
            pause: { scaleY: 0.75, transition: { duration: 0.2, ease: "easeOut" } },
          }}
          x="14"
          y="3"
          width="5"
          height="18"
          rx="1"
        />
        <motion.rect
          style={{ originX: "7.5px", originY: "12px" }}
          variants={{
            rest: { scaleY: 1 },
            pause: { scaleY: 0.75, transition: { duration: 0.2, ease: "easeOut" } },
          }}
          x="5"
          y="3"
          width="5"
          height="18"
          rx="1"
        />
      </motion.g>
    </svg>
  );
}

export const Pause = createEnhancedIcon(OriginalPause, {"name":"Pause","mechanic":"pause","profile":"impact","director":{"accent":"spark","anchor":[16.5,12],"vector":[3,3],"duration":0.38,"intensity":0.96,"complexity":3.0051}});
