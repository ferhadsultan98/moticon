"use client";

// Auto-generated enhanced copy. src/icons/Navigation2.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalNavigation2({
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
        initial="rest" animate={force && !reduced ? "spin" : "rest"}
        whileTap={reduced ? undefined : "spin"}
        variants={{
          rest: { rotate: 0 },
          spin: { rotate: 180, transition: { duration: 0.4, ease: "easeInOut" } },
        }}
        points="12 2 19 21 12 17 5 21 12 2"
      />
    </svg>
  );
}

export const Navigation2 = createEnhancedIcon(OriginalNavigation2, {"name":"Navigation2","mechanic":"spin","profile":"orbit","director":{"accent":"orbit","anchor":[12,12],"vector":[3,3],"duration":0.56,"intensity":1.051,"complexity":1.0044}});
