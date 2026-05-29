import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saad Driouech — AI Engineer",
  description:
    "Machine Learning Engineer specialising in generative AI, NLP, and LLM systems. Based in Fürth, Germany.",
  openGraph: {
    title: "Saad Driouech — AI Engineer",
    description:
      "Machine Learning Engineer with a research background in generative AI, NLP, and applied ML.",
    url: "https://saaddriouech.com",
  },
  alternates: {
    canonical: "https://saaddriouech.com",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
