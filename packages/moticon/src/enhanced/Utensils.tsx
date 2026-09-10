"use client";

// Auto-generated enhanced copy. src/icons/Utensils.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalUtensils({
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
      <motion.g initial="rest" animate={force && !reduced ? "pickup" : "rest"} whileHover={reduced ? undefined : "pickup"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.g
          style={{ transformOrigin: "7px 22px" }}
          variants={{
            rest: { rotate: 0, y: 0 },
            pickup: {
              rotate: [0, -5.5, -3.5, -4.5],
              y: [0, -0.5, -0.2, -0.35],
              transition: { duration: 0.44, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
        </motion.g>

        <motion.path
          style={{ transformOrigin: "21px 22px" }}
          variants={{
            rest: { rotate: 0, y: 0 },
            pickup: {
              rotate: [0, 5.5, 3.5, 4.5],
              y: [0, -0.5, -0.2, -0.35],
              transition: { duration: 0.44, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
        />
      </motion.g>
    </svg>
  );
}

export const Utensils = createEnhancedIcon(OriginalUtensils, {"name":"Utensils","mechanic":"pickup","profile":"travel","director":{"accent":"spark","anchor":[5,5],"vector":[3,-0.5],"duration":0.572,"intensity":0.978,"complexity":3.0309}});
