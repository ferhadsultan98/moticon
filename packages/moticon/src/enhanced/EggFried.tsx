"use client";

// Auto-generated enhanced copy. src/icons/EggFried.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalEggFried({
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
          d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
        />
        <motion.circle
          style={{ originX: "11.5px", originY: "12.5px" }}
          variants={{
            rest: { scale: 1 },
            sizzle: { scale: [1, 1.1, 1], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          cx="11.5"
          cy="12.5"
          r="3.5"
        />
      </motion.g>
    </svg>
  );
}

export const EggFried = createEnhancedIcon(OriginalEggFried, {"name":"EggFried","mechanic":"sizzle","profile":"energy","director":{"accent":"burst","anchor":[11.5,12.5],"vector":[3,3],"duration":0.564,"intensity":1,"complexity":2.0196}});
