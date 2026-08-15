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
    icon: "route",
    title: "AI builds your route",
    description: "We combine bus and train times, with local transfers when there's no direct route.",
  },
  {
    icon: "users",
    title: "Share with group & track live",
    description: "Send the plan to your group and follow the trip together in real time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-light-grey py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From a route to a shared plan in three steps"
          description="LankaRoute turns two place names into a real, timed route — then keeps your group on the same page."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-sm"
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
