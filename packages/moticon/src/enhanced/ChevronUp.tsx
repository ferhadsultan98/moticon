"use client";

// Auto-generated enhanced copy. src/icons/ChevronUp.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalChevronUp({
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
        initial="rest" animate={force && !reduced ? "rise" : "rest"}
        whileHover={reduced ? undefined : "rise"}
        variants={{
          rest: { y: 0 },
          rise: {
            y: [0, -3.6, -2.9, -3.15],
            transition: { duration: 0.34, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
          },
        }}
        d="m18 15-6-6-6 6"
      />
    </svg>
  );
}

export const ChevronUp = createEnhancedIcon(OriginalChevronUp, {"name":"ChevronUp","mechanic":"rise","profile":"travel","director":{"accent":"trail","anchor":[18,10.5],"vector":[3,-3.6],"duration":0.38,"intensity":1.057,"complexity":1.0142}});
