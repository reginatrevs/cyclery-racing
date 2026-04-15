import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — two-column: photo left, title right */}
      <section className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left — Photo */}
          <div className="relative h-[50vh] lg:h-auto">
            <Image
              src="/contact-us.jpg"
              alt="Cyclery Racing team"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — Contact title + all info */}
          <div className="flex flex-col justify-between p-8 lg:p-16 lg:pl-20">
            {/* Top — big title */}
            <div className="pt-24 lg:pt-32">
              <ScrollReveal>
                <h1 className="font-display text-[clamp(48px,8vw,120px)] font-bold uppercase leading-[0.85] text-black tracking-tight">
                  Contact
                </h1>
                <p className="font-body text-base text-black leading-relaxed mt-4 max-w-md">
                  Have a question, want to partner, or just want to say hi?
                  We&apos;d love to hear from you.
                </p>
              </ScrollReveal>
            </div>

            {/* Bottom — contact details grid */}
            <div className="pt-16 pb-8 lg:pb-16">
              <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-gray-200 pt-10">
                  {/* Vince — primary */}
                  <div>
                    <p
                      className="uppercase text-gray-400 mb-4"
                      style={{ ...fontStyle, fontSize: "10px", fontWeight: 600 }}
                    >
                      Team Owner &amp; Sponsorship Contact
                    </p>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-black leading-[1.1] mb-1">
                      Vince Caceres
                    </h2>
                    <a
                      href="mailto:vince@thecyclery.ca"
                      className="inline-block font-display text-lg lg:text-xl font-bold text-magenta hover:text-black transition-colors nav-link"
                    >
                      vince@thecyclery.ca
                    </a>
                  </div>

                  {/* Right column — social + media stacked */}
                  <div className="space-y-8">
                    {/* Follow */}
                    <div>
                      <p
                        className="uppercase text-gray-400 mb-3"
                        style={{ ...fontStyle, fontSize: "10px", fontWeight: 600 }}
                      >
                        Follow Us
                      </p>
                      <a
                        href="https://instagram.com/cycleryracing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link font-display text-lg font-bold text-black hover:text-magenta transition-colors"
                      >
                        @cycleryracing
                      </a>
                    </div>

                    {/* Media */}
                    <div>
                      <p
                        className="uppercase text-gray-400 mb-3"
                        style={{ ...fontStyle, fontSize: "10px", fontWeight: 600 }}
                      >
                        Media &amp; Press
                      </p>
                      <a
                        href="mailto:regina@trevs.ca"
                        className="nav-link font-body text-base text-black hover:text-magenta transition-colors"
                      >
                        regina@trevs.ca
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map — full width, pink-tinted */}
      <section className="px-6 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <div className="mb-6 flex items-baseline justify-between">
              <div>
                <p
                  className="uppercase text-gray-400 mb-3"
                  style={{ ...fontStyle, fontSize: "10px", fontWeight: 600 }}
                >
                  Our Home Shop
                </p>
                <p className="font-display text-lg lg:text-xl font-bold text-black">
                  The Cyclery
                </p>
                <p className="font-body text-sm text-black/60 mt-1">
                  1115 Bank St, Ottawa, Ontario, Canada
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=The+Cyclery+1115+Bank+St+Ottawa"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-body text-sm font-bold text-black hover:text-magenta transition-colors hidden lg:block"
              >
                Open in Maps →
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div
              className="relative w-full h-[400px] lg:h-[500px] overflow-hidden"
              style={{
                filter: "saturate(0) contrast(1.1) brightness(1.05)",
              }}
            >
              {/* Pink overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundColor: "rgba(255, 19, 140, 0.08)",
                  mixBlendMode: "multiply",
                }}
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5603.5512717170395!2d-75.68533602240592!3d45.39369657107294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05e9cd0ea36d%3A0x94b181e207f67f54!2sThe%20Cyclery!5e0!3m2!1sen!2sca!4v1776210461299!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Cyclery — Ottawa"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
