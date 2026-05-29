import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    icon: "🧠",
    title: "Deep Learning",
    desc: "Diffusion models, transformers, TTS: trained and evaluated across diverse domains and modalities.",
  },
  {
    icon: "🔗",
    title: "LLM Systems",
    desc: "RAG pipelines, agentic workflows with LangGraph, multi-LLM orchestration, and streaming backends.",
  },
  {
    icon: "⚙️",
    title: "MLOps & Automation",
    desc: "Airflow, n8n, FastAPI, Docker: end-to-end pipelines from data to deployed, monitored systems.",
  },
  {
    icon: "📄",
    title: "Published Researcher",
    desc: "5 papers in IEEE, Springer, MDPI spanning NLP, TTS, and e-commerce ML.",
  },
];

const languages = [
  "🇬🇧 English — Fluent",
  "🇫🇷 French — Advanced",
  "🇲🇦 Arabic — Native",
  "🇩🇪 German — Learning",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-alt">
      <div className="sd-container">
        <RevealSection>
          <SectionHeader
            label="About me"
            title={<>Researcher. Engineer.<br />Builder.</>}
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <RevealSection>
            <div className="space-y-4 text-muted">
              <p>
                I&apos;m a Machine Learning Engineer with a research background in
                generative AI, NLP, and applied ML. Currently pursuing my M.Sc.
                in Artificial Intelligence at Friedrich-Alexander-Universität
                Erlangen-Nürnberg (grade 1.2, top 1%), while working as a
                Generative AI Research Engineer at Fraunhofer IIS.
              </p>
              <p>
                My work spans the full spectrum: training diffusion models for
                signal reconstruction, pre-training transformer language models
                for low-resource languages, building production RAG systems, and
                designing agentic LLM pipelines. I care deeply about rigorous
                experimentation and shipping systems that actually work.
              </p>
              <p>
                I have 5 peer-reviewed publications across NLP, TTS, and applied
                ML. I love the challenge of translating research insights into
                reliable, maintainable software.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-card border border-border text-muted"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="bg-card border border-border rounded-xl p-5 transition-all duration-200 hover:border-accent hover:-translate-y-0.5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="text-2xl mb-2.5">{h.icon}</div>
                  <h4 className="text-[0.95rem] font-bold mb-1">{h.title}</h4>
                  <p className="text-[0.82rem] text-muted leading-snug">{h.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
