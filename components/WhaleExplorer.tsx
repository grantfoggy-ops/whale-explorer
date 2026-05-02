"use client";

import { useMemo, useState } from "react";
import Filters from "./Filters";
import LearnMorePanel from "./LearnMorePanel";
import WhaleMap from "./WhaleMap";
import { migrationRoutes } from "../data/migrationRoutes";
import { speciesInfo } from "../data/species";
import { whaleProfiles } from "../data/whaleProfiles";
import { whaleSightings } from "../data/whaleSightings";
import type { Season, WhaleSighting, WhaleSpecies } from "../types/whale";

export default function WhaleExplorer() {
  const [selectedSpecies, setSelectedSpecies] = useState<WhaleSpecies | "all">("all");
  const [selectedSeason, setSelectedSeason] = useState<Season | "all">("all");
  const [showRoutes, setShowRoutes] = useState(true);
  const [focusSighting, setFocusSighting] = useState<WhaleSighting | null>(null);
  const [learnMoreSpecies, setLearnMoreSpecies] = useState<WhaleSpecies | null>(null);

  const filteredSightings = useMemo(() => {
    return whaleSightings.filter((sighting) => {
      const speciesMatch = selectedSpecies === "all" || sighting.species === selectedSpecies;
      const seasonMatch = selectedSeason === "all" || sighting.season === selectedSeason;
      return speciesMatch && seasonMatch;
    });
  }, [selectedSpecies, selectedSeason]);

  const filteredRoutes = useMemo(() => {
    if (selectedSpecies === "all") return migrationRoutes;
    return migrationRoutes.filter((route) => route.species === selectedSpecies);
  }, [selectedSpecies]);

  const funFact = useMemo(() => {
    if (filteredSightings.length === 0) {
      return "No dots match those filters yet. Try another season or choose all whales.";
    }

    const index = (selectedSpecies.length + selectedSeason.length + filteredSightings.length) % filteredSightings.length;
    return filteredSightings[index].funFact;
  }, [filteredSightings, selectedSeason, selectedSpecies]);

  const whaleOfTheDay = useMemo(() => {
    const dayIndex = new Date().getDate() % whaleSightings.length;
    const sighting = whaleSightings[dayIndex];
    return `${sighting.commonName}: ${speciesInfo[sighting.species].funFact}`;
  }, []);

  function surpriseMe() {
    if (filteredSightings.length === 0) return;
    const next = filteredSightings[Math.floor(Math.random() * filteredSightings.length)];
    setFocusSighting(next);
  }

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-sky-100">
      <WhaleMap
        sightings={filteredSightings}
        routes={filteredRoutes}
        showRoutes={showRoutes}
        focusSighting={focusSighting}
        onLearnMore={(sighting) => setLearnMoreSpecies(sighting.species)}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[500] bg-gradient-to-b from-white/80 to-transparent p-4 md:inset-y-0 md:left-0 md:right-auto md:bg-gradient-to-r md:p-5">
        <Filters
          selectedSpecies={selectedSpecies}
          selectedSeason={selectedSeason}
          showRoutes={showRoutes}
          visibleCount={filteredSightings.length}
          funFact={funFact}
          whaleOfTheDay={whaleOfTheDay}
          onSpeciesChange={setSelectedSpecies}
          onSeasonChange={setSelectedSeason}
          onRoutesChange={setShowRoutes}
          onSurprise={surpriseMe}
        />
      </div>

      <LearnMorePanel
        profile={learnMoreSpecies ? whaleProfiles[learnMoreSpecies] : null}
        onClose={() => setLearnMoreSpecies(null)}
      />
    </main>
  );
}

