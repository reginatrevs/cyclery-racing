"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <ScrollReveal direction="left">
            {submitted ? (
              <div className="bg-lime rounded p-12 text-center">
                <h3 className="font-display text-3xl font-bold uppercase text-black mb-4">
                  Message Sent
                </h3>
                <p className="font-body text-black/60">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
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
                  <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded bg-white text-black font-body focus:outline-none focus:border-magenta transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded bg-white text-black font-body focus:outline-none focus:border-magenta transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded bg-white text-black font-body focus:outline-none focus:border-magenta transition-colors">
                    <option>General Inquiry</option>
                    <option>Sponsorship</option>
                    <option>Join the Team</option>
                    <option>Media / Press</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded bg-white text-black font-body focus:outline-none focus:border-magenta transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="font-body text-[12px] font-bold uppercase tracking-[0.1em] bg-magenta text-white px-8 py-3.5 rounded-full hover:bg-lime hover:text-black transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="space-y-10">
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-black mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1">Email</p>
                    <p className="font-body text-black">hello@cycleryracing.com</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1">Based In</p>
                    <p className="font-body text-black">Toronto, Ontario, Canada</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1">Home Shop</p>
                    <p className="font-body text-black">The Cyclery — Toronto</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold uppercase text-black mb-4">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center justify-between py-3 border-b border-gray-200 group"
                    >
                      <span className="font-body text-sm font-semibold text-black group-hover:text-magenta transition-colors">
                        {social.name}
                      </span>
                      <span className="font-mono text-[10px] text-gray-400 group-hover:text-magenta transition-colors">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 rounded p-8">
                <h3 className="font-display text-xl font-bold uppercase text-black mb-3">
                  Interested in Sponsoring?
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                  We&apos;re always open to conversations with brands that share our
                  values. Let&apos;s build something together.
                </p>
                <Button href="/sponsors" variant="outline">
                  Sponsorship Info
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
