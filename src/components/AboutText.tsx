"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

function Highlight({ children, color = "lime" }: { children: React.ReactNode; color?: "lime" | "pink" }) {
  const bg = color === "lime" ? "rgba(205, 255, 0, 0.55)" : "rgba(255, 19, 140, 0.3)";
  return (
    <span
      className="relative inline transition-colors duration-300 cursor-default"
      style={{
        backgroundImage: `linear-gradient(${bg}, ${bg})`,
        backgroundSize: "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        transition: "background-size 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundSize = "100% 100%";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundSize = "0% 100%";
      }}
    >
      {children}
    </span>
  );
}

function useTeamAge() {
  const [elapsed, setElapsed] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const start = new Date("2008-01-01T00:00:00-05:00").getTime();

    function calc() {
      const now = new Date();
      const totalSeconds = Math.floor((now.getTime() - start) / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);

      const seconds = totalSeconds % 60;
      const minutes = totalMinutes % 60;
      const hours = totalHours % 24;

      const startDate = new Date(2008, 0, 1);
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const prev = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prev.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setElapsed({ years, months, days, hours, minutes, seconds });
    }

    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  return elapsed;
}

// Collage photos — scattered around the counter, draggable
const collagePhotos = [
  { src: "/about-gallery-1.jpg", alt: "Cyclery Racing", w: 210, h: 260, top: "0%", left: "2%", rotate: -6 },
  { src: "/about-gallery-2.webp", alt: "Cyclery Racing", w: 195, h: 240, top: "-4%", right: "4%", rotate: 5 },
  { src: "/about-gallery-3.jpeg", alt: "Cyclery Racing", w: 185, h: 230, bottom: "0%", left: "12%", rotate: 3 },
  { src: "/about-gallery-4.jpeg", alt: "Cyclery Racing", w: 200, h: 250, bottom: "-2%", right: "2%", rotate: -4 },
  { src: "/about-gallery-5.jpg", alt: "Cyclery Racing", w: 175, h: 220, top: "-6%", left: "22%", rotate: 3 },
  { src: "/about-gallery-6.jpg", alt: "Cyclery Racing", w: 170, h: 215, bottom: "-10%", right: "18%", rotate: -4 },
  { src: "/about-gallery-7.jpg", alt: "Cyclery Racing", w: 180, h: 230, bottom: "-8%", left: "42%", rotate: 2 },
];

