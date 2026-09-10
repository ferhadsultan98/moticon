"use client";

// Auto-generated enhanced copy. src/icons/Salad.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSalad({
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
      <motion.g initial="rest" animate={force && !reduced ? "toss" : "rest"} whileHover={reduced ? undefined : "toss"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M7 21h10" />
        <path
          fill="transparent"
          d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
        />
        <motion.path
          style={{ originX: "12px", originY: "9px" }}
          variants={{
            rest: { rotate: 0 },
            toss: { rotate: [0, -8, 6, 0], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
        />
        <path d="m13 12 4-4" />
        <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
      </motion.g>
    </svg>
  );
}

export const Salad = createEnhancedIcon(OriginalSalad, {"name":"Salad","mechanic":"toss","profile":"travel","director":{"accent":"trail","anchor":[12,9],"vector":[3,-5],"duration":0.68,"intensity":1.03,"complexity":2.0536}});
