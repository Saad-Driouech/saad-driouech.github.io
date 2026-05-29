export interface SkillGroup {
  icon: string;
  title: string;
  tags: string[];
}

export const skills: SkillGroup[] = [
  {
    icon: "🔬",
    title: "ML & Deep Learning",
    tags: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Diffusion Models",
      "Transformers",
      "TensorBoard",
    ],
  },
  {
    icon: "💬",
    title: "NLP & Speech",
    tags: [
      "LLMs",
      "Hugging Face",
      "Fine-tuning (LoRA/PEFT)",
      "TTS (FastSpeech 2)",
      "HiFi-GAN",
      "spaCy",
    ],
  },
  {
    icon: "🤖",
    title: "LLM Systems & RAG",
    tags: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "Qdrant",
      "FAISS",
      "OpenAI API",
      "Anthropic API",
      "Groq API",
    ],
  },
  {
    icon: "⚡",
    title: "Automation & Backend",
    tags: [
      "n8n",
      "Apache Airflow",
      "FastAPI",
      "REST APIs",
      "SSE Streaming",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    icon: "🛠",
    title: "Infrastructure",
    tags: ["Python", "SQL", "Git", "CI/CD", "Linux"],
  },
  {
    icon: "🌍",
    title: "Languages",
    tags: [
      "English (Fluent)",
      "French (Advanced)",
      "Arabic (Native)",
      "German (Learning)",
    ],
  },
];
