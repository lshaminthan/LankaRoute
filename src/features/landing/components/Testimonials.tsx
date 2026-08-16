import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const testimonials = [
  { name: "Traveler One", context: "[Add role / trip they took]" },
  { name: "Traveler Two", context: "[Add role / trip they took]" },
  { name: "Traveler Three", context: "[Add role / trip they took]" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What early testers are saying"
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${
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

              <p className="mt-4 text-sm italic text-gray-400">
                [Add a real quote from an early tester]
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-gray-400">
          Placeholder — real tester quotes go here once the API is live.
        </p>
      </Container>
    </section>
  );
}
