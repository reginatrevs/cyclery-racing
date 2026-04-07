import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";

const products = [
  {
    name: "Team Jersey — Race Cut",
    category: "Cycling Kit",
    price: "$120",
    color: "bg-neon-lime",
    textColor: "text-deep-black",
    borderColor: "border-neon-lime",
  },
  {
    name: "Team Bib Shorts",
    category: "Cycling Kit",
    price: "$140",
    color: "bg-hot-pink",
    textColor: "text-off-white",
    borderColor: "border-hot-pink",
  },
  {
    name: "Cyclery Racing Cap",
    category: "Accessories",
    price: "$35",
    color: "bg-lavender",
    textColor: "text-deep-black",
    borderColor: "border-lavender",
  },
  {
    name: "Training Tee",
    category: "Casual Wear",
    price: "$45",
    color: "bg-orange",
    textColor: "text-off-white",
    borderColor: "border-orange",
  },
  {
    name: "Team Socks — 3 Pack",
    category: "Accessories",
    price: "$30",
    color: "bg-mint",
    textColor: "text-deep-black",
    borderColor: "border-mint",
  },
  {
    name: "Hoodie — Bold Type",
    category: "Casual Wear",
    price: "$75",
    color: "bg-soft-pink",
    textColor: "text-deep-black",
    borderColor: "border-soft-pink",
  },
  {
    name: "Team Water Bottle",
    category: "Accessories",
    price: "$15",
    color: "bg-neon-lime",
    textColor: "text-deep-black",
    borderColor: "border-neon-lime",
  },
  {
    name: "Musette Bag",
    category: "Accessories",
    price: "$25",
    color: "bg-hot-pink",
    textColor: "text-off-white",
    borderColor: "border-hot-pink",
  },
];

export default function MerchPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 px-6 relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 halftone-lg text-neon-lime/[0.05]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[350px] font-900 uppercase text-off-white/[0.02] leading-none">
            SHOP
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <span className="inline-block bg-hot-pink/10 border-[2px] border-hot-pink/30 px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-hot-pink mb-6">
            Shop &amp; Support
          </span>
          <h1 className="font-display text-[clamp(64px,10vw,160px)] font-900 uppercase leading-[0.82]">
            <span className="text-off-white">Team </span>
            <span className="text-outline-thick">Merch</span>
          </h1>
          <p className="mt-8 font-body text-lg text-off-white/60 max-w-xl">
            Rep the team. All merch is available through The Cyclery shop.
            Proceeds support our race season.
          </p>
        </div>
      </section>

      <Marquee size="large" items={["Shop Now", "Rep the Team", "Support the Ride", "Look Fast"]} bgColor="bg-soft-pink" textColor="text-deep-black" />

      {/* Product Grid */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[250px] font-900 text-off-white/[0.02] uppercase leading-none">
            GEAR
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div
                key={product.name}
                className={`group ${i % 2 === 0 ? "tilt-card" : "tilt-card-right"}`}
              >
                <div className={`border-[3px] ${product.borderColor} overflow-hidden ${i % 3 === 0 ? "shadow-brutal-lime" : i % 3 === 1 ? "shadow-brutal-pink" : "shadow-brutal-black"}`}>
                  {/* Product image area */}
                  <div className={`${product.color} aspect-square relative`}>
                    <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`font-display text-6xl font-900 ${product.textColor} opacity-20`}>
                        ★
                      </span>
                    </div>
                    {/* Category tag */}
                    <span className="tag absolute top-3 left-3">
                      {product.category}
                    </span>
                  </div>
                  {/* Info */}
                  <div className="p-5 bg-deep-black">
                    <h3 className="font-display text-lg font-800 uppercase text-off-white">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-display text-2xl font-900 text-neon-lime">
                        {product.price}
                      </span>
                      <a
                        href="#"
                        className="font-mono text-[10px] uppercase tracking-[0.15em] bg-hot-pink text-off-white px-4 py-2 hover:bg-neon-lime hover:text-deep-black transition-colors"
                      >
                        Shop →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="font-body text-off-white/50 mb-6">
              All products ship from The Cyclery bike shop in Toronto.
            </p>
            <a
              href="#"
              className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] bg-neon-lime text-deep-black px-8 py-4 hover:bg-hot-pink hover:text-off-white transition-colors border-[3px] border-neon-lime hover:border-hot-pink shadow-brutal-lime hover:shadow-brutal-pink"
            >
              Visit The Cyclery Shop →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
