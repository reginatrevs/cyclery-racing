"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

const upcomingRaces = [
  { date: "April 19", name: "Clarence Rockland", location: "Clarence, ON" },
  { date: "April 26", name: "Almonte Roubaix", location: "Almonte, ON" },
  { date: "April 26", name: "Paris 2 Ancaster", location: "Paris, ON" },
  { date: "May 9", name: "Tour of the Battenkill", location: "Batenkill, NY" },
  { date: "May 15–19", name: "Tour de Bloom", location: "Wenatchee, WA" },
  { date: "May 24", name: "Tour de Somerville Weekend", location: "Somerville, NJ" },
  { date: "May 31", name: "Via d'Italia", location: "Windsor, ON" },
  { date: "May 29–31", name: "Charlevoix", location: "Charlevoix, QC" },
  { date: "June 6–7", name: "Ontario Cup 2", location: "Northumberland, ON" },
  { date: "June 13", name: "British Pub Crit", location: "Aylmer, QC" },
  { date: "June 14", name: "Preston Street", location: "Ottawa, ON" },
  { date: "June 26–28", name: "Canadian Nationals", location: "Beauce, QC" },
  { date: "July 3–4", name: "Kingston Stage Race (O Cups 5-7)", location: "Kingston, ON" },
  { date: "July 17–26", name: "Chicago Grit", location: "Chicago, IL" },
  { date: "August 7–9", name: "Road Provincials", location: "Ottawa, ON" },
  { date: "August 30", name: "Philadelphia", location: "Philadelphia, PA" },
  { date: "September 7", name: "Maryland Cycling Classic", location: "Baltimore, MD" },
  { date: "September 8", name: "Buck's County Crit", location: "Buck's County, PA" },
  { date: "Sep 16–17", name: "Tour de Gatineau", location: "Gatineau, QC" },
];

export default function RacesPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useRef(false);

  useEffect(() => {
    const check = () => { isMobile.current = window.innerWidth < 1024; };
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
        setMobileActive(closest);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = setTimeout(onScroll, 200);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <>
      {/* Podium photos — staggered, before title */}
      <section className="pt-28 lg:pt-32 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex gap-3 lg:gap-4 items-end">
            <div className="relative w-[200px] lg:w-[300px] h-[260px] lg:h-[400px] overflow-hidden flex-shrink-0">
              <Image src="/podium/podium1.jpeg" alt="" fill className="object-cover" sizes="300px" />
            </div>
            <div className="relative w-[180px] lg:w-[260px] h-[320px] lg:h-[480px] overflow-hidden flex-shrink-0">
              <Image src="/podium/podium2.jpeg" alt="" fill className="object-cover" sizes="260px" />
            </div>
            <div className="relative w-[220px] lg:w-[340px] h-[240px] lg:h-[360px] overflow-hidden flex-shrink-0">
              <Image src="/podium/podium3.jpeg" alt="" fill className="object-cover" sizes="340px" />
            </div>
            <div className="relative w-[190px] lg:w-[280px] h-[300px] lg:h-[440px] overflow-hidden flex-shrink-0">
              <Image src="/podium/podium4.jpeg" alt="" fill className="object-cover" sizes="280px" />
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
            2026 Season
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black">
            Race Calendar
          </h1>
        </div>
      </section>

      {/* Race List */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="Upcoming" heading="2026 Season" className="mb-12" />
          </ScrollReveal>

          <div onMouseLeave={() => setHovered(null)}>
            {upcomingRaces.map((race, i) => {
              const isActive = isMobile.current ? mobileActive === i : hovered === i;
              return (
                <div
                  key={`${race.name}-${i}`}
                  ref={(el) => { rowRefs.current[i] = el; }}
                  className="cursor-pointer"
                  onMouseEnter={() => { if (!isMobile.current) setHovered(i); }}
                >
                  <div
                    className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-8 py-5 border-b border-gray-200 px-3 -mx-3 transition-all duration-300"
                    style={{
                      opacity: hovered !== null && hovered !== i && !isMobile.current ? 0.3 : 1,
                      transform: hovered === i && !isMobile.current ? "scale(1.01)" : "scale(1)",
                      transformOrigin: "left center",
                    }}
                  >
                    <span
                      className="uppercase w-32 shrink-0 text-gray-400"
                      style={{ ...fontStyle, fontSize: "12px", fontWeight: 500 }}
                    >
                      {race.date}
                    </span>
                    <h3
                      className="flex-1 uppercase leading-none"
                      style={{
                        ...fontStyle,
                        fontWeight: 500,
                        fontSize: "clamp(20px, 2.5vw, 34px)",
                        color: isActive ? "#ff138c" : "#111",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {race.name}
                    </h3>
                    <span
                      className="uppercase text-gray-400 shrink-0"
                      style={{ ...fontStyle, fontSize: "12px", fontWeight: 500 }}
                    >
                      {race.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
