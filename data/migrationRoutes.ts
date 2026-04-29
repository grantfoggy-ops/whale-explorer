import type { MigrationRoute } from "../types/whale";

export const migrationRoutes: MigrationRoute[] = [
  {
    id: "humpback-pacific",
    species: "humpback",
    commonName: "Humpback whale",
    description: "North Pacific feeding waters to warm Hawaiian breeding waters.",
    seasonHint: "Many humpbacks feed in summer and visit warmer breeding areas in winter.",
    color: "#1a7fa3",
    coordinates: [
      [59.5, -149.5],
      [49.4, -145.0],
      [38.5, -137.0],
      [28.1, -126.0],
      [20.8, -156.2]
    ]
  },
  {
    id: "humpback-atlantic",
    species: "humpback",
    commonName: "Humpback whale",
    description: "North Atlantic feeding grounds toward Caribbean nursery waters.",
    seasonHint: "A broad educational route showing seasonal movement between feeding and breeding areas.",
    color: "#1a7fa3",
    coordinates: [
      [64.7, -22.4],
      [54.0, -32.0],
      [42.0, -43.0],
      [29.0, -56.0],
      [19.2, -68.1]
    ]
  },
  {
    id: "blue-pacific",
    species: "blue",
    commonName: "Blue whale",
    description: "Eastern Pacific movement between productive feeding waters and warmer seasonal habitat.",
    seasonHint: "Blue whale routes are broad because these giants follow shifting patches of krill.",
    color: "#4467d9",
    coordinates: [
      [37.5, -123.4],
      [31.8, -122.1],
      [27.1, -118.2],
      [25.4, -113.2],
      [26.8, -111.8]
    ]
  },
  {
    id: "blue-atlantic",
    species: "blue",
    commonName: "Blue whale",
    description: "North Atlantic educational seasonal movement.",
    seasonHint: "Some blue whales use high-latitude summer feeding areas and lower-latitude winter waters.",
    color: "#4467d9",
    coordinates: [
      [63.0, -31.0],
      [54.5, -37.8],
      [45.0, -42.3],
      [35.2, -46.0],
      [25.5, -50.2]
    ]
  },
  {
    id: "southern-right-south-atlantic",
    species: "southern-right",
    commonName: "Southern right whale",
    description: "Southern Ocean feeding region to coastal South Atlantic nursery bays.",
    seasonHint: "Southern right whales often move from richer offshore feeding waters to sheltered coasts.",
    color: "#ff8a7a",
    coordinates: [
      [-55.0, -45.0],
      [-50.5, -50.2],
      [-46.8, -57.7],
      [-42.6, -64.4]
    ]
  },
  {
    id: "southern-right-australia",
    species: "southern-right",
    commonName: "Southern right whale",
    description: "Southern Ocean feeding region to southern Australian breeding coast.",
    seasonHint: "This simplified route is for learning, not navigation or live tracking.",
    color: "#ff8a7a",
    coordinates: [
      [-55.7, 118.0],
      [-48.0, 124.0],
      [-41.0, 131.0],
      [-35.1, 136.8]
    ]
  },
  {
    id: "gray-eastern-pacific",
    species: "gray",
    commonName: "Gray whale",
    description: "Eastern Pacific route from Arctic feeding waters to Baja California lagoons.",
    seasonHint: "Gray whales are included as an extra route because their migration is famous and easy to imagine.",
    color: "#7b8794",
    coordinates: [
      [65.8, -168.8],
      [56.0, -157.2],
      [47.9, -124.8],
      [37.0, -122.5],
      [27.8, -114.2]
    ]
  }
];
