import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "Thesis — Saad Driouech",
  description:
    "Master's thesis: first spatial control framework for scale-wise autoregressive T2I generation — Saad Driouech, FAU 2026.",
  alternates: { canonical: "https://saaddriouech.com/thesis" },
};

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const numbers = [
  { value: "+236%", label: "Segmentation mIoU improvement", detail: "Encoder Injection → Parallel Branch" },
  { value: "+84%",  label: "Canny F1 improvement",           detail: "0.197 → 0.362 (Additive → Parallel)" },
  { value: "10–15%", label: "Gap: unified vs. specialist models", detail: "One checkpoint serves all 6 modalities" },
  { value: "10×",   label: "Faster than next-token AR",       detail: "10 scale steps vs. 1024 token steps" },
];

const surroundImages = [
  { src: "/thesis/surr_orig.jpg",    alt: "Original scene",       caption: "original",     accent: true },
  { src: "/thesis/surr_canny.jpg",   alt: "Canny-controlled",     caption: "Canny" },
  { src: "/thesis/surr_hed.jpg",     alt: "HED-controlled",       caption: "HED" },
  { src: "/thesis/surr_normals.jpg", alt: "Normals-controlled",   caption: "normals" },
  { src: "/thesis/surr_seg.jpg",     alt: "Seg-controlled",       caption: "segmentation" },
  { src: "/thesis/surr_gray.jpg",    alt: "Gray-controlled",      caption: "grayscale" },
  { src: "/thesis/surr_depth.jpg",   alt: "Depth-controlled",     caption: "depth" },
];

const resultRows = [
  {
    label: "HED",
    original: { src: "/thesis/hed_orig.jpg", alt: "Original scene" },
    control:  { src: "/thesis/hed_ctrl.png", alt: "HED edges map" },
    generated:{ src: "/thesis/hed_gen.jpg",  alt: "Generated from HED" },
  },
  {
    label: "Depth",
    original: { src: "/thesis/depth2_orig.jpg",      alt: "Original scene" },
    control:  { src: "/thesis/depth2_ctrl.png",       alt: "Segmentation map" },
    generated:{ src: "/thesis/depth2_gen.jpg",        alt: "Generated from segmentation" },
  },
  {
    label: "Canny",
    original: { src: "/thesis/canny2_orig.jpg", alt: "Original scene" },
    control:  { src: "/thesis/canny2_ctrl.png",    alt: "Canny edges map" },
    generated:{ src: "/thesis/canny2_gen.jpg",     alt: "Generated from Canny" },
  },
];

