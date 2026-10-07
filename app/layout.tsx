import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Backend Builder — Autonomous Multi-Agent Backend Generation",
  description:
    "A groundbreaking VS Code extension powered by 5 specialized AI agents that autonomously plans, generates, and debugs production-ready Node.js/Express backends from a single text prompt.",
  keywords: [
    "AI Backend Builder",
    "Multi-Agent AI",
    "VS Code Extension",
    "Code Generation",
    "FastAPI",
    "Ollama",
    "LLM",
    "Backend Development",
    "R26-SE-029",
  ],
  openGraph: {
    title: "AI Backend Builder — Autonomous Multi-Agent Backend Generation",
    description:
      "5 specialized AI agents that plan, generate, and debug production-ready backends from a single prompt.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">{children}</body>
    </html>
  );
}
