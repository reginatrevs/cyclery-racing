"use client";

interface HorizontalScrollProps {
  children: React.ReactNode;
  itemWidth?: string;
}

export function HorizontalScroll({
  children,
  itemWidth = "80vw",
}: HorizontalScrollProps) {
  return (
    <div
      className="horizontal-scroll px-6"
      style={{ "--item-width": itemWidth } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
