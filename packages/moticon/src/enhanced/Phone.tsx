"use client";

// Auto-generated enhanced copy. src/icons/Phone.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPhone({
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
        fill="transparent"
        style={{ originX: "12px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "ring" : "rest"}
        whileHover={reduced ? undefined : "ring"}
        variants={{
          rest: { rotate: 0 },
          ring: { rotate: [0, -12, 10, -8, 5, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
      />
    </svg>
  );
}

export const Phone = createEnhancedIcon(OriginalPhone, {"name":"Phone","mechanic":"ring","profile":"oscillate","director":{"accent":"echo","anchor":[12,12],"vector":[3,3],"duration":0.664,"intensity":1.059,"complexity":1.0171}});
