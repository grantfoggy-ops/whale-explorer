import type { WhaleProfile, WhaleSpecies } from "../types/whale";

const ukObjects = {
  person: { label: "grown-up person", lengthMeters: 1.7, note: "standing head to toe" },
  car: { label: "family car", lengthMeters: 4.4, note: "about the length of a typical UK hatchback or small family car" },
  bus: { label: "double-decker bus", lengthMeters: 10.8, note: "about the length of a London double-decker bus" },
  tube: { label: "Tube carriage", lengthMeters: 17.7, note: "about one London Underground carriage" }
};

function comparisonsFor(lengthMeters: number) {
  return Object.values(ukObjects).map((item) => ({
    ...item,
    note: `${item.note}; this whale is about ${Math.round((lengthMeters / item.lengthMeters) * 10) / 10} of these long.`
  }));
}

export const whaleProfiles: Record<WhaleSpecies, WhaleProfile> = {
  humpback: {
    species: "humpback",
    commonName: "Humpback whale",
    scientificName: "Megaptera novaeangliae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Humpback_Whale_%2838030786395%29.jpg?width=900",
    imageAlt: "A humpback whale swimming underwater in blue water.",
    imageCredit: "Image: NOAA / National Marine Sanctuaries, public domain, via Wikimedia Commons",
    lengthMeters: 15,
    weightTonnes: "25 to 30 tonnes",
    shortIntro: "Humpbacks are famous singers and acrobats. They often lift their huge fins, slap the sea, and leap out of the water.",
    habitat: "They travel between cold feeding grounds and warm breeding waters in many oceans.",
    diet: "They eat small fish and krill, sometimes working together with bubbles to corral food.",
    familyLife: "Calves stay close to their mothers and drink very rich milk while they learn to swim long distances.",
    childFriendlyFact: "A humpback song can last for many minutes and other humpbacks may copy and change it.",
    comparisons: comparisonsFor(15)
  },
  blue: {
    species: "blue",
    commonName: "Blue whale",
    scientificName: "Balaenoptera musculus",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue-whale.jpg?width=900",
    imageAlt: "A blue whale near the surface of the ocean.",
    imageCredit: "Image: NOAA Fisheries / Lisa Conger, public domain, via Wikimedia Commons",
    lengthMeters: 27,
    weightTonnes: "100 to 150 tonnes",
    shortIntro: "Blue whales are the largest animals known to have ever lived. Even their tongues can weigh as much as an elephant.",
    habitat: "They live in open oceans and follow rich patches of tiny krill.",
    diet: "They are enormous, but they mostly eat tiny shrimp-like krill by filtering seawater through baleen plates.",
    familyLife: "Blue whale calves are already huge when born and can gain many kilograms every hour while nursing.",
    childFriendlyFact: "A blue whale can be longer than two double-decker buses parked nose to tail.",
    comparisons: comparisonsFor(27)
  },
  fin: {
    species: "fin",
    commonName: "Fin whale",
    scientificName: "Balaenoptera physalus",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fin_whale.jpg?width=900",
    imageAlt: "A fin whale surfacing in the sea.",
    imageCredit: "Image: NOAA, public domain, via Wikimedia Commons",
    lengthMeters: 22,
    weightTonnes: "40 to 80 tonnes",
    shortIntro: "Fin whales are sleek, fast baleen whales with a tall spout and a long, streamlined body.",
    habitat: "They are found in deep offshore waters and some productive shelf seas, including parts of the North Atlantic.",
    diet: "They gulp seawater full of krill, small fish, and squid, then push the water out through baleen.",
    familyLife: "Fin whales can travel alone or in small groups, and mothers care for calves during long ocean journeys.",
    childFriendlyFact: "Fin whales are sometimes nicknamed the greyhounds of the sea because they can swim so quickly.",
    comparisons: comparisonsFor(22)
  },
  sperm: {
    species: "sperm",
    commonName: "Sperm whale",
    scientificName: "Physeter macrocephalus",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sperm_whales_-_Physeter_macrocephalus.jpg?width=900",
    imageAlt: "Sperm whales swimming together.",
    imageCredit: "Image: NOAA's Ark, public domain, via Wikimedia Commons",
    lengthMeters: 16,
    weightTonnes: "35 to 45 tonnes",
    shortIntro: "Sperm whales are deep-diving toothed whales with big square heads and powerful clicking sounds.",
    habitat: "They prefer deep ocean water where the seafloor drops away and squid live far below the surface.",
    diet: "Their favorite food is squid, including very large deep-sea squid.",
    familyLife: "Female sperm whales and young whales often live in social groups, while adult males may travel more widely.",
    childFriendlyFact: "Sperm whales can dive deeper than the height of many mountains in the UK.",
    comparisons: comparisonsFor(16)
  },
  "southern-right": {
    species: "southern-right",
    commonName: "Southern right whale",
    scientificName: "Eubalaena australis",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Southern_right_whale7.jpg?width=900",
    imageAlt: "A southern right whale near the coast.",
    imageCredit: "Image: Michaël Catanzariti, public domain, via Wikimedia Commons",
    lengthMeters: 15,
    weightTonnes: "40 to 60 tonnes",
    shortIntro: "Southern right whales are gentle-looking baleen whales with rounded bodies and bumpy patches called callosities.",
    habitat: "They feed in the Southern Ocean and often visit sheltered coastal bays to give birth.",
    diet: "They skim tiny animals called copepods and krill from the water.",
    familyLife: "Mothers and calves spend time in calmer coastal waters before returning to richer feeding areas.",
    childFriendlyFact: "The white patches on their heads help researchers tell individuals apart.",
    comparisons: comparisonsFor(15)
  },
  orca: {
    species: "orca",
    commonName: "Orca / killer whale",
    scientificName: "Orcinus orca",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Killer_Whale_%28Orcinus_orca%29_%2816686617207%29.jpg?width=900",
    imageAlt: "An orca surfacing with a tall black dorsal fin.",
    imageCredit: "Image: Robert Pittman / NOAA, public domain, via Wikimedia Commons",
    lengthMeters: 8,
    weightTonnes: "3 to 6 tonnes",
    shortIntro: "Orcas are actually the largest dolphins. They are clever hunters and live in close family groups.",
    habitat: "They are found from icy polar seas to warmer oceans, often near productive coastlines.",
    diet: "Different orca families specialize in different foods, such as fish, seals, or other marine mammals.",
    familyLife: "Orcas use calls and whistles to stay connected, and some families have their own sound patterns.",
    childFriendlyFact: "An orca family can pass hunting tricks from older whales to younger whales.",
    comparisons: comparisonsFor(8)
  },
  gray: {
    species: "gray",
    commonName: "Gray whale",
    scientificName: "Eschrichtius robustus",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gray_whale_size.svg?width=900",
    imageAlt: "A simple gray whale size illustration.",
    imageCredit: "Image: Wikimedia Commons contributors, via Wikimedia Commons",
    lengthMeters: 14,
    weightTonnes: "25 to 35 tonnes",
    shortIntro: "Gray whales are long-distance travelers best known for their huge migration along the Pacific coast.",
    habitat: "They often migrate near coastlines between Arctic feeding areas and warmer lagoons.",
    diet: "They can scoop tiny animals from muddy seafloors and filter them with baleen.",
    familyLife: "Calves travel close beside their mothers during their first long migration.",
    childFriendlyFact: "Some gray whales travel farther in a year than many people travel in a lifetime.",
    comparisons: comparisonsFor(14)
  }
};
