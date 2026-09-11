"use client";

// Auto-generated enhanced copy. src/icons/Navigation.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalNavigation({
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
      <motion.polygon
        style={{ originX: "12px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "point" : "rest"}
        whileHover={reduced ? undefined : "point"}
        variants={{
          rest: { rotate: 0 },
          point: { rotate: [0, -25, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
        points="3 11 22 2 13 21 11 13 3 11"
      />
    </svg>
  );
}

export const Navigation = createEnhancedIcon(OriginalNavigation, {"name":"Navigation","mechanic":"point","profile":"precision","director":{"accent":"scan","anchor":[12,12],"vector":[3,3],"duration":0.66,"intensity":1.045,"complexity":1.0055}});
