import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { whyHireMe } from "@/data/whyHireMe";
import {
  Brain,
  Code2,
  Rocket,
  Laptop,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const icons = [
  Brain,
  Code2,
  Rocket,
  Laptop,
  Sparkles,
  CheckCircle,
];

export default function WhyHireMe() {
  return (
    <section
      id="why-me"
      className="bg-slate-950 py-24 text-white"
    >
      <Container>

        <SectionTitle
          title="Why Hire Me?"
          subtitle="Here's what I bring to your team."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {whyHireMe.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-700 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  className="mb-6 text-blue-400"
                  size={40}
                />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}