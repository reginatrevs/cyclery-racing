import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";

const riders = [
  { name: "Sarah Chen", role: "Road Captain", number: "01", specialty: "GC Contender / Tactics", hometown: "Toronto, ON", bio: "Former national junior champion with a mind for race tactics. Sarah reads the peloton like a book and leads from the front.", gradient: "from-neon-lime via-mint to-neon-lime", border: "border-neon-lime", shadow: "shadow-brutal-pink" },
  { name: "Emma Dubois", role: "Sprinter", number: "02", specialty: "Sprint Finishes / Crits", hometown: "Montreal, QC", bio: "Pure speed. Emma's explosive sprint has earned her podium finishes across the country. The last 200m belong to her.", gradient: "from-hot-pink via-soft-pink to-hot-pink", border: "border-hot-pink", shadow: "shadow-brutal-lime" },
  { name: "Ava Martinez", role: "Climber", number: "03", specialty: "Mountains / Stage Races", hometown: "Vancouver, BC", bio: "Light, strong, and relentless on the climbs. Ava dances on the pedals where others suffer. Mountains are her playground.", gradient: "from-lavender via-lilac to-lavender", border: "border-lavender", shadow: "shadow-brutal-black" },
  { name: "Lily Thompson", role: "All-Rounder", number: "04", specialty: "Time Trials / Road Races", hometown: "Calgary, AB", bio: "Versatile, powerful, and incredibly consistent. Lily can hurt you on any terrain and thrives in the hardest conditions.", gradient: "from-orange via-neon-lime to-orange", border: "border-orange", shadow: "shadow-brutal-lime" },
  { name: "Maya Okafor", role: "Domestique", number: "05", specialty: "Pace Setting / Support", hometown: "Ottawa, ON", bio: "The engine of the team. Maya sets a pace that breaks the opposition and creates opportunities for her teammates to shine.", gradient: "from-mint via-lavender to-mint", border: "border-mint", shadow: "shadow-brutal-pink" },
  { name: "Chloe Park", role: "Breakaway Specialist", number: "06", specialty: "Attacks / Solo Breaks", hometown: "Edmonton, AB", bio: "Fearless and unpredictable. Chloe thrives in the chaos of racing and has the engine to make solo breakaways stick.", gradient: "from-soft-pink via-hot-pink to-soft-pink", border: "border-soft-pink", shadow: "shadow-brutal-lime" },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 halftone-lg text-hot-pink/[0.04]" />
        <div className="absolute -right-20 top-1/3 font-display text-[400px] font-900 leading-none text-off-white/[0.02] hidden xl:block select-none">06</div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="inline-block bg-hot-pink/10 border-[2px] border-hot-pink/30 px-5 py-1.5 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-hot-pink">2025 Roster</span>
          </div>
          <h1 className="font-display text-[clamp(64px,10vw,160px)] font-900 uppercase leading-[0.8] tracking-tight">
            <span className="text-off-white">The </span>
            <span className="text-neon-lime">Team</span>
          </h1>
          <p className="mt-6 font-body text-lg md:text-xl text-off-white/50 max-w-xl leading-relaxed">
            Six riders. One mission. Meet the women who make Cyclery Racing one
            of the most exciting teams in Canadian cycling.
          </p>
        </div>
      </section>

      <Marquee items={riders.map((r) => r.name)} bgColor="bg-hot-pink" textColor="text-off-white" size="large" />

      {/* Rider Grid */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {riders.map((rider, i) => (
              <div key={rider.name} className={`group ${i % 3 === 1 ? "md:mt-12" : ""}`}>
                <div className={`border-[3px] ${rider.border} overflow-hidden ${i % 2 === 0 ? "tilt-card" : "tilt-card-right"}`}>
                  {/* Photo area with gradient */}
                  <div className={`bg-gradient-to-br ${rider.gradient} aspect-[3/4] relative overflow-hidden`}>
                    {/* Giant number */}
                    <span className="absolute -top-4 -left-4 font-display text-[180px] font-900 leading-none opacity-[0.1] text-deep-black select-none">
                      {rider.number}
                    </span>
                    {/* Halftone */}
                    <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                    {/* Diagonal accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className="absolute -top-2 -right-10 w-24 h-10 bg-deep-black/20 rotate-45" />
                    </div>
                    {/* Role tag */}
                    <div className="absolute top-5 right-5 bg-deep-black text-off-white font-mono text-[9px] uppercase tracking-[0.25em] px-3 py-2 border-[2px] border-deep-black shadow-[3px_3px_0_rgba(205,255,0,0.3)]">
                      {rider.role}
                    </div>
                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-black/90 via-deep-black/60 to-transparent p-6 pt-24">
                      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neon-lime mb-1">
                        {rider.hometown}
                      </p>
                      <h3 className="font-display text-3xl md:text-4xl font-900 uppercase text-off-white leading-tight">
                        {rider.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 bg-deep-black relative">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-lime via-hot-pink to-lavender" />
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neon-lime mb-3">
                      {rider.specialty}
                    </p>
                    <p className="font-body text-sm text-off-white/50 leading-relaxed">
                      {rider.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative">
        <div className="h-3 bg-hot-pink" />
        <div className="py-28 lg:py-36 px-6 bg-neon-lime relative overflow-hidden noise-overlay">
          <div className="absolute inset-0 halftone-xl text-deep-black/[0.05]" />
          <div className="absolute -right-10 bottom-0 font-display text-[200px] font-900 leading-none text-deep-black/[0.04] hidden lg:block select-none">JOIN</div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <SectionLabel color="text-deep-black">Join the Team</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(44px,6vw,96px)] font-900 uppercase leading-[0.82] text-deep-black">
              Think you&apos;ve got what it takes?
            </h2>
            <p className="mt-6 font-body text-lg text-deep-black/60 max-w-xl mx-auto">
              We&apos;re always looking for talented riders who share our passion
              and drive. Reach out and let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 font-mono text-[11px] uppercase tracking-[0.2em] bg-deep-black text-neon-lime px-10 py-4.5 hover:bg-hot-pink hover:text-off-white transition-all border-[3px] border-deep-black shadow-brutal-black hover:shadow-brutal-pink"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
