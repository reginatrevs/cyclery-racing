import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export default function DonationsPage() {
  return (
    <>
      {/* Hero — big support photo */}
      <section className="relative w-full min-h-[60vh] lg:min-h-[80vh] overflow-hidden flex items-end">
        <Image
          src="/support.png"
          alt="Support Cyclery Racing"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-10 lg:pb-16 max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4">
            Support Us
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,120px)] font-bold uppercase leading-[0.85] text-white">
            Fuel the Ride
          </h1>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <SectionHeading label="Why It Matters" heading="The Reality" className="mb-8 lg:mb-0" />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <p className="font-body text-lg lg:text-xl text-black leading-[1.6] mb-6">
                  Women&apos;s cycling is chronically underfunded. Unlike men&apos;s professional teams,
                  most women&apos;s programs operate on minimal budgets with little institutional backing.
                </p>
                <p className="font-body text-base lg:text-lg text-gray-600 leading-[1.6] mb-6">
                  Race entry fees, travel to out-of-province events, equipment, coaching, and team
                  wear — it all comes from the dedication of riders and the generosity of supporters
                  like you. Every contribution, no matter the size, goes directly toward keeping
                  our athletes on the road and competing at the highest level.
                </p>
                <p className="font-body text-base lg:text-lg text-gray-600 leading-[1.6]">
                  We&apos;re proud to be an approved affiliate of{" "}
                  <span className="font-semibold text-black">Cycling Canada&apos;s 1882 Collective</span>,
                  a national fundraising initiative that channels support directly to Canadian cycling
                  programs. When you donate through our link, you&apos;re investing in the future of
                  women&apos;s cycling in Canada.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Donate — high-impact CTA */}
      <section className="relative bg-magenta overflow-hidden">
        {/* Giant background text for visual energy */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[clamp(200px,30vw,500px)] font-bold uppercase text-white/[0.07] leading-none tracking-tight whitespace-nowrap">
            DONATE
          </span>
        </div>

        <div className="relative z-10 py-24 lg:py-36 px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <ScrollReveal direction="layer">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 mb-6">
                100% goes to the team
              </p>
              <h2 className="font-display text-[clamp(52px,10vw,140px)] font-bold uppercase leading-[0.85] text-white mb-8">
                Make a<br />Donation
              </h2>
              <p className="font-body text-base lg:text-xl text-white/70 max-w-xl mx-auto leading-relaxed mb-12">
                All donations go through Zeffy via Cycling Canada&apos;s 1882 Collective.
                Zero platform fees — every dollar supports our athletes directly.
              </p>
              <Link
                href="https://www.zeffy.com/en-CA/donation-form/1882-collective"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-[14px] font-bold uppercase tracking-[0.1em] px-12 py-5 rounded-full bg-white text-magenta border-2 border-white hover:bg-black hover:text-white hover:border-black transition-all"
              >
                Donate via Zeffy
              </Link>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Tax receipts issued through Cycling Canada
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20 lg:py-28 px-6 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="More Ways to Help" heading="Other Support" className="mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200">
            {/* Merch */}
            <ScrollReveal delay={0}>
              <div className="bg-white flex flex-col h-full">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src="/race/race-2.png"
                    alt="Rep the Team"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="p-10 lg:p-14 flex flex-col flex-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
                  Merch
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold uppercase text-black leading-tight mb-4">
                  Rep the Team
                </h3>
                <p className="font-body text-base text-gray-600 leading-relaxed mb-8 flex-1">
                  Grab a Cyclery Racing hat and show your support wherever you go.
                  Available through The Cyclery shop.
                </p>
                <div>
                  <Button href="https://thecyclery.ca" variant="outline">
                    Shop at The Cyclery
                  </Button>
                </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Sponsorship */}
            <ScrollReveal delay={100}>
              <div className="bg-white p-10 lg:p-14">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
                  Partnership
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold uppercase text-black leading-tight mb-4">
                  Become a Sponsor
                </h3>
                <p className="font-body text-base text-gray-600 leading-relaxed mb-8">
                  Align your brand with one of Canada&apos;s most established women&apos;s cycling
                  programs. We offer flexible partnership packages for businesses of all sizes.
                </p>
                <div>
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
