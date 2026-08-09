import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectMetrics from "@/components/projects/ProjectMetrics";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <Image
        src={project.image}
        alt={project.title}
        width={1400}
        height={800}
        priority
        className="mb-12 h-auto w-full rounded-3xl border border-slate-200 object-cover"
      />

      <h1 className="text-5xl font-bold tracking-tight text-slate-900">
        {project.title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
        {project.description}
      </p>

      <ProjectMetrics
        role={project.role}
        duration={project.duration}
        status={project.status}
        team={project.team}
      />

      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold text-slate-900">
          Overview
        </h2>

        <p className="max-w-4xl text-lg leading-9 text-slate-700">
          {project.overview}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold text-slate-900">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-300 px-5 py-2 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold text-slate-900">
          Key Features
        </h2>

        <ul className="space-y-4">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-xl border border-slate-200 p-5"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 flex flex-wrap gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Live Demo
        </a>

        <a
          href={project.FaGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
        >
          View Source
        </a>
      </section>

      <ProjectNavigation slug={project.slug} />
    </main>
  );
}