"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"default" | "expand" | "light">("default");
  const [isTouch, setIsTouch] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReducedMotion(true);
      return;
    }

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    // Detect hover zones
    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      // Light cursor for magenta backgrounds (footer, CTA sections)
      if (el.closest("[data-cursor-light]")) {
        setMode("light");
      } else if (el.closest("[data-cursor-expand]")) {
        setMode("expand");
      } else {
        setMode("default");
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    // Smooth follow with RAF — near-instant
    let raf: number;
    const animate = () => {
      const speed = 0.85;
      pos.current.x += (target.current.x - pos.current.x) * speed;
      pos.current.y += (target.current.y - pos.current.y) * speed;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch || isReducedMotion) return null;

  const isExpand = mode === "expand";
  const isLight = mode === "light";

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none ${isExpand ? "z-[1]" : "z-[9999]"}`}
      style={{
        width: isExpand ? "120px" : "12px",
        height: isExpand ? "120px" : "12px",
        borderRadius: "50%",
        backgroundColor: isLight ? "#ffffff" : isExpand ? "#f8b4d0" : "#ff138c",
        transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease",
        willChange: "transform",
      }}
    />
  );
}
