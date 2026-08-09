import { skills } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TechStack() {
  return (
    <section
      id="skills"
      className="bg-slate-50 py-24"
    >
      <Container>

        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies I use to build modern web applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              {...skill}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}