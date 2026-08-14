import type { ImageAsset } from "@/types";
import { Icon, type IconName } from "@/components/ui/Icon";
import Image from "next/image";

interface SelectableCardProps {
  title: string;
  subtitle?: string;
  image?: ImageAsset;
  icon?: IconName;
  selected: boolean;
  onToggle: () => void;
  eyebrow?: string;
}

export function SelectableCard({
  title,
  subtitle,
  image,
  icon,
  selected,
  onToggle,
  eyebrow,
}: SelectableCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border-2 bg-white text-left shadow-sm transition-all duration-150 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue ${
        selected ? "border-primary-blue ring-2 ring-primary-blue/25" : "border-light-grey"
      }`}
    >
      {selected && (
        <span className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary-blue text-white shadow-sm">
          <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
        </span>
      )}

      {image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-light-grey">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : icon ? (
        <div
          className={`flex h-28 w-full items-center justify-center sm:h-32 ${
            selected ? "bg-primary-blue text-white" : "bg-light-grey text-primary-blue"
          }`}
        >
          <Icon name={icon} className="h-10 w-10" strokeWidth={1.6} />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-1 p-4">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-wide text-primary-blue">
            {eyebrow}
          </span>
        )}
        <span className="font-semibold text-gray-900">{title}</span>
        {subtitle && <span className="text-sm text-gray-500">{subtitle}</span>}
      </div>
    </button>
  );
}
