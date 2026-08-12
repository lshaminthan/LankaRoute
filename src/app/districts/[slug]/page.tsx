import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { districts, getDistrictById } from "@/lib/data/districts";
import { getPlacesByDistrict } from "@/lib/data/places";
import { interests as allInterests } from "@/lib/data/interests";

export function generateStaticParams() {
  return districts.map((district) => ({ slug: district.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrictById(slug);
  if (!district) return {};

  const title = `${district.name} Travel Guide — Places, Transport & Hotels | LankaRoute`;
  const description = `Plan an AI-powered Sri Lanka trip to ${district.name} (${district.province}). ${district.description} Explore real places, transport times and hotel suggestions.`;

  return {
    title,
    description,
    alternates: { canonical: `/districts/${district.id}` },
    openGraph: { title, description },
  };
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const district = getDistrictById(slug);
  if (!district) notFound();

  const districtPlaces = getPlacesByDistrict(district.id);

  return (
    <>
      <section className="bg-white py-10 sm:py-14">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-blue">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/districts" className="hover:text-primary-blue">
              Districts
            </Link>{" "}
            / <span className="text-gray-700">{district.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-light-grey px-3 py-1 text-xs font-medium text-gray-500">
                {district.province}
              </span>
              <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                {district.name} Travel Guide
              </h1>
              <p className="mt-2 text-base font-medium text-primary-blue">{district.tag}</p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{district.description}</p>
              <Link
                href="/#planner"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-deep-blue"
              >
                Plan an AI trip to {district.name}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src={district.image.src}
                alt={district.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {districtPlaces.length > 0 && (
        <section className="bg-light-grey py-14 sm:py-16">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900">
              Things to do in {district.name}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              A sample of real places LankaRoute can build into your itinerary.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {districtPlaces.map((place) => (
                <div
                  key={place.id}
                  className="overflow-hidden rounded-2xl border border-light-grey bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={place.image.src}
                      alt={place.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{place.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{place.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {place.interests.map((interestId) => {
                        const interest = allInterests.find((item) => item.id === interestId);
                        if (!interest) return null;
                        return (
                          <span
                            key={interestId}
                            className="rounded-full bg-light-grey px-2.5 py-1 text-xs text-gray-600"
                          >
                            {interest.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-white py-14 text-center sm:py-16">
        <Container>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Ready to build your {district.name} itinerary?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500 sm:text-base">
            Use the AI Sri Lanka Trip Planner to combine {district.name} with other districts,
            match it to your interests, and get transport and hotel suggestions in minutes.
          </p>
          <Link
            href="/#planner"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-deep-blue"
          >
            Start Planning
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
