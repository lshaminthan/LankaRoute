import type { Interest } from "@/types";
import { getPlaceById } from "@/data/places";

export const interests: Interest[] = [
  {
    id: "culture-history",
    name: "Culture & History",
    description: "Temples, forts, ancient cities and living traditions",
    icon: "landmark",
    image: getPlaceById("kandy-temple-of-tooth")!.image,
  },
  {
    id: "beaches-coast",
    name: "Beaches & Coast",
    description: "Golden sands, surf towns and coastal sunsets",
    icon: "waves",
    image: getPlaceById("unawatuna-beach")!.image,
  },
  {
    id: "nature-adventure",
    name: "Nature & Adventure",
    description: "Hiking trails, waterfalls, rainforests and hill country",
    icon: "mountain",
    image: getPlaceById("horton-plains-national-park")!.image,
  },
  {
    id: "food-local-life",
    name: "Food & Local Life",
    description: "Street food, markets and everyday Sri Lankan life",
    icon: "utensils",
    image: getPlaceById("pettah-market")!.image,
  },
  {
    id: "wildlife-safari",
    name: "Wildlife & Safari",
    description: "National parks, leopards, elephants and whale watching",
    icon: "paw",
    image: getPlaceById("pinnawala-elephant-orphanage")!.image,
  },
  {
    id: "relaxation-wellness",
    name: "Relaxation & Wellness",
    description: "Ayurveda, tea country calm and slow coastal days",
    icon: "leaf",
    image: getPlaceById("haputale-tea-plantations")!.image,
  },
];
