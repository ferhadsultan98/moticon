"use client";

// Auto-generated enhanced copy. src/icons/Tent.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalTent({
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
      <motion.g initial="rest" animate={force && !reduced ? "pitch" : "rest"} whileHover={reduced ? undefined : "pitch"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2 21h20" />

        <motion.path
          style={{ transformOrigin: "14px 3px" }}
          variants={{
            rest: { rotate: 0 },
            pitch: {
              rotate: [0, -4.2, -2.5, -3.2],
              transition: { duration: 0.42, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M3.5 21 14 3"
        />
        <motion.path
          style={{ transformOrigin: "10px 3px" }}
          variants={{
            rest: { rotate: 0 },
            pitch: {
              rotate: [0, 4.2, 2.5, 3.2],
              transition: { duration: 0.42, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M20.5 21 10 3"
        />
        <path d="M15.5 21 12 15l-3.5 6" />
      </motion.g>
    </svg>
  );
}

export const Tent = createEnhancedIcon(OriginalTent, {"name":"Tent","mechanic":"pitch","profile":"sway","director":{"accent":"hinge","anchor":[11.07,13.88],"vector":[3,3],"duration":0.526,"intensity":0.993,"complexity":3.0457}});
