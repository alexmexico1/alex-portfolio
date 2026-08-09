"use client";

type ProjectFilterProps = {
  technologies: string[];
  selected: string;
  onChange: (value: string) => void;
};

export default function ProjectFilter({
  technologies,
  selected,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap gap-3">
      <button
        onClick={() => onChange("All")}
        className={`rounded-full px-5 py-2 text-sm font-medium transition ${
          selected === "All"
            ? "bg-slate-900 text-white"
            : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
        }`}
      >
        All
      </button>

      {technologies.map((technology) => (
        <button
          key={technology}
          onClick={() => onChange(technology)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            selected === technology
              ? "bg-slate-900 text-white"
              : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
          }`}
        >
          {technology}
        </button>
      ))}
    </div>
  );
}