"use client";

// Auto-generated enhanced copy. src/icons/Bluetooth.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBluetooth({
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
        style={{ transformOrigin: "12px 12px" }}
        initial="rest" animate={force && !reduced ? "pair" : "rest"}
        whileHover={reduced ? undefined : "pair"}
        variants={{
          rest: { opacity: 1, scale: 1 },
          pair: {
            opacity: [1, 0.35, 1, 0.6, 1],
            scale: [1, 1.14, 0.98, 1.05, 1],
            transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.26, 0.52, 0.76, 1] },
          },
        }}
        d="m7 7 10 10-5 5V2l5 5L7 17"
      />
    </svg>
  );
}

export const Bluetooth = createEnhancedIcon(OriginalBluetooth, {"name":"Bluetooth","mechanic":"pair","profile":"flow","director":{"accent":"flow","anchor":[6,6.8],"vector":[3,3],"duration":0.664,"intensity":1.054,"complexity":1.0178}});
