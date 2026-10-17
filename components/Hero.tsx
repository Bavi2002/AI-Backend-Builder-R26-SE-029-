"use client";

import { useEffect, useState } from "react";
import { Github, ArrowUpRight, CheckCircle2, Loader2, Circle, Bot, Files, Zap } from "lucide-react";

const LINES = [
  { delay: 0, prefix: "$ ", pColor: "#1E3A8A", text: "Build Backend with AI", tColor: "#0F172A" },
  { delay: 900, prefix: "  ", pColor: "#64748B", text: "› Planner → analyzing reqs…", tColor: "#64748B" },
  { delay: 1700, prefix: "  ✓ ", pColor: "#1E3A8A", text: "entities: User, Post, Comment", tColor: "#334155" },
  { delay: 2400, prefix: "  ✓ ", pColor: "#1E3A8A", text: "12 files planned", tColor: "#334155" },
  { delay: 3100, prefix: "  ", pColor: "#64748B", text: "› CodeGen → writing source…", tColor: "#64748B" },
  { delay: 3800, prefix: "  ✓ ", pColor: "#1E3A8A", text: "models/User.js", tColor: "#334155" },
  { delay: 4400, prefix: "  ✓ ", pColor: "#1E3A8A", text: "controllers/authController.js", tColor: "#334155" },
  { delay: 5000, prefix: "  ✓ ", pColor: "#1E3A8A", text: "routes/api.js", tColor: "#334155" },
  { delay: 5600, prefix: "  ✓ ", pColor: "#1E3A8A", text: "middleware/auth.js", tColor: "#334155" },
  { delay: 6200, prefix: "  ", pColor: "#64748B", text: "› Validator → type checking…", tColor: "#64748B" },
  { delay: 6900, prefix: "  ✓ ", pColor: "#1E3A8A", text: "No lint errors found", tColor: "#334155" },
  { delay: 7500, prefix: "  ", pColor: "#64748B", text: "› Debug → running test suite…", tColor: "#64748B" },
  { delay: 8400, prefix: "  ✓ ", pColor: "#1E3A8A", text: "All 42 tests passed ✨", tColor: "#1E3A8A" },
  { delay: 9200, prefix: "  ", pColor: "#64748B", text: "› Deploy → scaffolding docker…", tColor: "#64748B" },
  { delay: 9900, prefix: "  ✓ ", pColor: "#1E3A8A", text: "Build done! Server at :5000", tColor: "#1E3A8A" },
];

const AGENTS = [
  { name: "Planner", desc: "Architecture & file tree", status: "done" },
  { name: "CodeGen", desc: "MVC source generation", status: "done" },
  { name: "Debug", desc: "Tests & error fixing", status: "idle" },
  { name: "Critic", desc: "Root cause analysis", status: "idle" },
];

