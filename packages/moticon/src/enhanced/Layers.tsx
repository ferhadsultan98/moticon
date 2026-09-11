"use client";

// Auto-generated enhanced copy. src/icons/Layers.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalLayers({
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
      <motion.g initial="rest" animate={force && !reduced ? "expand" : "rest"} whileHover={reduced ? undefined : "expand"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.path
          variants={{
            rest: { y: 0 },
            expand: {
              y: [0, -1.8, -1.4, -1.55],
              transition: { duration: 0.36, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
        />
        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />

        <motion.path
          variants={{
            rest: { y: 0 },
            expand: {
              y: [0, 1.8, 1.4, 1.55],
              transition: { duration: 0.36, ease: "easeOut", times: [0, 0.55, 0.8, 1] },
            },
          }}
          d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
        />
      </motion.g>
    </svg>
  );
}

export const Layers = createEnhancedIcon(OriginalLayers, {"name":"Layers","mechanic":"expand","profile":"reveal","director":{"accent":"stretch","anchor":[5,5],"vector":[3,-1.8],"duration":0.422,"intensity":0.983,"complexity":3.0326}});
