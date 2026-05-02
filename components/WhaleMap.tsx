"use client";

import L, { type LatLngExpression } from "leaflet";
import { useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { speciesInfo } from "../data/species";
import type { MigrationRoute, WhaleSighting } from "../types/whale";
import WhalePopup from "./WhalePopup";

type WhaleMapProps = {
  sightings: WhaleSighting[];
  routes: MigrationRoute[];
  showRoutes: boolean;
  focusSighting: WhaleSighting | null;
  onLearnMore: (sighting: WhaleSighting) => void;
};

function FlyToSighting({ sighting }: { sighting: WhaleSighting | null }) {
  const map = useMap();

  useEffect(() => {
    if (sighting) {
      map.flyTo([sighting.latitude, sighting.longitude], 5, { duration: 1.2 });
    }
  }, [map, sighting]);

  return null;
}

function makeClusterIcon(cluster: { getChildCount: () => number }) {
  const count = cluster.getChildCount();
  return L.divIcon({
    html: `<div><span>${count}</span></div>`,
    className: "marker-cluster marker-cluster-small",
    iconSize: L.point(40, 40)
  });
}

export default function WhaleMap({ sightings, routes, showRoutes, focusSighting, onLearnMore }: WhaleMapProps) {
  const center: LatLngExpression = [18, 0];
  const markerIcons = useMemo<Record<string, L.DivIcon>>(() => {
    return Object.fromEntries(
      Object.entries(speciesInfo).map(([species, info]) => [
        species,
        L.divIcon({
          className: "",
          html: `<span class="whale-dot" style="display:block;width:20px;height:20px;background:${info.color}"></span>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
          popupAnchor: [0, -10]
        })
      ])
    );
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={2}
      minZoom={2}
      maxZoom={8}
      scrollWheelZoom
      worldCopyJump
      className="z-0"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {showRoutes &&
        routes.map((route) => (
          <Polyline
            key={route.id}
            pathOptions={{ color: route.color, weight: 4, opacity: 0.76, dashArray: "8 10" }}
            positions={route.coordinates}
          >
            <Popup>
              <div className="w-64 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-lagoon">Migration route</p>
                <h2 className="mt-1 text-lg font-black text-deep">{route.commonName}</h2>
                <p className="mt-2 text-sm text-slate-700">{route.description}</p>
                <p className="mt-3 rounded-md bg-sky-50 px-3 py-2 text-xs font-semibold text-slate-600">
                  {route.seasonHint}
                </p>
              </div>
            </Popup>
          </Polyline>
        ))}

      <MarkerClusterGroup chunkedLoading iconCreateFunction={makeClusterIcon}>
        {sightings.map((sighting) => {
          return (
            <Marker
              key={sighting.id}
              icon={markerIcons[sighting.species]}
              position={[sighting.latitude, sighting.longitude]}
            >
              <Popup>
                <WhalePopup sighting={sighting} onLearnMore={() => onLearnMore(sighting)} />
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>

      <FlyToSighting sighting={focusSighting} />
    </MapContainer>
  );
}
