"use client";

// Auto-generated enhanced copy. src/icons/InfinityIcon.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalInfinityIcon({
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
        initial="rest" animate={force && !reduced ? "flow" : "rest"}
        whileHover={reduced ? undefined : "flow"}
        variants={{
          rest: { strokeDashoffset: 0 },
          flow: {
            strokeDashoffset: [0, -24],
            transition: { duration: 0.8, ease: "linear", repeat: Infinity },
          },
        }}
        style={{ strokeDasharray: "4 3" }}
        d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"
      />
    </svg>
  );
}

export const InfinityIcon = createEnhancedIcon(OriginalInfinityIcon, {"name":"InfinityIcon","mechanic":"flow","profile":"flow","director":{"accent":"flow","anchor":[5,5],"vector":[3,3],"duration":0.964,"intensity":1.051,"complexity":1.0141}});
