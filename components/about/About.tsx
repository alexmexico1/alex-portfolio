import { MapPin, Briefcase, GraduationCap, Globe } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="A little bit about who I am and what I do."
        />

        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Building Digital Experiences
              for the Modern Web.
            </h3>

            <p className="text-gray-600 leading-8">
              {portfolio.heroDescription}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-600" />
                <span>Full Stack Developer</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <span>{portfolio.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-600" />
                <span>Software Engineering Graduate</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="text-blue-600" />
                <span>Open to Remote Jobs</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-gray-200 p-10 shadow-lg">

            <h3 className="text-2xl font-bold mb-8">
              Profile
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-gray-500 text-sm">
                  Name
                </p>

                <p className="font-semibold">
                  {portfolio.name}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Role
                </p>

                <p className="font-semibold">
                  {portfolio.title}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <p className="font-semibold">
                  {portfolio.location}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <p className="font-semibold">
                  {portfolio.email}
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}