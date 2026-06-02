import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { GearList } from "@/components/GearList";

const fontStyle = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
  letterSpacing: "-0.03em",
};

const gear = [
  {
    category: "Drivetrain",
    brand: "SRAM",
    product: "Force AXS w/ Powermeter",
    slug: "sram",
    url: "https://sram.com",
    image: "/force-sram.png",
    imageBg: "bg-black",
    description:
      "Wireless electronic shifting paired with an integrated power meter. The SRAM Force AXS gives our riders precision data and flawless shifting in every race.",
  },
  {
    category: "Wheels",
    brand: "House Cyclery",
    product: "Custom Race Wheels",
    slug: "cyclery",
    url: "https://thecyclery.ca",
    image: "/house-wheelset.png",
    imageBg: "bg-white",
    description:
      "Built in-house by The Cyclery, our race wheels are spec'd for elite competition. Lightweight, stiff, and proven across North America.",
  },
  {
    category: "Kit & Clothing",
    brand: "Castelli",
    product: "Custom Team Kit",
    slug: "castelli",
    url: "https://castelli-cycling.com",
    image: "/jersey.png",
    imageBg: "bg-white",
    description:
      "Our race kit is designed and manufactured by Castelli. Built for comfort, aerodynamics, and looking fast standing still.",
  },
  {
    category: "Helmets & Eyewear",
    brand: "Smith",
    product: "Race Helmets & Sunglasses",
    slug: "smith",
    url: "https://smithoptics.com",
    image: "/helmet-smith.png",
    secondImage: "/sunglasses.png",
    imageBg: "bg-white",
    description:
      "Smith keeps us protected and focused with MIPS-equipped helmets and ChromaPop lens technology for every condition.",
  },
  {
    category: "Nutrition",
    brand: "Skratch Labs",
    product: "Hydration & Fuel",
    slug: "skratch",
    url: "https://skratchlabs.com",
    image: "/skratch-drink.png",
    imageBg: "bg-white",
    description:
      "Real ingredients, no shortcuts. Skratch fuels our training and racing with hydration and nutrition made for endurance athletes.",
  },
];

const staggerPositions = [
  "ml-0",
  "ml-[50%] mt-8",
  "ml-[5%] mt-6",
  "ml-[48%] -mt-4",
  "ml-[10%] mt-8",
];

export default function EquipmentPage() {
  return (
    <>
      {/* Hero — Equipment title + Ostro VAM2 info + bike video */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-32 lg:pt-40">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black tracking-tight mb-10 lg:mb-14">
              Equipment
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-xl">
              {/* Logo + title inline */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-[50px] lg:w-[65px] h-[50px] lg:h-[65px] flex-shrink-0">
                  <Image
                    src="/sponsors/factor-pink.png"
                    alt="Factor Bikes"
                    fill
                    className="object-contain object-left"
                    sizes="65px"
                  />
                </div>
                <h2 className="font-display text-[clamp(24px,3.5vw,42px)] font-bold uppercase leading-[0.9] text-magenta">
                  Ostro VAM2
                </h2>
              </div>
              <p className="font-body text-base text-black leading-relaxed mb-4">
                Ostro VAM2 with Prisma print. Built by The Cyclery, Ottawa. A next-generation
                aero bike that doesn&apos;t compromise on weight, engineered to be the fastest
                bike in the peloton.
              </p>
              <p className="font-body text-base text-black leading-relaxed mb-8">
                Light enough to climb, aero enough to win sprints, and stiff enough
                to put down serious power when it counts.
              </p>
              <Button href="https://www.thecyclery.ca/factor-ostro-vam-build-sram.html" variant="outline">
                Build Your Own
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Factor bike video */}
        <div className="relative w-full mt-12 lg:mt-16 pb-8 lg:pb-16">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[85%] lg:w-[70%] mx-auto h-auto object-contain"
          >
            <source src="/factor-bike.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Gear — Interactive List */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(36px,6vw,80px)] font-bold uppercase leading-[0.85] text-black tracking-tight mb-16">
              What We Use
            </h2>
          </ScrollReveal>
          <GearList gear={gear} />
        </div>
      </section>

      {/* CTA — support / sponsors */}
      <section className="px-6 py-20 lg:py-28" style={{ backgroundColor: "#ffe8f0" }}>
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p
                className="uppercase mb-4"
                style={{ ...fontStyle, fontSize: "11px", fontWeight: 500, color: "rgba(0,0,0,0.35)" }}
              >
                Want to equip the team?
              </p>
              <h2 className="font-display text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.9] text-black tracking-tight mb-6">
                Become a Partner
              </h2>
              <p className="font-body text-base text-black leading-relaxed mb-10">
                We&apos;re always looking for brands that want to be part of something real.
                If you make products that help athletes perform, let&apos;s talk.
              </p>
              <Button href="/sponsors" variant="primary">
                View Sponsorship
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
