"use client";

// Auto-generated enhanced copy. src/icons/Check.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCheck({
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
        fill="transparent"
        initial="rest" animate={force && !reduced ? "draw" : "rest"}
        whileTap={reduced ? undefined : "draw"}
        variants={{
          rest: { pathLength: 1, opacity: 1 },
          draw: {
            pathLength: [0, 1],
            opacity: [1, 1],
            transition: { duration: 0.35, ease: "easeOut" },
          },
        }}
        d="M20 6 9 17l-5-5"
      />
    </svg>
  );
}

export const Check = createEnhancedIcon(OriginalCheck, {"name":"Check","mechanic":"draw","profile":"reveal","director":{"accent":"confirm","anchor":[12,12],"vector":[2,-2],"duration":0.514,"intensity":0.76,"complexity":1.0179}});
