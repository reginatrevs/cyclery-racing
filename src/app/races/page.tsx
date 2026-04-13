import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

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
  { date: "MAR 22", name: "Early Season Crit Series", location: "Toronto, ON", result: "2nd — Emma Dubois" },
  { date: "MAR 08", name: "Spring Classic Opener", location: "Hamilton, ON", result: "5th — Sarah Chen" },
  { date: "FEB 15", name: "Indoor Track Championship", location: "Milton, ON", result: "3rd — Chloe Park" },
  { date: "FEB 01", name: "Winter Training Crit", location: "Toronto, ON", result: "1st — Emma Dubois" },
];

export default function RacesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-magenta mb-4">
            2025 Season
          </p>
          <h1 className="font-display text-[clamp(48px,10vw,140px)] font-bold uppercase leading-[0.85] text-black">
            Race Calendar
          </h1>
        </div>
      </section>

      {/* Upcoming */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="Upcoming" heading="Next Races" className="mb-12" />
          </ScrollReveal>

          <div>
            {upcomingRaces.map((race, i) => (
              <ScrollReveal key={race.name} direction="left" delay={i * 60}>
                <div className="group flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 py-5 border-b border-gray-200 hover:bg-gray-100 transition-all px-3 -mx-3 rounded">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-magenta w-20 shrink-0">
                    {race.date}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg lg:text-xl font-bold uppercase text-black group-hover:text-magenta transition-colors">
                      {race.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gray-400">
                        {race.location}
                      </span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gray-400">
                        {race.distance}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded bg-gray-100 text-gray-600 shrink-0">
                    {race.type}
                  </span>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded shrink-0 ${
                    race.status === "Registered" ? "bg-lime/30 text-black" : "bg-magenta/10 text-magenta"
                  }`}>
                    {race.status}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Results */}
      <section className="py-20 lg:py-28 px-6 bg-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading label="Results" heading="Past Races" className="mb-12" />
          </ScrollReveal>

          <div>
            {pastResults.map((race, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 py-5 border-b border-gray-200">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400 w-20 shrink-0">
                    {race.date}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold uppercase text-black">
                      {race.name}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gray-400">
                      {race.location}
                    </span>
                  </div>
                  <span className="font-body text-sm font-semibold text-magenta shrink-0">
                    {race.result}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
