import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "swiss";
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-black text-white border-2 border-black hover:bg-magenta hover:border-magenta hover:text-white px-7 py-3.5 rounded-full",
  secondary:
    "bg-black text-white border-2 border-black hover:bg-magenta hover:border-magenta px-7 py-3.5 rounded-full",
  outline:
    "bg-transparent text-black border-2 border-black hover:bg-magenta hover:border-magenta hover:text-white px-7 py-3.5 rounded-full",
  swiss:
    "text-black font-mono text-[11px] uppercase tracking-[0.2em] hover:text-magenta group px-0 py-0",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const isSwiss = variant === "swiss";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-body text-[12px] font-bold uppercase tracking-[0.1em] transition-all ${variants[variant]} ${className}`}
    >
      {children}
      {isSwiss && (
        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      )}
    </Link>
  );
}
