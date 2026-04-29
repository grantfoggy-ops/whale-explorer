# Whale Explorer

Whale Explorer is a kid-friendly web app that shows educational, historical whale observation dots on a world map, plus simplified migration route lines.

It does **not** show real-time tagged whale locations. That is intentional: live locations may be sensitive for conservation reasons.

## Features

- Full-screen Leaflet world map
- 125 local sample whale sighting records
- Species filters for humpback, blue, fin, sperm, southern right, and orca whales
- Season filter for migration timing
- Clickable observation popups with child-friendly facts
- Optional migration route lines
- Surprise whale zoom button
- Whale of the day and legend cards
- Responsive laptop and tablet layout

## Tech Stack

- React with Vite
- TypeScript
- React Leaflet and Leaflet
- Tailwind CSS
- Static local data, no paid API keys

## Run Locally

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
npm run preview
```

## File Structure

```text
src/
  index.css
  main.tsx
components/
  Filters.tsx
  WhaleExplorer.tsx
  WhaleLogo.tsx
  WhaleMap.tsx
  WhalePopup.tsx
data/
  migrationRoutes.ts
  species.ts
  whaleSightings.ts
types/
  whale.ts
```

## Data Notes

The app ships with deterministic static demo data in `data/whaleSightings.ts`, distributed around realistic whale habitat regions. Each record includes species, coordinates, month, season, ocean, approximate date, fun fact, and source label.

To connect public data later, normalize records from sources such as OBIS, OBIS-SEAMAP, or Movebank into the `WhaleSighting` shape in `types/whale.ts`. A comment in `data/whaleSightings.ts` marks the integration point.

Map tiles come from CARTO/OpenStreetMap and require no API key. For offline use, replace the `TileLayer` in `components/WhaleMap.tsx` with a local tile source.
