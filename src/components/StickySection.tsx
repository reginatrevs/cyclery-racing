interface StickySectionProps {
  label: string;
  heading: string;
  children: React.ReactNode;
  stickyContent?: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

export function StickySection({
  label,
  heading,
  children,
  stickyContent,
  className = "",
  reverse = false,
}: StickySectionProps) {
  return (
    <section className={`py-24 lg:py-32 px-6 border-t border-gray-200 ${className}`}>
      <div className="max-w-[1440px] mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 ${reverse ? "lg:flex-row-reverse" : ""}`}>
          {/* Sticky heading column */}
          <div className="lg:col-span-4 lg:pr-12 lg:border-r lg:border-gray-200">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-4">
                {label}
              </p>
              <h2 className="font-display text-[clamp(32px,4vw,56px)] font-bold uppercase leading-[0.9] text-black">
                {heading}
              </h2>
              {/* no accent line */}
              {stickyContent && (
                <div className="mt-8">
                  {stickyContent}
                </div>
              )}
            </div>
          </div>

          {/* Scrollable content column */}
          <div className="lg:col-span-8 lg:pl-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
