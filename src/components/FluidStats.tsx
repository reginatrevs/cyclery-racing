"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Stat {
  number: string;
  label: string;
  description?: string;
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
  const [active, setActive] = useState(-1);
  const [completed, setCompleted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // The trick: we make a tall wrapper (stats.length * scrollPerCard + viewport height)
  // Inside, a sticky container stays pinned. We read scroll progress to determine active card.
  const scrollPerCard = 600; // px of scroll per card step
  const totalScroll = stats.length * scrollPerCard;

  const handleScroll = useCallback(() => {
    if (completed) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    // How far we've scrolled into the wrapper (0 = just entered, totalScroll = exited)
    const scrolled = -rect.top;

    if (scrolled < 0) {
      // Haven't reached section yet
      if (active !== -1) setActive(-1);
      return;
    }

    if (scrolled >= totalScroll) {
      // Past the section — complete
      if (!completed) {
        setCompleted(true);
        setActive(stats.length - 1);
      }
      return;
    }

    // Which card should be active based on scroll position
    const cardIndex = Math.min(
      stats.length - 1,
      Math.floor(scrolled / scrollPerCard)
    );
    if (cardIndex !== active) {
      setActive(cardIndex);
    }
  }, [active, completed, stats.length, totalScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Click handler — only works in completed state
  const handleClick = (index: number) => {
    if (!completed) return;
    setActive(active === index ? -1 : index);
  };

  // Desktop card positioning
  const sideW = 30;
  const mainW = 100 - sideW - 0.3;
  const rowH = 33.1;
  const rowGap = 0.35;
  const transition = "left 0.8s cubic-bezier(0.4, 0, 0.2, 1), top 0.8s cubic-bezier(0.4, 0, 0.2, 1), width 0.8s cubic-bezier(0.4, 0, 0.2, 1), height 0.8s cubic-bezier(0.4, 0, 0.2, 1)";

  const getCardRect = (index: number) => {
    if (active < 0) {
      const col = index % 2;
      const row = Math.floor(index / 2);
      return {
        left: `${col * 50.15}%`,
        top: `${row * 50.15}%`,
        width: "49.85%",
        height: "49.85%",
      };
    }

    const inactiveIndices = stats.map((_, i) => i).filter((i) => i !== active);
    const pos = inactiveIndices.indexOf(index);

    if (index === active) {
      return {
        left: `${sideW + 0.3}%`,
        top: "0%",
        width: `${mainW}%`,
        height: "100%",
      };
    }

    return {
      left: "0%",
      top: `${pos * (rowH + rowGap)}%`,
      width: `${sideW}%`,
      height: `${rowH}%`,
    };
  };

  return (
    <section className="px-6">
      {/* Tall scroll wrapper — creates the scroll distance needed */}
      <div
        ref={wrapperRef}
        style={{ height: `${totalScroll + 100}px`, position: "relative" }}
      >
        {/* Sticky container — stays pinned while user scrolls through */}
        <div
          ref={stickyRef}
          className="sticky top-[80px] py-16 lg:py-24"
        >
          <div className="max-w-[1440px] mx-auto">
            {/* Desktop */}
            <div className="hidden lg:block relative h-[480px]">
              {stats.map((stat, i) => {
                const isActive = i === active;
                const isPast = active >= 0 && i < active && !completed;
                const color = colors[i % colors.length];
                const rect = getCardRect(i);
                return (
                  <div
                    key={stat.label}
                    onClick={() => handleClick(i)}
                    className={`${color.bg} ${color.text} absolute overflow-hidden flex flex-col justify-between p-7 lg:p-8 ${completed ? "cursor-pointer" : ""}`}
                    style={{
                      ...rect,
                      transition,
                      opacity: isPast ? 0.7 : 1,
                    }}
                  >
                    <div>
                      <span
                        className="font-display font-bold uppercase leading-none"
                        style={{
                          fontSize: isActive ? "72px" : active < 0 ? "56px" : "36px",
                          transition: "font-size 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {stat.number} {stat.label}
                      </span>
                      {stat.description && (
                        <p
                          className={`mt-4 font-body text-sm leading-relaxed max-w-md ${color.opacity}`}
                          style={{
                            opacity: isActive ? 1 : 0,
                            maxHeight: isActive ? "100px" : "0",
                            transition: "opacity 0.5s ease 0.3s, max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                            overflow: "hidden",
                          }}
                        >
                          {stat.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex flex-col gap-[3px]">
              {stats.map((stat, i) => {
                const isActive = i === active;
                const isPast = active >= 0 && i < active && !completed;
                const color = colors[i % colors.length];
                return (
                  <div
                    key={stat.label}
                    onClick={() => handleClick(i)}
                    className={`${color.bg} ${color.text} p-6 overflow-hidden ${completed ? "cursor-pointer" : ""}`}
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
