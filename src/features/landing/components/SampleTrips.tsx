import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getDistrictById } from "@/data/districts";
import { getIntercityRoute } from "@/data/transport";

const modeIcon: Record<string, IconName> = {
  Train: "train",
  Bus: "bus",
  "Tuk-tuk": "tuktuk",
  "Private Van": "bus",
};

const sampleRoutes = [
  { fromId: "jaffna", fromLabel: "Jaffna", toId: "colombo", toLabel: "Colombo" },
  { fromId: "colombo", fromLabel: "Colombo", toId: "badulla", toLabel: "Ella" },
  { fromId: "colombo", fromLabel: "Colombo", toId: "matale", toLabel: "Sigiriya" },
];

export function SampleTrips() {
  return (
    <section id="sample-trips" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="See It In Action"
          title="Real Sri Lanka routes, ready to explore"
          description="No sign-up needed — see how LankaRoute plans a route before you plan your own."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {sampleRoutes.map((route) => {
            const destinationDistrict = getDistrictById(route.toId);
            const { mode, duration } = getIntercityRoute(route.fromId, route.toId);
            return (
              <Link
                key={`${route.fromId}-${route.toId}`}
                href="/#plan"
                className="group flex flex-col overflow-hidden rounded-3xl border border-light-grey bg-white transition-shadow hover:shadow-md"
              >
                {destinationDistrict && (
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={destinationDistrict.image.src}
                      alt={destinationDistrict.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                    {route.fromLabel}
                    <Icon name="arrowRight" className="h-4 w-4 text-primary-blue" />
                    {route.toLabel}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{destinationDistrict?.province}</p>

                  <div className="mt-5 flex items-center gap-2 rounded-xl bg-light-grey px-3.5 py-2.5 text-sm text-gray-600">
                    <Icon name={modeIcon[mode]} className="h-4 w-4 text-primary-blue" />
                    {mode} · ~{duration}
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-blue">
                    Plan this route
                    <Icon
                      name="chevronRight"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
