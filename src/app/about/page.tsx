import { ScrollReveal } from "@/components/ScrollReveal";
import { StickySection } from "@/components/StickySection";
import { Button } from "@/components/Button";

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
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p
            className="uppercase text-gray-400 mb-4"
            style={{ ...fontStyle, fontSize: "11px", fontWeight: 500 }}
          >
            About Us
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black tracking-tight">
            Our Story
          </h1>
        </div>
      </section>

      {/* About — paragraph style with sticky heading */}
      <StickySection
        label=""
        heading=""
        className="border-t border-gray-200"
      >
        <div className="max-w-[600px]">
          <ScrollReveal>
            <p className="font-body text-lg lg:text-xl text-black leading-relaxed mb-8">
              The Cyclery Racing is one of Canada&apos;s oldest continually running
              women&apos;s road programs — and one of its most successful.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-body text-base text-gray-500 leading-relaxed mb-6">
              Over the last decade, the team has won six elite and under-23 road
              and time trial national championships, seen three riders compete at
              the Olympic Games, and developed seven riders who turned professional
              for UCI teams. Over a dozen Cyclery Racing athletes have represented
              Canada on the international stage.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-base text-gray-500 leading-relaxed mb-6">
              There is no other women&apos;s program in Canada with a history of such
              continuous success.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-body text-base text-gray-500 leading-relaxed">
              Based out of The Cyclery bike shop in Ottawa, the team is dedicated
              to supporting up-and-coming female cyclists across all categories —
              elite, U23, and junior — and is a proud affiliate member of Cycling
              Canada&apos;s 1882 Collective national fundraising initiative.
            </p>
          </ScrollReveal>
        </div>
      </StickySection>

      {/* Mission */}
      <section className="py-20 lg:py-28 px-6 bg-black">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <p
              className="uppercase text-white/40 mb-6"
              style={{ ...fontStyle, fontSize: "11px", fontWeight: 500 }}
            >
              Our Mission
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-bold leading-[1.1] text-white">
              To advance women&apos;s competitive cycling in Canada through elite
              racing, athlete development, and building a program that opens doors
              for the next generation.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <p
              className="uppercase text-gray-400 mb-4"
              style={{ ...fontStyle, fontSize: "11px", fontWeight: 500 }}
            >
              What Drives Us
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] font-bold uppercase leading-[0.9] text-black tracking-tight mb-16">
              Our Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-200">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className={`py-8 lg:py-10 pr-8 ${
                  i % 2 === 0 ? "md:pr-12 md:border-r border-gray-200" : "md:pl-12"
                } border-b border-gray-200`}>
                  <span
                    className="uppercase text-magenta"
                    style={{ ...fontStyle, fontSize: "10px", fontWeight: 600 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl lg:text-2xl font-bold uppercase text-black mt-2 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed max-w-sm">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder — rotating gallery */}
      <section className="py-0">
        <div className="w-full h-[50vh] lg:h-[70vh] bg-gray-100 flex items-center justify-center">
          <p
            className="uppercase text-gray-300"
            style={{ ...fontStyle, fontSize: "13px", fontWeight: 500 }}
          >
            Gallery — coming soon
          </p>
        </div>
      </section>

      {/* Women's Cycling in Canada */}
      <section className="py-20 lg:py-28 px-6">
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
              <p className="font-body text-base text-gray-500 leading-relaxed mb-6">
                Women&apos;s cycling in Canada has incredible talent but faces real
                challenges — underfunded teams, limited race calendars, and low
                visibility compared to men&apos;s programs. The North American
                landscape is tough for ambitious riders chasing their dreams.
              </p>
              <p className="font-body text-base text-gray-500 leading-relaxed mb-10">
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

      {/* Support CTA */}
      <section className="py-20 lg:py-28 px-6 bg-gray-100">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p
              className="uppercase text-gray-400 mb-4"
              style={{ ...fontStyle, fontSize: "11px", fontWeight: 500 }}
            >
              Make a Difference
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.9] text-black tracking-tight mb-6">
              Help Us Ride Further
            </h2>
            <p className="font-body text-base text-gray-500 leading-relaxed mb-10">
              Donations — eligible for a tax receipt via Cycling Canada — help
              offset race entry costs, team lodging, and ensure riders have the
              equipment they need to realize their full potential at prestigious
              events across North America.
            </p>
            <Button href="/donations" variant="outline">
              Donate Now
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
