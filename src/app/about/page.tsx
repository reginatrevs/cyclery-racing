import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { AboutHero } from "@/components/AboutHero";
import { AboutText } from "@/components/AboutText";
import { MissionText } from "@/components/MissionText";

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

const values = [
  {
    title: "Competition First",
    description:
      "We exist to race. Every training block, every team decision, every partnership — it all points toward the start line.",
  },
  {
    title: "Develop Talent",
    description:
      "From juniors to elite, we build riders. Seven athletes have turned professional from our program, and we're not done.",
  },
  {
    title: "Represent Canada",
    description:
      "Over a dozen riders have represented Canada internationally through Cyclery Racing. We carry that responsibility with pride.",
  },
  {
    title: "Move the Sport Forward",
    description:
      "Women's cycling in Canada deserves better infrastructure, more funding, and greater visibility. We're working to change that.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — BUILT FOR ___ with photo background */}
      <AboutHero />

      {/* About — centered justified text with highlighted key phrases */}
      <AboutText />

      {/* Mission — black bg, white text, cursor expands on hover */}
      <section className="relative py-20 lg:py-28 px-6 bg-black" data-cursor-expand>
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <p
              className="uppercase mb-6"
              style={{ ...fontStyle, fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.4)" }}
            >
              Our Mission
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-bold leading-[1.1] text-white relative z-10">
              <MissionText text="To advance women's competitive cycling in Canada through elite racing, athlete development, and building a program that opens doors for the next generation." />
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Values — step layout matching reference */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] font-bold uppercase leading-[0.9] text-black tracking-tight mb-12">
              Our Values
            </h2>
          </ScrollReveal>

          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 80}>
              <div className="group grid grid-cols-1 lg:grid-cols-[100px_1fr_320px] gap-4 lg:gap-16 items-start py-12 lg:py-16 border-b border-gray-200">
                {/* Number label */}
                <span
                  className="uppercase text-gray-400 lg:pt-4"
                  style={{ ...fontStyle, fontSize: "12px", fontWeight: 500 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title — large, turns pink on hover */}
                <h3 className="font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1] text-black tracking-tight transition-colors duration-300 group-hover:text-magenta">
                  {value.title}
                </h3>

                {/* Description — right column */}
                <p className="font-body text-sm text-black leading-relaxed lg:pt-4">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Women's Cycling in Canada */}
      <section className="py-20 lg:py-28 px-6" style={{ backgroundColor: "#ffe8f0" }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <p
              className="uppercase text-gray-400 mb-4"
              style={{ ...fontStyle, fontSize: "11px", fontWeight: 500 }}
            >
              The Bigger Picture
            </p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-bold uppercase leading-[0.9] text-black tracking-tight">
              Women&apos;s Cycling
              <br />
              in Canada
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="lg:pt-16">
              <p className="font-body text-base text-black leading-relaxed mb-6">
                Women&apos;s cycling in Canada has incredible talent but faces real
                challenges — underfunded teams, limited race calendars, and low
                visibility compared to men&apos;s programs. The North American
                landscape is tough for ambitious riders chasing their dreams.
              </p>
              <p className="font-body text-base text-black leading-relaxed mb-10">
                Cyclery Racing exists to challenge that reality. We&apos;re building
                the program we wish had existed — one that competes at the highest
                level, develops athletes from junior through elite, and proves that
                investing in women&apos;s cycling pays off.
              </p>
              <Button href="/donations" variant="outline">
                Support the Mission
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Instagram CTA — personality section */}
      <section className="py-20 lg:py-28 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <div className="relative">
              {/* Scrolling marquee text behind */}
              <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none opacity-[0.04]">
                <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                  <span className="font-display text-[clamp(100px,15vw,200px)] font-bold uppercase tracking-tight mx-8">
                    Follow the ride · Follow the ride · Follow the ride · Follow the ride ·
                  </span>
                  <span className="font-display text-[clamp(100px,15vw,200px)] font-bold uppercase tracking-tight mx-8">
                    Follow the ride · Follow the ride · Follow the ride · Follow the ride ·
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 py-10">
                <div className="max-w-xl">
                  <div className="flex items-baseline gap-4 flex-wrap mb-4">
                    <h2 className="font-display text-[clamp(36px,6vw,80px)] font-bold uppercase leading-[0.9] text-black tracking-tight">
                      Follow the ride.
                    </h2>
                    <a
                      href="https://instagram.com/cycleryracing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-magenta font-bold uppercase whitespace-nowrap hover:text-black transition-colors"
                      style={{ ...fontStyle, fontSize: "clamp(14px,1.5vw,18px)" }}
                    >
                      @cycleryracing
                    </a>
                  </div>
                  <p className="font-body text-sm lg:text-base text-black leading-relaxed">
                    Race-day stories, behind-the-scenes training, team travel, and the moments in between. Follow along for an inside look at what it takes to compete at the elite level in women&apos;s cycling.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
