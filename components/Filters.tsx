import { Compass, Dices, Route, Sparkles } from "lucide-react";
import { coreSpecies, speciesInfo } from "../data/species";
import { seasons } from "../data/whaleSightings";
import type { Season, WhaleSpecies } from "../types/whale";
import WhaleLogo from "./WhaleLogo";

type FiltersProps = {
  selectedSpecies: WhaleSpecies | "all";
  selectedSeason: Season | "all";
  showRoutes: boolean;
  visibleCount: number;
  funFact: string;
  whaleOfTheDay: string;
  onSpeciesChange: (species: WhaleSpecies | "all") => void;
  onSeasonChange: (season: Season | "all") => void;
  onRoutesChange: (enabled: boolean) => void;
  onSurprise: () => void;
};

export default function Filters({
  selectedSpecies,
  selectedSeason,
  showRoutes,
  visibleCount,
  funFact,
  whaleOfTheDay,
  onSpeciesChange,
  onSeasonChange,
  onRoutesChange,
  onSurprise
}: FiltersProps) {
  return (
    <aside className="pointer-events-auto max-h-[calc(100vh-2rem)] w-full overflow-y-auto rounded-lg bg-white/92 p-4 shadow-sea backdrop-blur md:w-96">
      <WhaleLogo />

      <p className="mt-4 rounded-md bg-sky-50 px-3 py-2 text-sm font-semibold text-slate-700">
        This map uses historical and educational whale observation data, not live locations.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-deep" htmlFor="species-filter">
          <span>Species</span>
          <select
            id="species-filter"
            className="focus-ring rounded-md border border-sky-200 bg-white px-3 py-2 text-base"
            value={selectedSpecies}
            onChange={(event) => onSpeciesChange(event.target.value as WhaleSpecies | "all")}
          >
            <option value="all">All whales</option>
            {coreSpecies.map((species) => (
              <option key={species} value={species}>
                {speciesInfo[species].commonName}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold text-deep" htmlFor="season-filter">
          <span>Season</span>
          <select
            id="season-filter"
            className="focus-ring rounded-md border border-sky-200 bg-white px-3 py-2 text-base"
            value={selectedSeason}
            onChange={(event) => onSeasonChange(event.target.value as Season | "all")}
          >
            <option value="all">All seasons</option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </label>

        <label className="flex cursor-pointer items-center justify-between gap-4 rounded-md border border-sky-200 bg-sky-50 px-3 py-3 text-sm font-bold text-deep">
          <span className="flex items-center gap-2">
            <Route size={18} aria-hidden="true" />
            Show migration routes
          </span>
          <input
            className="focus-ring h-5 w-5 accent-lagoon"
            type="checkbox"
            checked={showRoutes}
            onChange={(event) => onRoutesChange(event.target.checked)}
          />
        </label>

        <button
          className="focus-ring flex items-center justify-center gap-2 rounded-md bg-deep px-4 py-3 font-black text-white shadow-md transition hover:bg-lagoon"
          type="button"
          onClick={onSurprise}
        >
          <Dices size={19} aria-hidden="true" />
          Surprise me with a whale
        </button>
      </div>

      <div className="mt-5 grid gap-3">
        <section className="rounded-lg border border-sky-100 bg-white p-4">
          <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-lagoon">
            <Sparkles size={17} aria-hidden="true" />
            Fun fact
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">{funFact}</p>
        </section>

        <section className="rounded-lg border border-sky-100 bg-white p-4">
          <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-lagoon">
            <Compass size={17} aria-hidden="true" />
            Whale of the day
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">{whaleOfTheDay}</p>
        </section>
      </div>

      <div className="mt-5 rounded-lg border border-sky-100 bg-white p-4">
        <h2 className="text-sm font-black uppercase tracking-wide text-lagoon">Legend</h2>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          {coreSpecies.map((species) => (
            <div key={species} className="flex items-center gap-2 text-slate-700">
              <span
                className="h-3 w-3 rounded-full ring-2 ring-white"
                style={{ backgroundColor: speciesInfo[species].color }}
                aria-hidden="true"
              />
              <span>{speciesInfo[species].commonName}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs font-semibold text-slate-500">
          Showing {visibleCount} educational observation dots. Lines are simplified migration stories.
        </p>
      </div>
    </aside>
  );
}
