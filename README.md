# Cyclery Racing — cycleryracing.ca

The official digital platform for Cyclery Racing, one of Canada's longest-running women's competitive cycling teams. Built with Next.js, Tailwind CSS, and deployed on Vercel.

## About This Project

Women's cycling has long been underrepresented — not just on the road, but online. Most teams lack a cohesive digital presence that communicates who they are, what they stand for, and how people can get involved.

This website was designed to change that for Cyclery Racing. The approach was to build a platform that treats a women's cycling team with the same level of craft and intentionality as any major sports brand — clear messaging, accessible information, and a visual identity that matches the caliber of the athletes.

### Key priorities:
- **Clear messaging** — Who the team is, what they race, and how to support them, communicated immediately
- **Race calendar with links** — Every race linked to its official page so riders, fans, and media can find details fast
- **Sponsor visibility** — Partners displayed prominently with direct links, reinforcing the value of supporting women's sport
- **Donation pathway** — A frictionless route to financial support through Zeffy (tax-receiptable)
- **Team roster** — Riders presented with the same production quality as any professional team
- **Mobile-first** — Most fans and followers engage on their phones; the experience had to be seamless at every breakpoint

### Tech stack:
- Next.js 16 (App Router)
- Tailwind CSS v4
- Vercel (deployment)
- Responsive, accessible, performance-optimized

## Notable implementation details

- Custom motion system, no animation library. Scroll reveals use a reusable useScrollReveal hook (IntersectionObserver) with a ScrollReveal wrapper; the entrance splash and cursor are hand-written with requestAnimationFrame. Building rather than importing (Framer Motion / GSAP) kept the project to four runtime dependencies.
- Interaction that adapts to input type. On desktop, stat and race cards reveal on hover; on touch — where there's no hover — the same components activate the card closest to the centre of the viewport as you scroll. The mobile experience is designed on its own terms.
- Respects prefers-reduced-motion across the splash, scroll reveals, and cursor, with no change to the default experience.
- Colour design tokens in Tailwind v4 (@theme); type set in Helvetica Neue.
- Performance-conscious by default: next/image with explicit sizing/priority, RAF-throttled and passive scroll listeners, GPU-friendly transforms.

## Run locally

```bash
git clone https://github.com/reginatrevs/cyclery-racing.git
cd cyclery-racing
npm install
npm run dev
```

Open http://localhost:3000

> Note: type renders in Helvetica Neue. A licensed display font (PP Neue Montreal) is referenced in the CSS but is not shipped in this repo, so it falls back.

---

**Developed by Regina Trevs**
Creative Technologist. Digital Experience Designer & Developer.

*Web, identity, content, and creative systems for brands that need more than just design.*

Currently available for select projects and collaborations.

[trevs.ca](https://trevs.ca)