export default function ThesisPage() {
  return (
    <div className="bg-bg text-text min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 h-16 z-[100] backdrop-blur-2xl bg-[rgba(11,11,16,.8)] border-b border-border-dim">
        <div className="sd-container h-full flex items-center justify-between">
          <span className="font-extrabold text-[1.1rem] grad-text">Saad Driouech</span>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[0.875rem] font-medium text-muted border border-border bg-card transition-colors duration-200 hover:text-accent hover:border-accent"
          >
            <ChevronLeft /> Back to portfolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-accent blur-[80px] opacity-[.15] -top-[150px] -left-[100px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-2 blur-[80px] opacity-[.15] bottom-0 -right-[100px]" />
        </div>

        <div className="sd-container relative z-10 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-[5px] rounded-full bg-[rgba(124,106,247,.12)] border border-[rgba(124,106,247,.25)] text-[0.8rem] font-semibold text-accent mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                M.Sc. Thesis · FAU Erlangen-Nürnberg · 2026
              </div>

              <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] mb-4">
                Finetuning Visual<br />
                Autoregressive Models<br />
                <span className="grad-text">for Controllable<br />Image Generation</span>
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                <Tag label="Computer Vision" variant="purple" />
                <Tag label="Generative AI" variant="cyan" />
                <Tag label="PyTorch" variant="purple" />
                <Tag label="First of its kind" variant="gold" />
              </div>

              <p className="text-muted mb-9 max-w-[520px]">
                The first framework to integrate spatial control into a scale-wise autoregressive
                text-to-image model. Two novel architectures, six control modalities,
                and a unified model that routes them all with a single checkpoint.
              </p>

              <div className="flex gap-3 mb-12">
                <a
                  href="https://github.com/Saad-Driouech/switti-control/tree/spatial-control-v2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold border border-border text-muted bg-card transition-all duration-200 hover:border-accent hover:text-text hover:-translate-y-px"
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>

              <div className="flex flex-wrap gap-8">
                {[
                  { v: "2.5B", l: "model parameters" },
                  { v: "6",   l: "control modalities" },
                  { v: "1st", l: "in research landscape" },
                ].map((s) => (
                  <div key={s.l} className="border-l-2 border-accent pl-3">
                    <strong className="block text-[1.6rem] font-extrabold">{s.v}</strong>
                    <span className="text-[0.78rem] text-muted">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image grid */}
            <RevealSection className="hidden lg:grid grid-cols-2 gap-2.5">
              {[
                { src: "/thesis/normals_ctrl_2.png", alt: "Surface normals control", label: "control map (normals)" },
                { src: "/thesis/normals_gen_2.jpg",  alt: "Generated from normals",  label: "generated image" },
                { src: "/thesis/depth_ctrl.png",   alt: "Depth control map",       label: "control map (depth)" },
                { src: "/thesis/depth_gen.jpg",    alt: "Generated from depth",    label: "generated image" },
              ].map((img) => (
                <div key={img.src} className="flex flex-col gap-1.5">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover rounded-xl border border-border hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(124,106,247,.25)] transition-all duration-300"
                    />
                  </div>
                  <span className="text-[0.7rem] text-dim text-center font-medium">{img.label}</span>
                </div>
              ))}
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Gap / Motivation */}
      <section className="py-24 bg-bg-alt">
        <div className="sd-container">
          <RevealSection>
            <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-accent mb-2">Motivation</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-4">The Empty Cell</h2>
            <p className="text-muted max-w-[600px] mb-14">
              Spatial control existed for diffusion models. For autoregressive T2I models, one specific combination remained unexplored.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <div className="space-y-4 text-muted">
                <p>
                  The research landscape for controllable autoregressive generation can be mapped
                  along two dimensions: the <strong className="text-text">generation task</strong> (text-to-image vs
                  class-to-image) and the <strong className="text-text">prediction paradigm</strong> (next-token vs next-scale).
                </p>
                <p>
                  When examined collectively, prior work — ControlAR, CAR, ControlVAR, and SCALAR —
                  leaves exactly one cell vacant: <strong className="text-text">text-to-image with next-scale prediction</strong>.
                </p>
                <div className="p-4 rounded-lg bg-[rgba(124,106,247,.08)] border border-[rgba(124,106,247,.2)] text-[0.875rem] leading-relaxed">
                  <strong className="text-text">Why is this cell the hardest?</strong><br />
                  C2I models avoid dual conditioning (one class label, not open-ended text).
                  ControlAR avoids hierarchical alignment (flat token stream, not 10 resolution scales).
                  Our framework confronts both simultaneously.
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <table className="w-full border-collapse rounded-xl overflow-hidden text-[0.9rem]">
                <thead>
                  <tr>
                    <th className="bg-card px-5 py-3.5 text-left text-[0.75rem] font-bold tracking-[0.08em] uppercase text-accent border-b border-border" />
                    <th className="bg-card px-5 py-3.5 text-center text-[0.75rem] font-bold tracking-[0.08em] uppercase text-accent border-b border-border">Next-Token</th>
                    <th className="bg-card px-5 py-3.5 text-center text-[0.75rem] font-bold tracking-[0.08em] uppercase text-accent border-b border-border">Next-Scale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-card px-5 py-[18px] font-bold text-text border-b border-border-dim border-r border-border-dim">Text-to-Image</td>
                    <td className="bg-card px-5 py-[18px] text-center text-muted border-b border-border-dim">ControlAR</td>
                    <td className="bg-[rgba(244,196,48,.1)] px-5 py-[18px] text-center text-gold font-extrabold border-2 border-[rgba(244,196,48,.5)] text-[0.875rem]">
                      ★ This work<br />
                      <small className="font-normal text-[0.75rem]">Switti-Control</small>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-card px-5 py-[18px] font-bold text-text border-r border-border-dim">Class-to-Image</td>
                    <td className="bg-card px-5 py-[18px] text-center text-dim">—</td>
                    <td className="bg-card px-5 py-[18px] text-center text-muted text-[0.8rem]">CAR · ControlVAR<br />SCALAR</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-wrap gap-2 mt-4">
                <Tag label="Dual-conditioning complexity" variant="purple" />
                <Tag label="Hierarchical alignment" variant="cyan" />
                <Tag label="Multi-scale control" variant="purple" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24">
        <div className="sd-container">
          <RevealSection>
            <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-accent mb-2">Methodology</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-3">Two Architectures,<br />One Philosophy</h2>
            <p className="text-muted max-w-[600px] mb-12">
              Both approaches keep the SWITTI backbone frozen and use zero-initialized projections to start training from pretrained behavior.
            </p>
          </RevealSection>

          <RevealSection className="mb-12">
            <div className="max-w-[560px] mx-auto">
              <Image
                src="/thesis/arch_overview.png"
                alt="Architecture overview"
                width={3401}
                height={3719}
                sizes="(max-width: 768px) 100vw, 560px"
                className="w-full h-auto rounded-xl border border-border-dim"
              />
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "Encoder Injection",
                badge: "Lightweight",
                badgeColor: "bg-[rgba(52,211,153,.12)] text-accent-green border border-[rgba(52,211,153,.2)]",
                desc: "A frozen DINOv2 ViT-B/14 encoder extracts rich features from the control image. These features are pooled to match each of SWITTI's 10 generation scales, then injected after self-attention and before text cross-attention.",
                tags: [
                  { label: "DINOv2 ViT-B/14", variant: "purple" as const },
                  { label: "31M params (additive)", variant: "cyan" as const },
                  { label: "282M params (cross-attn)", variant: "cyan" as const },
                  { label: "Frozen backbone", variant: "purple" as const },
                  { label: "10 scale pools", variant: "purple" as const },
                ],
              },
              {
                title: "Parallel Control Branch",
                badge: "Full-scale",
                badgeColor: "bg-[rgba(124,106,247,.15)] text-accent border border-[rgba(124,106,247,.25)]",
                desc: "A full copy of the SWITTI backbone runs in parallel, processing the control image and injecting control features via zero-initialized linear layers — the same design principle that made ControlNet work, reimagined for next-scale autoregressive generation.",
                tags: [
                  { label: "ControlNet-style", variant: "purple" as const },
                  { label: "~2.5B trainable", variant: "cyan" as const },
                  { label: "Zero-initialized injection", variant: "purple" as const },
                  { label: "Learned modality embedding", variant: "purple" as const },
                ],
              },
            ].map((arch, i) => (
              <RevealSection key={arch.title} delay={i * 100}>
                <div className="group relative bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:border-[rgba(124,106,247,.4)] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,.45)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-accent to-accent-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <h3 className="text-[1.15rem] font-extrabold">{arch.title}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-[0.72rem] font-bold whitespace-nowrap ${arch.badgeColor}`}>
                      {arch.badge}
                    </span>
                  </div>
                  <p className="text-[0.9rem] text-muted mb-5 leading-[1.65]">{arch.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {arch.tags.map((t) => <Tag key={t.label} label={t.label} variant={t.variant} />)}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results gallery */}
      <section className="py-24 bg-bg-alt">
        <div className="sd-container">
          <RevealSection>
            <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-accent mb-2">Results</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-3">Qualitative Results</h2>
            <p className="text-muted max-w-[600px] mb-12">
              Parallel Control Branch outputs across three modalities. The model follows the structural layout of the control map while respecting the text prompt.
            </p>
          </RevealSection>

          <RevealSection>
            <div className="flex flex-col gap-5">
              {/* Column headers */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr] gap-3">
                <div />
                {["Original", "Control Map", "Generated"].map((h) => (
                  <div key={h} className="text-[0.75rem] font-bold tracking-[0.08em] uppercase text-dim text-center">{h}</div>
                ))}
              </div>

              {resultRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[80px_1fr_1fr_1fr] gap-3 items-center">
                  <div className="text-[0.75rem] font-bold tracking-[0.08em] uppercase text-accent [writing-mode:vertical-lr] rotate-180 text-center">
                    {row.label}
                  </div>
                  {[row.original, row.control, row.generated].map((img) => (
                    <div key={img.src + img.alt} className="relative aspect-square">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover rounded-lg border border-border hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,.5)] transition-all duration-300 cursor-zoom-in"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 text-center">
        <div className="sd-container">
          <RevealSection>
            <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-accent mb-2">Key Results</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-14">By the Numbers</h2>
          </RevealSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {numbers.map((n, i) => (
              <RevealSection key={n.label} delay={i * 80} className="h-full">
                <div className="h-full bg-card border border-border rounded-xl py-9 px-6 transition-all duration-300 hover:border-[rgba(124,106,247,.4)] hover:-translate-y-1">
                  <div className="text-[clamp(2rem,4vw,3rem)] font-black grad-text leading-[1.1] mb-2">{n.value}</div>
                  <div className="text-[0.85rem] text-muted leading-snug mb-1">{n.label}</div>
                  <div className="text-[0.75rem] text-dim">{n.detail}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Unified model strip */}
      <section className="py-24 bg-bg-alt">
        <div className="sd-container">
          <RevealSection>
            <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-accent mb-2">Unified Control</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-3">One Model.<br />Six Modalities.</h2>
            <p className="text-muted max-w-[600px] mb-10">
              A single checkpoint with a learned modality embedding routes six structurally distinct control signals without interference. Within 10–15% of per-modality specialists.
            </p>
          </RevealSection>

          <RevealSection>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mb-5">
              {surroundImages.map((img) => (
                <div key={img.src} className="flex flex-col gap-2 items-center">
                  <div className={`relative aspect-square w-full rounded-lg border overflow-hidden ${img.accent ? "border-accent-2/40" : "border-border"}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(0,0,0,.5)] transition-all duration-300"
                    />
                  </div>
                  <span className={`text-[0.72rem] text-center font-medium ${img.accent ? "text-accent-2" : "text-dim"}`}>
                    {img.caption}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-dim text-[0.85rem] italic">
              Same source scene, six different structural control signals — all from one unified model.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Preservation */}
      <section className="py-24">
        <div className="sd-container">
          <RevealSection>
            <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-accent mb-2">Design Principle</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-3">Pretrained Quality<br />Preserved</h2>
            <p className="text-muted max-w-[600px] mb-12">
              The frozen backbone strategy ensures the base model&apos;s text-to-image behavior is fully preserved. Without a control signal, all variants generate normally.
            </p>
          </RevealSection>

          <RevealSection>
            <div className="max-w-[640px] mx-auto">
              {/* Prompt badge — centered over the grid */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-start gap-2.5 px-4 py-3 rounded-xl bg-[rgba(124,106,247,.08)] border border-[rgba(124,106,247,.2)]">
                  <span className="text-[0.7rem] font-bold tracking-widest uppercase text-accent mt-0.5 shrink-0">Prompt</span>
                  <p className="text-[0.88rem] text-muted italic">&ldquo;Professional motorcycle racer in extreme lean on a race course.&rdquo;</p>
                </div>
              </div>

              {/* Images row — arrows centered on images since no labels here */}
              <div className="grid grid-cols-5 gap-4 items-center mb-3">
                <div className="relative aspect-square w-full">
                  <Image src="/thesis/normals_null.jpg" alt="Pure T2I generation" fill sizes="160px" className="object-cover rounded-xl border border-border hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="text-[2rem] text-accent leading-none">→</div>
                  <p className="text-[0.68rem] text-accent">+ normals</p>
                </div>
                <div className="relative aspect-square w-full">
                  <Image src="/thesis/normals_control.png" alt="Surface normals control map" fill sizes="160px" className="object-cover rounded-xl border border-[rgba(124,106,247,.4)] hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="text-[2rem] text-accent leading-none">→</div>
                  <p className="text-[0.68rem] invisible">·</p>
                </div>
                <div className="relative aspect-square w-full">
                  <Image src="/thesis/normals_control.jpg" alt="Controlled generation" fill sizes="160px" className="object-cover rounded-xl border border-border hover:scale-[1.02] transition-transform duration-300" />
                </div>
              </div>

              {/* Labels row */}
              <div className="grid grid-cols-5 gap-4 text-center">
                <div>
                  <p className="text-[0.82rem] font-bold">Pure T2I</p>
                  <p className="text-[0.72rem] text-dim">no control</p>
                </div>
                <div />
                <div>
                  <p className="text-[0.82rem] font-bold text-accent">Control Map</p>
                  <p className="text-[0.72rem] text-dim">surface normals</p>
                </div>
                <div />
                <div>
                  <p className="text-[0.82rem] font-bold">Controlled</p>
                  <p className="text-[0.72rem] text-dim">same model</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-alt border-t border-border-dim py-12">
        <div className="sd-container flex items-center justify-between flex-wrap gap-5">
          <div>
            <div className="font-extrabold text-[1.1rem] grad-text mb-1">Saad Driouech</div>
            <p className="text-muted text-[0.875rem]">M.Sc. Artificial Intelligence · FAU Erlangen-Nürnberg · 2026</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold border border-border text-muted bg-card transition-all duration-200 hover:border-accent hover:text-text"
            >
              <ChevronLeft /> Portfolio
            </Link>
            <a
              href="https://github.com/Saad-Driouech/switti-control/tree/spatial-control-v2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[0.9rem] font-semibold bg-accent text-white transition-all duration-200 hover:bg-[#6a58e0] hover:-translate-y-px"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
