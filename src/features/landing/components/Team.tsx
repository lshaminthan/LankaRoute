import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const team = [
  { name: "Member One", role: "Founder & Engineer" },
  { name: "Member Two", role: "Product & Design" },
  { name: "Member Three", role: "Backend & Data" },
  { name: "Member Four", role: "Frontend & UI" },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="The people behind LankaRoute"
          description="Built by a student founder team, from Sri Lanka."
          center
        />

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {team.map((member, index) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full ${
                  index % 2 === 0
                    ? "bg-primary-blue/10 text-primary-blue"
                    : "bg-accent-coral/10 text-accent-coral"
                }`}
              >
                <Icon name="user" className="h-7 w-7" />
              </span>
              <p className="mt-4 font-display text-sm font-semibold text-gray-900">
                {member.name}
              </p>
              <p className="mt-1 text-xs text-gray-500">{member.role}</p>
              <span
                className={`mt-2.5 h-0.5 w-8 rounded-full ${
                  index % 2 === 0 ? "bg-primary-blue" : "bg-accent-coral"
                }`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
