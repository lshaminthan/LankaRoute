import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDistrictById } from "@/lib/data/districts";

const featured = ["kandy", "galle", "badulla", "colombo", "jaffna"];

export function PopularDistricts() {
  const districts = featured.map((id) => getDistrictById(id)).filter(Boolean);

  return (
    <section id="popular-districts" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Popular Districts"
            title="Start with one of Sri Lanka's favourite regions"
            description="Jump straight into the planner with a well-loved district already in mind."
          />
          <Link
            href="/districts"
            className="hidden shrink-0 text-sm font-semibold text-primary-blue hover:text-deep-blue sm:inline-flex"
          >
            View all districts →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {districts.map((district) => {
            if (!district) return null;
            return (
              <Link
                key={district.id}
                href={`/districts/${district.id}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={district.image.src}
                  alt={district.image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/85 via-deep-blue/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-semibold text-white">{district.name}</p>
                  <p className="text-xs text-white/75">{district.province}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
