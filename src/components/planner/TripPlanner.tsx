"use client";

import { useState } from "react";
import type { InterestId } from "@/lib/types";
import { places } from "@/lib/data/places";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StepIndicator } from "@/components/planner/StepIndicator";
import { InterestStep } from "@/components/planner/InterestStep";
import { DistrictStep } from "@/components/planner/DistrictStep";
import { PlaceStep } from "@/components/planner/PlaceStep";
import { ItineraryStep } from "@/components/planner/ItineraryStep";

function toggleInArray<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export function TripPlanner() {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<InterestId[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);

  const matchingPlaceCount = places.filter(
    (place) =>
      selectedDistricts.includes(place.districtId) &&
      place.interests.some((interest) => selectedInterests.includes(interest)),
  ).length;

  const canContinue =
    (step === 1 && selectedInterests.length > 0) ||
    (step === 2 && selectedDistricts.length > 0) ||
    (step === 3 && selectedPlaces.length > 0);

  function handleReset() {
    setStep(1);
    setSelectedInterests([]);
    setSelectedDistricts([]);
    setSelectedPlaces([]);
  }

  const placesById = new Map(places.map((place) => [place.id, place]));

  function handleInterestToggle(id: InterestId) {
    setSelectedInterests((prev) => {
      const next = toggleInArray(prev, id);
      setSelectedPlaces((prevPlaces) =>
        prevPlaces.filter((placeId) => {
          const place = placesById.get(placeId);
          return place ? place.interests.some((interest) => next.includes(interest)) : false;
        }),
      );
      return next;
    });
  }

  function handleDistrictToggle(id: string) {
    setSelectedDistricts((prev) => {
      const next = toggleInArray(prev, id);
      setSelectedPlaces((prevPlaces) =>
        prevPlaces.filter((placeId) => {
          const place = placesById.get(placeId);
          return place ? next.includes(place.districtId) : false;
        }),
      );
      return next;
    });
  }

  return (
    <section id="planner" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue">
            <Icon name="sparkles" className="h-3.5 w-3.5" />
            AI Sri Lanka Trip Planner
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            The AI Sri Lanka Trip Planner built around you
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Pick your interests, choose your districts and let LankaRoute put together a
            day-by-day plan — with accurate public transport and hotel suggestions included.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-light-grey bg-white p-5 shadow-sm sm:p-8">
          <StepIndicator current={step} />

          <div className="mt-8">
            {step === 1 && (
              <InterestStep selected={selectedInterests} onToggle={handleInterestToggle} />
            )}
            {step === 2 && (
              <DistrictStep selected={selectedDistricts} onToggle={handleDistrictToggle} />
            )}
            {step === 3 && (
              <PlaceStep
                selectedDistricts={selectedDistricts}
                selectedInterests={selectedInterests}
                selectedPlaces={selectedPlaces}
                onToggle={(id) => setSelectedPlaces((prev) => toggleInArray(prev, id))}
              />
            )}
            {step === 4 && (
              <ItineraryStep
                selectedPlaceIds={selectedPlaces}
                onEdit={() => setStep(3)}
                onRestart={handleReset}
              />
            )}
          </div>

          {step < 4 && (
            <div className="mt-10 flex items-center justify-between border-t border-light-grey pt-6">
              <Button
                variant="ghost"
                size="md"
                onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                disabled={step === 1}
              >
                Back
              </Button>

              <div className="text-center text-xs text-gray-400 sm:text-sm">
                {step === 2 &&
                  selectedInterests.length > 0 &&
                  `${selectedDistricts.length} district${selectedDistricts.length === 1 ? "" : "s"} selected`}
                {step === 3 && `${selectedPlaces.length} of ${matchingPlaceCount} places selected`}
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => setStep((prev) => Math.min(4, prev + 1))}
                disabled={!canContinue}
              >
                {step === 3 ? "Generate Itinerary" : "Continue"}
                <Icon name="chevronRight" className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
