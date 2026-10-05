/**
 * Site-wide announcement bar. Remove the <AnnouncementBar /> line in
 * Navbar.tsx once the fundraiser wraps up.
 */
export function AnnouncementBar() {
  return (
    <a
      href="https://www.gofundme.com/f/gravel-world-championships-australia"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-magenta text-white hover:bg-black transition-colors"
    >
      <p className="max-w-[1440px] mx-auto px-5 md:px-8 py-2 text-center font-body text-[11px] md:text-[12px] font-bold uppercase tracking-[0.1em]">
        Dylan is heading to Gravel Worlds! 🇨🇦{" "}
        <span className="underline underline-offset-4 decoration-1">Support her trip</span>{" "}
        <span aria-hidden="true">→</span>
      </p>
    </a>
  );
}
