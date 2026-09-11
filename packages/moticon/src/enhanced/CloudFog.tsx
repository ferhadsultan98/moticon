"use client";

// Auto-generated enhanced copy. src/icons/CloudFog.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCloudFog({
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
      <motion.g initial="rest" animate={force && !reduced ? "roll" : "rest"} whileHover={reduced ? undefined : "roll"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <motion.path
          variants={{
            rest: { x: 0 },
            roll: { x: [0, 3, 0], transition: { duration: 0.7, ease: "easeInOut" } },
          }}
          d="M16 17H7"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            roll: { x: [0, -3, 0], transition: { duration: 0.7, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M17 21H9"
        />
      </motion.g>
    </svg>
  );
}

export const CloudFog = createEnhancedIcon(OriginalCloudFog, {"name":"CloudFog","mechanic":"roll","profile":"orbit","director":{"accent":"orbit","anchor":[5.85,8.54],"vector":[3,3],"duration":0.872,"intensity":0.974,"complexity":3.0382}});
