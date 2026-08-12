import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export function TestimonialsSection() {
  return (
    <section className="bg-light-grey py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Before We Launch"
          title="Be one of our first travelers"
          description="LankaRoute is brand new — real traveler reviews will start appearing here once the first trips are booked."
          center
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-blue text-lg font-bold text-white">
              AC
            </span>
            <div>
              <p className="text-base leading-relaxed text-gray-700">
                &ldquo;We built LankaRoute because every trip-planning tool we tried treated Sri
                Lanka like an afterthought — wrong transport times, generic stock photos, no real
                local knowledge. We&apos;re Sri Lankan developers who know these routes personally, and
                we wanted a planner that actually gets the details right.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-gray-900">Aura Code Labs</p>
              <p className="text-xs text-gray-500">Founding team, LankaRoute</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((slot) => (
            <div
              key={slot}
              className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-white/60 p-6 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-light-grey text-gray-400">
                <Icon name="mapPin" className="h-5 w-5" />
              </span>
              <div className="flex gap-0.5 text-gray-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm text-gray-400">Your review could be here</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Plan an early trip with LankaRoute and help shape what comes next.
          </p>
          <div className="mt-4">
            <Link
              href="/#planner"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-deep-blue sm:text-base"
            >
              Plan Your Trip
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
