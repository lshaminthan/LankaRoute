import { interests } from "@/data/interests";
import type { InterestId } from "@/types";
import { SelectableCard } from "@/components/ui/SelectableCard";
import type { IconName } from "@/components/ui/Icon";

export function InterestStep({
  selected,
  onToggle,
}: {
  selected: InterestId[];
  onToggle: (id: InterestId) => void;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-gray-900">
        What do you want out of this trip?
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Pick one or more interests — we&apos;ll use them to shortlist the right places.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {interests.map((interest) => (
          <SelectableCard
            key={interest.id}
            title={interest.name}
            subtitle={interest.description}
            image={interest.image}
            icon={interest.icon as IconName}
            selected={selected.includes(interest.id)}
            onToggle={() => onToggle(interest.id)}
          />
        ))}
      </div>
    </div>
  );
}
