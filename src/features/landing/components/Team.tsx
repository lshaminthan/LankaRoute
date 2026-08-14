import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const team = [
  { initials: "M1", name: "Member One", role: "Founder & Engineer" },
  { initials: "M2", name: "Member Two", role: "Product & Design" },
  { initials: "M3", name: "Member Three", role: "Backend & Data" },
  { initials: "M4", name: "Member Four", role: "Frontend & UI" },
  { initials: "M5", name: "Member Five", role: "Growth & Ops" },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="The people behind LankaRoute"
          description="Built by a 5-person student founder team, from Sri Lanka."
          center
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-blue/10 text-lg font-bold text-primary-blue">
                {member.initials}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-900">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
