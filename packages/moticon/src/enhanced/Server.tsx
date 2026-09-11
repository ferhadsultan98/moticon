"use client";

// Auto-generated enhanced copy. src/icons/Server.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalServer({
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
      <motion.g initial="rest" animate={force && !reduced ? "ping" : "rest"} whileHover={reduced ? undefined : "ping"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <motion.line
          variants={{
            rest: { opacity: 1 },
            ping: { opacity: [1, 0.15, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          x1="6"
          x2="6.01"
          y1="6"
          y2="6"
        />
        <motion.line
          variants={{
            rest: { opacity: 1 },
            ping: {
              opacity: [1, 0.15, 1],
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.15 },
            },
          }}
          x1="6"
          x2="6.01"
          y1="18"
          y2="18"
        />
      </motion.g>
    </svg>
  );
}

export const Server = createEnhancedIcon(OriginalServer, {"name":"Server","mechanic":"ping","profile":"energy","director":{"accent":"echo","anchor":[12,12],"vector":[3,3],"duration":0.66,"intensity":0.949,"complexity":3.0011}});
