export type WhaleSpecies =
  | "humpback"
  | "blue"
  | "fin"
  | "sperm"
  | "southern-right"
  | "orca"
  | "gray";

export type Season = "Spring" | "Summer" | "Autumn" | "Winter";

export interface WhaleSighting {
  id: string;
  species: WhaleSpecies;
  commonName: string;
  scientificName: string;
  latitude: number;
  longitude: number;
  month: number;
  season: Season;
  ocean: string;
  dateApproximation: string;
  funFact: string;
  sourceLabel: string;
}

export interface MigrationRoute {
  id: string;
  species: WhaleSpecies;
  commonName: string;
  description: string;
  seasonHint: string;
  color: string;
  coordinates: [number, number][];
}

export interface SpeciesInfo {
  species: WhaleSpecies;
  commonName: string;
  scientificName: string;
  color: string;
  funFact: string;
}
