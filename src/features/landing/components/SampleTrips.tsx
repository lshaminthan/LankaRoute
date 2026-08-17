import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { getPlaceById } from "@/data/places";

const tripIdeas = [
  {
    label: "Family — Wildlife Safari",
    placeId: "yala-national-park",
  },
  {
    label: "Honeymoon — Beach Escape",
    placeId: "mirissa-beach",
  },
  {
    label: "Road Trip — Hill Country",
    placeId: "haputale-tea-plantations",
  },
];

export function SampleTrips() {
  return (
    <section id="sample-trips" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Trip Ideas"
          title="Where to go next in Sri Lanka"
          description="Popular ways visitors plan a first trip — pick one to see how LankaRoute builds it out."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {tripIdeas.map((idea) => {
            const place = getPlaceById(idea.placeId)!;
            return (
              <Link key={idea.placeId} href="/plan" className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src={place.image.src}
                    alt={place.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-gray-900">
                  {idea.label}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 group-hover:text-primary-blue">
                  Start planning
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
