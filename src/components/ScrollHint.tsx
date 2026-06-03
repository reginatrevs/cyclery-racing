"use client";

import { useState, useEffect } from "react";

export function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="flex items-center gap-2 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-black/50">
        Keep scrolling
      </span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-black/50 animate-arrow-pulse">
        <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 13L12 19L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
