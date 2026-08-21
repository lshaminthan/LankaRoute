import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

const testimonials = [
  { name: "Traveler One", context: "[Add role / trip they took]" },
  { name: "Traveler Two", context: "[Add role / trip they took]" },
  { name: "Traveler Three", context: "[Add role / trip they took]" },
  { name: "Traveler Four", context: "[Add role / trip they took]" },
];

const loopedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            Hear from early testers once real trips start rolling in.
          </p>
        </div>
      </Container>

      <div className="mt-12 overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee">
          {loopedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="w-80 shrink-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:w-96"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      index % 2 === 0
                        ? "bg-primary-blue/10 text-primary-blue"
                        : "bg-accent-coral/10 text-accent-coral"
                    }`}
                  >
                    <Icon name="user" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.context}</p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-0.5 text-primary-blue">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Icon key={starIndex} name="star" className="h-3.5 w-3.5" />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-sm italic text-gray-400">
                [Add a real quote from an early tester]
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-lg text-center text-xs text-gray-400">
        Placeholder — real tester quotes go here once the API is live.
      </p>
    </section>
  );
}
