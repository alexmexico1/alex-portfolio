import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white"
    >
      <Container>

        <SectionTitle
          title="A Quick Look at My Journey"
          subtitle="Some numbers that reflect my growth as a software engineer."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-md text-center"
            >

              <h2 className="text-5xl font-extrabold">
                {item.number}
              </h2>

              <p className="mt-4 text-lg">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}