"use client";

import { useMemo, useState } from "react";
import { experience } from "@/data/profile";

const tabs = [
  { id: "work", label: "work" },
  { id: "open-source", label: "open source" },
  { id: "achievement", label: "achievements" },
  { id: "education", label: "education" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabId>("work");

  const items = useMemo(
    () => experience.filter((item) => item.category === activeTab),
    [activeTab],
  );

  return (
    <section id="experience" className="border-t border-border/80 py-24">
      <div className="section-shell">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="animate-fade-in">
            <p className="font-mono mb-4 text-xs uppercase tracking-[0.3em] text-accent">
              { "// Background" }
            </p>

            <h2 className="font-display text-3xl font-bold leading-none text-text-primary sm:text-4xl lg:text-5xl">
              Experience
            </h2>
          </div>
        </div>

        <div className="mb-10 inline-flex max-w-full flex-wrap items-center gap-1 rounded-xl border border-border/80 bg-surface/60 p-1 backdrop-blur-sm">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-4 py-2 font-mono text-sm transition-colors ${
                  isActive
                    ? "bg-accent/10 text-accent shadow-[inset_0_0_0_1px_rgba(20,184,166,0.35)]"
                    : "text-text-muted hover:bg-white/[0.03] hover:text-text-primary"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-5">
          {items.map((item, index) => (
            <article
              key={item.id}
              className="group animate-fade-in rounded-2xl border border-border/70 bg-surface/35 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface/55 hover:shadow-[0_18px_60px_rgba(0,0,0,0.22)] sm:p-6"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(20,184,166,0.5)]" />

                    <h3 className="font-display text-xl font-bold leading-tight text-text-primary">
                      {item.company}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-accent">
                    {item.role}
                  </p>

                  <p className="mt-1 text-sm text-text-muted">
                    {item.location}
                  </p>
                </div>

                <p
                  className={`font-mono text-sm ${
                    item.incoming ? "text-accent" : "text-text-muted"
                  }`}
                >
                  {item.dates}
                </p>
              </div>

              <p className="mb-5 max-w-4xl text-sm leading-relaxed text-text-muted sm:text-base">
                {item.description}
              </p>

              <ul className="mb-5 space-y-2">
                {item.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-text-muted sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/80 bg-black/10 px-3 py-1 text-xs text-text-muted transition-colors group-hover:border-border group-hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent transition-colors hover:border-accent/60 hover:bg-accent/10"
                  >
                    GitHub PRs
                  </a>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent transition-colors hover:border-accent/60 hover:bg-accent/10"
                  >
                    Reference
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
