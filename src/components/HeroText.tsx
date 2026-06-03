"use client";

import { useState, useEffect, useRef } from "react";

const fullText =
  "A pioneering force in Canadian women's cycling. One of the country's longest running teams, built on a legacy of performance and progression.";

export function HeroText() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Wait for loading screen to finish before typing
    const delay = setTimeout(() => {
      let i = 0;
      timerRef.current = setInterval(() => {
        i++;
        setDisplayed(fullText.slice(0, i));
        if (i >= fullText.length) {
          if (timerRef.current) clearInterval(timerRef.current);
          setDone(true);
        }
      }, 25);
    }, 1800);

    return () => {
      clearTimeout(delay);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <p className="font-display text-[clamp(16px,2vw,26px)] font-bold leading-[1.3] text-black">
      {displayed}
      {!done && (
        <span className="inline-block w-[2px] h-[1em] bg-black/70 ml-0.5 align-middle animate-pulse" />
      )}
    </p>
  );
}
