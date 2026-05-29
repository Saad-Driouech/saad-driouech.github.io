export interface Project {
  slug: string;
  icon: string;
  title: string;
  subtitle?: string;
  year: number;
  description: string;
  stack: { label: string; variant: "purple" | "cyan" | "green" | "gold" }[];
  github?: string;
  link?: string;
  featured?: boolean;
  fullWidth?: boolean;
  images?: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "thesis",
    icon: "🔬",
    title: "Spatially Controlled SWITTI",
    subtitle: "First spatial control framework for next-scale autoregressive T2I generation",
    year: 2026,
    description:
      "Integrated spatial conditioning into SWITTI, a 2.5B-parameter scale-wise autoregressive T2I model. The only work addressing controllable T2I in the next-scale AR paradigm. Two novel architectures (31M and ~2.5B trainable params), six control modalities, and a unified model with learned modality routing that matches specialist performance within 10–15%.",
    stack: [
      { label: "PyTorch", variant: "purple" },
      { label: "Generative AI", variant: "cyan" },
      { label: "DINOv2", variant: "purple" },
      { label: "ControlNet-style", variant: "cyan" },
      { label: "Autoregressive", variant: "purple" },
      { label: "FAU", variant: "purple" },
      { label: "First of its kind", variant: "gold" },
    ],
    github: "https://github.com/Saad-Driouech",
    link: "/thesis",
    featured: true,
    fullWidth: true,
    images: [
      { src: "/thesis/normals_ctrl_2.png", alt: "Normals control" },
      { src: "/thesis/normals_gen_2.jpg",  alt: "Normals generated" },
      { src: "/thesis/depth_ctrl.png",    alt: "HED control" },
      { src: "/thesis/depth_gen.jpg",    alt: "HED generated" },
    ],
  },
  {
    slug: "paperlens",
    icon: "🔭",
    title: "PaperLens",
    year: 2026,
    description:
      "RAG system for research papers with a three-stage retrieval pipeline: bi-encoder search (MiniLM + Qdrant), cross-encoder reranking (ms-marco), and diversity-aware selection ensuring all indexed sources are represented. Hybrid dense + BM25 search with Reciprocal Rank Fusion. Groq (Llama-3.3-70b) for cited answer generation. Served via Streamlit UI, FastAPI, and CLI.",
    stack: [
      { label: "RAG", variant: "purple" },
      { label: "Qdrant", variant: "cyan" },
      { label: "FastAPI", variant: "cyan" },
      { label: "Cross-encoder Reranking", variant: "purple" },
      { label: "Groq", variant: "cyan" },
      { label: "Hybrid Search (RRF)", variant: "purple" },
      { label: "Streamlit", variant: "purple" },
    ],
    github: "https://github.com/Saad-Driouech/PaperLens",
    featured: true,
  },
  {
    slug: "curateai",
    icon: "📰",
    title: "CurateAI",
    subtitle: "AI News Curation Bot",
    year: 2026,
    description:
      "Airflow 4-task DAG (twice daily) that polls Discord reactions to build a preference profile, fetches AI news via Tavily with SQLite deduplication, scores articles with Claude + Instructor for structured output, and publishes Discord embeds with 👍/👎 buttons. User reactions are re-injected as few-shot examples into Claude's scoring prompt each run, making the bot more accurate without any retraining.",
    stack: [
      { label: "Apache Airflow", variant: "purple" },
      { label: "Claude API", variant: "cyan" },
      { label: "Instructor", variant: "cyan" },
      { label: "Tavily", variant: "purple" },
      { label: "Discord Bot", variant: "green" },
      { label: "Few-shot Learning", variant: "purple" },
      { label: "SQLite", variant: "purple" },
      { label: "Docker", variant: "purple" },
    ],
    github: "https://github.com/Saad-Driouech/CurateAI",
    featured: true,
  },
  {
    slug: "applai",
    icon: "🚀",
    title: "ApplAI",
    year: 2026,
    description:
      "5-phase automated job application pipeline. Scrapes 4 job boards (Arbeitnow, Remotive, RemoteOK, Adzuna), pre-filters with 50+ AI/ML keywords, scores with Gemini 2.5 Flash, then generates LaTeX CVs & cover letters via Claude, compiled with pdflatex behind a LaTeX safety validator. Discord Approve/Reject/Rescue buttons (Ed25519-verified), Notion dashboard, and a preference feedback loop that refines future scoring. n8n 12h cron, security-first throughout.",
    stack: [
      { label: "n8n", variant: "purple" },
      { label: "FastAPI", variant: "cyan" },
      { label: "Gemini 2.5 Flash", variant: "purple" },
      { label: "Claude API", variant: "cyan" },
      { label: "Discord Bot", variant: "green" },
      { label: "LaTeX / pdflatex", variant: "purple" },
      { label: "Notion", variant: "purple" },
      { label: "Ed25519", variant: "purple" },
      { label: "Docker", variant: "purple" },
    ],
    github: "https://github.com/Saad-Driouech/ApplAI",
    featured: true,
  },
  {
    slug: "motigen",
    icon: "✍️",
    title: "MotiGen",
    year: 2026,
    description:
      "Agentic motivation letter generator built on a LangGraph 4-node pipeline with typed state: CV parsing → JD parsing → live company research (dual Tavily queries for culture + role context) → letter generation. Supports Claude, Groq, and OpenAI via a unified model factory. FastAPI backend with SSE streaming for real-time output; Streamlit UI for file-upload workflows.",
    stack: [
      { label: "LangGraph", variant: "purple" },
      { label: "LangChain", variant: "cyan" },
      { label: "Claude / Groq / OpenAI", variant: "purple" },
      { label: "FastAPI + SSE", variant: "cyan" },
      { label: "Tavily", variant: "purple" },
      { label: "Pydantic v2", variant: "purple" },
      { label: "Streamlit", variant: "purple" },
    ],
    github: "https://github.com/Saad-Driouech/MotiGen",
  },
];
