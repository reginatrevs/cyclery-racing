"use client";

import { SectionLabel } from "@/components/SectionLabel";
import { Marquee } from "@/components/Marquee";
import Link from "next/link";
import { useState } from "react";

const socials = [
  { name: "Instagram", handle: "@cycleryracing", href: "#" },
  { name: "Strava", handle: "Cyclery Racing", href: "#" },
  { name: "Twitter / X", handle: "@cycleryracing", href: "#" },
  { name: "YouTube", handle: "Cyclery Racing", href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 px-6 relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 halftone-lg text-neon-lime/[0.05]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[350px] font-900 uppercase text-off-white/[0.02] leading-none">
            HELLO
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <span className="inline-block bg-hot-pink/10 border-[2px] border-hot-pink/30 px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-hot-pink mb-6">
            Get in Touch
          </span>
          <h1 className="font-display text-[clamp(64px,10vw,160px)] font-900 uppercase leading-[0.82]">
            <span className="text-off-white">Contact </span>
            <span className="text-outline-thick">Us</span>
          </h1>
          <p className="mt-8 font-body text-lg text-off-white/60 max-w-xl">
            Want to sponsor, join, collaborate, or just say hi? We&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      <Marquee size="large" items={["Say Hello", "Let's Talk", "Ride Together", "Connect"]} bgColor="bg-lavender" textColor="text-deep-black" />

      {/* Content */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[250px] font-900 text-off-white/[0.02] uppercase leading-none">
            TALK
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-off-white mb-10">
              Send us a <span className="text-outline">message</span>
            </h2>

            {submitted ? (
              <div className="p-8 border-[3px] border-neon-lime bg-neon-lime/5 shadow-brutal-lime relative overflow-hidden">
                <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
                <div className="relative z-10">
                  <h3 className="font-display text-3xl font-900 uppercase text-neon-lime">
                    Message Sent!
                  </h3>
                  <p className="mt-4 font-body text-off-white/60">
                    Thanks for reaching out. We&apos;ll get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-off-white/60 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-[3px] border-off-white/20 px-4 py-3 font-body text-off-white focus:border-neon-lime outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-off-white/60 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-[3px] border-off-white/20 px-4 py-3 font-body text-off-white focus:border-neon-lime outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-off-white/60 mb-2 block">
                    Subject
                  </label>
                  <select
                    className="w-full bg-deep-black border-[3px] border-off-white/20 px-4 py-3 font-body text-off-white focus:border-neon-lime outline-none transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Sponsorship</option>
                    <option>Join the Team</option>
                    <option>Media / Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-off-white/60 mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border-[3px] border-off-white/20 px-4 py-3 font-body text-off-white focus:border-neon-lime outline-none transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] bg-neon-lime text-deep-black px-8 py-4 hover:bg-hot-pink hover:text-off-white transition-colors border-[3px] border-neon-lime hover:border-hot-pink shadow-brutal-lime hover:shadow-brutal-pink"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            {/* Sponsor CTA */}
            <div className="p-8 bg-hot-pink border-[3px] border-hot-pink relative overflow-hidden shadow-brutal-pink">
              <div className="absolute inset-0 halftone text-deep-black/[0.06]" />
              <div className="absolute inset-0 noise-overlay" />
              <div className="relative z-10">
                <span className="inline-block bg-off-white/10 border-[2px] border-off-white/30 px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-off-white mb-4">
                  Partnership
                </span>
                <h3 className="mt-2 font-display text-3xl font-900 uppercase text-off-white">
                  Want to sponsor us?
                </h3>
                <p className="mt-4 font-body text-off-white/80">
                  We&apos;re always open to new partnerships. Let&apos;s find a
                  way to work together.
                </p>
                <Link
                  href="/sponsors"
                  className="inline-block mt-6 font-mono text-[11px] uppercase tracking-[0.2em] bg-deep-black text-neon-lime px-6 py-3 hover:bg-neon-lime hover:text-deep-black transition-colors border-[3px] border-deep-black"
                >
                  Sponsorship Info →
                </Link>
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="font-display text-2xl font-900 uppercase text-off-white mb-6">
                Find Us
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-lime mb-1">
                    Email
                  </p>
                  <p className="font-body text-off-white/60">
                    team@cycleryracing.ca
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-lime mb-1">
                    Based In
                  </p>
                  <p className="font-body text-off-white/60">
                    Toronto, Ontario, Canada
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-lime mb-1">
                    Home Shop
                  </p>
                  <p className="font-body text-off-white/60">
                    The Cyclery — Toronto, ON
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-display text-2xl font-900 uppercase text-off-white mb-6">
                Follow Us
              </h3>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-between py-3 border-b border-off-white/10 hover:border-neon-lime transition-colors group"
                  >
                    <span className="font-display text-lg font-800 uppercase text-off-white group-hover:text-neon-lime transition-colors">
                      {social.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/40">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
