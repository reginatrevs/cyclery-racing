import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";

const donationTiers = [
  {
    amount: "$25",
    title: "Supporter",
    description: "Help cover the cost of race nutrition and hydration for one event.",
    color: "border-lavender",
    bg: "bg-lavender/5",
    shadow: "shadow-brutal-black",
  },
  {
    amount: "$50",
    title: "Contributor",
    description: "Cover a single race entry fee. Every race we enter is a chance to compete and grow.",
    color: "border-neon-lime",
    bg: "bg-neon-lime/5",
    shadow: "shadow-brutal-lime",
  },
  {
    amount: "$100",
    title: "Champion",
    description: "Fund a set of race tires or essential mechanical supplies for the team.",
    color: "border-hot-pink",
    bg: "bg-hot-pink/5",
    shadow: "shadow-brutal-pink",
  },
  {
    amount: "$250",
    title: "Patron",
    description: "Help cover travel costs to get the team to an out-of-province race weekend.",
    color: "border-orange",
    bg: "bg-orange/5",
    shadow: "shadow-brutal-black",
  },
  {
    amount: "$500+",
    title: "Benefactor",
    description: "Major contribution toward equipment upgrades, coaching, or a full race weekend budget.",
    color: "border-mint",
    bg: "bg-mint/5",
    shadow: "shadow-brutal-lime",
  },
];

const whereMoneyGoes = [
  { label: "Race Entries", percentage: "30%", color: "bg-neon-lime" },
  { label: "Travel & Accommodation", percentage: "25%", color: "bg-hot-pink" },
  { label: "Equipment & Maintenance", percentage: "20%", color: "bg-lavender" },
  { label: "Coaching & Training", percentage: "15%", color: "bg-orange" },
  { label: "Kit & Team Wear", percentage: "10%", color: "bg-mint" },
];

export default function DonationsPage() {
  return (
    <>
      {/* Hero */}
      <div className="h-3 bg-hot-pink" />
      <section className="pt-36 pb-28 px-6 relative overflow-hidden bg-hot-pink">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 halftone-lg text-deep-black/[0.05]" />
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <span className="font-display text-[350px] font-900 uppercase text-off-white/[0.02] leading-none">
            DONATE
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <span className="bg-off-white/10 border-[2px] border-off-white/30 px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-off-white inline-block">
            Support the Team
          </span>
          <h1 className="mt-6 font-display text-[clamp(64px,10vw,160px)] font-900 uppercase leading-[0.82]">
            <span className="text-off-white">Fuel the </span>
            <span className="text-outline-thick">Ride</span>
          </h1>
          <p className="mt-8 font-body text-lg text-off-white/80 max-w-xl">
            Every dollar helps us race harder, travel farther, and inspire more
            women to compete. Your support makes this team possible.
          </p>
        </div>
      </section>

      <Marquee size="large" items={["Every Dollar Counts", "Support Women's Cycling", "Fuel the Movement", "Race Together"]} />

      {/* Emotional Section */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <span className="font-display text-[250px] font-900 text-off-white/[0.02] leading-none select-none">
            WHY
          </span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.8] text-off-white">
            What your <span className="text-outline">support</span> means
          </h2>
          <div className="mt-10 space-y-6 font-body text-lg text-off-white/60 leading-relaxed">
            <p>
              Women&apos;s cycling doesn&apos;t have the same sponsorship dollars
              as the men&apos;s side. Most of our riders balance full-time jobs
              with training and racing. Your donations go directly to closing
              that gap.
            </p>
            <p>
              When you support Cyclery Racing, you&apos;re not just funding a
              team — you&apos;re investing in a movement. You&apos;re helping
              build a future where women&apos;s cycling gets the recognition and
              resources it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <div className="h-3 bg-hot-pink" />
      <section className="py-28 lg:py-36 px-6 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 pointer-events-none select-none flex items-end justify-end overflow-hidden">
          <span className="font-display text-[250px] font-900 text-deep-black/[0.02] leading-none select-none">
            GIVE
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel color="text-hot-pink">Choose Your Impact</SectionLabel>
          <h2 className="mt-4 mb-16 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-deep-black">
            Donation <span className="text-outline">Tiers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationTiers.map((tier, i) => (
              <div
                key={tier.title}
                className={`relative overflow-hidden p-8 border-[3px] ${tier.color} ${tier.bg} ${tier.shadow} ${i % 2 === 0 ? "tilt-card" : "tilt-card-right"}`}
              >
                <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                <div className="relative z-10">
                  <span className="font-display text-5xl font-900 text-deep-black">
                    {tier.amount}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-900 uppercase text-deep-black">
                    {tier.title}
                  </h3>
                  <p className="mt-4 font-body text-sm text-deep-black/60 leading-relaxed">
                    {tier.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-6 font-mono text-[11px] uppercase tracking-[0.2em] bg-deep-black text-off-white px-6 py-3 hover:bg-hot-pink transition-colors border-[3px] border-deep-black hover:border-hot-pink"
                  >
                    Donate {tier.amount}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-deep-black/50 mb-4">
              Want to give a custom amount?
            </p>
            <a
              href="#"
              className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] bg-hot-pink text-off-white px-8 py-4 hover:bg-deep-black transition-colors border-[3px] border-hot-pink hover:border-deep-black shadow-brutal-black"
            >
              Custom Donation →
            </a>
          </div>
        </div>
      </section>
      <div className="h-3 bg-hot-pink" />

      {/* Where Money Goes */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-start overflow-hidden">
          <span className="font-display text-[250px] font-900 text-off-white/[0.02] leading-none select-none">
            TRANSPARENT
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel>Transparency</SectionLabel>
          <h2 className="mt-4 mb-12 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-off-white">
            Where your <span className="text-outline">money</span> goes
          </h2>

          <div className="space-y-4">
            {whereMoneyGoes.map((item) => (
              <div key={item.label} className="flex items-center gap-6">
                <div className="w-20 shrink-0">
                  <span className="font-display text-3xl font-900 text-off-white">
                    {item.percentage}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-display text-xl font-800 uppercase text-off-white">
                      {item.label}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-off-white/10 overflow-hidden">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: item.percentage }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <div className="h-3 bg-hot-pink" />
      <section className="py-28 lg:py-36 px-6 bg-neon-lime relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 halftone-lg text-deep-black/[0.05]" />
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <span className="font-display text-[250px] font-900 text-deep-black/[0.02] leading-none select-none">
            HELP
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto text-center">
          <SectionLabel color="text-deep-black">More Ways to Help</SectionLabel>
          <h2 className="mt-4 mb-8 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.8] text-deep-black">
            Other ways to <span className="text-outline">support</span>
          </h2>
          <p className="font-body text-lg text-deep-black/70 max-w-2xl mx-auto mb-10">
            Donations aren&apos;t the only way to help. Buy team merch, become a
            sponsor, or simply spread the word. Every bit counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/merch"
              className="font-mono text-[11px] uppercase tracking-[0.2em] bg-deep-black text-neon-lime px-8 py-4 hover:bg-hot-pink hover:text-off-white transition-colors border-[3px] border-deep-black shadow-brutal-black"
            >
              Shop Merch
            </Link>
            <Link
              href="/sponsors"
              className="font-mono text-[11px] uppercase tracking-[0.2em] bg-transparent text-deep-black px-8 py-4 hover:bg-deep-black hover:text-neon-lime transition-colors border-[3px] border-deep-black shadow-brutal-black"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
      <div className="h-3 bg-hot-pink" />
    </>
  );
}
