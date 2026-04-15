"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/races", label: "Races" },
  { href: "/equipment", label: "Equipment" },
  { href: "/contact", label: "Contact" },
];

const allLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/races", label: "Races" },
  { href: "/equipment", label: "Equipment" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const handleScroll = useCallback(() => {
    // Check for any hero section (homepage or subpage heroes)
    const hero = document.getElementById("hero") || document.getElementById("about-hero");
    if (!hero) {
      setShowLogo(true);
      return;
    }
    const heroBottom = hero.getBoundingClientRect().bottom;
    setShowLogo(heroBottom < 80);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showLogo
          ? "bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-200/50"
          : "bg-transparent border-b border-transparent"
      }`}>
        {/* Desktop nav — logo left, links right */}
        <div className="hidden lg:flex max-w-[1440px] mx-auto items-center justify-between px-8 py-3">
          {/* Logo — fades in when hero scrolls out */}
          <Link
            href="/"
            className="flex-shrink-0 transition-all duration-500 ease-out"
            style={{
              opacity: showLogo ? 1 : 0,
              transform: showLogo ? "translateY(0)" : "translateY(-8px)",
              pointerEvents: showLogo ? "auto" : "none",
            }}
          >
            <Image
              src="/logo-mobile.svg"
              alt="Cyclery Racing Abacus Data"
              width={160}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-body text-[12px] font-bold uppercase tracking-[0.1em] text-magenta hover:text-magenta transition-colors hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donations"
              className="font-body text-[12px] font-bold uppercase tracking-[0.1em] bg-magenta text-white border-2 border-magenta px-5 py-1.5 rounded-full hover:bg-black hover:border-black hover:text-white transition-all"
            >
              Support Us
            </Link>
          </div>
        </div>

        {/* Mobile + Tablet nav — logo left (hidden over hero), hamburger right */}
        <div className="lg:hidden flex items-center justify-between px-5 md:px-8 py-3 md:py-4">
          <Link
            href="/"
            className="flex-shrink-0 transition-all duration-500 ease-out"
            style={{
              opacity: showLogo ? 1 : 0,
              transform: showLogo ? "translateY(0)" : "translateY(-8px)",
              pointerEvents: showLogo ? "auto" : "none",
            }}
          >
            <Image
              src="/logo-mobile.svg"
              alt="Cyclery Racing Abacus Data"
              width={180}
              height={36}
              className="h-7 md:h-9 w-auto"
              priority
            />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-black"
            aria-label="Open menu"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className="md:w-[24px] md:h-[18px]">
              <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="2" />
              <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="2" />
              <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-white animate-menu-open flex flex-col">
          {/* Top bar mirrors nav: logo left, close right */}
          <div className="flex items-center justify-between px-5 md:px-8 py-3 md:py-4 border-b border-gray-200">
            <Link href="/" onClick={() => setOpen(false)} className="flex-shrink-0">
              <Image
                src="/logo-black.png"
                alt="Cyclery Racing Abacus Data"
                width={180}
                height={36}
                className="h-7 md:h-9 w-auto"
                priority
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-black"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="md:w-[20px] md:h-[20px]">
                <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" />
                <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 gap-5 md:gap-7">
            {allLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="animate-menu-link font-display text-[clamp(36px,8vw,56px)] font-bold uppercase leading-none text-black hover:text-magenta transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donations"
              onClick={() => setOpen(false)}
              className="animate-menu-link inline-block mt-4 w-fit font-display text-[18px] font-bold uppercase tracking-[0.05em] bg-black text-white border-2 border-black px-8 py-3 rounded-full hover:bg-magenta hover:border-magenta hover:text-white transition-all"
              style={{ animationDelay: `${allLinks.length * 60}ms` }}
            >
              Support Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
