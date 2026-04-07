import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";

const values = [
  { number: "01", title: "Compete Fiercely", description: "We show up to win. Every race, every ride, every moment is an opportunity to push our limits and prove what women's cycling can be.", color: "border-neon-lime", shadow: "shadow-brutal-lime", accent: "text-neon-lime" },
  { number: "02", title: "Lift Each Other", description: "We ride as a unit. Supporting each other on and off the bike is how we build something bigger than any individual result.", color: "border-hot-pink", shadow: "shadow-brutal-pink", accent: "text-hot-pink" },
  { number: "03", title: "Inspire the Next", description: "Every girl who sees us race is a potential future champion. We ride with the responsibility of representation.", color: "border-lavender", shadow: "hover:shadow-[6px_6px_0_#C4B5FD]", accent: "text-lavender" },
  { number: "04", title: "Have Fun", description: "Life's too short to be boring. We bring energy, personality, and joy to everything we do. Cycling should be fun.", color: "border-orange", shadow: "hover:shadow-[6px_6px_0_#FF6B35]", accent: "text-orange" },
];

const milestones = [
  { year: "2024", event: "Team founded in Toronto, Canada", bg: "bg-neon-lime", text: "text-deep-black" },
  { year: "2024", event: "First race: Grand Prix Cycliste de Gatineau", bg: "bg-hot-pink", text: "text-off-white" },
  { year: "2024", event: "Signed title sponsorship with The Cyclery", bg: "bg-lavender", text: "text-deep-black" },
  { year: "2025", event: "Expanded to 6-rider roster", bg: "bg-orange", text: "text-off-white" },
  { year: "2025", event: "First podium finish at Tour de Delta", bg: "bg-mint", text: "text-deep-black" },
  { year: "2025", event: "Launched community ride program", bg: "bg-soft-pink", text: "text-deep-black" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 halftone-lg text-neon-lime/[0.05]" />
        <div className="absolute top-36 right-8 font-display text-[350px] font-900 leading-none text-off-white/[0.02] hidden xl:block select-none">★</div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="inline-block bg-hot-pink/10 border-[2px] border-hot-pink/30 px-5 py-1.5 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-hot-pink">Our Story</span>
          </div>
          <h1 className="font-display text-[clamp(64px,10vw,160px)] font-900 uppercase leading-[0.8] tracking-tight">
            <span className="text-off-white">About </span>
            <span className="text-neon-lime">Cyclery</span>
            <br />
            <span className="text-outline-thick text-neon-lime">Racing</span>
          </h1>
        </div>
      </section>

      <Marquee items={["Our Story", "Our Mission", "Our Values", "Our Future"]} size="large" />

      {/* Origin Story */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -right-16 top-20 font-display text-[300px] font-900 leading-none text-off-white/[0.02] hidden xl:block select-none rotate-[-5deg]">BORN</div>
        <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(44px,5vw,80px)] font-900 uppercase leading-[0.82] text-off-white">
              Born from a<br />
              <span className="text-neon-lime">love of</span><br />
              <span className="text-outline text-hot-pink">racing</span>
            </h2>
            <div className="mt-10 space-y-6 font-body text-off-white/50 text-lg leading-relaxed">
              <p>
                Cyclery Racing started with a simple idea: women deserve a
                professional cycling team that matches their ambition. Founded in
                2024 in Toronto, we built a team from the ground up — fueled by
                passion, backed by community, and driven to compete.
              </p>
              <p>
                Canada&apos;s cycling scene is growing fast, and women&apos;s racing
                is at the heart of it. But the opportunities haven&apos;t always
                matched the talent. That&apos;s what we&apos;re here to change.
              </p>
              <p>
                With the support of The Cyclery bike shop and an incredible
                community of cycling enthusiasts, we&apos;ve assembled a roster
                of talented riders ready to make their mark.
              </p>
            </div>
          </div>

          {/* Photo collage placeholders — staggered, colorful */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-5">
            <div className="bg-neon-lime/10 border-[3px] border-neon-lime/30 aspect-square flex items-center justify-center tilt-card shadow-brutal-lime relative overflow-hidden">
              <div className="absolute inset-0 halftone text-neon-lime/[0.08]" />
              <span className="font-display text-[100px] font-900 text-neon-lime/15 select-none">01</span>
            </div>
            <div className="bg-hot-pink/10 border-[3px] border-hot-pink/30 aspect-[3/4] flex items-center justify-center tilt-card-right mt-14 shadow-brutal-pink relative overflow-hidden">
              <div className="absolute inset-0 halftone text-hot-pink/[0.08]" />
              <span className="font-display text-[100px] font-900 text-hot-pink/15 select-none">02</span>
            </div>
            <div className="bg-lavender/10 border-[3px] border-lavender/30 aspect-[4/3] flex items-center justify-center tilt-card -mt-8 relative overflow-hidden">
              <div className="absolute inset-0 halftone text-lavender/[0.08]" />
              <span className="font-display text-[100px] font-900 text-lavender/15 select-none">03</span>
            </div>
            <div className="bg-orange/10 border-[3px] border-orange/30 aspect-square flex items-center justify-center tilt-card-right relative overflow-hidden">
              <div className="absolute inset-0 halftone text-orange/[0.08]" />
              <span className="font-display text-[100px] font-900 text-orange/15 select-none">04</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission — full neon lime color block */}
      <section className="relative">
        <div className="h-3 bg-hot-pink" />
        <div className="py-28 lg:py-36 px-6 bg-neon-lime relative overflow-hidden noise-overlay">
          <div className="absolute inset-0 halftone-xl text-deep-black/[0.05]" />
          <div className="absolute -left-10 bottom-0 font-display text-[250px] font-900 leading-none text-deep-black/[0.04] hidden xl:block select-none">MISSION</div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <SectionLabel color="text-deep-black">Our Mission</SectionLabel>
            <h2 className="mt-8 font-display text-[clamp(40px,6vw,96px)] font-900 uppercase leading-[0.82] text-deep-black">
              To elevate women&apos;s cycling in Canada through competition,
              community, and{" "}
              <span className="text-outline-thick text-deep-black">unapologetic</span>{" "}
              ambition
            </h2>
          </div>
        </div>
        <div className="h-3 bg-deep-black" />
      </section>

      {/* Values */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel>What We Stand For</SectionLabel>
          <h2 className="mt-4 mb-16 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-off-white">
            Our <span className="text-outline text-neon-lime">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`p-8 md:p-10 border-[3px] ${value.color} bg-off-white/[0.02] ${i % 2 === 0 ? "tilt-card" : "tilt-card-right"} relative overflow-hidden`}
              >
                <span className="absolute -top-4 -right-2 font-display text-[140px] font-900 text-off-white/[0.04] leading-none select-none">
                  {value.number}
                </span>
                <span className={`font-display text-6xl font-900 ${value.accent}`}>
                  {value.number}
                </span>
                <h3 className="mt-3 font-display text-3xl md:text-4xl font-900 uppercase text-off-white">
                  {value.title}
                </h3>
                <p className="mt-5 font-body text-off-white/50 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative">
        <div className="h-2 bg-lavender" />
        <div className="py-28 lg:py-36 px-6 bg-off-white relative overflow-hidden">
          <div className="absolute inset-0 halftone-sm text-deep-black/[0.02]" />
          <div className="relative z-10 max-w-[1440px] mx-auto">
            <SectionLabel color="text-hot-pink">Milestones</SectionLabel>
            <h2 className="mt-4 mb-16 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-deep-black">
              Our <span className="text-outline text-hot-pink">Journey</span>
            </h2>

            <div className="space-y-5">
              {milestones.map((m, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-5 sm:items-center group">
                  <span className={`${m.bg} ${m.text} font-display text-3xl font-900 px-6 py-3 w-fit border-[3px] border-deep-black shadow-brutal-black`}>
                    {m.year}
                  </span>
                  <p className="font-display text-xl md:text-2xl font-800 uppercase text-deep-black/70 group-hover:text-deep-black transition-colors">
                    {m.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-2 bg-hot-pink" />
      </section>

      {/* Canadian Cycling Context */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute right-0 top-0 font-display text-[250px] font-900 leading-none text-off-white/[0.02] hidden xl:block select-none">CAN</div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionLabel>The Bigger Picture</SectionLabel>
          <h2 className="mt-4 mb-10 font-display text-[clamp(44px,5vw,80px)] font-900 uppercase leading-[0.82] text-off-white">
            Women&apos;s Cycling{" "}
            <span className="text-neon-lime">in Canada</span>
          </h2>
          <div className="space-y-6 font-body text-off-white/50 text-lg leading-relaxed">
            <p>
              Canada has a rich cycling heritage, but women&apos;s professional
              racing has historically been underfunded and underrepresented.
              That&apos;s changing — and teams like Cyclery Racing are at the
              forefront.
            </p>
            <p>
              With growing interest in competitive cycling, new race series, and
              a passionate community of riders, the future of women&apos;s
              cycling in Canada has never looked brighter.
            </p>
            <p>
              From local crits to national championships, our riders are proving
              that Canadian women belong at the highest levels of the sport. And
              we&apos;re just getting started.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
