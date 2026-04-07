import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-deep-black border-t-3 border-neon-lime pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-3xl font-900 uppercase text-neon-lime">
                Cyclery{" "}
              </span>
              <span className="font-display text-3xl font-900 uppercase text-outline text-neon-lime">
                Racing
              </span>
            </div>
            <p className="font-body text-sm text-off-white/60 leading-relaxed mb-6">
              A Canadian women&apos;s professional cycling team. Bold, fast, and
              unstoppable. Pushing the limits of competitive cycling while
              inspiring the next generation.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Strava", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/40 hover:text-neon-lime transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-lime mb-6">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About" },
                { href: "/team", label: "Team" },
                { href: "/races", label: "Races" },
                { href: "/equipment", label: "Equipment" },
                { href: "/merch", label: "Merch" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-off-white/60 hover:text-off-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-lime mb-6">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/donations", label: "Donate" },
                { href: "/sponsors", label: "Become a Sponsor" },
                { href: "/merch", label: "Shop Merch" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-off-white/60 hover:text-off-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-lime mb-6">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "#", label: "Instagram" },
                { href: "#", label: "Strava" },
                { href: "#", label: "Twitter / X" },
                { href: "#", label: "YouTube" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-off-white/60 hover:text-off-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-off-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/30">
            &copy; {new Date().getFullYear()} Cyclery Racing. All rights
            reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/30">
            Based in Canada &mdash; Racing worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