export default function Hero() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink(v => !v), 550);
    return () => clearInterval(t);
  }, []);

  const doneCount = AGENTS.filter(a => a.status === "done").length;
  const pct = Math.round((doneCount / AGENTS.length) * 100);

  return (
    <section
      className="min-h-screen flex items-center overflow-hidden relative"
      style={{ background: "#FFFFFF", paddingTop: 56 }}
    >
      {/* ── Decorative background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* Top-right glow */}

      </div>

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ═══════════════════════════════
              LEFT — Editorial text column
          ═══════════════════════════════ */}
          <div className="flex flex-col gap-8">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-[0_2px_10px_rgba(0,0,0,0.03)]" style={{ background: "#FFFFFF", borderColor: "#334155" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                <span className="text-[10px] font-bold text-ink uppercase tracking-widest">Research R26-SE-029</span>
              </div>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=R26-SE-029.ai-backend-builder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                style={{ background: "#FFFFFF", borderColor: "#334155" }}
              >
                <Bot className="w-3.5 h-3.5 text-forest" />
                <span className="text-[10px] font-bold text-ink uppercase tracking-widest">VS Code Marketplace</span>
              </a>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border shadow-[0_2px_10px_rgba(0,0,0,0.03)]" style={{ background: "#FFFFFF", borderColor: "#334155" }}>
                <Github className="w-3.5 h-3.5 text-forest" />
                <span className="text-[10px] font-bold text-ink uppercase tracking-widest">Open Source</span>
              </div>
            </div>

            {/* Giant headline */}
            <div>
              {/* Ghost decorator */}
              <div
                className="font-black leading-none select-none pointer-events-none mb-[-16px]"
                style={{
                  fontSize: 120,
                  color: "#475569ff",
                  letterSpacing: "-0.06em",
                  lineHeight: 1,
                }}
              >
                AI
              </div>

              <h1
                className="font-black text-ink leading-[1.02] tracking-tight"
                style={{ fontSize: "clamp(40px, 4.5vw, 72px)" }}
              >
                Generate backends
                <br />
                <span
                  className="relative"
                  style={{ color: "#1E3A8A" }}
                >
                  automatically.
                  <svg
                    className="absolute -bottom-2 left-0"
                    style={{ width: "100%", height: 6 }}
                    viewBox="0 0 300 6" preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q75 0 150 4 Q225 8 300 3"
                      stroke="#1E293B" strokeWidth="3"
                      fill="none" strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base text-muted leading-relaxed max-w-md">
              Four specialized AI agents orchestrate the full build — planning
              architecture, writing every MVC file, validating types, fixing
              bugs, and scaffolding CI.{" "}
              <span className="text-ink font-medium">
                You just describe what you need.
              </span>
            </p>

            {/* CTA buttons */}
            <div className="flex gap-3 flex-wrap items-center">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=R26-SE-029.ai-backend-builder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-forest py-3 px-6 text-sm inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .32 8.7l3.23 2.946-3.23 2.946a1 1 0 0 0 .007 1.439l1.322 1.202a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 19.346V4.254a1.5 1.5 0 0 0-.85-1.347zM18 17.5l-8-6 8-6v12z" />
                </svg>
                Install Extension
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a href="#how-it-works" className="btn-outline py-3 px-6 text-sm">
                How it works
              </a>
              <a
                href="https://github.com/Koshigawarman/R26-SE-029"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline py-3 px-5 text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-5 py-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-ink tracking-tight">4</span>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">AI Agents</span>
              </div>
              <div className="w-px h-6" style={{ background: "#334155" }} />
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight" style={{ color: "#1E3A8A" }}>12+</span>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Files Gen.</span>
              </div>
              <div className="w-px h-6" style={{ background: "#334155" }} />
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-ink tracking-tight">Auto</span>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Self-Healing</span>
              </div>
            </div>

            {/* Tech note */}
            <p className="label text-muted" style={{ fontSize: 10 }}>
              Powered by Ollama · qwen2.5-coder · FastAPI · Node.js / Express · MongoDB
            </p>
          </div>

          {/* ═══════════════════════════════
              RIGHT — Live showcase card
          ═══════════════════════════════ */}
          <div className="relative w-full max-w-[640px] mx-auto lg:ml-auto lg:mr-0">
            {/* Glow behind card */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none"
              style={{ background: "rgba(23, 60, 19, 0.12)", zIndex: 0 }}
            />

            <div
              className="relative rounded-3xl overflow-hidden flex flex-col border backdrop-blur-3xl"
              style={{
                background: "rgba(255,255,255,0.97)",
                borderColor: "rgba(30,58,138,0.15)",
                zIndex: 1,
                boxShadow: "0 32px 80px -16px rgba(30,58,138,0.12), 0 4px 16px rgba(30,58,138,0.08)",
                minHeight: 540,
              }}
            >
              {/* ── Terminal chrome bar ── */}
              <div
                className="flex items-center gap-3 px-5 py-3.5 border-b flex-shrink-0"
                style={{ borderColor: "rgba(30,58,138,0.10)", background: "rgba(239,246,255,0.80)" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57", border: "1px solid rgba(0,0,0,0.1)" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E", border: "1px solid rgba(0,0,0,0.1)" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#28C840", border: "1px solid rgba(0,0,0,0.1)" }} />
                </div>
                <span className="flex-1 text-center font-mono text-xs font-bold" style={{ color: "rgba(15,23,42,0.5)" }}>
                  AI Backend Builder — live build
                </span>
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: "rgba(30,58,138,0.08)", border: "1px solid rgba(30,58,138,0.18)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] animate-pulse" />
                  <span className="text-[10px] font-bold text-[#1E3A8A]">LIVE</span>
                </div>
              </div>

              {/* ── Animated terminal output ── */}
              <div className="flex-1 px-6 py-5 font-mono text-[13px] leading-[2.1] overflow-hidden bg-white">
                {LINES.map((l, i) => (
                  <div key={i} className="animate-in fade-in slide-in-from-left-2 fill-mode-both" style={{ animationDuration: '300ms', animationDelay: `${l.delay}ms` }}>
                    <span style={{ color: l.pColor, fontWeight: 700 }}>{l.prefix}</span>
                    <span style={{ color: l.tColor, fontWeight: 500 }}>{l.text}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1 mt-1 animate-in fade-in fill-mode-both" style={{ animationDelay: `${LINES[LINES.length - 1].delay + 500}ms` }}>
                  <span style={{ color: "rgba(15,23,42,0.35)" }}>$</span>
                  <span
                    style={{
                      display: "inline-block",
                      width: 7, height: 14,
                      borderRadius: 2,
                      marginLeft: 4,
                      background: blink ? "#1E3A8A" : "transparent",
                      transition: "background 0.08s",
                    }}
                  />
                </div>
              </div>

              {/* ── Divider ── */}
              <div style={{ height: 1, background: "rgba(30,58,138,0.10)" }} />

              {/* ── Agent pipeline stepper ── */}
              <div
                className="px-6 py-5 flex-shrink-0"
                style={{ background: "rgba(239,246,255,0.70)" }}
              >
                <div className="flex items-start justify-between w-full relative">
                  {AGENTS.map((a, i) => (
                    <div key={a.name} className="flex flex-col items-center flex-1 relative z-10 group">
                      {/* Step Circle */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 relative z-10 ${a.status === "done" ? "bg-[#1E3A8A] border-[#1E3A8A] shadow-sm" :
                            a.status === "running" ? "bg-white border-[#1E3A8A] shadow-[0_0_12px_rgba(30,58,138,0.2)]" :
                              "bg-slate-100 border-slate-200"
                          }`}
                      >
                        {a.status === "done" && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                        {a.status === "running" && <Loader2 className="w-3.5 h-3.5 animate-spin text-[#1E3A8A]" />}
                        {a.status === "idle" && <Circle className="w-2.5 h-2.5 text-slate-400" />}
                      </div>

                      {/* Label */}
                      <span
                        className={`mt-2 text-[9px] font-bold tracking-wider uppercase transition-colors text-center ${a.status === "done" ? "text-[#1E3A8A]" :
                            a.status === "running" ? "text-[#0F172A]" :
                              "text-slate-400"
                          }`}
                      >
                        {a.name}
                      </span>

                      {/* Connecting Line (drawn to the next circle) */}
                      {i < AGENTS.length - 1 && (
                        <div
                          className="absolute top-3.5 left-[50%] right-[-50%] h-px transition-colors duration-500 z-0"
                          style={{
                            background: a.status === "done" ? "rgba(30,58,138,0.15)" : "rgba(30,58,138,0.06)"
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Footer info ── */}
              <div
                className="px-5 py-3 flex items-center justify-between border-t flex-shrink-0"
                style={{ borderColor: "rgba(30,58,138,0.10)", background: "rgba(239,246,255,0.80)" }}
              >
                <span className="font-mono font-bold text-[10px]" style={{ color: "rgba(15,23,42,0.45)" }}>
                  Ollama · FastAPI · qwen2.5-coder
                </span>
                <span
                  className="flex items-center gap-1.5 text-[10px] font-mono font-bold"
                  style={{ color: "rgba(15,23,42,0.55)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                  localhost:5000
                </span>
              </div>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
}
