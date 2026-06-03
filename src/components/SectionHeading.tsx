interface SectionHeadingProps {
  label?: string;
  heading: string;
  className?: string;
  rule?: boolean;
}

export function SectionHeading({ label, heading, className = "", rule = false }: SectionHeadingProps) {
  return (
    <div className={className}>
      {label && (
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-4">
          {label}
        </p>
      )}
      <h2 className="font-display text-[clamp(36px,5vw,72px)] font-bold uppercase leading-[0.9] text-black">
        {heading}
      </h2>
      {rule && <div className="mt-6 w-10 h-[2px] bg-magenta" />}
    </div>
  );
}
