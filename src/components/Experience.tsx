import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="sd-container">
        <RevealSection>
          <SectionHeader label="Work experience" title="Where I've worked" />
        </RevealSection>

        <div className="relative pl-7">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-[2px]" style={{ background: "linear-gradient(to bottom, #7c6af7, transparent)" }} />

          {experience.map((job, i) => (
            <RevealSection key={job.title + job.company} delay={i * 80}>
              <div className="relative pb-10 last:pb-0">
                {/* Dot */}
                <div
                  className={`absolute -left-[34px] top-[6px] w-3 h-3 rounded-full bg-accent border-2 border-bg shadow-[0_0_0_3px_rgba(124,106,247,.3)] ${
                    job.current ? "animate-pulse-ring" : ""
                  }`}
                />

                <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                  <h3 className="text-[1rem] font-bold">{job.title}</h3>
                  <span className="text-[0.78rem] text-dim bg-card px-2.5 py-[3px] rounded-full border border-border whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <p className="text-[0.9rem] text-accent font-semibold mb-3">
                  {job.company}{" "}
                  {(job.location || job.type) && (
                    <span className="text-dim font-normal">
                      · {[job.location, job.type].filter(Boolean).join(" · ")}
                    </span>
                  )}
                </p>

                <ul className="space-y-1">
                  {job.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="text-[0.875rem] text-muted pl-4 relative leading-[1.65] before:content-['▹'] before:absolute before:left-0 before:text-accent"
                      dangerouslySetInnerHTML={{ __html: b }}
                    />
                  ))}
                </ul>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
