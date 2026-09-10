"use client";

// Auto-generated enhanced copy. src/icons/Sunrise.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSunrise({
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
      <motion.g initial="rest" animate={force && !reduced ? "rise" : "rest"} whileHover={reduced ? undefined : "rise"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m4.93 10.93 1.41 1.41" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="m19.07 10.93-1.41 1.41" />
        <path d="M22 22H2" />
        <path d="m8 6 4-4 4 4" />
        <path d="M16 18a4 4 0 0 0-8 0" />

        <motion.path
          style={{ transformOrigin: "12px 10px" }}
          variants={{
            rest: { y: 0, scaleY: 1 },
            rise: {
              y: [0, -3.6, -2.9, -3.15],
              scaleY: [1, 1.03, 0.99, 1],
              transition: { duration: 0.44, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M12 2v8"
        />
      </motion.g>
    </svg>
  );
}

export const Sunrise = createEnhancedIcon(OriginalSunrise, {"name":"Sunrise","mechanic":"rise","profile":"travel","director":{"accent":"trail","anchor":[8.39,8.98],"vector":[3,-3.6],"duration":0.592,"intensity":1.064,"complexity":2.0829}});
