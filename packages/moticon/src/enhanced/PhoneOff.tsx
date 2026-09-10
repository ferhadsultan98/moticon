"use client";

// Auto-generated enhanced copy. src/icons/PhoneOff.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPhoneOff({
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
      <motion.g initial="rest" animate={force && !reduced ? "hangup" : "rest"} whileTap={reduced ? undefined : "hangup"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" />
        <path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            hangup: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M22 2 2 22"
        />
      </motion.g>
    </svg>
  );
}

export const PhoneOff = createEnhancedIcon(OriginalPhoneOff, {"name":"PhoneOff","mechanic":"hangup","profile":"impact","director":{"accent":"impact","anchor":[5,5],"vector":[3,3],"duration":0.472,"intensity":1.018,"complexity":2.0318}});
