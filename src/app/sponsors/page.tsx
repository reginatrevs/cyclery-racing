"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

const sponsors = [
  { name: "The Cyclery", slug: "cyclery", url: "https://thecyclery.ca" },
  { name: "Factor", slug: "factor", url: "https://factorbikes.com" },
  { name: "SRAM", slug: "sram", url: "https://sram.com" },
  { name: "Mark Motors", slug: "mark-motors", url: "https://markmotorsofottawa.com" },
  { name: "Castelli", slug: "castelli", url: "https://castelli-cycling.com" },
  { name: "Smith", slug: "smith", url: "https://smithoptics.com" },
  { name: "Look", slug: "look", url: "https://lookcycle.com" },
  { name: "Pirelli", slug: "pirelli", url: "https://pirelli.com/cycling" },
  { name: "HLC", slug: "hlc", url: "https://hlc.com" },
  { name: "Bont", slug: "bont", url: "https://bfrdsrl.com" },
  { name: "Skratch Labs", slug: "skratch", url: "https://skratchlabs.com" },
  { name: "Physio Bike Fitter", slug: "physio", url: "#" },
];

const benefits = [
  {
    title: "Brand Visibility",
    description:
      "Logo on kit, bikes, team vehicles, and all race-day materials. Seen at every event across North America.",
  },
  {
    title: "Social & Content",
    description:
      "Dedicated social media features, story takeovers, and content collaborations reaching our engaged cycling audience.",
  },
  {
    title: "Community Impact",
    description:
      "Associate your brand with a movement advancing women's cycling. Real impact, real stories, real representation.",
  },
  {
    title: "Tailored Partnerships",
    description:
      "Every partnership is different. Whether it's branded vehicles, in-store events, or custom activations, we build sponsorships that make sense for your industry and audience.",
  },
];

