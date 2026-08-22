"use client";

import { useEffect, useRef } from "react";
import { iconComponents, iconMeta } from "@/lib/icons";

export function AutoAnimateIcon({
  name,
  size = 48,
  color = "currentColor",
  strokeWidth = 2,
  replayKey = 0,
  interval = 2400,
  className = "",
}: {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  replayKey?: string | number;
  interval?: number | null;
  className?: string;
}) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const Icon = iconComponents[name];
  const meta = iconMeta.find((item) => item.name === name);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !meta) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = false;
    let releaseTimer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) window.setTimeout(play, 80);
      },
      { threshold: 0.35 }
    );

    function dispatch(type: string) {
      const svg = root?.querySelector("svg");
      if (!svg) return;
      const targets = [svg, ...Array.from(svg.querySelectorAll("*"))];
      targets.forEach((target) =>
        target.dispatchEvent(
          new PointerEvent(type, {
            bubbles: type !== "pointerenter" && type !== "pointerleave",
            pointerType: "mouse",
            button: 0,
          })
        )
      );
    }

    function play() {
      if (!visible) return;
      if (meta?.trigger === "tap") {
        dispatch("pointerdown");
        releaseTimer = window.setTimeout(() => dispatch("pointerup"), 220);
      } else {
        dispatch("pointerenter");
        releaseTimer = window.setTimeout(() => dispatch("pointerleave"), 900);
      }
    }

    observer.observe(root);
    const timer = interval ? window.setInterval(play, interval) : undefined;
    return () => {
      observer.disconnect();
      if (timer) window.clearInterval(timer);
      if (releaseTimer) window.clearTimeout(releaseTimer);
    };
  }, [color, interval, meta, name, replayKey, size, strokeWidth]);

  if (!Icon) return null;

  return (
    <span
      ref={rootRef}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <Icon size={size} color={color} strokeWidth={strokeWidth} />
    </span>
  );
}
