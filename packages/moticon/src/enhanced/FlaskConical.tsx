"use client";

// Auto-generated enhanced copy. src/icons/FlaskConical.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalFlaskConical({
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
      <motion.g initial="rest" animate={force && !reduced ? "swirl" : "rest"} whileHover={reduced ? undefined : "swirl"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
        />
        <path d="M8.5 2h7" />
        <motion.path
          variants={{
            rest: { x: 0 },
            swirl: { x: [0, 2, -2, 0], transition: { duration: 0.6, ease: "easeInOut" } },
          }}
          d="M6.453 15h11.094"
        />
      </motion.g>
    </svg>
  );
}

export const FlaskConical = createEnhancedIcon(OriginalFlaskConical, {"name":"FlaskConical","mechanic":"swirl","profile":"orbit","director":{"accent":"orbit","anchor":[5.03,5],"vector":[2,3],"duration":0.772,"intensity":1.029,"complexity":2.0307}});
