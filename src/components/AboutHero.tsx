"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const words = ["RACING", "MORE", "THIS"];

export function AboutHero() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 250);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about-hero"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-end overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/about-us-hero.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Subtle gradient at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Text — bleeds off edges, semi-transparent */}
      <div
        className="relative z-10 w-full pb-8 lg:pb-12"
        style={{ marginLeft: "-0.04em" }}
      >
        <h1
          className="font-display font-bold uppercase leading-[0.82] tracking-tighter"
          style={{
            fontSize: "clamp(80px, 18vw, 280px)",
            color: "rgba(255, 19, 140, 0.45)",
            whiteSpace: "nowrap",
          }}
        >
          {/* BUILT FOR — static, bleeds left */}
          <span className="block" style={{ marginLeft: "-0.02em" }}>
            BUILT FOR
          </span>

          {/* Flipping word — bleeds right */}
          <span className="block relative overflow-hidden" style={{ height: "0.85em" }}>
            <span
              className="inline-block transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(30px)" : "translateY(0)",
              }}
            >
              {words[index]}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
