"use client";

// Auto-generated enhanced copy. src/icons/Voicemail.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalVoicemail({
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
      <motion.g initial="rest" animate={force && !reduced ? "record" : "rest"} whileHover={reduced ? undefined : "record"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <line x1="6" x2="18" y1="16" y2="16" />
        <motion.circle
          variants={{
            rest: { scale: 1, opacity: 1 },
            record: { scale: [1, 0.6, 1], opacity: [1, 0.5, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          cx="6"
          cy="12"
          r="4"
        />
        <motion.circle
          variants={{
            rest: { scale: 1, opacity: 1 },
            record: {
              scale: [1, 0.6, 1],
              opacity: [1, 0.5, 1],
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
            },
          }}
          cx="18"
          cy="12"
          r="4"
        />
      </motion.g>
    </svg>
  );
}

export const Voicemail = createEnhancedIcon(OriginalVoicemail, {"name":"Voicemail","mechanic":"record","profile":"energy","director":{"accent":"glow","anchor":[12,12],"vector":[3,3],"duration":0.66,"intensity":0.96,"complexity":3.0068}});
