"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface Sponsor {
  name: string;
  slug: string;
  textOnly?: boolean;
}

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

export function SponsorsList({ sponsors }: { sponsors: Sponsor[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [logoPos, setLogoPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useRef(false);

  // Detect mobile
  useEffect(() => {
    const check = () => { isMobile.current = window.innerWidth < 1024; };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Calculate logo Y position relative to the list container
  const updateLogoPos = useCallback((idx: number) => {
    const row = rowRefs.current[idx];
    const list = listRef.current;
    if (!row || !list) return;
    const listRect = list.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    setLogoPos(rowRect.top - listRect.top + rowRect.height / 2);
  }, []);

  // Mobile: IntersectionObserver
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!isMobile.current) return;
        let best: number | null = null;
        let bestRatio = 0;
        entries.forEach((entry) => {
          const idx = rowRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            best = idx;
          }
        });
        if (best !== null) {
          setActive(best);
          updateLogoPos(best);
        }
      },
      { threshold: [0, 0.5, 1], rootMargin: "-40% 0px -40% 0px" }
    );

    const timer = setTimeout(() => {
      rowRefs.current.forEach((el) => { if (el) observer.observe(el); });
    }, 100);

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [sponsors.length, updateLogoPos]);

  // Desktop: track mouse Y
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isMobile.current) return;
    for (let i = 0; i < rowRefs.current.length; i++) {
      const row = rowRefs.current[i];
      if (!row) continue;
      const rect = row.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        setActive(i);
        updateLogoPos(i);
        return;
      }
    }
    setActive(null);
  }, [updateLogoPos]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { if (!isMobile.current) setActive(null); }}
    >
      <div ref={listRef} className="relative">
        {/* Sponsor list — left half */}
        <div className="w-full lg:w-1/2">
          {sponsors.map((sponsor, i) => (
            <div
              key={sponsor.name}
              ref={(el) => { rowRefs.current[i] = el; }}
              className="cursor-pointer"
            >
              <div
                className="py-[5px] flex items-baseline gap-3"
                style={{
                  opacity: active !== null && active !== i ? 0.25 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <span
                  className="text-[9px] text-gray-400 tabular-nums leading-none"
                  style={{
                    ...fontStyle,
                    fontWeight: 500,
                    position: "relative",
                    top: "-0.6em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="leading-none uppercase"
                  style={{
                    ...fontStyle,
                    fontWeight: 500,
                    fontSize: "clamp(24px, 3vw, 42px)",
                    color: active === i ? "#ff138c" : "#111111",
                    transition: "color 0.3s ease",
                  }}
                >
                  {sponsor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Logo — right half, positioned at active row height */}
        <div
          className="absolute right-0 top-0 w-1/2 pointer-events-none hidden lg:block"
          style={{ height: "100%" }}
        >
          {sponsors.map((sponsor, i) => (
            <div
              key={sponsor.name}
              className="absolute right-0 flex items-center justify-center"
              style={{
                top: `${logoPos}px`,
                transform: `translateY(-50%) ${active === i ? "scale(1)" : "scale(0.9)"}`,
                opacity: active === i ? 1 : 0,
                transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), top 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                width: "clamp(120px, 20vw, 240px)",
                height: "clamp(80px, 14vw, 160px)",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/sponsors/${sponsor.slug}-pink.png`}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
