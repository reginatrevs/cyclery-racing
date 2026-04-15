import Link from "next/link";
import Image from "next/image";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/equipment", label: "Equipment" },
  { href: "/contact", label: "Contact" },
];

const externalLinks = [
  { href: "https://thecyclery.ca", label: "The Cyclery Shop" },
  { href: "/donations", label: "Support Us" },
];

const fontNM = {
  fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
};

export function Footer() {
  return (
    <footer className="bg-magenta text-white overflow-hidden" data-cursor-light>
      {/* Top info grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-14 lg:pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
          {/* Site logo */}
          <div className="col-span-2 md:col-span-4 mb-2">
            <Image
              src="/logo.svg"
              alt="Cyclery Racing Abacus Data"
              width={160}
              height={40}
              className="h-[28px] lg:h-[36px] w-auto brightness-0 invert opacity-80"
            />
          </div>

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
                  className="text-[13px] text-white/70 hover:text-white hover:underline underline-offset-2 transition-colors"
                  style={fontNM}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* External Links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4" style={fontNM}>
              External
            </p>
            <div className="flex flex-col gap-1">
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[13px] text-white/70 hover:text-white hover:underline underline-offset-2 transition-colors"
                  style={fontNM}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials — with icons */}
          <div className="col-span-2 md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4" style={fontNM}>
              Follow Us
            </p>
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a
                href="https://instagram.com/cycleryracing"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/70 group-hover:text-white transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/cycleryracing"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Facebook"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/70 group-hover:text-white transition-colors">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant TREVS logo */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mt-8 lg:mt-4">
        <Image
          src="/trevs-logo.svg"
          alt="TREVS"
          width={1200}
          height={300}
          className="w-full h-auto select-none"
          style={{ opacity: 0.35 }}
          draggable={false}
        />
      </div>

      {/* Bottom bar — split layout */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-12 pt-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left — copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mobile.svg"
              alt="Cyclery Racing"
              width={28}
              height={28}
              className="w-6 h-6 brightness-0 invert opacity-70"
            />
            <p className="text-[13px] uppercase tracking-[0.12em] font-semibold text-white/70" style={fontNM}>
              &copy;{new Date().getFullYear()} Cyclery Racing — Abacus Data
            </p>
          </div>
          {/* Right — web design credit */}
          <p className="text-[13px] uppercase tracking-[0.12em] font-semibold text-white/70" style={fontNM}>
            Web Design &amp; Development by{" "}
            <a
              href="https://trevs.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline underline-offset-2 transition-colors"
            >
              Regina Trevs
            </a>
            {" · "}
            <a
              href="https://trevs.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:underline underline-offset-2 transition-colors"
            >
              trevs.ca
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
