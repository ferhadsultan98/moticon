"use client";

// Auto-generated enhanced copy. src/icons/Siren.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalSiren({
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
      <motion.g initial="rest" animate={force && !reduced ? "alert" : "rest"} whileHover={reduced ? undefined : "alert"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
        />
        <path d="M12 12v6" />
        <motion.path
          variants={{
            rest: { y: 0 },
            alert: { y: [0, -3, 0], transition: { duration: 0.5, ease: "easeOut", delay: 0 } },
          }}
          d="M21 12h1"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            alert: { y: [0, -3, 0], transition: { duration: 0.5, ease: "easeOut", delay: 0.06 } },
          }}
          d="M18.5 4.5 18 5"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            alert: { y: [0, -3, 0], transition: { duration: 0.5, ease: "easeOut", delay: 0.12 } },
          }}
          d="M2 12h1"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            alert: { y: [0, -3, 0], transition: { duration: 0.5, ease: "easeOut", delay: 0.06 } },
          }}
          d="M12 2v1"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            alert: { y: [0, -3, 0], transition: { duration: 0.5, ease: "easeOut", delay: 0.12 } },
          }}
          d="m4.929 4.929.707.707"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            alert: { y: [0, -2, 0], transition: { duration: 0.5, ease: "easeOut" } },
          }}
          fill="transparent"
          d="M7 18v-6a5 5 0 1 1 10 0v6"
        />
      </motion.g>
    </svg>
  );
}

export const Siren = createEnhancedIcon(OriginalSiren, {"name":"Siren","mechanic":"alert","profile":"oscillate","director":{"accent":"echo","anchor":[5,5],"vector":[3,-3],"duration":0.692,"intensity":0.83,"complexity":7.0831}});
