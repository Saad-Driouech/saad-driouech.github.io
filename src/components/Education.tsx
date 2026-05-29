import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";
import { education } from "@/data/education";
import { publications } from "@/data/publications";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-alt">
      <div className="sd-container">
        <RevealSection>
          <SectionHeader label="Education" title="Academic background" />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {education.map((edu, i) => (
            <RevealSection key={edu.school} delay={i * 100}>
              <div className="relative bg-card border border-border rounded-xl p-7 overflow-hidden transition-all duration-200 hover:border-accent hover:-translate-y-0.5 h-full">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-accent to-accent-2 opacity-[.08] rounded-bl-[80px]" />

                <p className="text-[1.1rem] font-extrabold mb-1">{edu.degree}</p>
                <p className="text-[0.95rem] text-accent font-semibold mb-1">{edu.school}</p>

                <div className="flex flex-wrap gap-2 items-center my-3">
                  <span className="px-2.5 py-[3px] rounded-full text-[0.75rem] font-bold bg-[rgba(52,211,153,.12)] text-accent-green border border-[rgba(52,211,153,.2)]">
                    {edu.badge}
                  </span>
                  <span className="px-2.5 py-[3px] rounded-full text-[0.78rem] text-dim bg-bg-alt">
                    {edu.period}
                  </span>
                </div>

                <p className="text-[0.875rem] text-muted leading-[1.65] mb-3">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-[3px] rounded text-[0.73rem] bg-[rgba(255,255,255,.04)] border border-border-dim text-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Publications */}
        <RevealSection>
          <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-accent mb-2">
            Publications
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-text leading-tight mb-8">
            Peer-reviewed work
          </h2>

          <div className="flex flex-col gap-3">
            {publications.map((pub, i) => (
              <div
                key={pub.doi}
                className="bg-card border border-border rounded-lg px-5 py-[18px] flex items-start gap-4 transition-colors duration-200 hover:border-accent"
              >
                <span className="text-[0.75rem] font-extrabold text-accent min-w-[24px] pt-0.5">
                  [{i + 1}]
                </span>
                <div>
                  <h4 className="text-[0.9rem] font-bold mb-1">
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-border hover:border-accent transition-colors duration-200"
                    >
                      {pub.title}
                    </a>
                  </h4>
                  <p className="text-[0.82rem] text-muted">{pub.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
