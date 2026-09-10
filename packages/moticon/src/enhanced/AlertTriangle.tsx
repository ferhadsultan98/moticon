"use client";

// Auto-generated enhanced copy. src/icons/AlertTriangle.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalAlertTriangle({
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
        style={{ transformOrigin: "12px 21px" }}
        initial="rest" animate={force && !reduced ? "shake" : "rest"}
        whileHover={reduced ? undefined : "shake"}
        variants={{
          rest: { rotate: 0, y: 0 },
          shake: {
            rotate: [0, -7, 8, -5.5, 3, -1.5, 0],
            y: [0, -0.3, 0, 0, 0, 0, 0],
            transition: { duration: 0.68, ease: "easeInOut", times: [0, 0.12, 0.3, 0.5, 0.68, 0.85, 1] },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </motion.g>
    </svg>
  );
}

export const AlertTriangle = createEnhancedIcon(OriginalAlertTriangle, {"name":"AlertTriangle","mechanic":"shake","profile":"oscillate","director":{"accent":"spark","anchor":[5.83,5.92],"vector":[3,-0.3],"duration":0.672,"intensity":1.059,"complexity":1.0365}});
