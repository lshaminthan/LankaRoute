"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { getPlaceById } from "@/data/places";
import { presetTrips } from "@/data/presetTrips";
import type { ImageAsset, InterestId } from "@/types";

const stripItems: { name: string; caption: string; interestId: InterestId; image: ImageAsset }[] = [
  {
    name: "Cultural Trip",
    caption: "Ancient cities, ruins and sacred sites",
    interestId: "culture-history",
    image: getPlaceById("sigiriya-rock-fortress")!.image,
  },
  {
    name: "Coastal Trip",
    caption: "Beaches, surf towns and ocean sunsets",
    interestId: "beaches-coast",
    image: getPlaceById("unawatuna-beach")!.image,
  },
  {
    name: "Devotional Trip",
    caption: "Temples and pilgrimage sites across the island",
    interestId: "culture-history",
    image: getPlaceById("kandy-temple-of-tooth")!.image,
  },
];

const prompts = [
  "Plan a beach escape",
  "Inspire me where to go",
  "Plan a hill country trip",
  "Plan a last-minute trip",
];

const popularPlaceIds = ["sigiriya-rock-fortress", "galle-fort", "kandy-temple-of-tooth"];

export function Hero() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const query = value.trim();
    router.push(query ? `/chat?q=${encodeURIComponent(query)}` : "/chat");
  }

  return (
    <section className="bg-light-grey px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
          Hey traveler, where in Sri Lanka are we going?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-gray-600">
          Real bus &amp; train times, live route tracking, and your whole group in sync.
        </p>

        <form
          id="plan"
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-2xl scroll-mt-24 rounded-[2rem] bg-white p-5 text-left shadow-xl"
        >
          <div className="relative">
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Plan a trip from Colombo to Ella…"
              className="w-full bg-transparent pr-8 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
            {value && (
              <button
                type="button"
                onClick={() => setValue("")}
                aria-label="Clear"
                className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent-coral text-white"
              >
                <Icon name="close" className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4 text-gray-400">
              <Icon name="paperclip" className="h-5 w-5" aria-hidden />
              <Icon name="microphone" className="h-5 w-5" aria-hidden />
            </div>
            <button
              type="submit"
              aria-label="Plan a trip"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-blue text-white transition-colors hover:bg-deep-blue"
            >
              <Icon name="arrowRight" className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {prompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => setValue(prompt)}
              className="rounded-full bg-primary-blue/10 px-4 py-2 text-sm font-semibold text-primary-blue transition-colors hover:bg-primary-blue/15"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl">
        <h2 className="font-display text-xl font-bold text-gray-900 sm:text-2xl">
          Pre-Planned Trips
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Full, ready-to-go itineraries — real routes, real places, day by day.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {presetTrips.slice(0, 3).map(({ id, name, caption, image }) => (
            <Link
              key={id}
              href={`/plan?preset=${id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-xl font-semibold text-white">{name}</p>
                <p className="mt-1 text-sm text-white/85">{caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-gray-900 sm:text-2xl">
            Explore Trip Types
          </h2>
          <Link
            href="/plan"
            aria-label="See all trip types"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-primary-blue transition-colors hover:bg-primary-blue/10"
          >
            <Icon name="arrowRight" className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stripItems.map(({ name, caption, interestId, image }) => (
          <Link
            key={name}
            href={`/plan?interest=${interestId}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display text-xl font-semibold text-white">{name}</p>
              <p className="mt-1 text-sm text-white/85">{caption}</p>
            </div>
          </Link>
        ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-gray-900 sm:text-2xl">
            Sri Lanka&apos;s Most Visited Places
          </h2>
          <Link
            href="/plan"
            aria-label="Plan a trip around these places"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-primary-blue transition-colors hover:bg-primary-blue/10"
          >
            <Icon name="arrowRight" className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {popularPlaceIds.map((placeId) => {
            const place = getPlaceById(placeId)!;
            return (
              <Link
                key={placeId}
                href="/plan"
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md"
              >
                <Image
                  src={place.image.src}
                  alt={place.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-display text-xl font-semibold text-white">{place.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
