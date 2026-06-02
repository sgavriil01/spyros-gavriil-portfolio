import { skillGroups } from "@/data/profile";

const ICON_MAP: Record<string, string> = {
  Python: "🐍",
  Java: "☕",
  SQL: "🗄️",
  C: "⚙️",
  "C++": "🔷",
  JavaScript: "🟨",
  TypeScript: "🔵",

  "Spring Boot": "🌱",
  FastAPI: "⚡",
  Flask: "🍶",
  React: "⚛️",
  Next: "▲",
  "Next.js": "▲",
  LangChain: "🔗",
  Streamlit: "📊",

  PostgreSQL: "🐘",
  MySQL: "🐬",
  "SQL Server": "🧱",
  MongoDB: "🍃",
  Supabase: "☁️",

  Git: "◆",
  Docker: "🐳",
  Kubernetes: "☸️",
  Linux: "🐧",
  Postman: "📮",
  JUnit: "🧪",
  Jira: "◇",
  Vercel: "▲",
  Grafana: "📈",
  "CI/CD Pipelines": "🔁",
};

export default function Skills() {
  return (
    <section id="stack" className="border-t border-border/80 py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="animate-fade-in">
            <p className="font-mono mb-4 text-xs uppercase tracking-[0.3em] text-accent">
              // Stack
            </p>

            <h2 className="font-display mb-5 text-3xl font-bold leading-none text-text-primary sm:text-4xl lg:text-5xl">
              Tools I Work With
            </h2>

            <p className="max-w-md text-base leading-relaxed text-text-muted">
              A compact view of the languages, frameworks, databases, and tools
              I use for backend and full-stack projects.
            </p>
          </div>

          <div className="space-y-8">
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.32em] text-text-muted">
                    {group.label}
                  </p>

                  <div className="h-px flex-1 bg-gradient-to-r from-accent/40 via-border to-transparent" />
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/55 px-3 py-1.5 text-sm text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/5 hover:text-text-primary"
                    >
                      <span
                        className="grid h-5 w-5 place-items-center rounded-full bg-black/20 text-xs transition-transform duration-150 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        {ICON_MAP[skill] ?? "•"}
                      </span>

                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}