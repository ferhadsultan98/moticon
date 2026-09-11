"use client";

// Auto-generated enhanced copy. src/icons/Droplet.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalDroplet({
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
        fill="transparent"
        style={{ originX: "12px", originY: "2px" }}
        initial="rest" animate={force && !reduced ? "drip" : "rest"}
        whileHover={reduced ? undefined : "drip"}
        variants={{
          rest: { y: 0, scaleY: 1 },
          drip: { y: [0, -1, 3], scaleY: [1, 1.1, 0.9], transition: { duration: 0.45, ease: "easeIn" } },
        }}
        d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
      />
    </svg>
  );
}

export const Droplet = createEnhancedIcon(OriginalDroplet, {"name":"Droplet","mechanic":"drip","profile":"flow","director":{"accent":"ripple","anchor":[12,2],"vector":[3,3],"duration":0.614,"intensity":1.043,"complexity":1.0167}});
