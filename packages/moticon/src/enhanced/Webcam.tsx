"use client";

// Auto-generated enhanced copy. src/icons/Webcam.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalWebcam({
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
      <motion.g initial="rest" animate={force && !reduced ? "capture" : "rest"} whileTap={reduced ? undefined : "capture"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="10" r="8" />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            capture: { scale: [1, 0.5, 1], transition: { duration: 0.25, ease: "easeOut" } },
          }}
          cx="12"
          cy="10"
          r="3"
        />
        <path d="M7 22h10" />
        <path d="M12 22v-4" />
      </motion.g>
    </svg>
  );
}

export const Webcam = createEnhancedIcon(OriginalWebcam, {"name":"Webcam","mechanic":"capture","profile":"reveal","director":{"accent":"confirm","anchor":[9.5,19],"vector":[3,3],"duration":0.418,"intensity":1.013,"complexity":2.0228}});
