import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { currentlyBuilding } from "@/data/currentlyBuilding";

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="py-24 bg-gray-50">
      <Container>

        <SectionTitle
          title="What I'm Building"
          subtitle="A few things I'm working on as I continue growing as a developer."
        />

        <div className="space-y-8">

          {currentlyBuilding.map((project) => (

            <div
              key={project.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                  {project.status}
                </span>

              </div>

              <p className="mt-5 text-gray-600 leading-8">
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}