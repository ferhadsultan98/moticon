"use client";

// Auto-generated enhanced copy. src/icons/Box.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBox({
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
      <motion.g initial="rest" animate={force && !reduced ? "open" : "rest"} whileHover={reduced ? undefined : "open"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        />

        <motion.path
          style={{ transformOrigin: "12px 7px" }}
          variants={{
            rest: { y: 0, scaleY: 1 },
            open: {
              y: [0, -1.4, -0.9, -1.05],
              scaleY: [1, 1.06, 1.01, 1.03],
              transition: { duration: 0.44, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="m3.3 7 8.7 5 8.7-5"
        />
        <path d="M12 22V12" />
      </motion.g>
    </svg>
  );
}

export const Box = createEnhancedIcon(OriginalBox, {"name":"Box","mechanic":"open","profile":"reveal","director":{"accent":"hinge","anchor":[5,5],"vector":[3,-1.4],"duration":0.472,"intensity":1.016,"complexity":2.0304}});
