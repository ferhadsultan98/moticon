"use client";

// Auto-generated enhanced copy. src/icons/Ruler.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalRuler({
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
      <motion.g initial="rest" animate={force && !reduced ? "mark" : "rest"} whileHover={reduced ? undefined : "mark"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            mark: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="m8.5 6.5 2-2"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            mark: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.2, delay: 0.1 } },
          }}
          d="m11.5 9.5 2-2"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            mark: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.2, delay: 0.2 } },
          }}
          d="m14.5 12.5 2-2"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1, opacity: 1 },
            mark: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.2, delay: 0.3 } },
          }}
          d="m17.5 15.5 2-2"
        />
      </motion.g>
    </svg>
  );
}

export const Ruler = createEnhancedIcon(OriginalRuler, {"name":"Ruler","mechanic":"mark","profile":"impact","director":{"accent":"draw","anchor":[5,5],"vector":[3,3],"duration":0.38,"intensity":0.907,"complexity":5.0573}});
