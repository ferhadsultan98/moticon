"use client";

// Auto-generated enhanced copy. src/icons/ChevronDown.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalChevronDown({
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
        initial="rest" animate={force && !reduced ? "drop" : "rest"}
        whileHover={reduced ? undefined : "drop"}
        variants={{
          rest: { y: 0 },
          drop: {
            y: [0, 3.6, 2.9, 3.15],
            transition: { duration: 0.34, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
          },
        }}
        d="m6 9 6 6 6-6"
      />
    </svg>
  );
}

export const ChevronDown = createEnhancedIcon(OriginalChevronDown, {"name":"ChevronDown","mechanic":"drop","profile":"travel","director":{"accent":"ripple","anchor":[6,7.5],"vector":[3,3.6],"duration":0.38,"intensity":1.054,"complexity":1.0139}});
