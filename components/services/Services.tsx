import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <Container>
        <SectionTitle
          title="What I Can Build"
          subtitle="Helping businesses build modern web applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">{service.icon}</div>

              <h3 className="mt-6 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}