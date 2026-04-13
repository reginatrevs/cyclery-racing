import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

const bikes = [
  { brand: "Cervélo", model: "R5", type: "Road Race", specs: ["Shimano Ultegra Di2", "Carbon Frame", "Disc Brakes", "7.2kg"] },
  { brand: "Cervélo", model: "S5", type: "Aero / Crit", specs: ["Shimano Dura-Ace Di2", "Aero Carbon", "Disc Brakes", "7.6kg"] },
  { brand: "Cervélo", model: "Caledonia-5", type: "All-Road / Endurance", specs: ["Shimano Ultegra Di2", "Endurance Geometry", "Disc Brakes", "7.8kg"] },
];

const bikeAccents = ["bg-lime", "bg-magenta", "bg-gray-200"];

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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
            What We Ride
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black">
            Our Equipment
          </h1>
        </div>
      </section>

      {/* Bikes */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="The Fleet" heading="Our Bikes" className="mb-14" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {bikes.map((bike, i) => (
              <ScrollReveal key={bike.model} delay={i * 120}>
                <div className="card-hover rounded overflow-hidden border border-gray-200">
                  <div className={`aspect-[4/3] ${bikeAccents[i]}`} />
                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                      {bike.brand}
                    </p>
                    <h3 className="font-display text-3xl font-bold uppercase text-black mb-1">
                      {bike.model}
                    </h3>
                    <p className="font-body text-sm text-magenta font-semibold mb-4">
                      {bike.type}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {bike.specs.map((spec) => (
                        <span key={spec} className="font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1 rounded bg-gray-100 text-gray-600">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 lg:py-28 px-6 bg-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="Gear" heading="Equipment & Partners" className="mb-14" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {equipment.map((cat, catIdx) => (
              <ScrollReveal key={cat.category} delay={catIdx * 100}>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-black mb-6 pb-3 border-b-2 border-magenta">
                    {cat.category}
                  </h3>
                  <div className="space-y-5">
                    {cat.items.map((item) => (
                      <div key={item.name}>
                        <h4 className="font-body text-base font-semibold text-black mb-1">
                          {item.name}
                        </h4>
                        <p className="font-body text-sm text-gray-600 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
