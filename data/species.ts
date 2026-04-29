import type { SpeciesInfo, WhaleSpecies } from "../types/whale";

export const speciesInfo: Record<WhaleSpecies, SpeciesInfo> = {
  humpback: {
    species: "humpback",
    commonName: "Humpback whale",
    scientificName: "Megaptera novaeangliae",
    color: "#1a7fa3",
    funFact: "Humpbacks sing long, changing songs that can travel far through the ocean."
  },
  blue: {
    species: "blue",
    commonName: "Blue whale",
    scientificName: "Balaenoptera musculus",
    color: "#4467d9",
    funFact: "Blue whales are the largest animals known to have ever lived on Earth."
  },
  fin: {
    species: "fin",
    commonName: "Fin whale",
    scientificName: "Balaenoptera physalus",
    color: "#2f9e6e",
    funFact: "Fin whales are sometimes called the greyhounds of the sea because they are so speedy."
  },
  sperm: {
    species: "sperm",
    commonName: "Sperm whale",
    scientificName: "Physeter macrocephalus",
    color: "#8a5cf6",
    funFact: "Sperm whales can dive very deep to look for squid in the dark ocean."
  },
  "southern-right": {
    species: "southern-right",
    commonName: "Southern right whale",
    scientificName: "Eubalaena australis",
    color: "#ff8a7a",
    funFact: "Southern right whales often visit calm coastal bays to raise their calves."
  },
  orca: {
    species: "orca",
    commonName: "Orca / killer whale",
    scientificName: "Orcinus orca",
    color: "#0b2842",
    funFact: "Orcas live in family groups and use different calls, almost like ocean dialects."
  },
  gray: {
    species: "gray",
    commonName: "Gray whale",
    scientificName: "Eschrichtius robustus",
    color: "#7b8794",
    funFact: "Gray whales make one of the longest migrations of any mammal."
  }
};

export const coreSpecies: WhaleSpecies[] = [
  "humpback",
  "blue",
  "fin",
  "sperm",
  "southern-right",
  "orca"
];
