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
      className="transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-black/40 animate-pulse">
        Keep scrolling
      </span>
    </div>
  );
}
