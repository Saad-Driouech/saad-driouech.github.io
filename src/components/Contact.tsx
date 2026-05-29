"use client";

import { useState } from "react";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const contactLinks = [
  {
    href: "https://linkedin.com/in/saad-driouech",
    icon: <span className="text-[0.85rem] font-extrabold" style={{ color: "#0a66c2" }}>in</span>,
    iconBg: "bg-[rgba(10,102,194,.15)]",
    label: "LinkedIn",
    sub: "linkedin.com/in/saad-driouech",
    external: true,
  },
  {
    href: "https://scholar.google.com/citations?user=_tYYYjsAAAAJ&hl=en",
    icon: <span className="text-[0.85rem] font-extrabold text-[#4285f4]">GS</span>,
    iconBg: "bg-[rgba(66,133,244,.15)]",
    label: "Google Scholar",
    sub: "5 publications · citations",
    external: true,
  },
  {
    href: "https://github.com/Saad-Driouech",
    icon: <GitHubIcon />,
    iconBg: "bg-[rgba(255,255,255,.08)]",
    label: "GitHub",
    sub: "github.com/Saad-Driouech",
    external: true,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpqovkey", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-bg-alt">
      <div className="sd-container">
        <RevealSection>
          <SectionHeader
            label="Contact"
            title="Let's connect"
            description="Open to full-time roles, research collaborations, and interesting problems. Based in Fürth, Germany, open to relocation."
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <RevealSection>
            <p className="text-muted mb-6">
              Whether you&apos;re hiring, want to collaborate on a project, or just want
              to talk AI, my inbox is open.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3.5 px-[18px] py-3.5 bg-card border border-border rounded-lg transition-all duration-200 hover:border-accent hover:translate-x-1"
                >
                  <div className={`w-[38px] h-[38px] rounded-lg ${l.iconBg} flex items-center justify-center flex-shrink-0`}>
                    {l.icon}
                  </div>
                  <div>
                    <strong className="block text-[0.9rem] font-bold">{l.label}</strong>
                    <span className="text-[0.8rem] text-muted">{l.sub}</span>
                  </div>
                </a>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold text-muted">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-card border border-border rounded-lg px-3.5 py-2.5 text-text text-[0.9rem] outline-none transition-colors duration-200 focus:border-accent placeholder:text-dim"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold text-muted">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="bg-card border border-border rounded-lg px-3.5 py-2.5 text-text text-[0.9rem] outline-none transition-colors duration-200 focus:border-accent placeholder:text-dim"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold text-muted">Message</label>
                <textarea
                  name="message"
                  placeholder="What's on your mind?"
                  required
                  rows={4}
                  className="bg-card border border-border rounded-lg px-3.5 py-2.5 text-text text-[0.9rem] outline-none transition-colors duration-200 focus:border-accent placeholder:text-dim resize-vertical min-h-[110px]"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex items-center justify-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold bg-accent text-white transition-all duration-200 hover:bg-[#6a58e0] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(124,106,247,.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message"}
              </button>
              {status === "error" && (
                <p className="text-[0.78rem] text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
