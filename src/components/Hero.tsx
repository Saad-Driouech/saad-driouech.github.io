import Image from "next/image";
import Link from "next/link";
import Typewriter from "./Typewriter";

const stats = [
  { value: "5",   label: "Publications" },
  { value: "3+",  label: "Years ML exp." },
  { value: "1.2", label: "M.Sc. grade" },
  { value: "4",   label: "Languages" },
];

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      {/* Background blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent blur-[80px] opacity-[.18] -top-[150px] -left-[100px]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-2 blur-[80px] opacity-[.18] bottom-0 -right-[100px]" />
      </div>

      {/* Content — CSS container + grid for responsive layout */}
      <div className="sd-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">

          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[rgba(124,106,247,.12)] border border-[rgba(124,106,247,.25)] text-[0.8rem] font-semibold text-accent mb-5">
              <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
              Open to new opportunities
            </div>

            <h1
              className="hero-name font-black leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
            >
              <span className="grad-text">Saad</span>
              <br />
              Driouech
            </h1>

            <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }} className="text-muted mb-6 min-h-[2em]">
              <Typewriter />
            </p>

            <p className="text-muted text-[1.05rem] max-w-[520px] mb-9 leading-[1.75]">
              Machine Learning Engineer bridging research and production: from
              training diffusion models and pre-training transformers to building
              RAG pipelines, agentic systems, and end-to-end ML automation. 5
              peer-reviewed publications. Based in Fürth, Germany.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 hero-cta">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold bg-accent text-white transition-all duration-200 hover:bg-[#6a58e0] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(124,106,247,.4)]"
              >
                ✉ Get in touch
              </Link>
              <a
                href="/Saad_Driouech_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold border border-border text-muted bg-card transition-all duration-200 hover:border-accent hover:text-text hover:-translate-y-px"
              >
                ↓ Download CV
              </a>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold border border-border text-muted bg-card transition-all duration-200 hover:border-accent hover:text-text hover:-translate-y-px"
              >
                ⚡ View projects
              </Link>
              <a
                href="https://github.com/Saad-Driouech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold border border-border text-muted bg-card transition-all duration-200 hover:border-accent hover:text-text hover:-translate-y-px"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href="https://scholar.google.com/citations?user=_tYYYjsAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold border border-border text-muted bg-card transition-all duration-200 hover:border-accent hover:text-text hover:-translate-y-px"
              >
                Scholar
              </a>
            </div>

            <div className="flex flex-wrap gap-8 hero-stats">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-accent pl-3">
                  <strong className="block text-2xl font-black">{s.value}</strong>
                  <span className="text-[0.8rem] text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar column — order: -1 on mobile via .hero-avatar-col CSS class */}
          <div className="hero-avatar-col" style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              className="hero-avatar"
              style={{
                position: "relative",
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                flexShrink: 0,
                boxShadow: "0 0 0 6px rgba(124,106,247,.15), 0 0 0 12px rgba(124,106,247,.07)",
                overflow: "hidden",
              }}
            >
              {/* Spinning gradient border */}
              <div
                className="animate-rotate"
                style={{
                  position: "absolute",
                  inset: "-3px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c6af7, #22d3ee)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #7c6af7, #22d3ee)",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Saad Driouech"
                  fill
                  sizes="220px"
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
