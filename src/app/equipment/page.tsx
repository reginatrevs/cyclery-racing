import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";

const bikes = [
  {
    brand: "Cervélo",
    model: "R5",
    type: "Road Race",
    specs: ["Shimano Ultegra Di2", "Carbon Frame", "Disc Brakes", "7.2kg"],
    color: "border-neon-lime",
    bgColor: "bg-neon-lime/5",
  },
  {
    brand: "Cervélo",
    model: "S5",
    type: "Aero / Crit",
    specs: ["Shimano Dura-Ace Di2", "Aero Carbon", "Disc Brakes", "7.6kg"],
    color: "border-hot-pink",
    bgColor: "bg-hot-pink/5",
  },
  {
    brand: "Cervélo",
    model: "Caledonia-5",
    type: "All-Road / Endurance",
    specs: ["Shimano Ultegra Di2", "Endurance Geometry", "Disc Brakes", "7.8kg"],
    color: "border-lavender",
    bgColor: "bg-lavender/5",
  },
];

const equipment = [
  {
    category: "Components",
    items: [
      { name: "Shimano Ultegra Di2 Groupset", detail: "Electronic shifting for precise, reliable gear changes in any condition." },
      { name: "Shimano Dura-Ace Wheels", detail: "Carbon clincher wheels for the ultimate in weight savings and aerodynamics." },
      { name: "Continental GP5000 Tires", detail: "The gold standard of road tires — fast, grippy, and incredibly durable." },
    ],
  },
  {
    category: "Nutrition",
    items: [
      { name: "Skratch Labs Hydration", detail: "Real ingredients for real athletes. Our go-to for on-bike hydration and fueling." },
      { name: "Clif Bar Race Day Nutrition", detail: "Bars, gels, and chews that keep us powered through the hardest efforts." },
    ],
  },
  {
    category: "Kit & Clothing",
    items: [
      { name: "Pearl Izumi Pro Racing Kit", detail: "Custom team kit designed for performance and comfort in all conditions." },
      { name: "Giro Helmets", detail: "Aero and lightweight helmet options for road, TT, and training." },
      { name: "Giro Shoes", detail: "Carbon-soled road shoes for maximum power transfer." },
    ],
  },
  {
    category: "Tech & Accessories",
    items: [
      { name: "Garmin Edge 840", detail: "GPS computer for navigation, power data, and race analytics." },
      { name: "Wahoo KICKR Trainers", detail: "Indoor training platforms for structured winter workouts." },
      { name: "Muc-Off Bike Care", detail: "Premium cleaning and maintenance products to keep our bikes race-ready." },
    ],
  },
];

export default function EquipmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 px-6 relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 halftone-lg text-neon-lime/[0.05]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[350px] font-900 uppercase text-off-white/[0.02] leading-none">
            RIDE
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <span className="inline-block bg-hot-pink/10 border-[2px] border-hot-pink/30 px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-hot-pink mb-6">
            What We Ride
          </span>
          <h1 className="font-display text-[clamp(64px,10vw,160px)] font-900 uppercase leading-[0.82]">
            <span className="text-off-white">Our </span>
            <span className="text-outline-thick">Equipment</span>
          </h1>
          <p className="mt-8 font-body text-lg text-off-white/60 max-w-xl">
            The bikes, gear, and tech that keep Cyclery Racing competitive.
            Every piece is chosen for performance.
          </p>
        </div>
      </section>

      <Marquee size="large" items={["Performance", "Precision", "Power", "Speed"]} bgColor="bg-mint" textColor="text-deep-black" />

      {/* Bikes Section */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[250px] font-900 text-off-white/[0.02] uppercase leading-none">
            FLEET
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel>The Fleet</SectionLabel>
          <h2 className="mt-4 mb-16 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82]">
            <span className="text-off-white">Our </span>
            <span className="text-outline">Bikes</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bikes.map((bike, i) => (
              <div
                key={bike.model}
                className={`${i % 2 === 0 ? "tilt-card" : "tilt-card-right"}`}
              >
                <div className={`border-[3px] ${bike.color} overflow-hidden ${i === 0 ? "shadow-brutal-lime" : i === 1 ? "shadow-brutal-pink" : "shadow-brutal-black"}`}>
                  {/* Bike image area */}
                  <div className={`${bike.bgColor} aspect-[4/3] relative`}>
                    <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[80px] font-900 text-off-white/10 uppercase">
                        {bike.model}
                      </span>
                    </div>
                    <span className="tag absolute top-4 right-4">
                      {bike.type}
                    </span>
                  </div>
                  {/* Info */}
                  <div className="p-6 bg-deep-black">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-lime">
                      {bike.brand}
                    </p>
                    <h3 className="font-display text-4xl font-900 uppercase text-off-white mt-1">
                      {bike.model}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {bike.specs.map((spec) => (
                        <span
                          key={spec}
                          className="font-mono text-[9px] uppercase tracking-[0.15em] text-off-white/40 border border-off-white/10 px-2 py-1"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <div className="h-3 bg-hot-pink" />
      <section className="py-28 lg:py-36 px-6 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[250px] font-900 text-deep-black/[0.02] uppercase leading-none">
            GEAR
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel color="text-hot-pink">Gear &amp; Partners</SectionLabel>
          <h2 className="mt-4 mb-16 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82]">
            <span className="text-deep-black">What we </span>
            <span className="text-hot-pink">use</span>
          </h2>

          <div className="space-y-16">
            {equipment.map((category) => (
              <div key={category.category}>
                <h3 className="font-display text-2xl font-900 uppercase text-deep-black mb-6 pb-3 border-b-[3px] border-deep-black">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-6 border-[3px] border-deep-black/10 hover:border-hot-pink transition-colors relative overflow-hidden shadow-brutal-black"
                    >
                      <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                      <div className="relative z-10">
                        <h4 className="font-display text-lg font-800 uppercase text-deep-black">
                          {item.name}
                        </h4>
                        <p className="mt-3 font-body text-sm text-deep-black/60 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-3 bg-hot-pink" />
    </>
  );
}
