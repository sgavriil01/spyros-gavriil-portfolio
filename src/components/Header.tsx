"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const externalLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "CV", href: profile.cv },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-bg/80 backdrop-blur-xl">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex h-14 items-center justify-between">
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-text-primary transition-colors hover:text-accent"
          >
            {profile.name}
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-text-muted transition-colors hover:bg-surface/70 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}

            <div className="mx-2 h-4 w-px bg-border" />

            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="rounded-md px-3 py-1.5 text-sm text-text-muted transition-colors hover:bg-surface/70 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="p-1 text-text-muted transition-colors hover:text-text-primary md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="animate-fade-in flex flex-col gap-1 border-t border-border py-3 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-text-muted transition-colors hover:bg-surface/70 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}

            <div className="my-1 h-px bg-border" />

            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="px-2 py-2 text-sm text-text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}