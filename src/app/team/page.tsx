"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const riders = [
  { name: "Emily Driedger", category: "Elite", disciplines: ["Road", "Track"], photo: "emily" },
  { name: "Sara Everson", category: "Elite", disciplines: ["Road", "Track", "Cyclocross"], photo: "sara" },
  { name: "Skyler Goudswaard", category: "Elite", disciplines: ["Road", "Track"], photo: "skyler" },
  { name: "Annie Scott", category: "Elite", disciplines: ["Road", "Track", "Cyclocross"], photo: "annie" },
  { name: "Raylan Stroud", category: "Elite", disciplines: ["Road", "Cyclocross"], photo: "raylan" },
  { name: "Dylan Baker", category: "U23", disciplines: ["Road", "Track"], photo: "dylan" },
  { name: "Cadie Geertsma", category: "U23", disciplines: ["Road"], photo: "cadie" },
  { name: "Kristen Taylor", category: "U23", disciplines: ["Road", "Track", "Cyclocross"], photo: "kristen" },
  { name: "Alexandra Fangeat", category: "Junior", disciplines: ["Road", "Track"], photo: "alex" },
  { name: "Elly Moore", category: "Junior", disciplines: ["Road", "Track", "Cyclocross"], photo: "elly" },
];

const filterItems = ["All", "Elite", "U23", "Junior", "Road", "Track", "Cyclocross"];
const categories = ["Elite", "U23", "Junior"];

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredFilter, setHoveredFilter] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"gallery" | "list">("gallery");
  const [hoveredRider, setHoveredRider] = useState<number | null>(null);

  const filtered = riders.filter((rider) => {
    if (activeFilter === "All") return true;
    if (categories.includes(activeFilter)) return rider.category === activeFilter;
    return rider.disciplines.includes(activeFilter);
  });

  return (
    <>
      {/* Sticky left + scrolling cards right */}
      <section className="pt-24 lg:pt-28 pb-32 lg:pb-48 px-6 min-h-screen">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left — sticky info */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h1
                  className="font-display text-[clamp(36px,5vw,64px)] font-bold uppercase leading-[0.9] text-black mb-4"
                >
                  2026 Team
                </h1>

                <p className="font-body text-sm text-black leading-relaxed mb-4 max-w-xs">
                  A diverse roster of elite, U23, and junior athletes
                  competing across road, track, and cyclocross disciplines.
                </p>

                <p
                  className="uppercase mb-3"
                  style={{ ...fontStyle, fontSize: "12px", fontWeight: 500, color: "lab(76 0 -0.01)" }}
                >
                  Scroll or filter to browse
                </p>

                {/* View toggle */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setViewMode("gallery")}
                    className="uppercase transition-colors duration-300"
                    style={{
                      ...fontStyle,
                      fontSize: "12px",
                      fontWeight: viewMode === "gallery" ? 700 : 500,
                      color: viewMode === "gallery" ? "#ff138c" : "#999",
                    }}
                  >
                    Gallery
                  </button>
                  <span style={{ color: "#ddd" }}>|</span>
                  <button
                    onClick={() => setViewMode("list")}
                    className="uppercase transition-colors duration-300"
                    style={{
                      ...fontStyle,
                      fontSize: "12px",
                      fontWeight: viewMode === "list" ? 700 : 500,
                      color: viewMode === "list" ? "#ff138c" : "#999",
                    }}
                  >
                    List
                  </button>
                </div>

                {/* Filter list */}
                <div className="pb-2">
                  <p
                    className="uppercase"
                    style={{ ...fontStyle, fontSize: "11px", fontWeight: 600, color: "lab(76 0 -0.01)" }}
                  >Category</p>
                </div>
                <div
                  className="border-t border-gray-200"
                  onMouseLeave={() => setHoveredFilter(null)}
                >
                  {filterItems.map((item, i) => {
                    // Add divider between categories and disciplines
                    const showDivider = item === "Road" && i > 0;
                    const isActive = activeFilter === item;

                    return (
                      <div key={item}>
                        {showDivider && (
                          <div className="pt-4 pb-2">
                            <p
                              className="uppercase"
                              style={{ ...fontStyle, fontSize: "11px", fontWeight: 600, color: "lab(76 0 -0.01)" }}
                            >Disciplines</p>
                          </div>
                        )}
                        <div
                          className="border-b border-gray-200 cursor-pointer"
                          onMouseEnter={() => setHoveredFilter(i)}
                          onClick={() => setActiveFilter(item)}
                        >
                          <div
                            className="py-2 flex items-baseline gap-3"
                          style={{
                            opacity: hoveredFilter !== null && hoveredFilter !== i ? 0.4 : 1,
                            transform: hoveredFilter === i ? "translateX(4px)" : "translateX(0)",
                            transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        >
                          {/* Active dot */}
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300"
                            style={{
                              backgroundColor: isActive ? "#ff138c" : "transparent",
                              transform: isActive ? "scale(1)" : "scale(0)",
                            }}
                          />
                          <span
                            className="uppercase leading-none"
                            style={{
                              ...fontStyle,
                              fontWeight: isActive ? 700 : 500,
                              fontSize: "15px",
                              color: isActive ? "#ff138c" : hoveredFilter === i ? "#111" : "#999",
                              transition: "color 0.3s ease",
                            }}
                          >
                            {item}
                          </span>
                          <span
                            className="ml-auto tabular-nums"
                            style={{
                              ...fontStyle,
                              fontSize: "12px",
                              color: isActive ? "#ff138c" : "#999",
                              transition: "color 0.3s ease",
                            }}
                          >
                            ( {item === "All"
                              ? riders.length
                              : categories.includes(item)
                                ? riders.filter(r => r.category === item).length
                                : riders.filter(r => r.disciplines.includes(item)).length
                            } )
                          </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* Right — rider cards or list */}
            <div className="lg:col-span-8">
              {filtered.length > 0 ? (
                viewMode === "gallery" ? (
                  /* ---- GALLERY VIEW ---- */
                  <div className="relative">
                    {filtered.map((rider, i) => {
                      const idx = riders.indexOf(rider);
                      const positions = [
                        "ml-0",
                        "ml-[45%] mt-6",
                        "ml-[10%] mt-4",
                        "ml-[50%] -mt-8",
                        "ml-0 mt-6",
                        "ml-[35%] mt-4",
                        "ml-[5%] mt-8",
                        "ml-[48%] -mt-4",
                        "ml-[15%] mt-6",
                        "ml-[40%] mt-4",
                      ];
                      const position = positions[i % positions.length];

                      return (
                        <ScrollReveal key={rider.name} delay={i * 100} className={`w-[45%] lg:w-[42%] ${position}`}>
                          <div className="group">
                            <div className="border border-gray-200 overflow-hidden transition-colors hover:border-magenta">
                              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                                {/* BW photo — default */}
                                <Image
                                  src={`/team-bw/${rider.photo}-bw.jpg`}
                                  alt={rider.name}
                                  fill
                                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                                  sizes="(max-width: 1024px) 45vw, 35vw"
                                />
                                {/* Color photo — on hover */}
                                <Image
                                  src={`/team-color/${rider.photo}-color.jpg`}
                                  alt={rider.name}
                                  fill
                                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                  sizes="(max-width: 1024px) 45vw, 35vw"
                                />
                              </div>
                            </div>
                            <div className="pt-2 pb-4">
                              <p
                                className="uppercase text-magenta mb-1"
                                style={{ ...fontStyle, fontSize: "11px", fontWeight: 600 }}
                              >
                                {rider.category}
                              </p>
                              <h3 className="font-display text-sm lg:text-base font-bold uppercase text-black group-hover:text-magenta transition-colors leading-tight mb-2">
                                {rider.name}
                              </h3>
                              <div className="flex flex-wrap gap-1.5">
                                {rider.disciplines.map((disc) => (
                                  <span
                                    key={disc}
                                    className="font-body text-[9px] font-semibold uppercase tracking-[0.05em] px-3 py-1 rounded-full border border-black text-black group-hover:border-magenta group-hover:text-magenta transition-colors"
                                  >
                                    {disc}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                ) : (
                  /* ---- LIST VIEW — right-aligned, dimming on hover ---- */
                  <div
                    className="text-right ml-auto"
                    onMouseLeave={() => setHoveredRider(null)}
                  >
                    {filtered.map((rider, i) => {
                      const isHovered = hoveredRider === i;
                      return (
                        <ScrollReveal key={rider.name} delay={i * 40}>
                          <div
                            className="cursor-default py-[4px]"
                            onMouseEnter={() => setHoveredRider(i)}
                            style={{
                              opacity: hoveredRider !== null && !isHovered ? 0.25 : 1,
                              transition: "opacity 0.3s ease",
                            }}
                          >
                            <h3
                              className="uppercase leading-none transition-colors duration-300 text-right"
                              style={{
                                ...fontStyle,
                                fontSize: "clamp(22px, 3vw, 38px)",
                                fontWeight: 500,
                                color: isHovered ? "#ff138c" : "#111",
                              }}
                            >
                              {rider.name}
                            </h3>

                            {/* Subtle fade below name — category + discipline pills */}
                            <div
                              className="flex items-center gap-2 justify-end transition-all duration-500 ease-out overflow-hidden"
                              style={{
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? "translateY(0)" : "translateY(-4px)",
                                height: isHovered ? "24px" : "0px",
                                marginTop: isHovered ? "4px" : "0px",
                              }}
                            >
                              <span
                                className="uppercase"
                                style={{ ...fontStyle, fontSize: "10px", fontWeight: 500, color: "#ff138c" }}
                              >
                                {rider.category}
                              </span>
                              {rider.disciplines.map((disc) => (
                                <span
                                  key={disc}
                                  className="font-body text-[8px] font-semibold uppercase tracking-[0.05em] px-2.5 py-0.5 rounded-full border border-gray-300 text-gray-500"
                                >
                                  {disc}
                                </span>
                              ))}
                            </div>
                          </div>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                )
              ) : (
                <div className="py-20 text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-400">
                    No riders match the selected filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Staff — horizontal table layout */}
      <section className="pt-6 pb-20 lg:pt-8 lg:pb-28 px-6 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="Management" heading="Behind the Team" className="mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { role: "Team Owner & Sponsorships", name: "Vince Caceres", description: "Vision, operations, and building the partnerships that keep Cyclery Racing competing at the highest level." },
              { role: "Directeur Sportif", name: "Chris Reid", description: "Overseeing race strategy, rider development, and on-the-ground team direction across all categories." },
            ].map((staff, i) => (
              <ScrollReveal key={staff.role} delay={i * 100}>
                <div className="border border-gray-200 p-6">
                  <p
                    className="uppercase mb-2"
                    style={{ ...fontStyle, fontSize: "11px", fontWeight: 600, color: "#ff138c" }}
                  >
                    {staff.role}
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase text-black mb-3">
                    {staff.name}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">
                    {staff.description}
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
