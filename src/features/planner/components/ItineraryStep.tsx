"use client";

import { useEffect, useMemo, useState } from "react";
import { places } from "@/data/places";
import { getDistrictById } from "@/data/districts";
import { generateItinerary } from "@/utils/generateItinerary";
import type { TransportMode } from "@/types";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

const transportIcon: Record<TransportMode, IconName> = {
  Train: "train",
  Bus: "bus",
  "Tuk-tuk": "tuktuk",
  "Private Van": "bus",
};

export function ItineraryStep({
  selectedPlaceIds,
  onEdit,
  onRestart,
}: {
  selectedPlaceIds: string[];
  onEdit: () => void;
  onRestart: () => void;
}) {
  const [isGenerating, setIsGenerating] = useState(true);
  const [trackedIds, setTrackedIds] = useState(selectedPlaceIds);

  if (selectedPlaceIds !== trackedIds) {
    setTrackedIds(selectedPlaceIds);
    setIsGenerating(true);
  }

  const selectedPlaceObjects = useMemo(
    () =>
      selectedPlaceIds
        .map((id) => places.find((place) => place.id === id))
        .filter((place): place is (typeof places)[number] => Boolean(place)),
    [selectedPlaceIds],
  );

  const itinerary = useMemo(
    () => generateItinerary(selectedPlaceObjects),
    [selectedPlaceObjects],
  );

  useEffect(() => {
    if (!isGenerating) return;
    const timer = setTimeout(() => setIsGenerating(false), 1700);
    return () => clearTimeout(timer);
  }, [isGenerating]);

  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-20 text-center">
        <span className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute h-full w-full animate-ping rounded-full bg-primary-blue/20" />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue text-white">
            <Icon name="sparkles" className="h-6 w-6" />
          </span>
        </span>
        <div>
          <p className="text-lg font-semibold text-gray-900">Generating your itinerary…</p>
          <p className="mt-1 text-sm text-gray-500">
            Mapping routes, transport times and hotels across {itinerary.totalPlaces} places in{" "}
            {itinerary.districts.length} district{itinerary.districts.length === 1 ? "" : "s"}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue">
            <Icon name="sparkles" className="h-3.5 w-3.5" />
            AI-generated itinerary
          </span>
          <h3 className="mt-3 font-display text-xl font-bold text-gray-900">
            Your {itinerary.totalDays}-day Sri Lanka plan
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {itinerary.totalPlaces} places across {itinerary.districts.length} district
            {itinerary.districts.length === 1 ? "" : "s"}, with transport and hotels included.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Button variant="secondary" size="sm" onClick={onEdit}>
            Edit selections
          </Button>
          <Button variant="ghost" size="sm" onClick={onRestart}>
            Start over
          </Button>
        </div>
      </div>

      <ol className="mt-8 space-y-6">
        {itinerary.days.map((day) => {
          const district = getDistrictById(day.districtId);
          return (
            <li
              key={day.day}
              className="overflow-hidden rounded-2xl border border-light-grey bg-white shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 bg-light-grey/60 px-5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-blue text-sm font-bold text-white">
                  {day.day}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Day {day.day} — {day.title}</p>
                  <p className="text-xs text-gray-500">{district?.province}</p>
                </div>
              </div>

              <div className="grid gap-6 p-5 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Places today
                  </h5>
                  <ol className="mt-3 space-y-3">
                    {day.places.map((placeName, index) => (
                      <li key={placeName} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-xs font-semibold text-primary-blue">
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-700">{placeName}</span>
                      </li>
                    ))}
                  </ol>

                  {day.legs.length > 0 && (
                    <div className="mt-5">
                      <h5 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Getting around
                      </h5>
                      <ul className="mt-3 space-y-2.5">
                        {day.legs.map((leg, index) => (
                          <li
                            key={`${leg.from}-${leg.to}-${index}`}
                            className="flex items-start gap-3 rounded-xl bg-light-grey/60 p-3"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary-blue shadow-sm">
                              <Icon name={transportIcon[leg.mode]} className="h-4 w-4" />
                            </span>
                            <span className="text-sm text-gray-600">
                              <span className="font-medium text-gray-900">
                                {leg.mode}
                              </span>{" "}
                              · {leg.from} → {leg.to} · ~{leg.duration}
                              <span className="block text-xs text-gray-400">{leg.note}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-light-grey bg-light-grey/40 p-4">
                  <h5 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Suggested stay
                  </h5>
                  <div className="mt-3 flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white">
                      <Icon name="bed" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{day.hotel.name}</p>
                      <p className="text-xs text-gray-500">{day.hotel.area}</p>
                      <div className="mt-1.5 flex items-center gap-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1 font-medium text-gray-700">
                          <Icon name="star" className="h-3.5 w-3.5 text-primary-blue" />
                          {day.hotel.rating.toFixed(1)}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>${day.hotel.pricePerNightUsd}/night</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-light-grey/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-gray-600">
          Like this plan? Real booking and live transport data are coming in the next phase of
          LankaRoute.
        </p>
        <Button variant="primary" size="sm" onClick={onRestart}>
          Plan another trip
        </Button>
      </div>
    </div>
  );
}