export default function SponsorsPage() {
  const [hoveredSponsor, setHoveredSponsor] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useRef(false);

  useEffect(() => {
    const check = () => { isMobile.current = window.innerWidth < 1024; };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile: scroll-based benefit card activation
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
        benefitRefs.current.forEach((el, i) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const dist = Math.abs(center - midY);
          if (dist < closestDist && rect.top < window.innerHeight && rect.bottom > 0) {
            closestDist = dist;
            closest = i;
          }
        });
        setHoveredBenefit(closest);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = setTimeout(onScroll, 200);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <>
      {/* Hero — title + intro text */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black tracking-tight mb-6">
            Sponsors
          </h1>

          <p className="font-body text-base lg:text-lg text-black leading-relaxed max-w-2xl">
            We&apos;re proud to partner with brands that believe in the future of
            women&apos;s cycling. Our sponsors make it possible for us to compete,
            develop talent, and push the sport forward.
          </p>
        </div>
      </section>

      {/* Sponsor Grid — logos, no borders, pink on hover */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Abacus Data — title sponsor, bigger */}
          <ScrollReveal>
            <a
              href="https://abacusdata.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer flex flex-col items-center justify-center py-12 lg:py-20 mb-4"
              onMouseEnter={() => setHoveredSponsor(-1)}
              onMouseLeave={() => setHoveredSponsor(null)}
            >
              <span
                className="uppercase text-magenta mb-4"
                style={{ ...fontStyle, fontSize: "10px", fontWeight: 600 }}
              >
                Title Sponsor
              </span>
              <div className="relative h-[60px] lg:h-[100px] w-[280px] lg:w-[400px]">
                {/* Black logo — default */}
                <Image
                  src="/sponsors/abacus-black.png"
                  alt="Abacus Data"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Pink logo — hover */}
                <Image
                  src="/sponsors/abacus-pink.png"
                  alt="Abacus Data"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </a>
          </ScrollReveal>

          {/* Rest of sponsors — clean grid, no borders */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            onMouseLeave={() => setHoveredSponsor(null)}
          >
            {sponsors.map((sponsor, i) => (
              <ScrollReveal key={sponsor.name} delay={i * 50}>
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center h-[120px] lg:h-[160px] group cursor-pointer transition-colors"
                  onMouseEnter={() => setHoveredSponsor(i)}
                >
                  {"textOnly" in sponsor && sponsor.textOnly ? (
                    <span
                      className="uppercase text-center select-none transition-colors duration-300 text-black group-hover:text-magenta"
                      style={{ ...fontStyle, fontSize: "clamp(14px, 2vw, 20px)", fontWeight: 700 }}
                    >
                      {sponsor.name}
                    </span>
                  ) : (
                    <div className="relative h-[48px] lg:h-[64px] w-[140px] lg:w-[200px]">
                      <Image
                        src={`/sponsors/${sponsor.slug}-black.png`}
                        alt={sponsor.name}
                        fill
                        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <Image
                        src={`/sponsors/${sponsor.slug}-pink.png`}
                        alt={sponsor.name}
                        fill
                        className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                  )}
                  {/* Name text on hover */}
                  <span
                    className="absolute bottom-3 uppercase transition-all duration-300 text-center"
                    style={{
                      ...fontStyle,
                      fontSize: "9px",
                      fontWeight: 500,
                      color: "#ff138c",
                      opacity: hoveredSponsor === i ? 0.6 : 0,
                      transform: hoveredSponsor === i ? "translateY(0)" : "translateY(4px)",
                    }}
                  >
                    {sponsor.name}
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA — light pink section, left-aligned */}
      <section className="px-6 py-20 lg:py-28" style={{ backgroundColor: "#ffe8f0" }}>
        <div className="max-w-[1440px] mx-auto">
          {/* CTA — left aligned */}
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <p
                className="uppercase mb-4"
                style={{ ...fontStyle, fontSize: "11px", fontWeight: 500, color: "rgba(0,0,0,0.35)" }}
              >
                Interested?
              </p>
              <h2 className="font-display text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.9] text-black tracking-tight mb-6">
                Let&apos;s Talk
              </h2>
              <p className="font-body text-base text-black leading-relaxed mb-10">
                We love working with brands that believe in what we&apos;re building.
                Whether it&apos;s race-day visibility, content collaboration, or something
                completely custom, reach out and let&apos;s figure it out together.
              </p>
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>

          {/* Sponsor Benefits heading */}
          <ScrollReveal>
            <p
              className="uppercase mb-6"
              style={{ ...fontStyle, fontSize: "11px", fontWeight: 600, color: "rgba(0,0,0,0.35)" }}
            >
              Sponsor Benefits
            </p>
          </ScrollReveal>

          {/* Benefits cards — hover to light pink */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            onMouseLeave={() => setHoveredBenefit(null)}
          >
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 80}>
                <div
                  ref={(el) => { benefitRefs.current[i] = el; }}
                  className="relative aspect-[5/4] lg:aspect-[3/4] flex flex-col justify-between p-6 lg:p-9 cursor-pointer group transition-all duration-500"
                  onMouseEnter={() => { if (!isMobile.current) setHoveredBenefit(i); }}
                  style={{
                    backgroundColor: hoveredBenefit === i ? "#fff0f5" : "rgba(255,255,255,0.5)",
                    border: "1px solid",
                    borderColor: hoveredBenefit === i ? "#ff138c" : "transparent",
                  }}
                >
                  {/* Number + Title at top */}
                  <div>
                    <span
                      className="block uppercase mb-3"
                      style={{
                        ...fontStyle,
                        fontSize: "10px",
                        fontWeight: 600,
                        color: hoveredBenefit === i ? "#ff138c" : "rgba(0,0,0,0.3)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display text-[clamp(22px,2.5vw,32px)] font-bold uppercase leading-tight transition-colors duration-300"
                      style={{ color: hoveredBenefit === i ? "#ff138c" : "#111" }}
                    >
                      {b.title}
                    </span>
                  </div>

                  {/* Description at bottom */}
                  <p
                    className="font-body text-sm text-black leading-relaxed transition-all duration-500"
                  >
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
