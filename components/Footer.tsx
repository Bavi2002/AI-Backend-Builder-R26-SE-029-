"use client";

import { Github, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Domain",     href: "#domain" },
  { label: "Milestones", href: "#milestones" },
  { label: "Documents",  href: "#documents" },
  { label: "Features",   href: "#features" },
  { label: "Pipeline",   href: "#how-it-works" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Slides",     href: "#presentations" },
  { label: "Team",       href: "#team" },
  { label: "Contact",    href: "#contact" },
  { label: "GitHub",     href: "https://github.com/Koshigawarman/R26-SE-029", ext: true },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden" style={{ background: "#F1F5F9" }}>

      {/* ── Top strip: nav + cta ── */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 px-6 md:px-12 lg:px-20 py-8 lg:py-6 border-b"
        style={{ borderColor: "rgba(30,58,138,0.12)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "#FAFAFA" }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <circle cx="3" cy="7" r="1.5" fill="#2563EB"/>
              <circle cx="11" cy="4" r="1.5" fill="#2563EB"/>
              <circle cx="11" cy="10" r="1.5" fill="#2563EB"/>
              <path d="M4.5 7h3M7.5 7V4h2M7.5 7v3h2" stroke="#2563EB" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="text-sm font-bold" style={{ color: "#000000ff" }}>AI Backend Builder</span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center justify-center flex-wrap gap-x-6 gap-y-3 lg:gap-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.ext ? "_blank" : undefined}
              rel={l.ext ? "noopener noreferrer" : undefined}
              className="flex items-center gap-0.5 text-sm transition-colors duration-150 hover:text-[#0F172A]"
              style={{ color: "#64748B" }}
            >
              {l.label}
              {l.ext && <ArrowUpRight className="w-3 h-3" />}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://github.com/Koshigawarman/R26-SE-029"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] flex-shrink-0"
          style={{ background: "#0F172A", color: "#FAFAFA" }}
        >
          <Github className="w-3.5 h-3.5" />
          Clone repo
        </a>
      </div>

      {/* ── Giant display text ── */}
      <div className="relative select-none px-4 md:px-8 pt-12 pb-0 overflow-hidden">
        <div
          className="font-black leading-none tracking-tighter whitespace-normal text-center"
          style={{
            fontSize: "clamp(3.5rem, 13vw, 11rem)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(0, 0, 0, 0.18)",
            letterSpacing: "-0.04em",
          }}
        >
          AI BACKEND BUILDER
        </div>

        {/* Overlaid content on the big text */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 pb-6 pointer-events-none">
          {/* We just let it be decorative */}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between gap-3 px-6 md:px-12 lg:px-20 py-5 border-t"
        style={{ borderColor: "rgba(30,58,138,0.1)" }}
      >
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono" style={{ color: "rgba(15,23,42,0.5)" }}>
            © 2026 R26-SE-029 · SLIIT Research
          </span>
          <span className="w-px h-3" style={{ background: "rgba(30,58,138,0.2)" }} />
          <span className="text-[11px] font-mono" style={{ color: "rgba(15,23,42,0.4)" }}>
            MIT License
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
          <span className="text-[11px]" style={{ color: "rgba(15,23,42,0.5)" }}>
            Open source · Active research
          </span>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[11px] flex items-center gap-1 transition-colors hover:text-[#0F172A] group"
          style={{ color: "rgba(15,23,42,0.45)" }}
        >
          ↑ Back to top
        </button>
      </div>

    </footer>
  );
}
