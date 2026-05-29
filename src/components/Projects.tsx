import Image from "next/image";
import Link from "next/link";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";
import Tag from "./Tag";
import { projects } from "@/data/projects";

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-alt">
      <div className="sd-container">
        <RevealSection>
          <SectionHeader
            label="Personal projects"
            title="Things I've built"
            description="Side projects exploring the frontier of LLM systems, agentic AI, and ML automation."
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealSection
              key={project.slug}
              delay={i * 70}
              className={project.fullWidth ? "md:col-span-2" : ""}
            >
              <div
                className={`relative bg-card border rounded-xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,.45)] overflow-hidden group h-full
                  ${project.fullWidth
                    ? "border-[rgba(124,106,247,.35)] bg-linear-to-br from-[rgba(124,106,247,.06)] to-[rgba(34,211,238,.03)]"
                    : "border-border hover:border-[rgba(124,106,247,.4)]"
                  }`}
              >
                {/* Top accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-accent to-accent-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {project.fullWidth ? (
                  /* Featured full-width thesis card */
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-11 h-11 rounded-lg bg-[rgba(124,106,247,.15)] border border-[rgba(124,106,247,.25)] flex items-center justify-center text-[1.3rem]">
                            {project.icon}
                          </div>
                          <span className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-accent">
                            M.Sc. Thesis · FAU · 2026
                          </span>
                        </div>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-bg-alt border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200">
                            <GitHubIcon />
                          </a>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-1.5">{project.title}</h3>
                      {project.subtitle && (
                        <p className="text-[0.85rem] text-dim italic mb-3">{project.subtitle}</p>
                      )}
                      <p className="text-[0.9rem] text-muted leading-[1.65] mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.map((s) => (
                          <Tag key={s.label} label={s.label} variant={s.variant} />
                        ))}
                      </div>

                      {project.link && (
                        <Link
                          href={project.link}
                          className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-accent hover:gap-2.5 transition-all duration-200"
                        >
                          Read the full case study <ChevronRight />
                        </Link>
                      )}
                    </div>

                    {project.images && (
                      <div className="hidden lg:grid grid-cols-2 gap-2 flex-shrink-0">
                        {project.images.map((img) => (
                          <div key={img.src} className="relative w-[88px] h-[88px]">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover rounded-lg border border-border"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Regular project card */
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-11 h-11 rounded-lg bg-[rgba(124,106,247,.15)] border border-[rgba(124,106,247,.25)] flex items-center justify-center text-[1.2rem] flex-shrink-0">
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-bg-alt border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200">
                            <GitHubIcon />
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-[1.1rem] font-bold">{project.title}</h3>
                        {project.subtitle && (
                          <span className="text-[0.75rem] text-dim font-normal">
                            ({project.subtitle})
                          </span>
                        )}
                      </div>
                      <span className="text-[0.75rem] text-dim font-medium">{project.year}</span>
                    </div>

                    <p className="text-[0.9rem] text-muted leading-[1.65] flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <Tag key={s.label} label={s.label} variant={s.variant} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
