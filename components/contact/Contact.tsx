import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <Container>
        <SectionTitle
          title="Let's Work Together"
          subtitle="I'm currently available for remote software engineering opportunities worldwide."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              Get In Touch
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you have a freelance project, internship,
              contract role, or full-time remote opportunity,
              I'd be happy to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <a
                  href={`mailto:${portfolio.email}`}
                  className="hover:text-blue-600"
                >
                  {portfolio.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span>{portfolio.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl text-blue-600" />
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-blue-600" />
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <form className="space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}