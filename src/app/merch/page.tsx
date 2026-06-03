import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const products = [
  { name: "Team Jersey, Race Cut", category: "Cycling Kit", price: "$120" },
  { name: "Team Bib Shorts", category: "Cycling Kit", price: "$140" },
  { name: "Cyclery Racing Cap", category: "Accessories", price: "$35" },
  { name: "Training Tee", category: "Casual Wear", price: "$45" },
  { name: "Team Socks, 3 Pack", category: "Accessories", price: "$30" },
  { name: "Hoodie, Bold Type", category: "Casual Wear", price: "$75" },
  { name: "Team Water Bottle", category: "Accessories", price: "$15" },
  { name: "Musette Bag", category: "Accessories", price: "$25" },
];

const productAccents = [
  "bg-lime", "bg-magenta", "bg-gray-200", "bg-lime",
  "bg-magenta", "bg-gray-200", "bg-lime", "bg-magenta",
];

export default function MerchPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
            Rep the Team
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black">
            Team Merch
          </h1>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 60}>
                <div className="group card-hover rounded overflow-hidden border border-gray-200 cursor-pointer">
                  <div className={`aspect-square ${productAccents[i]}`} />
                  <div className="p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-display text-lg font-bold uppercase text-black mb-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="font-body text-base font-semibold text-magenta">
                      {product.price}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 text-center">
              <p className="font-body text-gray-600 mb-6">
                All products ship from The Cyclery bike shop in Toronto.
              </p>
              <Button href="/contact" variant="outline">
                Inquire About Merch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
