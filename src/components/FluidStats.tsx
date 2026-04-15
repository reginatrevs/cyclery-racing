"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

  // Mobile scroll-triggered active state
  const [mobileActive, setMobileActive] = useState(-1);
  const [mobileCompleted, setMobileCompleted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollPerCard = 600;
  const totalScroll = stats.length * scrollPerCard;

  const handleScroll = useCallback(() => {
    if (mobileCompleted) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (window.innerWidth >= 1024) return; // Desktop doesn't use scroll

    const rect = wrapper.getBoundingClientRect();
    const scrolled = -rect.top;

    if (scrolled < 0) {
      if (mobileActive !== -1) setMobileActive(-1);
      return;
    }
    if (scrolled >= totalScroll) {
      if (!mobileCompleted) {
        setMobileCompleted(true);
        setMobileActive(stats.length - 1);
      }
      return;
    }
    const cardIndex = Math.min(stats.length - 1, Math.floor(scrolled / scrollPerCard));
    if (cardIndex !== mobileActive) setMobileActive(cardIndex);
  }, [mobileActive, mobileCompleted, stats.length, totalScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMobileClick = (index: number) => {
    if (!mobileCompleted) return;
    setMobileActive(mobileActive === index ? -1 : index);
  };

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

      {/* Mobile — keep existing scroll-lock behavior */}
      <div className="lg:hidden">
        <div
          ref={wrapperRef}
          style={{ height: `${totalScroll + 100}px`, position: "relative" }}
        >
          <div className="sticky top-[80px] py-16">
            <div className="flex flex-col gap-[3px]">
              {stats.map((stat, i) => {
                const isActive = i === mobileActive;
                const isPast = mobileActive >= 0 && i < mobileActive && !mobileCompleted;
                const color = colors[i % colors.length];
                return (
                  <div
                    key={stat.label}
                    onClick={() => handleMobileClick(i)}
                    className={`${color.bg} ${color.text} p-6 overflow-hidden ${mobileCompleted ? "cursor-pointer" : ""}`}
                    style={{
                      height: isActive ? "200px" : isPast ? "60px" : "72px",
                      opacity: isPast ? 0.6 : 1,
                      transition: "height 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
                    }}
                  >
                    <div>
                      <span
                        className="font-display font-bold uppercase leading-none"
                        style={{
                          fontSize: isActive ? "36px" : "22px",
                          transition: "font-size 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        {stat.number} {stat.label}
                      </span>
                    </div>
                    {stat.description && (
                      <p
                        className={`mt-3 font-body text-sm leading-relaxed ${color.opacity}`}
                        style={{
                          opacity: isActive ? 1 : 0,
                          maxHeight: isActive ? "80px" : "0",
                          transition: "opacity 0.4s ease 0.2s, max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                          overflow: "hidden",
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
        </div>
      </div>
    </section>
  );
}
