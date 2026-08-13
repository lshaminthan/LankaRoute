import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function SupportSection() {
  return (
    <section id="support" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-deep-blue">
          <div className="grid grid-cols-1 items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                <Icon name="headset" className="h-3.5 w-3.5" />
                Customer Support
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                We&apos;re here to help — real support, real people
              </h2>
              <p className="mt-3 text-base text-white/75">
                Planning a trip to a new country can raise a lot of questions. Chat with our team
                about routes, transport or anything else before or during your trip — no
                chatbots, just people who know Sri Lanka.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="primary" size="md">
                  <Icon name="chat" className="h-4 w-4" />
                  Chat with us
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  Email Support
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-5">
                <Icon name="chat" className="h-6 w-6 text-white" />
                <p className="mt-3 text-sm font-semibold text-white">WhatsApp &amp; Live Chat</p>
                <p className="mt-1 text-xs text-white/60">
                  Typical reply time under 15 minutes during the day.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <Icon name="phone" className="h-6 w-6 text-white" />
                <p className="mt-3 text-sm font-semibold text-white">On-the-ground Help</p>
                <p className="mt-1 text-xs text-white/60">
                  Local support if plans change mid-trip.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <Icon name="mail" className="h-6 w-6 text-white" />
                <p className="mt-3 text-sm font-semibold text-white">Email</p>
                <p className="mt-1 text-xs text-white/60">hello@lankaroute.com</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <Icon name="clock" className="h-6 w-6 text-white" />
                <p className="mt-3 text-sm font-semibold text-white">Support Hours</p>
                <p className="mt-1 text-xs text-white/60">7 days a week, island-wide.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
