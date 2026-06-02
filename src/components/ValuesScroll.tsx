"use client";

import { useState, useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

interface Value {
  title: string;
  description: string;
}

export function ValuesScroll({ values }: { values: Value[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useRef(false);

  useEffect(() => {
    const check = () => {
      const m = window.innerWidth < 1024;
      isMobile.current = m;
      setMobile(m);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile: scroll-based highlighting
  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!isMobile.current) return;
        const midY = window.innerHeight * 0.45;
        let closest: number | null = null;
        let closestDist = Infinity;
        rowRefs.current.forEach((el, i) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const dist = Math.abs(center - midY);
          if (dist < closestDist && rect.top < window.innerHeight && rect.bottom > 0) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(closest);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = setTimeout(onScroll, 200);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, [values.length]);

  return (
    <>
      {values.map((value, i) => (
        <ScrollReveal key={value.title} delay={i * 80}>
          <div
            ref={(el) => { rowRefs.current[i] = el; }}
            className="group grid grid-cols-1 lg:grid-cols-[100px_1fr_320px] gap-4 lg:gap-16 items-start py-12 lg:py-16 border-b border-gray-200"
          >
            <span
              className="uppercase text-gray-400 lg:pt-4"
              style={{ ...fontStyle, fontSize: "12px", fontWeight: 500 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3
              className="font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1] tracking-tight transition-colors duration-300 lg:text-black lg:group-hover:text-magenta"
              style={mobile ? { color: active === i ? "#ff138c" : "#111" } : undefined}
            >
              {value.title}
            </h3>

            <p className="font-body text-sm text-black leading-relaxed lg:pt-4">
              {value.description}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </>
  );
}
