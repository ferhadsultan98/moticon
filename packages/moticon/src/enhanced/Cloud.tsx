"use client";

// Auto-generated enhanced copy. src/icons/Cloud.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCloud({
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
        initial="rest" animate={force && !reduced ? "drift" : "rest"}
        whileHover={reduced ? undefined : "drift"}
        variants={{
          rest: { x: 0 },
          drift: { x: [0, 3, -1, 0], transition: { duration: 1, ease: "easeInOut" } },
        }}
        d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
      />
    </svg>
  );
}

export const Cloud = createEnhancedIcon(OriginalCloud, {"name":"Cloud","mechanic":"drift","profile":"travel","director":{"accent":"trail","anchor":[5.39,5.19],"vector":[3,3],"duration":1.05,"intensity":1.053,"complexity":1.0104}});
