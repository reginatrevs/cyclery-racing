import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";

const tiers = [
  {
    tier: "Title Sponsor",
    sponsors: ["The Cyclery"],
    color: "bg-neon-lime",
    textColor: "text-deep-black",
    borderColor: "border-neon-lime",
    shadow: "shadow-brutal-lime",
  },
  {
    tier: "Partners",
    sponsors: ["Shimano", "Giro", "Garmin"],
    color: "bg-hot-pink",
    textColor: "text-off-white",
    borderColor: "border-hot-pink",
    shadow: "shadow-brutal-pink",
  },
  {
    tier: "Supporters",
    sponsors: ["Clif Bar", "Pearl Izumi", "Wahoo", "Skratch Labs", "Muc-Off"],
    color: "bg-lavender",
    textColor: "text-deep-black",
    borderColor: "border-lavender",
    shadow: "shadow-brutal-black",
  },
];

const benefits = [
  {
    title: "Brand Visibility",
    description: "Logo on kit, bikes, team vehicles, and all race-day materials. Seen at every event across Canada.",
    icon: "★",
  },
  {
    title: "Social Reach",
    description: "Dedicated social media features, story takeovers, and content collaborations reaching our engaged audience.",
    icon: "◆",
  },
  {
    title: "Community Impact",
    description: "Associate your brand with a movement advancing women's cycling. Real impact, real stories.",
    icon: "●",
  },
  {
    title: "Event Access",
    description: "VIP access to races, team events, and exclusive behind-the-scenes experiences with the riders.",
    icon: "▲",
  },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 px-6 relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 halftone-lg text-neon-lime/[0.05]" />
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <span className="font-display text-[350px] font-900 uppercase text-off-white/[0.02] leading-none">
            SPONSORS
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <span className="bg-hot-pink/10 border-[2px] border-hot-pink/30 px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-hot-pink inline-block">
            Our Partners
          </span>
          <h1 className="mt-6 font-display text-[clamp(64px,10vw,160px)] font-900 uppercase leading-[0.82]">
            <span className="text-off-white">Our </span>
            <span className="text-outline-thick">Sponsors</span>
          </h1>
          <p className="mt-8 font-body text-lg text-off-white/60 max-w-xl">
            The brands and organizations that make Cyclery Racing possible. Their
            support fuels every pedal stroke.
          </p>
        </div>
      </section>

      <Marquee size="large" items={["Thank You", "Partners", "Supporters", "Team Sponsors"]} bgColor="bg-lavender" textColor="text-deep-black" />

      {/* Sponsor Tiers */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-end justify-end overflow-hidden">
          <span className="font-display text-[250px] font-900 text-off-white/[0.02] leading-none select-none">
            TEAM
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto space-y-16">
          {tiers.map((tier) => (
            <div key={tier.tier}>
              <div className="flex items-center gap-4 mb-8">
                <span className={`${tier.color} ${tier.textColor} font-mono text-[10px] uppercase tracking-[0.3em] px-4 py-2`}>
                  {tier.tier}
                </span>
                <div className={`flex-1 h-[3px] ${tier.color}/20`} />
              </div>
              <div className={`grid ${tier.sponsors.length === 1 ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3"} gap-6`}>
                {tier.sponsors.map((sponsor) => (
                  <div
                    key={sponsor}
                    className={`relative overflow-hidden border-[3px] ${tier.borderColor} p-12 flex items-center justify-center hover:bg-off-white/5 transition-colors ${tier.shadow}`}
                  >
                    <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                    <span className="relative z-10 font-display text-3xl md:text-4xl font-900 uppercase text-off-white/60">
                      {sponsor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor */}
      <div className="h-3 bg-hot-pink" />
      <section className="py-28 lg:py-36 px-6 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <span className="font-display text-[250px] font-900 text-deep-black/[0.02] leading-none select-none">
            PARTNER
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel color="text-hot-pink">Partner With Us</SectionLabel>
          <h2 className="mt-4 mb-16 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-deep-black">
            Become a <span className="text-outline">Sponsor</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`relative overflow-hidden p-6 border-[3px] border-deep-black ${i % 2 === 0 ? "tilt-card shadow-brutal-pink" : "tilt-card-right shadow-brutal-lime"}`}
              >
                <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                <div className="relative z-10">
                  <span className="text-4xl text-hot-pink">{benefit.icon}</span>
                  <h3 className="mt-4 font-display text-2xl font-900 uppercase text-deep-black">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-deep-black/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-body text-lg text-deep-black/60 max-w-2xl mx-auto mb-8">
              We offer flexible sponsorship packages to fit your brand and
              budget. From title sponsorship to in-kind support, let&apos;s find
              the right partnership for you.
            </p>
            <Link
              href="/contact"
              className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] bg-hot-pink text-off-white px-8 py-4 hover:bg-deep-black transition-colors border-[3px] border-hot-pink hover:border-deep-black shadow-brutal-black"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
      <div className="h-3 bg-hot-pink" />
    </>
  );
}
