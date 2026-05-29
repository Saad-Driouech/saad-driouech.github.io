import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="sd-container">
        <RevealSection>
          <SectionHeader label="Technical skills" title="Tools of the trade" />
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <RevealSection key={group.title} delay={i * 60}>
              <div className="group bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-accent hover:-translate-y-0.5 h-full">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-[1.3rem]">{group.icon}</span>
                  <h3 className="text-[0.95rem] font-bold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[0.78rem] font-medium bg-[rgba(255,255,255,.05)] border border-border text-muted transition-all duration-200 group-hover:bg-[rgba(124,106,247,.1)] group-hover:border-[rgba(124,106,247,.2)] group-hover:text-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
