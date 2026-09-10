"use client";

// Auto-generated enhanced copy. src/icons/Mountain.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMountain({
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
        initial="rest" animate={force && !reduced ? "reveal" : "rest"}
        whileHover={reduced ? undefined : "reveal"}
        variants={{
          rest: { pathLength: 1, pathOffset: 0 },
          reveal: {
            pathLength: [0, 1],
            pathOffset: [0, 0],
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        d="m8 3 4 8 5-5 5 15H2L8 3z"
      />
    </svg>
  );
}

export const Mountain = createEnhancedIcon(OriginalMountain, {"name":"Mountain","mechanic":"reveal","profile":"reveal","director":{"accent":"glow","anchor":[12,12],"vector":[0,-3],"duration":0.664,"intensity":0.72,"complexity":1.0107}});
