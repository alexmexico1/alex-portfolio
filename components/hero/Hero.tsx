import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gray-50 pt-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-lg font-semibold text-blue-600">
            👋 Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Alex Sunday Obi
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-700">
            Full-Stack Software Engineer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            I build modern, scalable web applications using React, Next.js,
            Node.js, Express, MongoDB, and TypeScript. I enjoy creating fast,
            responsive products that solve real business problems while
            delivering an excellent user experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume/Alex-Sunday-Obi-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              View Projects
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://FaGithub.com/alexmexico1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FaGithub"
              className="rounded-full p-2 transition hover:bg-gray-200"
            >
              <FaGithub
                size={24}
                className="text-gray-700 transition hover:text-blue-600"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/alex-obi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 transition hover:bg-gray-200"
            >
              <FaLinkedin
                size={24}
                className="text-gray-700 transition hover:text-blue-600"
              />
            </a>

            <a
              href="mailto:alexobi400@gmail.com"
              aria-label="Email"
              className="rounded-full p-2 transition hover:bg-gray-200"
            >
              <Mail
                size={24}
                className="text-gray-700 transition hover:text-blue-600"
              />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/profile.jpg"
            alt="Alex Sunday Obi"
            width={420}
            height={420}
            priority
            className="rounded-full border-4 border-blue-600 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}