import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";

export default function DonationsPage() {
  return (
    <>
      {/* Hero — The Reality */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black tracking-tight mb-12 lg:mb-16">
              The Reality
            </h1>
          </ScrollReveal>

          <div className="lg:max-w-3xl">
            <ScrollReveal delay={100}>
                <p className="font-body text-lg lg:text-xl text-black leading-[1.6] mb-6">
                  Women&apos;s cycling is chronically underfunded. Unlike men&apos;s professional teams,
                  most women&apos;s programs operate on minimal budgets with little institutional backing.
                </p>
                <p className="font-body text-base lg:text-lg text-gray-600 leading-[1.6] mb-6">
                  Race entry fees, travel, equipment, coaching, team wear. It all comes from
                  the riders themselves and supporters like you. Every contribution, no matter the size,
                  goes directly toward keeping our athletes on the road and competing at the highest level.
                </p>
                <p className="font-body text-base lg:text-lg text-gray-600 leading-[1.6]">
                  There are many ways to support us, big and small. From buying merch to
                  spreading the word, it all makes a difference. For those looking to make a
                  direct financial contribution, donations through the{" "}
                  <span className="font-semibold text-black">1882 Collective</span>{" "}
                  are tax-receiptable and go straight to the team.
                </p>
              </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo gallery — staggered like races page */}
      <section className="py-8 lg:py-12 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex gap-3 lg:gap-4 items-end">
            <div className="relative w-[200px] lg:w-[300px] h-[260px] lg:h-[400px] overflow-hidden flex-shrink-0">
              <Image src="/support-us.png" alt="" fill className="object-cover" sizes="300px" />
            </div>
            <div className="relative w-[180px] lg:w-[260px] h-[320px] lg:h-[480px] overflow-hidden flex-shrink-0">
              <Image src="/contact-us.jpg" alt="" fill className="object-cover" sizes="260px" />
            </div>
            <div className="relative w-[220px] lg:w-[340px] h-[240px] lg:h-[360px] overflow-hidden flex-shrink-0">
              <Image src="/support-us-2.jpg" alt="" fill className="object-cover" sizes="340px" />
            </div>
            <div className="relative w-[190px] lg:w-[280px] h-[300px] lg:h-[440px] overflow-hidden flex-shrink-0">
              <Image src="/support.png" alt="" fill className="object-cover" sizes="280px" />
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-28 lg:py-40 px-6 md:px-12 lg:px-16" style={{ backgroundColor: "#ffe8f0" }}>
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(52px,10vw,140px)] font-bold uppercase leading-[0.85] text-black tracking-tight mb-8">
              Make a<br />Donation
            </h2>
            <p className="font-body text-lg lg:text-xl text-black leading-relaxed max-w-2xl mb-12">
              100% of your donation goes directly to the team. All donations go through
              Zeffy via the 1882 Collective. Zero platform fees. Every dollar
              supports our athletes directly. Tax receipts are issued automatically.
            </p>
            <Button href="https://www.zeffy.com/en-CA/donation-form/1882-collective" variant="primary">
              Donate via Zeffy
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Merch + Sponsorship — rider-card style */}
      <section className="py-20 lg:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Merch card */}
            <ScrollReveal>
              <div className="group">
                <div className="border border-gray-200 overflow-hidden transition-colors hover:border-magenta">
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src="/merch.jpg"
                      alt="Rep the Team"
                      fill
                      className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <div className="pt-3 pb-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-2">
                    Merch
                  </p>
                  <h3 className="font-display text-lg lg:text-xl font-bold uppercase text-black group-hover:text-magenta transition-colors leading-tight mb-2">
                    Rep the Team
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                    Grab a Cyclery Racing hat and show your support wherever you go.
                    Available through The Cyclery shop.
                  </p>
                  <Button href="https://www.thecyclery.ca/cyclery-racing-5-panel-hat.html" variant="outline">
                    Shop at The Cyclery
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Sponsorship card */}
            <ScrollReveal delay={100}>
              <div className="group">
                <div className="border border-gray-200 overflow-hidden transition-colors hover:border-magenta">
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src="/sponsorship.jpg"
                      alt="Become a Sponsor"
                      fill
                      className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <div className="pt-3 pb-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-2">
                    Partnership
                  </p>
                  <h3 className="font-display text-lg lg:text-xl font-bold uppercase text-black group-hover:text-magenta transition-colors leading-tight mb-2">
                    Become a Sponsor
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                    Align your brand with one of Canada&apos;s most established women&apos;s cycling
                    programs. Flexible partnership packages for businesses of all sizes.
                  </p>
                  <Button href="/sponsors" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
