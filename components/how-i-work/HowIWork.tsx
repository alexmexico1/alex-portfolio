import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { howIWork } from "@/data/howIWork";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="bg-white py-24">
      <Container>
        <SectionTitle
          title="How I Work"
          subtitle="A few things that guide the way I build software."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {howIWork.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-8 transition duration-300 hover:border-blue-600 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}