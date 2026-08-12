import type { Itinerary, ItineraryDay, ItineraryLeg, Place } from "@/lib/types";
import { getDistrictById } from "@/lib/data/districts";
import { getHotelForDistrict } from "@/lib/data/hotels";
import { getIntercityRoute, getLocalTransferMinutes } from "@/lib/data/transport";

const MAX_PLACES_PER_DAY = 3;

interface DistrictGroup {
  districtId: string;
  places: Place[];
}

function groupByDistrictInOrder(places: Place[]): DistrictGroup[] {
  const groups: DistrictGroup[] = [];
  for (const place of places) {
    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.districtId === place.districtId) {
      lastGroup.places.push(place);
      continue;
    }
    const existing = groups.find((group) => group.districtId === place.districtId);
    if (existing) {
      existing.places.push(place);
    } else {
      groups.push({ districtId: place.districtId, places: [place] });
    }
  }
  return groups;
}

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

export function generateItinerary(selectedPlaces: Place[]): Itinerary {
  const groups = groupByDistrictInOrder(selectedPlaces);
  const days: ItineraryDay[] = [];
  let previousDistrictId: string | null = null;
  let dayCounter = 0;

  for (const group of groups) {
    const district = getDistrictById(group.districtId);
    const dayChunks = chunk(group.places, MAX_PLACES_PER_DAY);

    dayChunks.forEach((dayPlaces, chunkIndex) => {
      dayCounter += 1;
      const legs: ItineraryLeg[] = [];

      if (previousDistrictId && previousDistrictId !== group.districtId && chunkIndex === 0) {
        const route = getIntercityRoute(previousDistrictId, group.districtId);
        legs.push({
          from: getDistrictById(previousDistrictId)?.name ?? previousDistrictId,
          to: district?.name ?? group.districtId,
          mode: route.mode,
          duration: route.duration,
          note: `Intercity transfer into ${district?.name ?? "the next district"}`,
        });
      } else if (chunkIndex > 0) {
        legs.push({
          from: `Hotel in ${district?.name ?? group.districtId}`,
          to: dayPlaces[0].name,
          mode: "Tuk-tuk",
          duration: `${getLocalTransferMinutes(dayPlaces[0].id)} min`,
          note: "Short local transfer to continue exploring the area",
        });
      }

      for (let i = 0; i < dayPlaces.length - 1; i++) {
        legs.push({
          from: dayPlaces[i].name,
          to: dayPlaces[i + 1].name,
          mode: "Tuk-tuk",
          duration: `${getLocalTransferMinutes(dayPlaces[i + 1].id)} min`,
          note: "Local hop between nearby sights",
        });
      }

      days.push({
        day: dayCounter,
        districtId: group.districtId,
        title: `${district?.name ?? group.districtId}${dayChunks.length > 1 ? ` (Day ${chunkIndex + 1} of ${dayChunks.length})` : ""}`,
        places: dayPlaces.map((place) => place.name),
        legs,
        hotel: getHotelForDistrict(group.districtId, chunkIndex),
      });

      previousDistrictId = group.districtId;
    });
  }

  return {
    days,
    totalDays: days.length,
    totalPlaces: selectedPlaces.length,
    districts: Array.from(new Set(selectedPlaces.map((place) => place.districtId))),
  };
}
