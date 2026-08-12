import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";

const steps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "compass",
    title: "Pick Interests",
    description: "Tell us what kind of trip you want — culture, beaches, wildlife or all three.",
  },
  {
    icon: "flag",
    title: "Choose District",
    description: "Select one or more of Sri Lanka's 25 districts to build your route around.",
  },
  {
    icon: "mapPin",
    title: "Select Places",
    description: "Browse matching, real places and pick the ones you actually want to see.",
  },
  {
    icon: "sparkles",
    title: "Get Your AI Plan",
    description: "Receive a day-by-day itinerary with transport times and hotels included.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From interests to itinerary in four steps"
          description="LankaRoute turns your preferences into a route across Sri Lanka's districts, complete with realistic transport and stays."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <span className="absolute left-5 top-5 text-sm font-bold text-light-grey">
                0{index + 1}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                <Icon name={step.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
