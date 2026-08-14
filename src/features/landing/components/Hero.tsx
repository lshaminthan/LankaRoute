"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { getPlaceById } from "@/data/places";

const previewLegs = [
  { from: "Colombo Fort", to: "Peradeniya", mode: "train" as const, duration: "2h 15m" },
  { from: "Peradeniya", to: "Kandy", mode: "bus" as const, duration: "15 min" },
];

const heroImage = getPlaceById("nine-arch-bridge")!.image;

export function Hero() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    document.getElementById("sample-trips")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 text-white sm:py-24">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 via-primary-blue/80 to-deep-blue/90" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white">
            <Icon name="sparkles" className="h-3.5 w-3.5" />
            AI trip planner · built for Sri Lanka
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Your Sri Lanka route, timed and ready to go
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Tell us where you&apos;re headed — we work out the buses, trains and transfers in between.
          </p>

          <form
            id="plan"
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl scroll-mt-24 flex-col gap-3 rounded-2xl bg-white p-3 shadow-lg sm:flex-row lg:mx-0"
          >
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-light-grey px-4 py-3">
              <Icon name="mapPin" className="h-4 w-4 shrink-0 text-gray-400" />
              <input
                type="text"
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                placeholder="From — e.g. Colombo"
                className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-light-grey px-4 py-3">
              <Icon name="flag" className="h-4 w-4 shrink-0 text-gray-400" />
              <input
                type="text"
                value={to}
                onChange={(event) => setTo(event.target.value)}
                placeholder="To — e.g. Kandy"
                className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-deep-blue"
            >
              <Icon name="search" className="h-4 w-4" />
              Plan a trip
            </button>
          </form>

          <p className="mt-5 text-sm text-white/70">
            25 districts covered · Built by student founders
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl sm:max-w-md">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-900">Colombo → Kandy</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Live · updated just now
            </span>
          </div>

          <ol className="mt-5 space-y-4">
            {previewLegs.map((leg, index) => (
              <li key={`${leg.from}-${leg.to}`} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                  <Icon name={leg.mode} className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {leg.from} → {leg.to}
                  </p>
                  <p className="text-xs text-gray-500">
                    {leg.mode === "train" ? "Train" : "Bus"} · ~{leg.duration}
                  </p>
                </div>
                {index < previewLegs.length - 1 && (
                  <span className="text-xs font-medium text-gray-400">transfer</span>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-5 flex items-center justify-between rounded-xl bg-light-grey px-4 py-3 text-sm">
            <span className="text-gray-500">Total journey</span>
            <span className="font-semibold text-gray-900">~2h 30m</span>
          </div>
        </div>
      </div>
    </section>
  );
}
