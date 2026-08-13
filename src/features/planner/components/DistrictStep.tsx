"use client";

import { useMemo, useState } from "react";
import { districts } from "@/data/districts";
import { SelectableCard } from "@/components/ui/SelectableCard";
import { Icon } from "@/components/ui/Icon";

export function DistrictStep({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (id: string) => void;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return districts;
    return districts.filter(
      (district) =>
        district.name.toLowerCase().includes(q) || district.province.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Where in Sri Lanka?</h3>
      <p className="mt-1 text-sm text-gray-500">
        Select one district or several — build a single-base trip or a multi-stop route.
      </p>

      <div className="relative mt-5 max-w-sm">
        <Icon
          name="mapPin"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a district or province…"
          className="w-full rounded-full border border-light-grey bg-white py-2.5 pl-9 pr-4 text-sm text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((district) => (
          <SelectableCard
            key={district.id}
            title={district.name}
            subtitle={district.tag.split("—")[1]?.trim()}
            image={district.image}
            selected={selected.includes(district.id)}
            onToggle={() => onToggle(district.id)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-gray-500">
          No districts match &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );
}
