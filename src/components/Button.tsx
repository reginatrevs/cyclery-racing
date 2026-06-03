import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "swiss";
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-black text-white border border-black hover:bg-magenta hover:border-magenta hover:text-white px-5 py-2 rounded-full",
  secondary:
    "bg-black text-white border border-black hover:bg-magenta hover:border-magenta px-5 py-2 rounded-full",
  outline:
    "bg-transparent text-black border border-black hover:bg-magenta hover:border-magenta hover:text-white px-5 py-2 rounded-full",
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
  const isExternal = href.startsWith("http");
  const classes = `inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.05em] transition-all ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {isSwiss && (
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        )}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
    >
      {children}
      {isSwiss && (
        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      )}
    </Link>
  );
}
