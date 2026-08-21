import type { ImageAsset } from "@/types";
import { getPlaceById } from "@/data/places";

export interface PresetTrip {
  id: string;
  name: string;
  caption: string;
  image: ImageAsset;
  placeIds: string[];
}

export const presetTrips: PresetTrip[] = [
  {
    id: "whole-island-14",
    name: "Colombo Airport → Colombo Airport",
    caption: "14-day whole island trip — cultural triangle, hill country, east & south coasts",
    image: getPlaceById("sigiriya-rock-fortress")!.image,
    placeIds: [
      "galle-face-green",
      "pettah-market",
      "gangaramaya-temple",
      "kandy-temple-of-tooth",
      "royal-botanical-gardens-peradeniya",
      "kandy-lake",
      "sigiriya-rock-fortress",
      "dambulla-cave-temple",
      "ruwanwelisaya",
      "abhayagiri-vihara",
      "gal-vihara",
      "polonnaruwa-vatadage",
      "koneswaram-temple",
      "nilaveli-beach",
      "pigeon-island-national-park",
      "kallady-bridge",
      "pasikudah-beach",
      "arugam-bay",
      "gal-oya-national-park",
      "nine-arch-bridge",
      "dunhinda-falls",
      "haputale-tea-plantations",
      "horton-plains-national-park",
      "sinharaja-forest-reserve",
      "bopath-ella-falls",
      "yala-national-park",
      "bundala-national-park",
      "galle-fort",
      "unawatuna-beach",
      "mirissa-beach",
      "matara-star-fort",
    ],
  },
  {
    id: "south-hill-country-10",
    name: "South Coast & Hill Country",
    caption: "10-day trip — Kandy, tea country, Ella, a Yala safari and the south coast",
    image: getPlaceById("nine-arch-bridge")!.image,
    placeIds: [
      "galle-face-green",
      "pettah-market",
      "kandy-temple-of-tooth",
      "royal-botanical-gardens-peradeniya",
      "sigiriya-rock-fortress",
      "dambulla-cave-temple",
      "horton-plains-national-park",
      "nine-arch-bridge",
      "haputale-tea-plantations",
      "sinharaja-forest-reserve",
      "bopath-ella-falls",
      "yala-national-park",
      "bundala-national-park",
      "galle-fort",
      "unawatuna-beach",
      "mirissa-beach",
      "matara-star-fort",
      "bentota-beach",
      "kalutara-bodhiya",
    ],
  },
  {
    id: "quick-getaway-5",
    name: "Cultural Triangle & South Coast",
    caption: "5-day quick getaway — Kandy, Sigiriya, Galle Fort and the beaches south of it",
    image: getPlaceById("galle-fort")!.image,
    placeIds: [
      "galle-face-green",
      "pettah-market",
      "kandy-temple-of-tooth",
      "royal-botanical-gardens-peradeniya",
      "sigiriya-rock-fortress",
      "dambulla-cave-temple",
      "galle-fort",
      "unawatuna-beach",
      "mirissa-beach",
    ],
  },
  {
    id: "coast-safari-surf-7",
    name: "Beaches, Safari & Surf",
    caption: "7-day trip — south coast beaches, a Yala safari and Arugam Bay's east coast surf",
    image: getPlaceById("arugam-bay")!.image,
    placeIds: [
      "galle-face-green",
      "pettah-market",
      "galle-fort",
      "unawatuna-beach",
      "mirissa-beach",
      "matara-star-fort",
      "yala-national-park",
      "bundala-national-park",
      "arugam-bay",
      "gal-oya-national-park",
      "pasikudah-beach",
      "kallady-bridge",
      "nilaveli-beach",
      "pigeon-island-national-park",
      "koneswaram-temple",
    ],
  },
];

export function getPresetTripById(id: string): PresetTrip | undefined {
  return presetTrips.find((trip) => trip.id === id);
}
