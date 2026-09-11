"use client";

// Auto-generated enhanced copy. src/icons/Dna.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalDna({
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
      <motion.g initial="rest" animate={force && !reduced ? "twist" : "rest"} whileHover={reduced ? undefined : "twist"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2 15c6.667-6 13.333 0 20-6" />
        <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
        <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="m10 16 1.5 1.5"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.08 } },
          }}
          d="m14 8-1.5-1.5"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.16 } },
          }}
          d="m16.5 10.5 1 1"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0 } },
          }}
          d="m17 6-2.891-2.891"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.24 } },
          }}
          d="m20 9 .891.891"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.08 } },
          }}
          d="M3.109 14.109 4 15"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.16 } },
          }}
          d="m6.5 12.5 1 1"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twist: { opacity: [1, 0.2, 1], transition: { duration: 0.2, delay: 0.24 } },
          }}
          d="m7 18 2.891 2.891"
        />
      </motion.g>
    </svg>
  );
}

export const Dna = createEnhancedIcon(OriginalDna, {"name":"Dna","mechanic":"twist","profile":"orbit","director":{"accent":"orbit","anchor":[8.07,8.32],"vector":[3,3],"duration":0.392,"intensity":0.767,"complexity":9.1154}});
