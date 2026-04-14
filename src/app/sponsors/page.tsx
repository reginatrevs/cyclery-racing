import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

const sponsors = [
  { name: "Abacus Data" },
  { name: "The Cyclery" },
  { name: "Factor" },
  { name: "SRAM" },
  { name: "Mark Motors" },
  { name: "Castelli" },
  { name: "Smith" },
  { name: "Look" },
  { name: "Pirelli" },
  { name: "HLC" },
  { name: "Bont" },
  { name: "Skratch Labs" },
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
      "Every partnership is different. Whether it's branded vehicles, in-store events, team talks at your HQ, co-branded training sessions, or custom activations — we build sponsorships that make sense for your industry and audience.",
  },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero + Benefits under title */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black tracking-tight mb-6">
            Sponsors
          </h1>

          <p className="font-body text-base lg:text-lg text-gray-500 leading-relaxed max-w-2xl mb-16">
            We&apos;re proud to partner with brands that believe in the future of
            women&apos;s cycling. Our sponsors make it possible for us to compete,
            develop talent, and push the sport forward.
          </p>

          {/* Benefits grid — under the intro text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-200">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 100}>
                <div
                  className={`py-8 lg:py-10 pr-8 ${
                    i % 2 === 0
                      ? "md:pr-12 md:border-r border-gray-200"
                      : "md:pl-12"
                  } border-b border-gray-200`}
                >
                  <span
                    className="uppercase text-magenta"
                    style={{ ...fontStyle, fontSize: "10px", fontWeight: 600 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl lg:text-2xl font-bold uppercase text-black mt-2 mb-3">
                    {b.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed max-w-sm">
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor List */}
      <section className="py-20 lg:py-28 px-6 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] font-bold uppercase leading-[0.9] text-black tracking-tight mb-16">
              Our Partners
            </h2>
          </ScrollReveal>

          {/* Sponsor grid — clean bordered cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
            {sponsors.map((sponsor, i) => (
              <ScrollReveal key={sponsor.name} delay={i * 50}>
                <div className="flex items-center justify-center h-[120px] lg:h-[160px] border-r border-b border-gray-200 group cursor-pointer transition-colors hover:bg-gray-50">
                  <span
                    className="uppercase text-center select-none transition-colors duration-300 group-hover:text-magenta"
                    style={{
                      ...fontStyle,
                      fontSize: "clamp(14px, 2vw, 20px)",
                      fontWeight: 600,
                      color: "#999",
                    }}
                  >
                    {sponsor.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Contact for partnerships */}
      <section className="py-20 lg:py-28 px-6 bg-black">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p
              className="uppercase mb-4"
              style={{ ...fontStyle, fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.4)" }}
            >
              Interested?
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.9] text-white tracking-tight mb-6">
              Let&apos;s Talk
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
              Every partnership starts with a conversation. Tell us about your brand
              and we&apos;ll find a way to make it work — from race-day branding to
              fully custom activations.
            </p>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
