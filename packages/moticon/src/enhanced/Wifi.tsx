"use client";

// Auto-generated enhanced copy. src/icons/Wifi.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalWifi({
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
      <motion.g initial="rest" animate={force && !reduced ? "connect" : "rest"} whileHover={reduced ? undefined : "connect"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 20h.01" />
        <motion.path
          d="M8.5 16.429a5 5 0 0 1 7 0"
          variants={{
            rest: { opacity: 1 },
            connect: { opacity: [0.25, 1], transition: { duration: 0.2, delay: 0 } },
          }}
        />
        <motion.path
          d="M5 12.859a10 10 0 0 1 14 0"
          variants={{
            rest: { opacity: 1 },
            connect: { opacity: [0.25, 1], transition: { duration: 0.2, delay: 0.12 } },
          }}
        />
        <motion.path
          d="M2 8.82a15 15 0 0 1 20 0"
          variants={{
            rest: { opacity: 1 },
            connect: { opacity: [0.25, 1], transition: { duration: 0.2, delay: 0.24 } },
          }}
        />
      </motion.g>
    </svg>
  );
}

export const Wifi = createEnhancedIcon(OriginalWifi, {"name":"Wifi","mechanic":"connect","profile":"flow","director":{"accent":"flow","anchor":[5,9.93],"vector":[3,3],"duration":0.38,"intensity":0.935,"complexity":4.041}});
