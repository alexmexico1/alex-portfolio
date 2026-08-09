import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function FeaturedProject() {
  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  const highlights = [
    "Authentication and authorization",
    "Shopping cart and checkout",
    "Admin dashboard",
    "Product management",
    "Order tracking",
    "Responsive design",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Featured Project
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            E-Commerce Platform
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A modern e-commerce application built with secure authentication,
            product management, order processing, and an admin dashboard.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <Image
              src="/images/projects/ecommerce.jpg"
              alt="E-Commerce Platform"
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Project Highlights
            </h3>

            <ul className="mt-8 space-y-4 text-slate-600">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 text-white transition-colors hover:bg-slate-800"
              >
                <ArrowUpRight size={18} />
                <span className="ml-2">Live Demo</span>
              </a>

              <a
                href="#"
                className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-slate-700 transition-colors hover:bg-slate-100"
              >
                <FaGithub size={18} />
                <span className="ml-2">Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}