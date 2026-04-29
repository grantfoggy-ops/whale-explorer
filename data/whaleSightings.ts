import type { Season, WhaleSighting, WhaleSpecies } from "../types/whale";
import { speciesInfo } from "./species";

type Anchor = {
  species: WhaleSpecies;
  ocean: string;
  baseLat: number;
  baseLng: number;
  months: number[];
  place: string;
};

const anchors: Anchor[] = [
  { species: "humpback", ocean: "North Pacific near Alaska", baseLat: 58.3, baseLng: -148.2, months: [5, 6, 7, 8, 9], place: "cool northern feeding waters" },
  { species: "humpback", ocean: "Hawaii and central Pacific", baseLat: 20.6, baseLng: -156.4, months: [12, 1, 2, 3, 4], place: "warm Hawaiian breeding waters" },
  { species: "humpback", ocean: "North Atlantic near Iceland", baseLat: 64.5, baseLng: -22.2, months: [5, 6, 7, 8], place: "Icelandic feeding grounds" },
  { species: "humpback", ocean: "Caribbean Sea", baseLat: 19.1, baseLng: -68.3, months: [1, 2, 3, 4], place: "Caribbean nursery waters" },
  { species: "humpback", ocean: "Eastern Australia", baseLat: -24.8, baseLng: 153.2, months: [6, 7, 8, 9, 10], place: "Australia's east coast corridor" },
  { species: "blue", ocean: "Eastern North Pacific", baseLat: 34.2, baseLng: -122.7, months: [6, 7, 8, 9, 10], place: "California Current feeding waters" },
  { species: "blue", ocean: "Sea of Cortez", baseLat: 26.8, baseLng: -111.8, months: [1, 2, 3, 4], place: "Gulf of California winter waters" },
  { species: "blue", ocean: "South Pacific near Chile", baseLat: -43.9, baseLng: -74.5, months: [1, 2, 3, 12], place: "Chilean blue whale habitat" },
  { species: "blue", ocean: "Indian Ocean near Sri Lanka", baseLat: 6.4, baseLng: 81.7, months: [2, 3, 4, 8, 9], place: "Sri Lankan deep waters" },
  { species: "fin", ocean: "North Atlantic near Greenland", baseLat: 61.9, baseLng: -43.8, months: [6, 7, 8, 9], place: "subarctic Atlantic feeding waters" },
  { species: "fin", ocean: "Bay of Biscay", baseLat: 45.3, baseLng: -5.1, months: [4, 5, 6, 7, 8], place: "European continental shelf waters" },
  { species: "fin", ocean: "Mediterranean Sea", baseLat: 42.2, baseLng: 8.7, months: [5, 6, 7, 8, 9], place: "Pelagos Sanctuary region" },
  { species: "fin", ocean: "Southern Ocean", baseLat: -58.8, baseLng: 45.5, months: [12, 1, 2, 3], place: "summer feeding waters in the south" },
  { species: "sperm", ocean: "North Atlantic near the Azores", baseLat: 38.4, baseLng: -28.1, months: [4, 5, 6, 7, 8, 9], place: "deep Azores canyons" },
  { species: "sperm", ocean: "Caribbean Sea near Dominica", baseLat: 15.5, baseLng: -61.4, months: [1, 2, 3, 4, 11, 12], place: "deep Caribbean waters" },
  { species: "sperm", ocean: "Indian Ocean near Mauritius", baseLat: -20.3, baseLng: 57.8, months: [3, 4, 5, 9, 10], place: "Indian Ocean drop-offs" },
  { species: "sperm", ocean: "South Pacific near New Zealand", baseLat: -42.5, baseLng: 173.8, months: [1, 2, 3, 10, 11, 12], place: "Kaikoura deep waters" },
  { species: "southern-right", ocean: "South Atlantic near Argentina", baseLat: -42.6, baseLng: -64.4, months: [6, 7, 8, 9, 10], place: "Peninsula Valdes nursery bays" },
  { species: "southern-right", ocean: "South Atlantic near South Africa", baseLat: -34.6, baseLng: 20.1, months: [6, 7, 8, 9, 10], place: "South African coastal bays" },
  { species: "southern-right", ocean: "Southern Australia", baseLat: -35.1, baseLng: 136.8, months: [6, 7, 8, 9, 10], place: "Great Australian Bight" },
  { species: "southern-right", ocean: "New Zealand subantarctic waters", baseLat: -46.8, baseLng: 169.0, months: [6, 7, 8, 9, 10, 11], place: "Aotearoa New Zealand coast" },
  { species: "orca", ocean: "Northeast Pacific", baseLat: 48.7, baseLng: -123.2, months: [5, 6, 7, 8, 9], place: "Salish Sea family waters" },
  { species: "orca", ocean: "Norwegian Sea", baseLat: 69.1, baseLng: 15.8, months: [10, 11, 12, 1], place: "Norwegian herring waters" },
  { species: "orca", ocean: "Southern Ocean near Antarctica", baseLat: -63.2, baseLng: -58.4, months: [12, 1, 2, 3], place: "Antarctic summer waters" },
  { species: "orca", ocean: "Patagonia and South Atlantic", baseLat: -52.4, baseLng: -68.3, months: [2, 3, 4, 10, 11], place: "Patagonian coastal waters" }
];

