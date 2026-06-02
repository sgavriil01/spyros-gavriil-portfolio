"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/profile";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/profile";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const hasGallery =
    activeProject?.gallery && activeProject.gallery.length > 1;

  const closeProject = () => {
    setActiveProject(null);
    setExpandedImage(null);
  };

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (expandedImage) {
          setExpandedImage(null);
        } else {
          closeProject();
        }
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [expandedImage]);

  return (
    <section id="work" className="border-t border-border/80 py-24">
      <div className="section-shell">
        <div className="animate-fade-in mb-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
           <p className="font-mono mb-4 text-xs uppercase tracking-[0.3em] text-accent">
             // Project archive
           </p>

           <h2 className="font-display text-3xl font-bold leading-none text-text-primary sm:text-4xl lg:text-5xl">
             Featured Work
           </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActiveProject}
            />
          ))}
        </div>

        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-4 py-6 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={closeProject}
          >
            <div
              className="animate-fade-in w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-bg shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div
                  className={`bg-[#101010] p-4 ${
                    hasGallery ? "lg:min-h-[560px]" : "flex items-center"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedImage(
                        activeProject.gallery?.[0] ??
                          activeProject.image ??
                          "/project-placeholder.svg",
                      )
                    }
                    className={`group relative block w-full overflow-hidden rounded-2xl border border-border/70 bg-surface-soft text-left ${
                      hasGallery ? "mb-4 aspect-[16/10]" : "aspect-[16/9]"
                    }`}
                  >
                    <img
                      src={
                        activeProject.gallery?.[0] ??
                        activeProject.image ??
                        "/project-placeholder.svg"
                      }
                      alt={`${activeProject.name} preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-xs text-text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      View full image
                    </div>
                  </button>

                  {hasGallery && (
                    <div className="grid grid-cols-2 gap-3">
                      {activeProject.gallery!.slice(1).map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setExpandedImage(image)}
                          className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border/70 bg-surface-soft"
                        >
                          <img
                            src={image}
                            alt={`${activeProject.name} screenshot ${
                              index + 2
                            }`}
                            className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.04]"
                          />

                          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />

                          <div className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/70 px-2.5 py-1 text-[11px] text-text-primary opacity-0 transition-opacity group-hover:opacity-100">
                            View
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono mb-3 text-xs uppercase tracking-[0.28em] text-accent">
                        // {activeProject.summary}
                      </p>

                      <h3 className="font-display text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                        {activeProject.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={closeProject}
                      className="rounded-full border border-border bg-surface-soft px-3 py-2 text-sm text-text-muted transition-colors hover:border-accent/50 hover:text-text-primary"
                      aria-label="Close project details"
                    >
                      Close
                    </button>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-text-muted sm:text-base">
                    {activeProject.description}
                  </p>

                  <div className="mb-6">
                    <p className="font-mono mb-3 text-xs uppercase tracking-[0.22em] text-text-muted">
                      Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface-soft px-3 py-1 text-xs text-text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-7">
                    <p className="font-mono mb-3 text-xs uppercase tracking-[0.22em] text-text-muted">
                      Focus
                    </p>

                    <ul className="space-y-2">
                      {activeProject.focus.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-text-muted"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-primary transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        GitHub
                      </a>
                    )}

                    {activeProject.demo && (
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-primary transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedImage && activeProject && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
            onClick={() => setExpandedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl rounded-2xl border border-border bg-bg p-3 shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setExpandedImage(null)}
                className="absolute right-5 top-5 z-10 rounded-full border border-border bg-black/70 px-3 py-1.5 text-sm text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
              >
                Close
              </button>

              <img
                src={expandedImage}
                alt={`${activeProject.name} full screenshot`}
                className="max-h-[78vh] w-full rounded-xl object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}