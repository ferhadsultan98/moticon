"use client";

// Auto-generated enhanced copy. src/icons/Activity.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalActivity({
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
      <motion.path
        initial="rest" animate={force && !reduced ? "pulse" : "rest"}
        whileHover={reduced ? undefined : "pulse"}
        variants={{
          rest: { pathLength: 1, opacity: 1 },
          pulse: {
            pathLength: [0, 1, 1],
            opacity: [0.6, 1, 1],
            transition: { duration: 0.68, ease: "easeOut", times: [0, 0.85, 1] },
          },
        }}
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      />
    </svg>
  );
}

export const Activity = createEnhancedIcon(OriginalActivity, {"name":"Activity","mechanic":"pulse","profile":"energy","director":{"accent":"ripple","anchor":[5,5],"vector":[3,3],"duration":0.764,"intensity":1.059,"complexity":1.0103}});
