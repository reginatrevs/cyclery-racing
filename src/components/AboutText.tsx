"use client";

import { useEffect, useRef, useState } from "react";
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
        transition: "background-size 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
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
    const start = new Date("2008-01-01T00:00:00-05:00").getTime(); // January 2008, Ottawa time

    function calc() {
      // Use Ottawa timezone for display
      const now = new Date();
      const diff = now.getTime() - start;

      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      const seconds = totalSeconds % 60;
      const minutes = totalMinutes % 60;
      const hours = totalHours % 24;

      // Calculate years, months, days from date diff
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
    const timer = setInterval(calc, 1000); // update every second
    return () => clearInterval(timer);
  }, []);

  return elapsed;
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

  return (
    <section
      ref={sectionRef}
      className="py-10 lg:py-16 px-6"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Left side — photo + counter stacked tight */}
          <div className="relative order-2 lg:order-1 flex flex-col justify-end">
            {/* Small square photo */}
            <div className="relative w-[140px] lg:w-[160px] aspect-square overflow-hidden mb-4">
              <Image
                src="/splash-desktop.jpg"
                alt="Cyclery Racing"
                fill
                className="object-cover grayscale"
                sizes="160px"
              />
            </div>

            {/* Counter — pink, tight under photo */}
            <div>
              <p
                className="uppercase mb-2"
                style={{ ...fontStyle, fontSize: "12px", fontWeight: 600, color: "#ff138c" }}
              >
                We&apos;ve been riding for
              </p>
              <div className="flex gap-3">
                {[
                  { value: years, label: "Yrs" },
                  { value: months, label: "Mo" },
                  { value: days, label: "Days" },
                  { value: hours, label: "Hrs" },
                  { value: minutes, label: "Min" },
                  { value: seconds, label: "Sec" },
                ].map((item) => (
                  <div key={item.label}>
                    <span
                      className="block tabular-nums leading-none"
                      style={{ ...fontStyle, fontSize: "24px", fontWeight: 700, color: "#ff138c" }}
                    >
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span
                      className="block uppercase text-gray-400 mt-0.5"
                      style={{ ...fontStyle, fontSize: "8px", fontWeight: 500 }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="uppercase text-gray-400 mt-2"
                style={{ ...fontStyle, fontSize: "10px", fontWeight: 500 }}
              >
                Ottawa, ON — EST
              </p>
            </div>
          </div>

          {/* Right side — text */}
          <div className="order-1 lg:order-2 lg:pr-12">
            <p
              className="font-body text-xl lg:text-2xl text-black font-semibold leading-[1.35] mb-6"
            >
              We&apos;re{" "}
              <Highlight color="lime">
                <span data-auto-highlight>one of Canada&apos;s oldest continually running women&apos;s cycling programs</span>
              </Highlight>
              {" "}&mdash; and one of its most successful.
            </p>

            <p
              className="font-body text-base lg:text-lg text-black leading-[1.6] mb-6"
            >
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

            <p
              className="font-body text-base lg:text-lg text-black leading-[1.6]"
            >
              No other women&apos;s program in Canada has a track record like ours.
              We&apos;re a proud affiliate member of{" "}
              <Highlight color="lime">
                <span data-auto-highlight>Cycling Canada&apos;s 1882 Collective</span>
              </Highlight>
              {" "}national fundraising initiative, and we&apos;re just getting started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
