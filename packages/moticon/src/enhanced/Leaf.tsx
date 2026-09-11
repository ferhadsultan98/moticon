"use client";

// Auto-generated enhanced copy. src/icons/Leaf.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalLeaf({
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
      <motion.g initial="rest" animate={force && !reduced ? "grow" : "rest"} whileHover={reduced ? undefined : "grow"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            grow: { pathLength: [0, 1], transition: { duration: 0.5, ease: "easeOut" } },
          }}
          d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
        />
      </motion.g>
    </svg>
  );
}

export const Leaf = createEnhancedIcon(OriginalLeaf, {"name":"Leaf","mechanic":"grow","profile":"reveal","director":{"accent":"stretch","anchor":[5.48,10.25],"vector":[3,3],"duration":0.668,"intensity":1.016,"complexity":2.0282}});
