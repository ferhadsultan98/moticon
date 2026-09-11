"use client";

// Auto-generated enhanced copy. src/icons/DoorClosed.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalDoorClosed({
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
      <motion.g
        style={{ originX: "8px", originY: "6px" }}
        initial="rest" animate={force && !reduced ? "knock" : "rest"}
        whileTap={reduced ? undefined : "knock"}
        variants={{
          rest: { skewY: 0 },
          knock: {
            skewY: [0, 8, -4, 6, 0],
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10 12h.01" />
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
        <path d="M2 20h20" />
      </motion.g>
    </svg>
  );
}

export const DoorClosed = createEnhancedIcon(OriginalDoorClosed, {"name":"DoorClosed","mechanic":"knock","profile":"impact","director":{"accent":"impact","anchor":[8,6],"vector":[3,3],"duration":0.772,"intensity":1.059,"complexity":1.0372}});
