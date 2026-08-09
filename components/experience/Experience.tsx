import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="My software engineering journey."
        />

        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.period}`}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-bold">
                    {item.role}
                  </h3>

                  <p className="text-blue-600 font-semibold mt-2">
                    {item.company}
                  </p>
                </div>

                <span className="mt-4 md:mt-0 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                  {item.period}
                </span>
              </div>

              <p className="mt-6 text-gray-600 leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}