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
      "Thesis: Finetuning Visual Autoregressive Models for Controllable Image Generation. First spatial control framework for scale-wise autoregressive T2I generation — ControlNet-style architecture over a frozen 2.5B-parameter SWITTI backbone, six control modalities, unified model with learned modality routing.",
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
