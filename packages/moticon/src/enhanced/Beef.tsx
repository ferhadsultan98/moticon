"use client";

// Auto-generated enhanced copy. src/icons/Beef.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBeef({
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
      <motion.g initial="rest" animate={force && !reduced ? "sizzle" : "rest"} whileHover={reduced ? undefined : "sizzle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"
        />
        <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />

        <motion.circle
          cx="12.5"
          cy="8.5"
          r="2.5"
          style={{ transformOrigin: "12.5px 8.5px" }}
          variants={{
            rest: { scale: 1, x: 0, y: 0 },
            sizzle: {
              scale: [1, 1.22, 0.95, 1.06, 1],
              x: [0, 0.3, -0.2, 0.1, 0],
              y: [0, -0.3, 0.15, 0, 0],
              transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.28, 0.55, 0.78, 1] },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}

export const Beef = createEnhancedIcon(OriginalBeef, {"name":"Beef","mechanic":"sizzle","profile":"energy","director":{"accent":"burst","anchor":[6.9,5.97],"vector":[0.3,-0.3],"duration":0.568,"intensity":1.006,"complexity":2.0258}});
