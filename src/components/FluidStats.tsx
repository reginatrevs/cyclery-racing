"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Stat {
  number: string;
  label: string;
  description?: string;
  image?: string;
}

interface FluidStatsProps {
  stats: Stat[];
}

const colors = [
  { bg: "bg-[#b8c2fd]", text: "text-black", opacity: "opacity-50" },
  { bg: "bg-black", text: "text-white", opacity: "opacity-40" },
  { bg: "bg-gray-100", text: "text-black", opacity: "opacity-40" },
  { bg: "bg-magenta", text: "text-white", opacity: "opacity-60" },
];

export function FluidStats({ stats }: FluidStatsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  // Mobile: scroll triggers staggered flash, tap toggles image
  const [mobilePressed, setMobilePressed] = useState<number | null>(null);
  const [mobileFlash, setMobileFlash] = useState<Set<number>>(new Set());
  const mobileGridRef = useRef<HTMLDivElement>(null);
  const mobileTriggered = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.innerWidth >= 1024) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2 && !mobileTriggered.current) {
            mobileTriggered.current = true;
            // Stagger flash: each card activates alone, then all deactivate
            stats.forEach((_, i) => {
              setTimeout(() => {
                setMobileFlash(new Set([i]));
              }, i * 400);
            });
            setTimeout(() => {
              setMobileFlash(new Set());
            }, stats.length * 400 + 500);
          }
        });
      },
      { threshold: [0, 0.2, 0.5], rootMargin: "-5% 0px -5% 0px" }
    );
    const timer = setTimeout(() => {
      if (mobileGridRef.current) observer.observe(mobileGridRef.current);
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [stats]);

  return (
    <section className="px-6">
      {/* Desktop — Fulton Market style bordered cards */}
      <div className="hidden lg:block py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div
            className="grid grid-cols-4 gap-4"
            onMouseLeave={() => setHovered(null)}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative border border-gray-300 aspect-[3/4] flex flex-col justify-between p-7 lg:p-9 cursor-pointer group transition-all duration-500"
                onMouseEnter={() => setHovered(i)}
                data-cursor-expand="true"
                style={{
                  backgroundColor: hovered === i ? "#fafafa" : "transparent",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {/* Title at top */}
                <div className="relative z-10">
                  <span
                    className="font-display text-[clamp(28px,3vw,42px)] font-bold uppercase leading-none transition-colors duration-300"
                    style={{ color: hovered === i ? (stat.image ? "#fff" : "#ff138c") : "#111" }}
                  >
                    {stat.number}
                  </span>
                  <span
                    className="block font-display text-[clamp(16px,1.8vw,22px)] font-bold uppercase leading-tight mt-2 transition-colors duration-300"
                    style={{ color: hovered === i ? (stat.image ? "#fff" : "#ff138c") : "#111" }}
                  >
                    {stat.label}
                  </span>
                </div>

                {/* Card image — appears as background on hover */}
                {stat.image && (
                  <div
                    className="absolute inset-0 overflow-hidden transition-all duration-500 pointer-events-none"
                    style={{
                      opacity: hovered === i ? 1 : 0,
                    }}
                  >
                    <Image
                      src={stat.image}
                      alt={stat.label}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                )}

                {/* Description at bottom left */}
                {stat.description && (
                  <p
                    className="relative z-10 font-body text-sm leading-relaxed max-w-[220px] transition-all duration-500"
                    style={{
                      opacity: hovered === i ? 1 : 0.8,
                      transform: hovered === i ? "translateY(0)" : "translateY(4px)",
                      color: hovered === i && stat.image ? "#fff" : "#111",
                    }}
                  >
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile — single column, scroll activates one by one then deactivates, tap for image */}
      <div className="lg:hidden py-12">
        <div ref={mobileGridRef} className="flex flex-col gap-3">
          {stats.map((stat, i) => {
            const isFlashing = mobileFlash.has(i);
            const isPressed = mobilePressed === i;
            const showImage = isPressed;
            const highlight = isFlashing || isPressed;
            return (
              <div
                key={stat.label}
                className="relative border border-gray-300 aspect-[5/3] flex flex-col justify-between p-5 overflow-hidden transition-all duration-500 cursor-pointer"
                style={{
                  backgroundColor: highlight ? "#fafafa" : "transparent",
                }}
                onClick={() => setMobilePressed(isPressed ? null : i)}
              >
                {/* Title at top */}
                <div className="relative z-10">
                  <span
                    className="font-display text-[clamp(28px,8vw,40px)] font-bold uppercase leading-none transition-colors duration-300"
                    style={{ color: highlight ? (stat.image ? "#fff" : "#ff138c") : "#111" }}
                  >
                    {stat.number}
                  </span>
                  <span
                    className="block font-display text-[clamp(14px,3.5vw,18px)] font-bold uppercase leading-tight mt-1 transition-colors duration-300"
                    style={{ color: highlight ? (stat.image ? "#fff" : "#ff138c") : "#111" }}
                  >
                    {stat.label}
                  </span>
                </div>

                {/* Card image — appears on tap */}
                {stat.image && (
                  <div
                    className="absolute inset-0 overflow-hidden transition-all duration-500 pointer-events-none"
                    style={{ opacity: showImage ? 1 : 0 }}
                  >
                    <Image
                      src={stat.image}
                      alt={stat.label}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                )}

                {/* Description at bottom */}
                {stat.description && (
                  <p
                    className="relative z-10 font-body text-xs leading-relaxed max-w-[280px] transition-all duration-500"
                    style={{
                      opacity: highlight ? 1 : 0.7,
                      color: showImage ? "#fff" : "#111",
                    }}
                  >
                    {stat.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
