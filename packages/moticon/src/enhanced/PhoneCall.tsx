"use client";

// Auto-generated enhanced copy. src/icons/PhoneCall.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPhoneCall({
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
      <motion.g initial="rest" animate={force && !reduced ? "signal" : "rest"} whileHover={reduced ? undefined : "signal"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            signal: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="M13 6a5 5 0 0 1 5 5"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            signal: { opacity: [0.3, 1], transition: { duration: 0.2, delay: 0.1 } },
          }}
          d="M13 2a9 9 0 0 1 9 9"
        />
      </motion.g>
    </svg>
  );
}

export const PhoneCall = createEnhancedIcon(OriginalPhoneCall, {"name":"PhoneCall","mechanic":"signal","profile":"energy","director":{"accent":"echo","anchor":[5,5],"vector":[3,3],"duration":0.38,"intensity":0.979,"complexity":3.0317}});
