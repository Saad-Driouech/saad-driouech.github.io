export interface Experience {
  title: string;
  company: string;
  location: string;
  type?: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    title: "Generative AI Research Engineer",
    company: "Fraunhofer IIS",
    location: "Nuremberg, Germany",
    type: "Working Student",
    period: "Mar 2025 — Present",
    current: true,
    bullets: [
      "Training <strong>diffusion-based generative models</strong> for GNSS signal reconstruction under real-world interference conditions; iterating on architectures and loss functions to stabilise training and prevent mode collapse.",
      "Designed systematic evaluation frameworks measuring model robustness under noise and distribution shift; experimented with spectrogram and complex IQ data representations.",
      "Managed the full experimental lifecycle: hypothesis formulation, implementation, ablation studies, and documentation. Tracked all experiments with TensorBoard.",
      "Collaborated with signal processing engineers to translate experimental findings into concrete modelling decisions.",
    ],
  },
  {
    title: "Applied Machine Learning Engineer",
    company: "August-Wilhelm Scheer Institut",
    location: "Saarbrücken, Germany",
    type: "Working Student",
    period: "Dec 2023 — Feb 2025",
    bullets: [
      "Built end-to-end ML pipelines for garment return prediction on cold-start products with no transaction history, achieving <strong>86% balanced accuracy</strong>; addressed class imbalance and feature sparsity.",
      "Refactored and parallelized preprocessing pipelines, achieving a <strong>5× runtime speedup</strong> and significantly improving iteration speed and reproducibility.",
      "Conducted feature importance analysis to identify key return drivers, enabling interpretable recommendations for business stakeholders.",
    ],
  },
  {
    title: "Development Engineer",
    company: "Hightech Payment Systems",
    location: "Casablanca, Morocco",
    period: "Jun 2023 — Aug 2023",
    bullets: [
      "Enhanced <strong>PowerCARD</strong>, HPS's global payment switching and card management platform, to meet VISA and Mastercard compliance requirements.",
      "Worked with SQL databases, Docker containers, CI/CD pipelines, and Linux environments in a professional engineering setting.",
    ],
  },
  {
    title: "Applied NLP Research Engineer",
    company: "Al Akhawayn University",
    location: "Ifrane, Morocco",
    type: "Part-time",
    period: "Sep 2022 — May 2023",
    bullets: [
      "Pre-trained two transformer language models (<strong>DarELECTRA 52M, DarRoBERTa 80M</strong>) for low-resource Moroccan Darija on a 1 GB code-mixed corpus; fine-tuned on three downstream tasks.",
      "Text summarization: DarELECTRA achieved <strong>ROUGE-1 19.25 / ROUGE-L 18.01</strong>, state-of-the-art among all tested models including ARBERT and MARBERT.",
      "Topic classification: <strong>F1 0.84 / accuracy 0.86</strong>; offensive language detection: <strong>90% accuracy / 85% F1</strong>; published at IEEE CiSt 2023 and MDPI 2024.",
    ],
  },
  {
    title: "Applied ML Engineer (Intern)",
    company: "Wenov, Attijariwafa Bank Innovation Lab",
    location: "Casablanca, Morocco",
    period: "May 2022 — Jul 2022",
    bullets: [
      "Built a transformer-based <strong>intent classification system</strong> to automatically route multilingual client inquiries to relevant departments, replacing a legacy rule-based system.",
      "Outperformed traditional ML baselines by <strong>+7% accuracy / +4% F1</strong>; evaluated across multiple language variants and edge cases.",
    ],
  },
];
