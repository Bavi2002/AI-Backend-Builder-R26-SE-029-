"use client";

import { Github, Linkedin } from "lucide-react";

const team = [
  {
    initials: "KY",
    name: "Koshigawarman Y.",
    id: "IT22273444",
    role: "Research Group Leader",
    focus: ["Testing Agent", "Docker Sandbox", "Static Safety Scan"],
    github: "https://github.com/Koshigawarman",
    linkedin: "https://www.linkedin.com/in/koshigawarman/",
  },
  {
    initials: "BS",
    name: "Bavithran S.",
    id: "IT22115966",
    role: "Undergraduate",
    focus: ["FSM Orchestrator", "Critic Agent", "Episodic Memory"],
    github: "https://github.com/Bavi2002",
    linkedin: "https://www.linkedin.com/in/bavithran-sivanesan16/",
  },
  {
    initials: "DJ",
    name: "Denislas C. J.",
    id: "IT22102928",
    role: "Undergraduate",
    focus: ["RAG Planning", "Vector DB", "Blueprints"],
    github: "https://github.com/coonghe03",
    linkedin: "https://www.linkedin.com/in/judes-denislas-coonghe/",
  },
  {
    initials: "DP",
    name: "Dilakshan P.",
    id: "IT22297372",
    role: "Undergraduate",
    focus: ["Style-aware CodeGen", "Multi-tenant RAG", "Project Synthesis"],
    github: "https://github.com/dilakshanp",
    linkedin: "https://www.linkedin.com/in/dilakshan-pahitharan/",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-14 px-6 md:px-12 lg:px-20" style={{ background: "#F1F5F9" }}>
      <div className="max-w-[1450px] mx-auto">

        {/* ── Header row ── */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-3"
              style={{ color: "#1E3A8A", borderColor: "rgba(30,58,138,0.3)", background: "rgba(30,58,138,0.06)" }}>
              Research Team
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: "#FAFAFA", letterSpacing: "-0.02em" }}>
              The minds behind the research.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full flex-shrink-0"
            style={{ background: "#FAFAFA" }}>
            <span className="text-[10px] font-mono" style={{ color: "rgba(240,234,208,0.4)" }}>SLIIT · R26-SE-029 · 2026</span>
          </div>
        </div>

        {/* ── 4-col compact cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {team.map((m, i) => (
            <div
              key={m.id}
              className="group rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
              style={{ background: "#FAFAFA", boxShadow: "0 4px 16px -6px rgba(10,25,10,0.25)" }}
            >
              {/* Top row: avatar + socials */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm select-none"
                  style={{ background: "#1E3A8A", color: "#F1F5F9" }}
                >
                  {m.initials}
                </div>
                <div className="flex gap-1.5">
                  <a href={m.github} target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-150 hover:scale-110"
                    style={{ background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.08)" }}>
                    <Github className="w-3 h-3" style={{ color: "rgba(240,234,208,0.5)" }} />
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-150 hover:scale-110"
                    style={{ background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.08)" }}>
                    <Linkedin className="w-3 h-3" style={{ color: "rgba(240,234,208,0.5)" }} />
                  </a>
                </div>
              </div>

              {/* Name + role */}
              <div>
                <div className="text-sm font-bold mb-0.5" style={{ color: "#0F172A" }}>{m.name}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: "rgba(37,99,235,0.65)" }}>
                  {m.role}
                </div>
              </div>

              {/* Focus tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {m.focus.map((f) => (
                  <span key={f}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(15,23,42,0.05)", border: "1px solid rgba(15,23,42,0.07)", color: "rgba(240,234,208,0.45)" }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
