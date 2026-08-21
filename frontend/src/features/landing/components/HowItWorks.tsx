import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";

const steps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "calendar",
    title: "Enter your trip",
    description: "Tell us your From, To, date and number of days.",
  },
  {
    icon: "search",
    title: "Smart Transit Finder",
    description: "Real bus and train options, with local transfers worked out when there's no direct route.",
  },
  {
    icon: "chat",
    title: "Group Sharing & Live Tracking",
    description: "Share one plan link with your group and follow the trip together in real time.",
  },
  {
    icon: "flag",
    title: "Made for Sri Lanka",
    description: "Built around local roads and routes — not a generic template dropped in.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From a route to a shared plan"
          description="LankaRoute turns two place names into a real, timed route — then keeps your group on the same page."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-sm"
            >
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
