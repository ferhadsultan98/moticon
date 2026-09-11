"use client";

// Auto-generated enhanced copy. src/icons/BatteryFull.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBatteryFull({
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
      <motion.g initial="rest" animate={force && !reduced ? "charge" : "rest"} whileHover={reduced ? undefined : "charge"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M22 14v-4" />
        <rect x="2" y="6" width="16" height="12" rx="2" />

        {[
          { d: "M6 10v4", delay: 0 },
          { d: "M10 10v4", delay: 0.08 },
          { d: "M14 10v4", delay: 0.16 },
        ].map(({ d, delay }) => (
          <motion.path
            key={d}
            d={d}
            style={{ transformOrigin: "50% 100%" }}
            variants={{
              rest: { scaleY: 1, opacity: 1 },
              charge: {
                scaleY: [0.15, 1.08, 1],
                opacity: [0.25, 1, 1],
                transition: { duration: 0.34, ease: "easeOut", delay, times: [0, 0.75, 1] },
              },
            }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

export const BatteryFull = createEnhancedIcon(OriginalBatteryFull, {"name":"BatteryFull","mechanic":"charge","profile":"energy","director":{"accent":"glow","anchor":[19,14],"vector":[3,3],"duration":0.38,"intensity":1.011,"complexity":2.0292}});
