import TechBadge from "@/components/ui/TechBadge";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">

      <div className="relative aspect-[16/10]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>

        <p className="mt-3 leading-7 text-slate-600">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            <ArrowUpRight size={18} />
            <span className="ml-2">Live Demo</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            <span className="ml-2">Source Code</span>
          </a>

        </div>
      </div>
    </article>
  );
}