import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineCard from "./TimelineCard";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-slate-50 py-24"
    >
      <Container>

        <SectionTitle
          title="My Journey"
          subtitle="A timeline of my software engineering growth."
        />

        <div className="mx-auto max-w-3xl">
          {timeline.map((item) => (
            <TimelineCard
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}