"use client";

// Auto-generated enhanced copy. src/icons/Shell.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalShell({
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
        initial="rest" animate={force && !reduced ? "unwind" : "rest"}
        whileHover={reduced ? undefined : "unwind"}
        variants={{
          rest: { pathLength: 1 },
          unwind: { pathLength: [0, 1], transition: { duration: 0.7, ease: "easeInOut" } },
        }}
        d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
      />
    </svg>
  );
}

export const Shell = createEnhancedIcon(OriginalShell, {"name":"Shell","mechanic":"unwind","profile":"orbit","director":{"accent":"orbit","anchor":[5,5],"vector":[3,3],"duration":0.864,"intensity":1.054,"complexity":1.0127}});
