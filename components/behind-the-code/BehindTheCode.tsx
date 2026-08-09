import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { behindTheCode } from "@/data/behindTheCode";

export default function BehindTheCode() {
  return (
    <section id="behind-the-code" className="bg-white py-24">
      <Container>
        <SectionTitle
          title="Behind the Code"
          subtitle="A few lessons I've picked up while learning software engineering."
        />

        <div className="space-y-8">
          {behindTheCode.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-gray-200 p-8 transition hover:border-blue-500 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {item.story}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}