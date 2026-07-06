import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fade-in">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <p className="font-mono text-sm text-accent">hello, world</p>
            </div>

            <h1 className="font-display text-5xl font-extrabold leading-[0.92] text-text-primary sm:text-6xl lg:text-7xl mb-5">
              {profile.name}
            </h1>

            <p className="mb-4 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
              {profile.status}
            </p>

            <p className="mb-8 font-mono text-sm leading-relaxed text-text-muted">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center rounded bg-accent px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                View Experience
              </a>

              <a
                href="#work"
                className="hover-glow inline-flex items-center rounded border border-border px-4 py-2 text-sm font-medium text-text-primary"
              >
                View Projects
              </a>

              <a
                href={profile.cv}
                className="hover-glow inline-flex items-center rounded border border-border px-4 py-2 text-sm font-medium text-text-muted"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="mx-auto flex max-w-sm justify-center lg:ml-auto">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-accent/60 bg-surface-soft shadow-[0_0_0_1px_rgba(62,207,142,0.2)] sm:h-72 sm:w-72">
                <Image
                  src={profile.profileImage}
                  alt="Portrait of Spyros Gavriil"
                  fill
                  sizes="(max-width: 1024px) 70vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
