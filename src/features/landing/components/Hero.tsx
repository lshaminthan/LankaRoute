"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { getPlaceById } from "@/data/places";

const stripPlaceIds = ["nine-arch-bridge", "sigiriya-rock-fortress", "galle-fort", "nilaveli-beach"];
const stripImages = stripPlaceIds.map((id) => getPlaceById(id)!);

const prompts = [
  "Plan a beach escape",
  "Inspire me where to go",
  "Plan a hill country trip",
  "Plan a last-minute trip",
];

export function Hero() {
  const [value, setValue] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    document.getElementById("sample-trips")?.scrollIntoView({ behavior: "smooth" });
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

          <div className="mt-4 flex items-center justify-between border-t border-light-grey pt-4">
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

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stripImages.map((place) => (
          <div
            key={place.id}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-md"
          >
            <Image
              src={place.image.src}
              alt={place.image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">
              {place.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
