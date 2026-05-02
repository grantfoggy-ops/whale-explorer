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

export interface SizeComparison {
  label: string;
  lengthMeters: number;
  note: string;
}

export interface WhaleProfile {
  species: WhaleSpecies;
  commonName: string;
  scientificName: string;
  imageUrl: string;
  imageAlt: string;
  imageCredit: string;
  lengthMeters: number;
  weightTonnes: string;
  shortIntro: string;
  habitat: string;
  diet: string;
  familyLife: string;
  childFriendlyFact: string;
  comparisons: SizeComparison[];
}

