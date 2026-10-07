"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";

const links = [
  { label: "Domain",        href: "#domain" },
  { label: "Milestones",    href: "#milestones" },
  { label: "Documents",     href: "#documents" },
  { label: "Features",      href: "#features" },
  { label: "Pipeline",      href: "#how-it-works" },
  { label: "Agents",        href: "#agents" },
  { label: "Stack",         href: "#tech-stack" },
  { label: "Slides",        href: "#presentations" },
  { label: "Team",          href: "#team" },
  { label: "Contact",       href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── Floating Desktop Navbar (Dark Theme) ── */}
      <nav
        className={`hidden lg:flex fixed left-1/2 -translate-x-1/2 z-50 items-center justify-between p-1.5 rounded-full transition-all duration-400 ease-out ${
          scrolled
            ? "top-4 bg-[#F1F5F9]/90 backdrop-blur-xl border border-[#1E3A8A]/50 shadow-[0_12px_32px_-12px_rgba(13,83,14,0.4)]"
            : "top-6 bg-[#F1F5F9]/95 backdrop-blur-md border border-[#1E3A8A]/30 shadow-lg"
        }`}
        style={{ width: "max-content", minWidth: "600px" }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 pl-3 pr-4 group">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#0F172Aff] shadow-sm group-hover:scale-105 transition-transform duration-300">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <circle cx="3" cy="7" r="1.5" fill="#FFFFFF" />
              <circle cx="11" cy="4" r="1.5" fill="#FFFFFF" />
              <circle cx="11" cy="10" r="1.5" fill="#FFFFFF" />
              <path d="M4.5 7h3M7.5 7V4h2M7.5 7v3h2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </span>
          <div className="text-[13px] font-bold tracking-wide" style={{ color: "#0F172A" }}>
            AI Backend Builder
          </div>
        </a>

        {/* Links */}
        <div className="flex items-center gap-0.5 px-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200"
              style={{ color: "rgba(15,23,42,0.7)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0F172A";
                e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(15,23,42,0.7)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 pr-1.5 pl-2 border-l" style={{ borderColor: "rgba(15,23,42,0.15)" }}>
          <a
            href="https://github.com/Koshigawarman/R26-SE-029"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all duration-200"
            style={{ color: "rgba(15,23,42,0.7)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0F172A";
              e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(15,23,42,0.7)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#how-it-works"
            className="rounded-full text-[13px] font-bold py-2 px-5 transition-all duration-300"
            style={{ background: "#0F172A", color: "#FFFFFF" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.background = "#1E293B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#1E293B";
            }}
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* ── Mobile Navbar (Standard top bar for small screens) ── */}
      <nav
        className={`lg:hidden fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-[#F1F5F9]/95 backdrop-blur-xl border-b border-[#1E3A8A]/30 shadow-sm"
            : "bg-[#F1F5F9]"
        }`}
      >
        <div className="px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F172A]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="3" cy="7" r="1.5" fill="#FFFFFF" />
                <circle cx="11" cy="4" r="1.5" fill="#FFFFFF" />
                <circle cx="11" cy="10" r="1.5" fill="#FFFFFF" />
                <path d="M4.5 7h3M7.5 7V4h2M7.5 7v3h2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
            <div className="text-[15px] font-bold" style={{ color: "#0F172A" }}>
              AI Backend Builder
            </div>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg transition-colors"
            style={{ color: "rgba(15,23,42,0.7)" }}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="px-6 py-4 flex flex-col gap-2 border-b border-[#1E3A8A]/30 shadow-lg" style={{ background: "#F1F5F9" }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-[14px] font-semibold rounded-xl transition-all"
                style={{ color: "#0F172A", background: "rgba(15,23,42,0.05)" }}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-[rgba(15,23,42,0.1)]">
              <a
                href="https://github.com/Koshigawarman/R26-SE-029"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-sm font-bold rounded-xl py-3.5 transition-all"
                style={{ background: "#0F172A", color: "#FFFFFF" }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
