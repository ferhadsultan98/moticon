"use client";

// Auto-generated enhanced copy. src/icons/BatteryCharging.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBatteryCharging({
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
        <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
        <path d="M22 14v-4" />
        <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />

        <motion.path
          style={{ transformOrigin: "9px 12px" }}
          variants={{
            rest: { y: 0, opacity: 1, scale: 1 },
            charge: {
              y: [-3, 0.3, 0],
              opacity: [0.2, 1, 1],
              scale: [0.9, 1.06, 1],
              transition: { duration: 0.4, ease: "easeOut", times: [0, 0.75, 1] },
            },
          }}
          d="m11 7-3 5h4l-3 5"
        />
      </motion.g>
    </svg>
  );
}

export const BatteryCharging = createEnhancedIcon(OriginalBatteryCharging, {"name":"BatteryCharging","mechanic":"charge","profile":"energy","director":{"accent":"glow","anchor":[5.53,5],"vector":[3,-3],"duration":0.526,"intensity":1.03,"complexity":2.049}});