function DraggablePhoto({ photo }: { photo: typeof collagePhotos[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [zBump, setZBump] = useState(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    dragState.current = { startX: e.clientX, startY: e.clientY, origX: offset.x, origY: offset.y };
    setDragging(true);
    setZBump(true);
  }, [offset]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    setOffset({ x: dragState.current.origX + dx, y: dragState.current.origY + dy });
  }, []);

  const handlePointerUp = useCallback(() => {
    dragState.current = null;
    setDragging(false);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute shadow-xl overflow-hidden select-none touch-none"
      style={{
        width: `${photo.w}px`,
        height: `${photo.h}px`,
        top: photo.top,
        left: photo.left,
        right: photo.right,
        bottom: photo.bottom,
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${dragging ? 0 : photo.rotate}deg) scale(${dragging ? 1.04 : 1})`,
        transition: dragging ? "none" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        zIndex: zBump ? 20 : 10,
        cursor: dragging ? "grabbing" : "grab",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover pointer-events-none grayscale"
        sizes="260px"
        draggable={false}
        loading="eager"
      />
    </div>
  );
}

// Mobile: scattered photo pile — draggable with touch
function MobileDraggablePhoto({ photo, pos, zIndex, onDragStart }: {
  photo: typeof collagePhotos[number];
  pos: { top: string; left: string; rotate: number };
  zIndex: number;
  onDragStart: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    dragState.current = { startX: e.clientX, startY: e.clientY, origX: offset.x, origY: offset.y };
    setDragging(true);
    onDragStart();
  }, [offset, onDragStart]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    setOffset({ x: dragState.current.origX + dx, y: dragState.current.origY + dy });
  }, []);

  const handlePointerUp = useCallback(() => {
    dragState.current = null;
    setDragging(false);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute shadow-lg overflow-hidden select-none touch-none"
      style={{
        width: "130px",
        height: "165px",
        top: pos.top,
        left: pos.left,
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${dragging ? 0 : pos.rotate}deg) scale(${dragging ? 1.06 : 1})`,
        transition: dragging ? "none" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        zIndex,
        cursor: dragging ? "grabbing" : "grab",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover grayscale"
        sizes="130px"
        draggable={false}
      />
    </div>
  );
}

function MobilePhotoCollage({ photos }: { photos: typeof collagePhotos }) {
  const [topIdx, setTopIdx] = useState(-1);
  const [zCounter, setZCounter] = useState(10);

  const mobilePositions = [
    { top: "5%", left: "8%", rotate: -8 },
    { top: "0%", left: "52%", rotate: 6 },
    { top: "45%", left: "15%", rotate: 4 },
    { top: "42%", left: "48%", rotate: -5 },
    { top: "22%", left: "32%", rotate: 3 },
    { top: "60%", left: "5%", rotate: -6 },
    { top: "58%", left: "45%", rotate: 5 },
  ];

  const zIndexes = useRef(photos.map((_, i) => i + 1));

  const bringToTop = (idx: number) => {
    const next = zCounter + 1;
    zIndexes.current[idx] = next;
    setZCounter(next);
    setTopIdx(idx);
  };

  return (
    <div className="relative mx-auto mb-8" style={{ width: "280px", height: "420px" }}>
      {photos.map((photo, i) => (
        <MobileDraggablePhoto
          key={photo.src}
          photo={photo}
          pos={mobilePositions[i]}
          zIndex={zIndexes.current[i]}
          onDragStart={() => bringToTop(i)}
        />
      ))}
    </div>
  );
}

export function AboutText() {
  const sectionRef = useRef<HTMLElement>(null);
  const { years, months, days, hours, minutes, seconds } = useTeamAge();

  // Mobile: auto-highlight key phrases as they scroll into view
  useEffect(() => {
    if (typeof window === "undefined") return;
    const spans = sectionRef.current?.querySelectorAll("[data-auto-highlight]");
    if (!spans) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.backgroundSize = "100% 100%";
          }
        });
      },
      { threshold: 0.8, rootMargin: "0px 0px -20% 0px" }
    );

    spans.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const counterItems = [
    { value: years, label: "Years" },
    { value: months, label: "Months" },
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Sec" },
  ];

  return (
    <section ref={sectionRef}>
      {/* Text — off-centered with white space on left */}
      <div className="px-6 pt-14 lg:pt-20 pb-10 lg:pb-14">
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:ml-[18%] lg:max-w-[65%]">
            <p className="font-body text-xl lg:text-2xl text-black font-semibold leading-[1.35] mb-6">
              We&apos;re{" "}
              <Highlight color="lime">
                <span data-auto-highlight>one of Canada&apos;s oldest continually running women&apos;s cycling programs</span>
              </Highlight>
              {" "}and one of its most successful.
            </p>

            <p className="font-body text-base lg:text-lg text-black leading-[1.6] mb-6">
              Based in Ottawa, we develop and support female cyclists across elite,
              U23, and junior categories. Over the last decade we&apos;ve won{" "}
              <Highlight color="pink">
                <span data-auto-highlight>six national road and time trial championships</span>
              </Highlight>
              , sent{" "}
              <Highlight color="pink">
                <span data-auto-highlight>three riders to the Olympic Games</span>
              </Highlight>
              , and seen{" "}
              <Highlight color="lime">
                <span data-auto-highlight>seven athletes turn professional</span>
              </Highlight>
              {" "}for UCI teams. Over a dozen of our riders have represented Canada
              on the international stage.
            </p>

            <p className="font-body text-base lg:text-lg text-black leading-[1.6]">
              No other women&apos;s program in Canada has a track record like ours,
              and we&apos;re just getting started.
            </p>
          </div>
        </div>
      </div>

      {/* Counter with collage photos */}
      <div className="relative overflow-hidden py-16 lg:py-24 px-6">
        {/* Handwritten drag hint — desktop only, centered above counter */}
        <p
          className="hidden lg:block max-w-[1440px] mx-auto mb-6 pointer-events-none text-center"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "20px",
            color: "rgba(255, 19, 140, 0.45)",
            transform: "rotate(-3deg)",
          }}
        >
          psst... drag the photos around!
        </p>
        {/* Desktop: relative container with draggable photos + counter */}
        <div className="hidden lg:block max-w-[1440px] mx-auto relative" style={{ minHeight: "clamp(440px, 52vw, 660px)" }}>
          {/* Draggable scattered photos */}
          {collagePhotos.map((photo) => (
            <DraggablePhoto key={photo.src} photo={photo} />
          ))}

          {/* Big counter — centered behind photos */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] pointer-events-none">
            <p
              className="uppercase mb-8 text-center font-display font-bold tracking-wide"
              style={{ fontSize: "clamp(18px, 2vw, 28px)", color: "#ff138c" }}
            >
              We&apos;ve been riding for
            </p>
            <div className="flex items-baseline gap-0">
              {counterItems.map((item, i) => (
                <div key={item.label} className="flex items-baseline">
                  <div className="text-center px-1">
                    <span
                      className="block tabular-nums leading-none"
                      style={{ ...fontStyle, fontSize: "clamp(60px, 7vw, 100px)", fontWeight: 800, color: "#ff138c" }}
                    >
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span
                      className="block uppercase mt-2"
                      style={{ ...fontStyle, fontSize: "11px", fontWeight: 600, color: "rgba(255, 19, 140, 0.45)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {i < counterItems.length - 1 && (
                    <span
                      className="leading-none select-none"
                      style={{ ...fontStyle, fontSize: "clamp(30px, 3.5vw, 50px)", fontWeight: 300, color: "rgba(255, 19, 140, 0.25)" }}
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p
              className="uppercase mt-6 text-center"
              style={{ ...fontStyle, fontSize: "11px", fontWeight: 500, color: "rgba(255, 19, 140, 0.4)" }}
            >
              Ottawa, ON
            </p>
          </div>
        </div>

        {/* Mobile: scattered collage + counter */}
        <div className="lg:hidden">
          {/* Handwritten hint — mobile */}
          <p
            className="text-center mb-4 pointer-events-none"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "17px",
              color: "rgba(255, 19, 140, 0.45)",
              transform: "rotate(-2deg)",
            }}
          >
            move the photos around!
          </p>

          {/* Scattered photo pile */}
          <MobilePhotoCollage photos={collagePhotos} />

          {/* Counter */}
          <div className="flex flex-col items-center">
            <p
              className="uppercase mb-4 text-center font-display font-bold tracking-wide"
              style={{ fontSize: "14px", color: "#ff138c" }}
            >
              We&apos;ve been riding for
            </p>
            <div className="flex items-baseline gap-1">
              {counterItems.map((item, i) => (
                <div key={item.label} className="flex items-baseline">
                  <div className="text-center">
                    <span
                      className="block tabular-nums leading-none"
                      style={{ ...fontStyle, fontSize: "42px", fontWeight: 800, color: "#ff138c" }}
                    >
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span
                      className="block uppercase mt-1"
                      style={{ ...fontStyle, fontSize: "7px", fontWeight: 600, color: "rgba(255, 19, 140, 0.45)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {i < counterItems.length - 1 && (
                    <span
                      className="leading-none select-none mx-0.5"
                      style={{ ...fontStyle, fontSize: "24px", fontWeight: 300, color: "rgba(255, 19, 140, 0.25)" }}
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p
              className="uppercase mt-3 text-center"
              style={{ ...fontStyle, fontSize: "9px", fontWeight: 500, color: "rgba(255, 19, 140, 0.4)" }}
            >
              Ottawa, ON
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
