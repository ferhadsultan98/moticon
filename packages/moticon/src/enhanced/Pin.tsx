"use client";

// Auto-generated enhanced copy. src/icons/Pin.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPin({
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
      <motion.g initial="rest" animate={force && !reduced ? "stick" : "rest"} whileTap={reduced ? undefined : "stick"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          variants={{
            rest: { y: 0 },
            stick: { y: [-4, 0], transition: { duration: 0.25, ease: "easeIn" } },
          }}
        >
          <path
            fill="transparent"
            d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
          />
        </motion.g>
        <motion.path
          variants={{
            rest: { scaleY: 1 },
            stick: { scaleY: [0.3, 1], transition: { duration: 0.2, ease: "easeOut", delay: 0.2 } },
          }}
          style={{ originX: "12px", originY: "17px" }}
          d="M12 17v5"
        />
      </motion.g>
    </svg>
  );
}

export const Pin = createEnhancedIcon(OriginalPin, {"name":"Pin","mechanic":"stick","profile":"impact","director":{"accent":"impact","anchor":[12,17],"vector":[3,-4],"duration":0.418,"intensity":0.975,"complexity":3.0238}});
