import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";

const upcomingRaces = [
  { date: "APR 12", name: "Grand Prix Cycliste de Gatineau", location: "Gatineau, QC", distance: "108km", type: "Road Race", status: "Registered" },
  { date: "APR 26", name: "Tour of the Battenkill", location: "Cambridge, NY", distance: "92km", type: "Gravel", status: "Registered" },
  { date: "MAY 03", name: "Tour de Delta", location: "Delta, BC", distance: "85km", type: "Criterium", status: "Registered" },
  { date: "MAY 17", name: "Philadelphia Cycling Classic", location: "Philadelphia, PA", distance: "115km", type: "Road Race", status: "Pending" },
  { date: "MAY 24", name: "Canadian Road Championships", location: "Edmonton, AB", distance: "120km", type: "National Champs", status: "Registered" },
  { date: "JUN 07", name: "Tulsa Tough", location: "Tulsa, OK", distance: "72km", type: "Criterium", status: "Pending" },
  { date: "JUN 14", name: "Beauce Classic", location: "Saint-Georges, QC", distance: "96km", type: "Stage Race", status: "Registered" },
  { date: "JUL 05", name: "BC Superweek", location: "Vancouver, BC", distance: "Multiple", type: "Series", status: "Registered" },
];

const pastResults = [
  { date: "MAR 22", name: "Early Season Crit Series", location: "Toronto, ON", result: "2nd — Emma Dubois", color: "text-neon-lime" },
  { date: "MAR 08", name: "Spring Classic Opener", location: "Hamilton, ON", result: "5th — Sarah Chen", color: "text-lavender" },
  { date: "FEB 15", name: "Indoor Track Championship", location: "Milton, ON", result: "3rd — Chloe Park", color: "text-hot-pink" },
  { date: "FEB 01", name: "Winter Training Crit", location: "Toronto, ON", result: "1st — Emma Dubois", color: "text-neon-lime" },
];

function StatusBadge({ status }: { status: string }) {
  const colors = status === "Registered"
    ? "text-neon-lime border-neon-lime"
    : "text-orange border-orange";
  return (
    <span className={`tag ${colors}`}>
      {status}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/40 bg-off-white/5 px-3 py-1">
      {type}
    </span>
  );
}

export default function RacesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 px-6 relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 halftone-lg text-orange/[0.05]" />
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <span className="font-display text-[350px] font-900 uppercase text-off-white/[0.02] leading-none">
            RACES
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <span className="bg-hot-pink/10 border-[2px] border-hot-pink/30 px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-hot-pink inline-block">
            2025 Season
          </span>
          <h1 className="mt-6 font-display text-[clamp(64px,10vw,160px)] font-900 uppercase leading-[0.82]">
            <span className="text-off-white">Race </span>
            <span className="text-outline-thick">Calendar</span>
          </h1>
          <p className="mt-8 font-body text-lg text-off-white/60 max-w-xl">
            From local crits to national championships — here&apos;s where you&apos;ll
            find Cyclery Racing this season.
          </p>
        </div>
      </section>

      <Marquee size="large" items={["Race Day", "Full Gas", "No Limits", "Send It"]} bgColor="bg-orange" textColor="text-off-white" />

      {/* Upcoming Races */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-end justify-start overflow-hidden">
          <span className="font-display text-[250px] font-900 text-off-white/[0.02] leading-none select-none">
            SEND IT
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel>Coming Up</SectionLabel>
          <h2 className="mt-4 mb-12 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-off-white">
            Upcoming <span className="text-outline">Races</span>
          </h2>

          <div className="space-y-0">
            {upcomingRaces.map((race) => (
              <div
                key={race.name}
                className="group flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 py-6 border-b border-off-white/10 hover:border-neon-lime transition-colors"
              >
                <span className="font-display text-4xl lg:text-5xl font-900 text-neon-lime w-36 shrink-0">
                  {race.date}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl lg:text-2xl font-800 uppercase text-off-white group-hover:text-neon-lime transition-colors">
                    {race.name}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/40 mt-1">
                    {race.location} — {race.distance}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <TypeBadge type={race.type} />
                  <StatusBadge status={race.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Results */}
      <div className="h-3 bg-hot-pink" />
      <section className="py-28 lg:py-36 px-6 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end overflow-hidden">
          <span className="font-display text-[250px] font-900 text-deep-black/[0.02] leading-none select-none">
            RESULTS
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <SectionLabel color="text-hot-pink">Results</SectionLabel>
          <h2 className="mt-4 mb-12 font-display text-[clamp(48px,7vw,96px)] font-900 uppercase leading-[0.82] text-deep-black">
            Recent <span className="text-outline">Results</span>
          </h2>

          <div className="space-y-0">
            {pastResults.map((race) => (
              <div
                key={race.name}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-deep-black/10"
              >
                <span className="font-display text-3xl md:text-4xl font-900 text-deep-black/30 w-32 shrink-0">
                  {race.date}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-800 uppercase text-deep-black">
                    {race.name}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-deep-black/40 mt-1">
                    {race.location}
                  </p>
                </div>
                <span className={`font-display text-lg font-800 uppercase ${race.color}`}>
                  {race.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-3 bg-hot-pink" />
    </>
  );
}
