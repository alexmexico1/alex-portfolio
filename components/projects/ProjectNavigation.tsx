import Link from "next/link";
import { projects } from "@/data/projects";

type ProjectNavigationProps = {
  slug: string;
};

export default function ProjectNavigation({
  slug,
}: ProjectNavigationProps) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  const previous =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : null;

  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <section className="mt-24 border-t border-slate-200 pt-12">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">

        <div>
          {previous && (
            <>
              <p className="mb-2 text-sm text-slate-500">
                Previous Project
              </p>

              <Link
                href={`/projects/${previous.slug}`}
                className="text-xl font-semibold text-slate-900 transition hover:text-blue-600"
              >
                {previous.title}
              </Link>
            </>
          )}
        </div>

        <div className="text-left md:text-right">
          {next && (
            <>
              <p className="mb-2 text-sm text-slate-500">
                Next Project
              </p>

              <Link
                href={`/projects/${next.slug}`}
                className="text-xl font-semibold text-slate-900 transition hover:text-blue-600"
              >
                {next.title}
              </Link>
            </>
          )}
        </div>

      </div>
    </section>
  );
}