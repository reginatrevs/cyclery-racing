"use client";

import Image from "next/image";

interface GearItem {
  category: string;
  brand: string;
  product: string;
  slug: string;
  url: string;
  image: string;
  secondImage?: string;
  description: string;
}

export function GearScroll({ gear }: { gear: GearItem[] }) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 lg:-mx-0 lg:px-0">
      <div className="flex gap-6 lg:gap-8" style={{ width: "max-content" }}>
        {gear.map((item) => (
          <a
            key={item.brand}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-[280px] lg:w-[360px] flex-shrink-0"
          >
            <div className="bg-gray-50 rounded-sm aspect-[4/3] relative overflow-hidden mb-4">
              {item.secondImage ? (
                <div className="flex items-center justify-center gap-3 w-full h-full px-6">
                  <div className="relative w-1/2 h-3/4">
                    <Image
                      src={item.image}
                      alt={item.product}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="180px"
                    />
                  </div>
                  <div className="relative w-1/2 h-3/4">
                    <Image
                      src={item.secondImage}
                      alt={item.product}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="180px"
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={item.image}
                  alt={item.product}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  sizes="360px"
                />
              )}
            </div>

            <div className="relative w-[110px] h-[36px] mb-2">
              <Image
                src={`/sponsors/${item.slug}-black.png`}
                alt={item.brand}
                fill
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-0"
                sizes="110px"
              />
              <Image
                src={`/sponsors/${item.slug}-pink.png`}
                alt={item.brand}
                fill
                className="object-contain object-left opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                sizes="110px"
              />
            </div>
            <h3 className="font-display text-base lg:text-lg font-bold uppercase text-black group-hover:text-magenta transition-colors leading-tight mb-1">
              {item.product}
            </h3>
            <p className="font-body text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
