import { places } from "@/data/places";
import { getDistrictById } from "@/data/districts";
import type { InterestId } from "@/types";
import { SelectableCard } from "@/components/ui/SelectableCard";

export function PlaceStep({
  selectedDistricts,
  selectedInterests,
  selectedPlaces,
  onToggle,
}: {
  selectedDistricts: string[];
  selectedInterests: InterestId[];
  selectedPlaces: string[];
  onToggle: (id: string) => void;
}) {
  const matches = places.filter(
    (place) =>
      selectedDistricts.includes(place.districtId) &&
      place.interests.some((interest) => selectedInterests.includes(interest)),
  );

  const grouped = selectedDistricts
    .map((districtId) => ({
      district: getDistrictById(districtId),
      places: matches.filter((place) => place.districtId === districtId),
    }))
    .filter((group) => group.places.length > 0);

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-gray-900">Choose the places to visit</h3>
      <p className="mt-1 text-sm text-gray-500">
        Matched to your interests across the districts you picked. Select everything you want on
        the itinerary.
      </p>

      {grouped.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-light-grey bg-light-grey/40 p-8 text-center">
          <p className="text-sm font-medium text-gray-700">
            No places match that combination yet.
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Go back and add another interest or district to see more results.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-10">
          {grouped.map((group) => (
            <div key={group.district?.id}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-blue">
                {group.district?.name}
              </h4>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.places.map((place) => (
                  <SelectableCard
                    key={place.id}
                    title={place.name}
                    subtitle={place.description}
                    image={place.image}
                    selected={selectedPlaces.includes(place.id)}
                    onToggle={() => onToggle(place.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
