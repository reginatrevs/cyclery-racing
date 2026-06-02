import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { StickySection } from "@/components/StickySection";
import { FluidStats } from "@/components/FluidStats";
import { MobileRaceCards } from "@/components/MobileRaceCards";
import { SponsorsList } from "@/components/SponsorsList";
import { HeroText } from "@/components/HeroText";
import { ScrollHint } from "@/components/ScrollHint";

const stats = [
  { number: "19+", label: "RACES", description: "From Ottawa to Chicago, Charlevoix to Philadelphia. Competing across North America at the elite level.", image: "/cards/card1.png" },
  { number: "10", label: "RIDERS", description: "An all-women roster of dedicated Canadian athletes pushing each other to new heights.", image: "/cards/card2.png" },
  { number: "2009", label: "EST.", description: "One of Canada's longest-running competitive cycling programs, building legacy for over 15 years.", image: "/cards/card3.png" },
  { number: "100%", label: "CAN", description: "Homegrown talent representing Canada on the international stage.", image: "/cards/card4.png" },
];

const riders = [
  { name: "Sarah Chen", role: "Road Captain", number: "01" },
  { name: "Emma Dubois", role: "Sprinter", number: "02" },
  { name: "Ava Martinez", role: "Climber", number: "03" },
  { name: "Lily Thompson", role: "All-Rounder", number: "04" },
];

const upcomingRaces = [
  { date: "MAY", day: "15", name: "Tour de Bloom", location: "Wenatchee, WA", photo: "/course-race/bloom.png" },
  { date: "JUN", day: "14", name: "Preston Street", location: "Ottawa, ON", photo: "/course-race/preston.png" },
  { date: "JUN", day: "06", name: "Ontario Cup 2", location: "Northumberland, ON", photo: "/course-race/ontario-cup.png" },
  { date: "JUL", day: "03", name: "Kingston Stage Race", location: "Kingston, ON", photo: "/course-race/kingston.png" },
  { date: "AUG", day: "30", name: "Philadelphia", location: "Philadelphia, PA", photo: "/course-race/philadelphia.png" },
  { date: "SEP", day: "07", name: "Maryland Cycling Classic", location: "Baltimore, MD", photo: "/course-race/maryland.png" },
];

const sponsors = [
  { name: "Abacus Data", slug: "abacus" },
  { name: "The Cyclery", slug: "cyclery" },
  { name: "Factor", slug: "factor" },
  { name: "SRAM", slug: "sram" },
  { name: "Mark Motors", slug: "mark-motors" },
  { name: "Castelli", slug: "castelli" },
  { name: "Smith", slug: "smith" },
  { name: "Look", slug: "look" },
  { name: "Pirelli", slug: "pirelli" },
  { name: "HLC", slug: "hlc" },
  { name: "Bont", slug: "bont" },
  { name: "Skratch Labs", slug: "skratch" },
  { name: "Physio Bike Fitter", slug: "physio" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-between lg:justify-center lg:gap-6 overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Logo — top on mobile, centered on desktop */}
        <div className="relative z-10 flex-1 lg:flex-none flex items-start lg:items-center px-6 md:px-12 lg:px-16 pt-24 lg:pt-0 max-w-[1440px] mx-auto w-full">
          <div className="animate-hero" style={{ animationDelay: "0ms" }}>
            <Image
              src="/logo-black.png"
              alt="Cyclery Racing Abacus Data"
              width={900}
              height={180}
              className="w-[320px] md:w-[460px] lg:w-[650px] xl:w-[850px] 2xl:w-[1000px] h-auto"
              priority
            />
          </div>
        </div>

        {/* Text — typing effect */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 lg:mb-8 max-w-[1440px] mx-auto w-full">
          <div className="w-[320px] md:w-[460px] lg:w-[650px] xl:w-[850px] 2xl:w-[1000px]">
            <HeroText />
          </div>
        </div>

        {/* Scroll hint — fades out on scroll, pinned to bottom on desktop */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-10 px-6 md:px-12 lg:px-16 pb-10 lg:pb-12 pt-6 max-w-[1440px] lg:mx-auto w-full animate-hero" style={{ animationDelay: "800ms" }}>
          <ScrollHint />
        </div>
      </section>

      {/* ============ PHOTO + STATEMENT OVERLAY ============ */}
      <section className="relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh] overflow-hidden flex items-end">
        {/* Background photo */}
        <Image
          src="/splash-desktop.jpg"
          alt="Cyclery Racing in action"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />

        {/* Color overlay tint */}
        <div className="absolute inset-0 bg-[#b8c2fd]/40 mix-blend-multiply" />

        {/* Large text overlay */}
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 pb-6 md:pb-10 lg:pb-14">
          <div className="flex flex-col gap-0 leading-[0.85]">
            {["Driven", "Focused", "Fast"].map((word, i) => (
              <ScrollReveal key={word} delay={i * 120} direction="layer">
                <span className="block font-display text-[clamp(64px,18vw,220px)] font-bold uppercase text-white tracking-tight">
                  {word}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS — fluid box reposition ============ */}
      <FluidStats stats={stats} />

      {/* ============ ABOUT + RACE CALENDAR PREVIEW ============ */}
      <StickySection
        label="About Us"
        heading="We don't just ride bikes"
        stickyContent={
          <>
            <p className="font-body text-gray-600 text-base leading-relaxed max-w-sm">
              Cyclery Racing is more than a team. We&apos;re a movement
              advancing women&apos;s competitive cycling in Canada.
              We ride with purpose.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Read Our Story
              </Button>
            </div>
          </>
        }
      >
        {/* Desktop race grid */}
        <div className="hidden lg:grid grid-cols-2 gap-3">
          {upcomingRaces.map((race, i) => (
            <ScrollReveal key={race.name} direction="layer" delay={i * 100}>
              <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-gray-200 hover:border-magenta transition-colors flex flex-col justify-end p-5">
                <Image
                  src={race.photo}
                  alt={race.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-2xl font-bold text-white leading-none">
                      {race.day}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                      {race.date}
                    </span>
                  </div>
                  <h3 className="font-display text-sm lg:text-base font-bold uppercase text-white group-hover:text-magenta transition-colors leading-tight">
                    {race.name}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                    {race.location}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile race cards — scroll-triggered sequential reveal */}
        <MobileRaceCards races={upcomingRaces} />

        <div className="mt-8">
          <Button href="/races" variant="outline">
            View Full Calendar
          </Button>
        </div>
      </StickySection>

      {/* ============ SPONSORS — swiss grid ============ */}
      <section className="py-16 lg:py-24 px-6 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black tracking-tight mb-16">
              Our Sponsors
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="layer">
            <SponsorsList sponsors={sponsors} />
          </ScrollReveal>

        </div>
      </section>

      {/* ============ EQUIPMENT CTA ============ */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-12 lg:pt-20">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-3">
                  Equipment
                </p>
                <h2 className="font-display text-[clamp(56px,12vw,160px)] font-bold uppercase leading-[0.85] text-magenta tracking-tight">
                  Built to Win
                </h2>
              </div>
              <div className="self-start lg:self-end mb-2">
                <Button href="/equipment" variant="outline">
                  View Equipment
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Video — near full width, smooth loop */}
        <div className="relative w-full pb-16 lg:pb-24">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[95%] lg:w-[90%] mx-auto h-auto object-contain"
          >
            <source src="/factor-bike.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
