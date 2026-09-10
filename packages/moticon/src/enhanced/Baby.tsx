"use client";

// Auto-generated enhanced copy. src/icons/Baby.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBaby({
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
      <motion.g initial="rest" animate={force && !reduced ? "coo" : "rest"} whileHover={reduced ? undefined : "coo"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />

        <motion.path
          d="M15 12h.01"
          style={{ transformOrigin: "15px 12px" }}
          variants={{
            rest: { scaleY: 1 },
            coo: {
              scaleY: [1, 0.1, 1],
              transition: { duration: 0.5, ease: "easeInOut", times: [0, 0.5, 1] },
            },
          }}
        />
        <motion.path
          d="M9 12h.01"
          style={{ transformOrigin: "9px 12px" }}
          variants={{
            rest: { scaleY: 1 },
            coo: {
              scaleY: [1, 0.1, 1],
              transition: { duration: 0.5, ease: "easeInOut", times: [0, 0.5, 1] },
            },
          }}
        />

        <motion.path
          variants={{
            rest: { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" },
            coo: { d: "M9.5 16.2c.9.7 1.6 1 2.5 1s1.6-.3 2.5-1" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"
        />
      </motion.g>
    </svg>
  );
}

export const Baby = createEnhancedIcon(OriginalBaby, {"name":"Baby","mechanic":"coo","profile":"oscillate","director":{"accent":"burst","anchor":[5,5.32],"vector":[3,3],"duration":0.526,"intensity":0.939,"complexity":4.0434}});
