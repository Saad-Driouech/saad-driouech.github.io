export interface Education {
  degree: string;
  school: string;
  badge: string;
  period: string;
  description: string;
  courses: string[];
}

export const education: Education[] = [
  {
    degree: "M.Sc. Artificial Intelligence",
    school: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    badge: "Grade 1.2 · Top 1%",
    period: "Oct 2023 — May 2026",
    description:
      "Thesis: Spatial Control Mechanisms for Scale-Wise Transformers (SWITTI). ViT-based spatial encoder with cross-attention conditioning for autoregressive image generation.",
    courses: ["Pattern Recognition", "ML for Time Series", "Advanced Programming"],
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Al Akhawayn University",
    badge: "GPA 3.83 / 4.0 · Summa Cum Laude",
    period: "Sep 2018 — Jul 2022",
    description:
      "Capstone: Darija Text-to-Speech Synthesis using FastSpeech 2 + HiFi-GAN on a 2-hour low-resource dataset. MOS 3.905; published at ICDTA 2025.",
    courses: ["Probability & Statistics", "Database Systems", "Big Data", "Data Structures"],
  },
];
