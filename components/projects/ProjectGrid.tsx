"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export default function ProjectGrid() {
  const [selected, setSelected] = useState("All");

  const technologies = useMemo(() => {
    const values = new Set<string>();

    projects.forEach((project) => {
      project.technologies.forEach((technology) => {
        values.add(technology);
      });
    });

    return [...values].sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selected === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(selected)
    );
  }, [selected]);

  return (
    <>
      <ProjectFilter
        technologies={technologies}
        selected={selected}
        onChange={setSelected}
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
          />
        ))}
      </div>
    </>
  );
}