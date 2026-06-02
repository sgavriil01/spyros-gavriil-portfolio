"use client";

import Image from "next/image";
import type { Project } from "@/data/profile";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group animate-fade-in overflow-hidden rounded-2xl border border-border/70 bg-surface/85 text-left transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
    >
      <div className="relative aspect-[16/8] overflow-hidden bg-[#101010]">
        <Image
          src={project.image ?? "/project-placeholder.svg"}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-bold leading-snug text-text-primary sm:text-xl">
              {project.name}
            </h3>

            <p className="mt-1 text-sm text-text-muted">{project.summary}</p>
          </div>

          <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-soft text-accent transition-colors group-hover:border-accent/50">
            ↗
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/80 bg-black/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}