const seasonalNames: Season[] = ["Winter", "Spring", "Summer", "Autumn"];

const facts: Record<WhaleSpecies, string[]> = {
  humpback: [
    "Humpbacks can blow bubble nets to help catch tiny fish.",
    "A humpback's tail pattern is as individual as a fingerprint.",
    "Baby humpbacks drink rich milk and grow quickly."
  ],
  blue: [
    "A blue whale's heart can be about the size of a small car.",
    "Blue whales eat tiny krill by the millions.",
    "A blue whale call can be one of the loudest sounds made by an animal."
  ],
  fin: [
    "Fin whales have uneven coloring on their lower jaw.",
    "Fin whales can travel fast when they glide through open water.",
    "Fin whales use pleated throat grooves to take big gulps of seawater."
  ],
  sperm: [
    "Sperm whales click to find food in the deep sea.",
    "Sperm whales have the largest brains of any animal.",
    "Sperm whale families often rest together at the surface."
  ],
  "southern-right": [
    "Southern right whales have bumpy white patches called callosities.",
    "Calves practice swimming close to their mothers in sheltered bays.",
    "Southern right whales are baleen whales that strain tiny food from seawater."
  ],
  orca: [
    "Orcas are dolphins, even though they are called whales.",
    "Orca families can share special hunting traditions.",
    "An orca's tall dorsal fin helps people recognize individuals."
  ],
  gray: [
    "Gray whales sometimes scoop food from muddy seafloors.",
    "Gray whales often travel close enough to shore for careful watching.",
    "A gray whale calf follows its mother on an enormous ocean journey."
  ]
};

function seasonForMonth(month: number): Season {
  if ([12, 1, 2].includes(month)) return "Winter";
  if ([3, 4, 5].includes(month)) return "Spring";
  if ([6, 7, 8].includes(month)) return "Summer";
  return "Autumn";
}

function offset(seed: number, scale: number) {
  const wave = Math.sin(seed * 12.9898) * 43758.5453;
  return (wave - Math.floor(wave) - 0.5) * scale;
}

function monthName(month: number) {
  return new Date(2020, month - 1, 1).toLocaleString("en", { month: "long" });
}

export const whaleSightings: WhaleSighting[] = anchors.flatMap((anchor, anchorIndex) =>
  Array.from({ length: 5 }, (_, pointIndex) => {
    const info = speciesInfo[anchor.species];
    const seed = anchorIndex * 17 + pointIndex * 7 + 3;
    const month = anchor.months[(pointIndex + anchorIndex) % anchor.months.length];
    const year = 2017 + ((anchorIndex + pointIndex) % 7);
    return {
      id: `${anchor.species}-${anchorIndex + 1}-${pointIndex + 1}`,
      species: anchor.species,
      commonName: info.commonName,
      scientificName: info.scientificName,
      latitude: Number((anchor.baseLat + offset(seed, 7.2)).toFixed(3)),
      longitude: Number((anchor.baseLng + offset(seed + 5, 10.4)).toFixed(3)),
      month,
      season: seasonForMonth(month),
      ocean: anchor.ocean,
      dateApproximation: `${monthName(month)} ${year}`,
      funFact: facts[anchor.species][(anchorIndex + pointIndex) % facts[anchor.species].length],
      sourceLabel: `Historical public observation near ${anchor.place}`
    };
  })
);

export const seasons: Season[] = seasonalNames;

// Future API idea:
// Replace or merge whaleSightings with normalized records from OBIS, OBIS-SEAMAP,
// Movebank, or another approved public source. Keep the WhaleSighting shape stable
// so the map and filters do not need to change.
