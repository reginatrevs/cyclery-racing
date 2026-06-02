"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Race {
  date: string;
  day: string;
  name: string;
  location: string;
  distance?: string;
  photo?: string;
}

function RaceCard({ race, index }: { race: Race; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Small delay to avoid triggering on initial page load
    const initTimer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Row-based stagger: left card first, right card 200ms later
            const row = Math.floor(index / 2);
            const col = index % 2;
            const delay = row * 250 + col * 200;
            setTimeout(() => setVisible(true), delay);
            observerRef.current?.disconnect();
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
      );
      observerRef.current = observer;
      if (el) observer.observe(el);
    }, 100);
    return () => {
      clearTimeout(initTimer);
      observerRef.current?.disconnect();
    };
  }, [index]);

  return (
    <div
      ref={ref}
      className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-gray-200 hover:border-magenta transition-all flex flex-col justify-end p-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(60px) scale(0.92)",
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Background photo */}
      {race.photo && (
        <Image
          src={race.photo}
          alt={race.name}
          fill
          className="object-cover"
          sizes="50vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Race info */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-display text-xl font-bold text-white leading-none">
            {race.day}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/60">
            {race.date}
          </span>
        </div>
        <h3 className="font-display text-xs font-bold uppercase text-white group-hover:text-magenta transition-colors leading-tight">
          {race.name}
        </h3>
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
          {race.location}
        </span>
      </div>
    </div>
  );
}

export function MobileRaceCards({ races }: { races: Race[] }) {
  return (
    <div className="lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        {races.map((race, i) => (
          <RaceCard key={race.name} race={race} index={i} />
        ))}
      </div>
    </div>
  );
}
