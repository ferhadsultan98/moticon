"use client";

// Auto-generated enhanced copy. src/icons/MailOpen.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMailOpen({
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
      <motion.g initial="rest" animate={force && !reduced ? "peek" : "rest"} whileHover={reduced ? undefined : "peek"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
        />

        <motion.path
          style={{ transformOrigin: "12px 10px" }}
          variants={{
            rest: { y: 0, scaleY: 1 },
            peek: {
              y: [0, -2.4, -1.9, -2.1],
              scaleY: [1, 0.94, 1.01, 0.98],
              transition: { duration: 0.36, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
        />
      </motion.g>
    </svg>
  );
}

export const MailOpen = createEnhancedIcon(OriginalMailOpen, {"name":"MailOpen","mechanic":"peek","profile":"reveal","director":{"accent":"hinge","anchor":[5,5],"vector":[3,-2.4],"duration":0.418,"intensity":1.01,"complexity":2.0286}});
