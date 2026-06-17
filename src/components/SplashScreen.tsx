"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  const animate = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(100);
      setTimeout(() => setDone(true), 100);
      setTimeout(() => setHidden(true), 300);
      return;
    }

    const duration = 2200;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: starts fast, slows near the end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(100);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => setHidden(true), 1200);
      }
    };

    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    // Small delay before starting the counter
    const timer = setTimeout(animate, 300);
    return () => clearTimeout(timer);
  }, [animate]);

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        done ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background images — desktop + mobile */}
      <Image
        src="/splash-desktop.jpg"
        alt=""
        fill
        className="object-cover hidden md:block"
        priority
        sizes="100vw"
      />
      <Image
        src="/splash-mobile.jpg"
        alt=""
        fill
        className="object-cover md:hidden"
        priority
        sizes="100vw"
      />

      {/* 70% black overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* SVG Logo — pink on dark */}
        <Image
          src="/logo.svg"
          alt="Cyclery Racing Abacus Data"
          width={480}
          height={96}
          className="w-[280px] md:w-[400px] lg:w-[480px] h-auto"
          priority
        />

        {/* Counter — matching logo pink #ff138c */}
        <span className="font-mono text-[clamp(14px,3vw,18px)] font-bold text-[#ff138c] tabular-nums tracking-[0.3em]">
          {String(count).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
