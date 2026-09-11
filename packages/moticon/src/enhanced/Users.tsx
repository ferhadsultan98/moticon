"use client";

// Auto-generated enhanced copy. src/icons/Users.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalUsers({
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
      <motion.g initial="rest" animate={force && !reduced ? "huddle" : "rest"} whileHover={reduced ? undefined : "huddle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.g
          variants={{
            rest: { x: 0 },
            huddle: {
              x: [0, 0.9, 0.5, 0.7],
              transition: { duration: 0.42, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </motion.g>

        <motion.g
          variants={{
            rest: { x: 0 },
            huddle: {
              x: [0, -0.9, -0.5, -0.7],
              transition: { duration: 0.42, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
        >
          <path d="M16 3.128a4 4 0 0 1 0 7.744" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const Users = createEnhancedIcon(OriginalUsers, {"name":"Users","mechanic":"huddle","profile":"reveal","director":{"accent":"stretch","anchor":[5.92,5],"vector":[0.9,3],"duration":0.472,"intensity":0.981,"complexity":3.0353}});
