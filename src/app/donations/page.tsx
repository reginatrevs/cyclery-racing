import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const donationTiers = [
  { amount: "$25", title: "Supporter", description: "Help cover the cost of race nutrition and hydration for one event." },
  { amount: "$50", title: "Contributor", description: "Cover a single race entry fee. Every race we enter is a chance to compete and grow." },
  { amount: "$100", title: "Champion", description: "Fund a set of race tires or essential mechanical supplies for the team." },
  { amount: "$250", title: "Patron", description: "Help cover travel costs to get the team to an out-of-province race weekend." },
  { amount: "$500+", title: "Benefactor", description: "Major contribution toward equipment upgrades, coaching, or a full race weekend budget." },
];

const whereMoneyGoes = [
  { label: "Race Entries", percentage: 30, color: "bg-magenta" },
  { label: "Travel & Accommodation", percentage: 25, color: "bg-lime" },
  { label: "Equipment & Maintenance", percentage: 20, color: "bg-black" },
  { label: "Coaching & Training", percentage: 15, color: "bg-magenta/60" },
  { label: "Kit & Team Wear", percentage: 10, color: "bg-gray-400" },
];

export default function DonationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-magenta">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4">
            Make a Difference
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-white">
            Fuel the Ride
          </h1>
          <p className="mt-6 font-body text-lg text-white/70 max-w-lg leading-relaxed">
            Women&apos;s cycling is underfunded. Your support helps us race harder,
            travel further, and inspire more.
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <SectionHeading label="Why Support Us" heading="The Funding Gap" className="mb-8" />
            <p className="font-body text-lg text-gray-600 leading-relaxed">
              Unlike men&apos;s professional cycling, most women&apos;s teams operate
              on minimal budgets with little institutional support. Race entry fees,
              travel, equipment, and coaching all come from the pockets of riders
              and supporters. Every dollar makes a real difference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 lg:py-28 px-6 bg-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="Give" heading="Donation Tiers" className="mb-14" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationTiers.map((tier, i) => (
              <ScrollReveal key={tier.title} delay={i * 80}>
                <div className="bg-white rounded p-8 border border-gray-200 card-hover h-full flex flex-col">
                  <span className="font-display text-4xl font-bold text-magenta mb-2">
                    {tier.amount}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-black mb-3">
                    {tier.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed flex-1">
                    {tier.description}
                  </p>
                  <div className="mt-6">
                    <Button href="/contact" variant="outline" className="w-full text-center">
                      Donate {tier.amount}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where Money Goes */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="Transparency" heading="Where Your Money Goes" className="mb-14" />
          </ScrollReveal>

          <div className="space-y-6">
            {whereMoneyGoes.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-body text-sm font-semibold text-black">
                      {item.label}
                    </span>
                    <span className="font-mono text-[11px] text-gray-400">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={`progress-bar-fill ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-20 lg:py-28 px-6 bg-lime">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <SectionHeading label="More Ways to Help" heading="Other Support" className="mb-8" />
            <p className="font-body text-lg text-black/60 leading-relaxed mb-10">
              Not able to donate? You can still make a huge impact by buying team
              merch, connecting us with potential sponsors, or simply sharing our
              story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/merch" variant="secondary">
                Shop Merch
              </Button>
              <Button href="/sponsors" variant="secondary">
                Sponsor Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
