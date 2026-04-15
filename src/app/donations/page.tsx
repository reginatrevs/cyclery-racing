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

      {/* Donate — single CTA */}
      <section className="py-20 lg:py-28 px-6 bg-black">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal direction="layer">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">
              Donate
            </p>
            <h2 className="font-display text-[clamp(40px,7vw,88px)] font-bold uppercase leading-[0.85] text-white mb-6">
              Make a<br />Donation
            </h2>
            <p className="font-body text-base lg:text-lg text-white/50 max-w-lg mx-auto leading-relaxed mb-10">
              All donations go through Zeffy via Cycling Canada&apos;s 1882 Collective.
              100% of your contribution supports our team — Zeffy charges zero platform fees.
            </p>
            <Link
              href="https://www.zeffy.com/en-CA/donation-form/1882-collective"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-[13px] font-bold uppercase tracking-[0.1em] px-10 py-4 rounded-full bg-magenta text-white border-2 border-magenta hover:bg-white hover:text-black hover:border-white transition-all"
            >
              Donate via Zeffy
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              Tax receipts issued through Cycling Canada
            </p>
          </ScrollReveal>
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
              <div className="bg-white p-10 lg:p-14 flex flex-col h-full">
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
            </ScrollReveal>

            {/* Sponsorship */}
            <ScrollReveal delay={100}>
              <div className="bg-white p-10 lg:p-14 flex flex-col h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
                  Partnership
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold uppercase text-black leading-tight mb-4">
                  Become a Sponsor
                </h3>
                <p className="font-body text-base text-gray-600 leading-relaxed mb-8 flex-1">
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
