"use client";

// Auto-generated enhanced copy. src/icons/Shrink.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalShrink({
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
      <motion.g initial="rest" animate={force && !reduced ? "collapse" : "rest"} whileHover={reduced ? undefined : "collapse"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            collapse: { x: -1, y: -1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"
        />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            collapse: { x: 1, y: -1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M9 19.8V15m0 0H4.2M9 15l-6 6"
        />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            collapse: { x: -1, y: 1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M15 4.2V9m0 0h4.8M15 9l6-6"
        />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            collapse: { x: 1, y: 1, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M9 4.2V9m0 0H4.2M9 9 3 3"
        />
      </motion.g>
    </svg>
  );
}

export const Shrink = createEnhancedIcon(OriginalShrink, {"name":"Shrink","mechanic":"collapse","profile":"reveal","director":{"accent":"stretch","anchor":[7.87,6.07],"vector":[3,3],"duration":0.426,"intensity":0.893,"complexity":5.0423}});
