import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";

const stats = [
  { number: "12+", label: "Races / Season", accent: "text-neon-lime" },
  { number: "6", label: "Team Riders", accent: "text-hot-pink" },
  { number: "2024", label: "Est. Year", accent: "text-lavender" },
  { number: "100%", label: "Women-Led", accent: "text-orange" },
];

const riders = [
  { name: "Sarah Chen", role: "Road Captain", number: "01", bg: "bg-neon-lime", text: "text-deep-black", shadow: "shadow-brutal-pink" },
  { name: "Emma Dubois", role: "Sprinter", number: "02", bg: "bg-hot-pink", text: "text-off-white", shadow: "shadow-brutal-lime" },
  { name: "Ava Martinez", role: "Climber", number: "03", bg: "bg-lavender", text: "text-deep-black", shadow: "shadow-brutal-black" },
  { name: "Lily Thompson", role: "All-Rounder", number: "04", bg: "bg-orange", text: "text-off-white", shadow: "shadow-brutal-lime" },
];

const upcomingRaces = [
  { date: "APR", day: "12", name: "Grand Prix Cycliste de Gatineau", location: "Gatineau, QC", distance: "108km" },
  { date: "MAY", day: "03", name: "Tour de Delta", location: "Delta, BC", distance: "85km" },
  { date: "MAY", day: "24", name: "Canadian Road Championships", location: "Edmonton, AB", distance: "120km" },
  { date: "JUN", day: "14", name: "Beauce Classic", location: "Saint-Georges, QC", distance: "96km" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 grid-pattern" />
        {/* Halftone overlay — visible */}
        <div className="absolute inset-0 halftone-lg text-neon-lime/[0.07]" />

        {/* Decorative elements */}
        <div className="absolute top-28 right-16 w-48 h-48 border-[4px] border-neon-lime/30 rounded-full hidden lg:block" />
        <div className="absolute top-36 right-24 w-32 h-32 border-[4px] border-hot-pink/20 rounded-full hidden lg:block" />
        <div className="absolute bottom-32 left-8 font-display text-[280px] font-900 leading-none text-neon-lime/[0.04] hidden lg:block select-none">
          ★
        </div>
        <div className="absolute top-1/3 left-12 w-3 h-3 bg-hot-pink rounded-full hidden lg:block" />
        <div className="absolute top-1/2 right-32 w-4 h-4 bg-neon-lime rotate-45 hidden lg:block" />
        <div className="absolute bottom-48 right-16 w-2 h-2 bg-orange rounded-full hidden lg:block" />

        {/* Large decorative number */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 font-display text-[400px] font-900 leading-none text-off-white/[0.02] hidden xl:block select-none">
          01
        </div>

        <div className="relative z-10 text-center px-6 max-w-[1440px] mx-auto w-full">
          <div className="inline-block bg-neon-lime/10 border-[2px] border-neon-lime/30 px-5 py-1.5 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neon-lime">
              Women&apos;s Professional Cycling Team &mdash; Canada
            </span>
          </div>

          <h1 className="font-display font-900 uppercase leading-[0.8] tracking-tight">
            <span className="block text-[clamp(80px,15vw,220px)] text-neon-lime drop-shadow-[0_0_60px_rgba(205,255,0,0.15)]">
              Cyclery
            </span>
            <span className="block text-[clamp(80px,15vw,220px)] text-outline-thick text-neon-lime">
              Racing
            </span>
          </h1>

          <p className="mt-10 font-body text-lg md:text-xl text-off-white/60 max-w-lg mx-auto leading-relaxed">
            Bold. Fast. Unstoppable. Pushing the limits of competitive cycling
            while inspiring the next generation of women riders.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/team"
              className="font-mono text-[11px] uppercase tracking-[0.2em] bg-neon-lime text-deep-black px-10 py-4.5 hover:bg-hot-pink hover:text-off-white transition-all border-[3px] border-neon-lime hover:border-hot-pink shadow-brutal-lime hover:shadow-brutal-pink"
            >
              Meet the Team
            </Link>
            <Link
              href="/donations"
              className="font-mono text-[11px] uppercase tracking-[0.2em] bg-transparent text-neon-lime px-10 py-4.5 hover:bg-neon-lime hover:text-deep-black transition-all border-[3px] border-neon-lime hover:shadow-brutal-lime"
            >
              Support Us
            </Link>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent" />
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee
        items={["Race Season 2025", "Join the Movement", "Women in Cycling", "Ride Bold", "Go Fast Take Chances"]}
        size="large"
      />

      {/* ============ ABOUT + STATS ============ */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        {/* Decorative huge text */}
        <div className="absolute -right-20 top-10 font-display text-[300px] font-900 leading-none text-off-white/[0.02] hidden xl:block select-none rotate-[-8deg]">
          RIDE
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Text */}
            <div className="lg:col-span-5">
              <SectionLabel>About Us</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(48px,6vw,100px)] font-900 uppercase leading-[0.82] text-off-white">
                We don&apos;t
                <br />
                just{" "}
                <span className="text-neon-lime glitch-hover inline-block">
                  ride
                </span>
                <br />
                <span className="text-outline text-hot-pink">bikes</span>
              </h2>
              <p className="mt-8 font-body text-off-white/50 text-lg leading-relaxed max-w-md">
                Cyclery Racing is more than a team — we&apos;re a movement
                advancing women&apos;s competitive cycling in Canada. From
                grassroots to the pro peloton, we ride with purpose.
              </p>
              <Link
                href="/about"
                className="inline-block mt-10 font-mono text-[11px] uppercase tracking-[0.2em] bg-neon-lime text-deep-black px-8 py-3.5 hover:bg-hot-pink hover:text-off-white transition-all shadow-brutal-lime hover:shadow-brutal-pink border-[3px] border-neon-lime hover:border-hot-pink"
              >
                Read Our Story →
              </Link>
            </div>

            {/* Right: Stats grid — overlapping, staggered */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-5 lg:gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`relative p-7 md:p-9 border-[3px] border-off-white/10 bg-off-white/[0.02] backdrop-blur-sm ${i % 2 === 0 ? "tilt-card" : "tilt-card-right"} ${i === 1 ? "lg:mt-10" : ""} ${i === 3 ? "lg:mt-10" : ""}`}
                >
                  {/* Decorative number watermark */}
                  <span className="absolute top-2 right-3 font-display text-[80px] font-900 leading-none text-off-white/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-display text-[clamp(48px,6vw,80px)] font-900 ${stat.accent} leading-none`}>
                    {stat.number}
                  </span>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-off-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM PREVIEW — Color-blocked section ============ */}
      <section className="relative">
        {/* Pink accent stripe */}
        <div className="h-3 bg-hot-pink" />

        <div className="py-28 lg:py-36 px-6 bg-off-white relative overflow-hidden">
          {/* Halftone texture */}
          <div className="absolute inset-0 halftone text-deep-black/[0.03]" />
          {/* Decorative huge text */}
          <div className="absolute -left-10 bottom-0 font-display text-[350px] font-900 leading-none text-deep-black/[0.03] hidden xl:block select-none">
            TEAM
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <SectionLabel color="text-hot-pink">The Team</SectionLabel>
                <h2 className="mt-4 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-deep-black">
                  Meet our
                  <br />
                  <span className="text-hot-pink">riders</span>
                </h2>
              </div>
              <Link
                href="/team"
                className="font-mono text-[11px] uppercase tracking-[0.2em] bg-deep-black text-neon-lime px-8 py-3.5 hover:bg-hot-pink hover:text-off-white transition-all shadow-brutal-black hover:shadow-brutal-pink border-[3px] border-deep-black hover:border-hot-pink mb-2"
              >
                Full Roster →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
              {riders.map((rider, i) => (
                <div
                  key={rider.name}
                  className={`group ${i % 2 === 0 ? "tilt-card" : "tilt-card-right"} ${i === 1 || i === 3 ? "lg:mt-8" : ""}`}
                >
                  <div
                    className={`${rider.bg} aspect-[3/4] relative overflow-hidden border-[3px] border-deep-black ${rider.shadow}`}
                  >
                    {/* Giant rider number */}
                    <span className="absolute -top-2 -left-2 font-display text-[160px] font-900 leading-none opacity-[0.12] text-deep-black select-none">
                      {rider.number}
                    </span>
                    {/* Halftone overlay */}
                    <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                    {/* Diagonal stripe accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute -top-2 -right-8 w-20 h-8 bg-deep-black/20 rotate-45" />
                    </div>
                    {/* Bottom info bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-deep-black/80 backdrop-blur-sm p-5">
                      <p className={`font-mono text-[9px] uppercase tracking-[0.35em] text-neon-lime mb-1`}>
                        {rider.role}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-900 uppercase text-off-white leading-tight">
                        {rider.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lime accent stripe */}
        <div className="h-3 bg-neon-lime" />
      </section>

      {/* ============ MARQUEE 2 ============ */}
      <Marquee
        items={["Bold", "Fast", "Unstoppable", "Women in Cycling", "Cyclery Racing"]}
        bgColor="bg-deep-black"
        textColor="text-neon-lime"
        size="large"
      />

      {/* ============ UPCOMING RACES — editorial list ============ */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        {/* Decorative */}
        <div className="absolute right-8 top-20 font-display text-[200px] font-900 leading-none text-neon-lime/[0.03] hidden lg:block select-none">
          ★
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel>Race Calendar</SectionLabel>
          <h2 className="mt-4 mb-16 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-off-white">
            Upcoming{" "}
            <span className="text-outline text-neon-lime">Races</span>
          </h2>

          <div>
            {upcomingRaces.map((race, i) => (
              <div
                key={race.name}
                className="group flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 py-7 border-b-[3px] border-off-white/[0.06] hover:border-neon-lime transition-all hover:pl-4"
              >
                {/* Date block */}
                <div className="flex items-baseline gap-2 w-48 shrink-0">
                  <span className="font-display text-[clamp(48px,6vw,72px)] font-900 text-neon-lime leading-none">
                    {race.day}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-off-white/30">
                    {race.date}
                  </span>
                </div>
                {/* Race info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-2xl lg:text-3xl font-900 uppercase text-off-white group-hover:text-neon-lime transition-colors leading-tight">
                    {race.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/30">
                      {race.location}
                    </span>
                    <span className="w-1 h-1 bg-off-white/20 rounded-full" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/30">
                      {race.distance}
                    </span>
                  </div>
                </div>
                {/* Status */}
                <div className="tag text-neon-lime border-neon-lime group-hover:bg-neon-lime group-hover:text-deep-black transition-all">
                  Upcoming
                </div>
                {/* Arrow */}
                <span className="hidden lg:block font-display text-2xl text-off-white/10 group-hover:text-neon-lime group-hover:translate-x-2 transition-all">
                  →
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/races"
            className="inline-block mt-12 font-mono text-[11px] uppercase tracking-[0.2em] bg-neon-lime text-deep-black px-8 py-3.5 hover:bg-hot-pink hover:text-off-white transition-all shadow-brutal-lime hover:shadow-brutal-pink border-[3px] border-neon-lime hover:border-hot-pink"
          >
            Full Race Calendar →
          </Link>
        </div>
      </section>

      {/* ============ SPONSORS — off-white color block ============ */}
      <section className="relative">
        <div className="h-2 bg-lavender" />
        <div className="py-28 lg:py-36 px-6 bg-off-white relative overflow-hidden">
          <div className="absolute inset-0 halftone-sm text-deep-black/[0.02]" />
          <div className="relative z-10 max-w-[1440px] mx-auto text-center">
            <SectionLabel color="text-hot-pink">Our Partners</SectionLabel>
            <h2 className="mt-4 mb-16 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-deep-black">
              Proudly{" "}
              <span className="text-outline text-hot-pink">Supported</span>
              <br />
              By
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {["The Cyclery", "Shimano", "Giro", "Clif Bar", "Garmin", "Pearl Izumi", "Wahoo", "Skratch Labs"].map(
                (sponsor, i) => (
                  <div
                    key={sponsor}
                    className={`group flex items-center justify-center p-8 md:p-10 border-[3px] border-deep-black/10 bg-white hover:border-hot-pink hover:bg-hot-pink transition-all cursor-pointer ${i % 3 === 0 ? "tilt-card" : i % 3 === 1 ? "tilt-card-right" : ""}`}
                  >
                    <span className="font-display text-xl md:text-2xl font-900 uppercase text-deep-black/30 group-hover:text-off-white transition-colors">
                      {sponsor}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="h-2 bg-hot-pink" />
      </section>

      {/* ============ DONATIONS CTA — hot pink power block ============ */}
      <section className="py-28 lg:py-36 px-6 bg-hot-pink relative overflow-hidden noise-overlay">
        {/* Halftone — very visible */}
        <div className="absolute inset-0 halftone-xl text-deep-black/[0.06]" />
        {/* Decorative stars */}
        <div className="absolute top-12 left-12 font-display text-[120px] font-900 leading-none text-off-white/[0.08] hidden lg:block select-none">★</div>
        <div className="absolute bottom-16 right-20 font-display text-[80px] font-900 leading-none text-neon-lime/[0.15] hidden lg:block select-none">★</div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-neon-lime/20 rotate-45 hidden lg:block" />

        <div className="relative z-10 max-w-[1440px] mx-auto text-center">
          <div className="inline-block bg-deep-black/20 px-5 py-1.5 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-off-white">
              Make a Difference
            </span>
          </div>

          <h2 className="font-display text-[clamp(56px,10vw,140px)] font-900 uppercase leading-[0.78] text-off-white">
            Help us
            <br />
            <span className="text-neon-lime drop-shadow-[0_0_40px_rgba(205,255,0,0.3)]">
              race harder
            </span>
          </h2>

          <p className="mt-8 font-body text-lg md:text-xl text-off-white/70 max-w-xl mx-auto leading-relaxed">
            Your support covers race entries, equipment, travel, and everything
            it takes to compete at the highest level.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/donations"
              className="font-mono text-[11px] uppercase tracking-[0.2em] bg-deep-black text-neon-lime px-10 py-4.5 hover:bg-neon-lime hover:text-deep-black transition-all border-[3px] border-deep-black shadow-brutal-black hover:shadow-brutal-lime"
            >
              Donate Now
            </Link>
            <Link
              href="/sponsors"
              className="font-mono text-[11px] uppercase tracking-[0.2em] bg-transparent text-off-white px-10 py-4.5 hover:bg-off-white hover:text-hot-pink transition-all border-[3px] border-off-white"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FINAL MARQUEE ============ */}
      <Marquee
        items={["Bold", "Fast", "Unstoppable", "Women in Cycling", "Cyclery Racing", "Go Fast Take Chances"]}
        bgColor="bg-neon-lime"
        textColor="text-deep-black"
        size="large"
      />
    </>
  );
}
