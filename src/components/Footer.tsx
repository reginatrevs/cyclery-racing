import Link from "next/link";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/races", label: "Races" },
  { href: "/contact", label: "Contact" },
];

const extras = [
  { href: "/sponsors", label: "Sponsors" },
  { href: "/equipment", label: "Equipment" },
  { href: "/donations", label: "Support Us" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Strava", href: "#" },
  { label: "Facebook", href: "#" },
];

const fontNM = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
};

export function Footer() {
  return (
    <footer className="bg-magenta text-white overflow-hidden">
      {/* Top info grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-14 lg:pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
          {/* Menu */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4" style={fontNM}>
              Menu
            </p>
            <nav className="flex flex-col gap-1">
              {menu.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/70 hover:text-white transition-colors"
                  style={fontNM}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Location */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4" style={fontNM}>
              Location
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-[13px] text-white/70" style={fontNM}>Cyclery Racing</span>
              <span className="text-[13px] text-white/70" style={fontNM}>Toronto, Ontario</span>
              <span className="text-[13px] text-white/70" style={fontNM}>Canada</span>
            </div>
          </div>

          {/* Extras */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4" style={fontNM}>
              Extras
            </p>
            <div className="flex flex-col gap-1">
              {extras.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/70 hover:text-white transition-colors"
                  style={fontNM}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4" style={fontNM}>
              Socials
            </p>
            <div className="flex flex-col gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[13px] text-white/70 hover:text-white transition-colors"
                  style={fontNM}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Giant TREVS text */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mt-8 lg:mt-4">
        <span
          className="block font-bold uppercase select-none leading-[0.8]"
          style={{
            ...fontNM,
            fontSize: "clamp(120px, 28vw, 450px)",
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "-0.04em",
          }}
        >
          Trevs
        </span>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-10 pt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <a
            href="https://trevs.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-white transition-colors"
            style={fontNM}
          >
            Website designed by trevs.ca
          </a>
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/80" style={fontNM}>
            &copy;{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
