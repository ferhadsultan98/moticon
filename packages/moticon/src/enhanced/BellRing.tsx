"use client";

// Auto-generated enhanced copy. src/icons/BellRing.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBellRing({
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
      <motion.g initial="rest" animate={force && !reduced ? "ring" : "rest"} whileHover={reduced ? undefined : "ring"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />

        <motion.g
          style={{ transformOrigin: "12px 4px" }}
          variants={{
            rest: { rotate: 0, y: 0 },
            ring: {
              rotate: [0, -9, 10, -6.5, 3.5, -1.5, 0],
              y: [0, -0.3, 0, 0, 0, 0, 0],
              transition: { duration: 0.72, ease: "easeInOut", times: [0, 0.12, 0.3, 0.5, 0.68, 0.85, 1] },
            },
          }}
        >
          <path
            fill="transparent"
            d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
          />
        </motion.g>

        <motion.path
          style={{ transformOrigin: "22px 8px" }}
          variants={{
            rest: { scale: 1, opacity: 1 },
            ring: {
              scale: [1, 1.35, 1.05, 1.15, 1],
              opacity: [1, 1, 0.7, 1, 1],
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.05, times: [0, 0.3, 0.55, 0.78, 1] },
            },
          }}
          d="M22 8c0-2.3-.8-4.3-2-6"
        />
        <motion.path
          style={{ transformOrigin: "2px 8px" }}
          variants={{
            rest: { scale: 1, opacity: 1 },
            ring: {
              scale: [1, 1.35, 1.05, 1.15, 1],
              opacity: [1, 1, 0.7, 1, 1],
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.05, times: [0, 0.3, 0.55, 0.78, 1] },
            },
          }}
          d="M4 2C2.8 3.7 2 5.7 2 8"
        />
      </motion.g>
    </svg>
  );
}

export const BellRing = createEnhancedIcon(OriginalBellRing, {"name":"BellRing","mechanic":"ring","profile":"oscillate","director":{"accent":"echo","anchor":[5,6.86],"vector":[3,-0.3],"duration":0.676,"intensity":0.948,"complexity":4.0446}});
