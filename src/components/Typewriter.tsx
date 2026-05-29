"use client";

import { useEffect, useState } from "react";

const roles = [
  "ML Engineer",
  "Generative AI Researcher",
  "LLM Systems Builder",
  "NLP Engineer",
  "Deep Learning Practitioner",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[roleIndex];

    if (!deleting && charIndex === word.length) {
      const id = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(id);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const id = setTimeout(
      () => {
        setCharIndex((c) => (deleting ? c - 1 : c + 1));
        setText(word.slice(0, deleting ? charIndex - 1 : charIndex + 1));
      },
      deleting ? 60 : 90
    );

    return () => clearTimeout(id);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-accent-2 font-semibold border-r-2 border-accent-2 pr-[2px] animate-blink">
      {text}
    </span>
  );
}
