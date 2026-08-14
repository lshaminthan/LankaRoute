export type InterestId =
  | "culture-history"
  | "beaches-coast"
  | "nature-adventure"
  | "food-local-life"
  | "wildlife-safari"
  | "relaxation-wellness";

export interface Interest {
  id: InterestId;
  name: string;
  description: string;
  icon: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface District {
  id: string;
  name: string;
  province: string;
  tag: string;
  description: string;
  image: ImageAsset;
}

export interface Place {
  id: string;
  name: string;
  districtId: string;
  description: string;
  interests: InterestId[];
  image: ImageAsset;
}

export interface Hotel {
  name: string;
  area: string;
  rating: number;
  pricePerNightUsd: number;
}

export type TransportMode = "Train" | "Bus" | "Tuk-tuk" | "Private Van";

export interface ItineraryLeg {
  from: string;
  to: string;
  mode: TransportMode;
  duration: string;
  note: string;
}

export interface ItineraryDay {
  day: number;
  districtId: string;
  title: string;
  places: string[];
  legs: ItineraryLeg[];
  hotel: Hotel;
}

export interface Itinerary {
  days: ItineraryDay[];
  totalDays: number;
  totalPlaces: number;
  districts: string[];
}
