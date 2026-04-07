"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/races", label: "Races" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/equipment", label: "Equipment" },
  { href: "/merch", label: "Merch" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-black border-b-3 border-neon-lime">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-900 uppercase tracking-tight text-neon-lime group-hover:text-hot-pink transition-colors">
            Cyclery
          </span>
          <span className="font-display text-2xl font-900 uppercase tracking-tight text-outline text-neon-lime group-hover:text-hot-pink transition-colors">
            Racing
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-off-white hover:text-neon-lime transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donations"
            className="font-mono text-[11px] uppercase tracking-[0.15em] bg-hot-pink text-off-white px-5 py-2.5 hover:bg-neon-lime hover:text-deep-black transition-colors border-2 border-hot-pink hover:border-neon-lime"
          >
            Support Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-neon-lime transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-neon-lime transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-neon-lime transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-deep-black border-t border-neon-lime/20 px-6 pb-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-xs uppercase tracking-[0.2em] text-off-white hover:text-neon-lime border-b border-off-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donations"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center font-mono text-xs uppercase tracking-[0.15em] bg-hot-pink text-off-white px-5 py-3 hover:bg-neon-lime hover:text-deep-black transition-colors"
          >
            Support Us
          </Link>
        </div>
      )}
    </nav>
  );
}
