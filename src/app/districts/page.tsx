import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { districts } from "@/data/districts";

export const metadata: Metadata = {
  title: "All 25 Districts of Sri Lanka — Travel Guide | LankaRoute",
  description:
    "Browse all 25 districts of Sri Lanka, from Colombo to Jaffna, and start building an AI-powered itinerary with LankaRoute.",
  alternates: { canonical: "/districts" },
};

export default function DistrictsIndexPage() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          All 25 Districts of Sri Lanka
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-600">
          Every district LankaRoute can plan a trip around — from the hill country to the
          northern plains and the southern coast.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {districts.map((district) => (
            <Link
              key={district.id}
              href={`/districts/${district.id}`}
              className="group overflow-hidden rounded-2xl border border-light-grey bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-light-grey">
                <Image
                  src={district.image.src}
                  alt={district.image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3.5">
                <p className="font-semibold text-gray-900">{district.name}</p>
                <p className="text-xs text-gray-500">{district.province}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
