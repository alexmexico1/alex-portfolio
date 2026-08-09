import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Things I've Built
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A selection of projects I've built while learning and improving as a full-stack developer.
          </p>

        </div>

        <ProjectGrid />

      </div>
    </section>
  );
}