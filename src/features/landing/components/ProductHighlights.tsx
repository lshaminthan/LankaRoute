import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "route",
    title: "Smart Transit Finder",
    description: "Real bus and train options between any two points in Sri Lanka, with transfers worked out for you.",
  },
  {
    icon: "users",
    title: "Group Trip Sharing",
    description: "Share one plan link with your group — everyone sees the same route, updated in real time.",
  },
  {
    icon: "radar",
    title: "Live Tracking",
    description: "Follow the trip as it happens, from the first leg to the last, right from your phone.",
  },
  {
    icon: "flag",
    title: "Made for Sri Lanka",
    description: "Built around local roads, routes and transport — not a generic template dropped in.",
  },
];

export function ProductHighlights() {
  return (
    <section id="features" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to move around Sri Lanka"
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue text-white">
                <Icon name={feature.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
