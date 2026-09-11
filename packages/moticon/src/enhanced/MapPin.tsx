"use client";

// Auto-generated enhanced copy. src/icons/MapPin.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMapPin({
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
        style={{ originX: "12px", originY: "21px" }}
        initial="rest" animate={force && !reduced ? "drop" : "rest"}
        whileHover={reduced ? undefined : "drop"}
        variants={{
          rest: { y: 0, scaleY: 1 },
          drop: {
            y: [-4, 0, -1, 0],
            scaleY: [1, 1, 0.85, 1],
            transition: { duration: 0.4, ease: "easeOut" },
          },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </motion.g>
    </svg>
  );
}

export const MapPin = createEnhancedIcon(OriginalMapPin, {"name":"MapPin","mechanic":"drop","profile":"travel","director":{"accent":"ripple","anchor":[12,21],"vector":[3,-4],"duration":0.564,"intensity":1.047,"complexity":1.0147}});
