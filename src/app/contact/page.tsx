import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact LankaRoute",
  description: "Get in touch with the LankaRoute team for support, feedback or partnership enquiries.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: "mail" as const, label: "Email", value: "hello@lankaroute.com" },
  { icon: "chat" as const, label: "Live Chat", value: "Available from the Support section" },
  { icon: "phone" as const, label: "Phone", value: "+94 11 234 5678" },
];

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h1>
        <p className="mt-3 text-base text-gray-600">
          Questions about a route, a district, or LankaRoute itself? Reach the team directly.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {channels.map((channel) => (
            <div key={channel.label} className="rounded-2xl border border-light-grey p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                <Icon name={channel.icon} className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-900">{channel.label}</p>
              <p className="mt-1 text-sm text-gray-500">{channel.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
