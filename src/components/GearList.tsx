"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface GearItem {
  category: string;
  brand: string;
  product: string;
  slug: string;
  url: string;
  image: string;
  secondImage?: string;
  description: string;
}

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

export function GearList({ gear }: { gear: GearItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [imgPos, setImgPos] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mobileActive, setMobileActive] = useState<number | null>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    const check = () => {
      isMobile.current = window.innerWidth < 1024;
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const updateImgPos = useCallback((idx: number) => {
    const row = rowRefs.current[idx];
    const list = listRef.current;
    if (!row || !list) return;
    const listRect = list.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    setImgPos(rowRect.top - listRect.top + rowRect.height / 2);
  }, []);

  // Mobile: IntersectionObserver for scroll-based highlighting
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isMobile.current) return;
        let best: number | null = null;
        let bestRatio = 0;
        entries.forEach((entry) => {
          const idx = mobileRowRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            best = idx;
          }
        });
        if (best !== null) {
          setMobileActive(best);
        }
      },
      { threshold: [0, 0.3, 0.6, 1], rootMargin: "-30% 0px -30% 0px" }
    );
    const timer = setTimeout(() => {
      mobileRowRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });
    }, 100);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [gear.length]);

  // Desktop: track mouse Y
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile.current) return;
      for (let i = 0; i < rowRefs.current.length; i++) {
        const row = rowRefs.current[i];
        if (!row) continue;
        const rect = row.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          setActive(i);
          updateImgPos(i);
          return;
        }
      }
      setActive(null);
    },
    [updateImgPos]
  );

  return (
    <>
      {/* Desktop layout */}
      <div
        className="relative hidden lg:block"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActive(null)}
      >
        <div ref={listRef} className="relative">
          {/* List — left side */}
          <div className="w-[55%]">
            {gear.map((item, i) => (
              <a
                key={item.brand}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  ref={(el) => {
                    rowRefs.current[i] = el;
                  }}
                  className="py-6 border-b border-gray-200 cursor-pointer"
                  style={{
                    opacity: active !== null && active !== i ? 0.25 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <div className="flex items-baseline gap-3 mb-2">
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
                      {item.brand}
                    </h3>
                  </div>
                  <p
                    className="font-display text-sm font-bold uppercase text-black/50 ml-8 mb-2"
                    style={{
                      color: active === i ? "#ff138c" : undefined,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.product}
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed ml-8 max-w-md"
                    style={{
                      color: active === i ? "#111111" : "#9ca3af",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Product image — right side, follows active row */}
          <div
            className="absolute right-0 top-0 w-[40%] pointer-events-none"
            style={{ height: "100%" }}
          >
            {gear.map((item, i) => (
              <div
                key={item.brand}
                className="absolute right-0 flex items-center justify-center"
                style={{
                  top: `${imgPos}px`,
                  transform: `translateY(-50%) ${active === i ? "scale(1)" : "scale(0.95)"}`,
                  opacity: active === i ? 1 : 0,
                  transition:
                    "opacity 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), top 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  width: "clamp(200px, 28vw, 400px)",
                  height: "clamp(160px, 22vw, 320px)",
                }}
              >
                {item.secondImage ? (
                  <div className="relative w-full h-full flex gap-2">
                    <div className="relative w-1/2 h-full">
                      <Image
                        src={item.image}
                        alt={item.product}
                        fill
                        className="object-contain"
                        sizes="14vw"
                      />
                    </div>
                    <div className="relative w-1/2 h-full">
                      <Image
                        src={item.secondImage}
                        alt={item.product}
                        fill
                        className="object-contain"
                        sizes="14vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.product}
                      fill
                      className="object-contain"
                      sizes="28vw"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout — unified cards with scroll-based highlighting */}
      <div className="lg:hidden space-y-6">
        {gear.map((item, i) => (
          <a
            key={`mobile-${item.brand}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              ref={(el) => {
                mobileRowRefs.current[i] = el;
              }}
              style={{
                opacity: mobileActive !== null && mobileActive !== i ? 0.35 : 1,
                transition: "opacity 0.4s ease",
              }}
            >
              {/* Image */}
              <div className="bg-gray-50 rounded-sm aspect-[4/3] relative overflow-hidden mb-4">
                {item.secondImage ? (
                  <div className="flex items-center justify-center gap-3 w-full h-full px-6">
                    <div className="relative w-1/2 h-3/4">
                      <Image
                        src={item.image}
                        alt={item.product}
                        fill
                        className="object-contain"
                        sizes="50vw"
                      />
                    </div>
                    <div className="relative w-1/2 h-3/4">
                      <Image
                        src={item.secondImage}
                        alt={item.product}
                        fill
                        className="object-contain"
                        sizes="50vw"
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.product}
                    fill
                    className="object-contain p-6"
                    sizes="100vw"
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="text-[9px] text-gray-400 tabular-nums leading-none"
                  style={{
                    ...fontStyle,
                    fontWeight: 500,
                    position: "relative",
                    top: "-0.4em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="leading-none uppercase"
                  style={{
                    ...fontStyle,
                    fontWeight: 500,
                    fontSize: "clamp(20px, 5vw, 32px)",
                    color:
                      mobileActive === i ? "#ff138c" : "#111111",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.brand}
                </h3>
              </div>
              <p
                className="font-display text-xs font-bold uppercase mb-1"
                style={{
                  color:
                    mobileActive === i
                      ? "#ff138c"
                      : "rgba(0,0,0,0.4)",
                  transition: "color 0.3s ease",
                  marginLeft: "1.25rem",
                }}
              >
                {item.product}
              </p>
              <p
                className="font-body text-sm text-gray-400 leading-relaxed"
                style={{ marginLeft: "1.25rem" }}
              >
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
