import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "route",
    title: "Accurate Public Transport Times",
    description: "Real bus and train routes with realistic durations between every stop.",
  },
  {
    icon: "sparkles",
    title: "AI-Personalized Itinerary",
    description: "A day-by-day plan built around the interests and districts you choose.",
  },
  {
    icon: "bed",
    title: "Hotel Booking Included",
    description: "A matching hotel suggestion for every stop on your route.",
  },
  {
    icon: "headset",
    title: "Real Customer Support",
    description: "A real team behind LankaRoute, ready to help before and during your trip.",
  },
];

export function ProductHighlights() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-2xl border border-light-grey p-6 transition-shadow hover:shadow-md"
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
