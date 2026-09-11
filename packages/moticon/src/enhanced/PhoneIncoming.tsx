"use client";

// Auto-generated enhanced copy. src/icons/PhoneIncoming.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPhoneIncoming({
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
      <motion.g initial="rest" animate={force && !reduced ? "in" : "rest"} whileHover={reduced ? undefined : "in"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        />
        <motion.g
          variants={{
            rest: { x: 0, y: 0 },
            in: { x: [8, 0], y: [-8, 0], transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <path d="M16 2v6h6" />
          <path d="m22 2-6 6" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const PhoneIncoming = createEnhancedIcon(OriginalPhoneIncoming, {"name":"PhoneIncoming","mechanic":"in","profile":"flow","director":{"accent":"flow","anchor":[5,5],"vector":[8,-8],"duration":0.672,"intensity":1.028,"complexity":2.0345}});
