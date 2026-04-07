export function Marquee({
  items,
  bgColor = "bg-neon-lime",
  textColor = "text-deep-black",
  size = "default",
}: {
  items: string[];
  bgColor?: string;
  textColor?: string;
  size?: "default" | "large";
}) {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items];
  const isLarge = size === "large";

  return (
    <div
      className={`${bgColor} overflow-hidden ${isLarge ? "py-5" : "py-3"} border-y-[3px] border-deep-black relative`}
    >
      <div
        className={`${isLarge ? "animate-marquee-slow" : "animate-marquee"} flex whitespace-nowrap`}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`font-display ${isLarge ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"} font-900 uppercase ${textColor} mx-6 md:mx-10 flex items-center gap-6 md:gap-10`}
          >
            {item}
            <span className={`${isLarge ? "text-4xl" : "text-2xl"} opacity-60`}>
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
