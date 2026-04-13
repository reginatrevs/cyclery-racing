import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const tiers = [
  { tier: "Title Sponsor", sponsors: ["The Cyclery"] },
  { tier: "Partners", sponsors: ["Shimano", "Giro", "Garmin"] },
  { tier: "Supporters", sponsors: ["Clif Bar", "Pearl Izumi", "Wahoo", "Skratch Labs", "Muc-Off"] },
];

const benefits = [
  { title: "Brand Visibility", description: "Logo on kit, bikes, team vehicles, and all race-day materials. Seen at every event across Canada." },
  { title: "Social Reach", description: "Dedicated social media features, story takeovers, and content collaborations reaching our engaged audience." },
  { title: "Community Impact", description: "Associate your brand with a movement advancing women's cycling. Real impact, real stories." },
  { title: "Event Access", description: "VIP access to races, team events, and exclusive behind-the-scenes experiences with the riders." },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
            Our Partners
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black">
            Sponsors
          </h1>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-[1440px] mx-auto space-y-16">
          {tiers.map((t, tierIdx) => (
            <ScrollReveal key={t.tier} delay={tierIdx * 100}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-6">
                  {t.tier}
                </p>
                <div className={`grid gap-5 ${
                  t.sponsors.length === 1
                    ? "grid-cols-1"
                    : t.sponsors.length <= 3
                      ? "grid-cols-1 md:grid-cols-3"
                      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                }`}>
                  {t.sponsors.map((sponsor) => (
                    <div
                      key={sponsor}
                      className={`flex items-center justify-center border border-gray-200 rounded card-hover cursor-pointer ${
                        t.sponsors.length === 1 ? "py-16" : "py-10"
                      }`}
                    >
                      <span className={`font-display font-bold uppercase text-gray-400 hover:text-magenta transition-colors ${
                        t.sponsors.length === 1 ? "text-4xl" : "text-xl"
                      }`}>
                        {sponsor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 px-6 bg-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="Why Partner With Us" heading="Sponsor Benefits" className="mb-14" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 100}>
                <div className="bg-white rounded p-8 border border-gray-200">
                  <h3 className="font-display text-xl font-bold uppercase text-black mb-3">
                    {b.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 bg-magenta">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4">
              Get Involved
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-bold uppercase leading-[0.9] text-white mb-6">
              Become a Sponsor
            </h2>
            <p className="font-body text-lg text-white/70 leading-relaxed mb-10">
              Join the brands that are backing the future of women&apos;s cycling in
              Canada. Let&apos;s build something together.
            </p>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
