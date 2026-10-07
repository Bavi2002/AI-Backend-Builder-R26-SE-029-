"use client";

import { RefreshCw, GitMerge, Cpu, Cloud, Shield, Activity, Brain, Folder, FileCode, MessageSquare, Code, Bug, ClipboardList, Map } from "lucide-react";

/*
  4-color bento — graph-coloured so NO same color is adjacent OR near.
  Grid layout (4 columns):
    Row 1: [C1 DarkBlue  2col][C2 White  1col][C3 Black  tall 2rows]
    Row 2: [C4 White  1col  ][C5 LightBlue 2col ][C3 continues     ]
    Row 3: [C6 DarkBlue 1col][C7 Black   2col   ][C8 LightBlue 1col]

  Every pair of same-colored cards is separated by at least one card of a
  different color both horizontally and vertically.
*/
const features = [
  {
    // ── C1 · row1 col1-2 · DARK BLUE ──
    icon: Brain,
    title: "4 Specialized AI Agents",
    description: "Planner, Code Generator, Debugger, and Orchestrator — each with a single, well-defined job.",
    tag: "Core Architecture",
    className: "col-span-1 lg:col-span-2 row-span-1",
    style: { background: "rgba(30,58,138,0.93)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,130,246,0.35)" },
    iconClass: "bg-white/20 text-white",
    tagClass: "bg-white/15 text-white/90 border-white/25",
    titleClass: "text-white",
    descClass: "text-blue-100/80",
    isWide: true,
    inlineTag: false,
    hideTitle: true,
    visual: (
      <div className="flex gap-2">
        {[
          { label: "Planner", Icon: Map },
          { label: "CodeGen", Icon: Code },
          { label: "Debug",   Icon: Bug },
          { label: "Critic",  Icon: ClipboardList },
        ].map(({ label, Icon }) => (
          <div key={label} className="flex flex-col items-center gap-0.5 px-2.5 py-2 rounded-xl"
            style={{ background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.22)" }}>
            <Icon className="w-3.5 h-3.5 text-white" />
            <span className="text-[7px] font-bold text-white/70 uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    // ── C2 · row1 col3 · WHITE ──
    icon: RefreshCw,
    title: "Self-Healing Debug Loop",
    description: "Automatically detects and fixes runtime errors during generation.",
    tag: "Autonomous",
    inlineTag: true,
    className: "col-span-1 lg:col-span-1 row-span-1",
    style: { background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", border: "1px solid rgba(30,58,138,0.15)" },
    iconClass: "bg-[#1E3A8A]/10 text-[#1E3A8A]",
    tagClass: "bg-[#1E3A8A]/8 text-[#1E3A8A] border-[#1E3A8A]/20",
    titleClass: "text-[#0F172A]",
    descClass: "text-slate-600",
    isWide: false,
  },
  {
    // ── C3 · row1-2 col4 · BLACK (tall) ──
    icon: GitMerge,
    title: "Full MVC Scaffold",
    description: "Models, Controllers, Routes, Middleware, and package.json — all generated.",
    tag: "Code Gen",
    className: "col-span-1 lg:col-span-1 row-span-2",
    style: { background: "rgba(5,8,20,0.97)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" },
    iconClass: "bg-white/10 text-white",
    tagClass: "bg-white/10 text-white/80 border-white/15",
    titleClass: "text-white",
    descClass: "text-slate-400",
    isWide: false,
    inlineTag: true,
    visual: (
      <div className="flex-1 w-full flex flex-col justify-center">
        <div className="rounded-2xl p-5 font-mono text-[11px] space-y-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-2 text-white/70"><Folder className="w-3.5 h-3.5 text-blue-400"/> src/</div>
          <div className="flex items-center gap-2 pl-5 text-white/40"><Folder className="w-3.5 h-3.5 text-white/25"/> controllers/</div>
          <div className="flex items-center gap-2 pl-5 text-white/40"><Folder className="w-3.5 h-3.5 text-white/25"/> models/</div>
          <div className="flex items-center gap-2 pl-5 text-white/40"><Folder className="w-3.5 h-3.5 text-white/25"/> routes/</div>
          <div className="flex items-center gap-2 pl-5 text-white/70"><FileCode className="w-3.5 h-3.5 text-blue-400"/> server.js</div>
        </div>
      </div>
    ),
  },
  {
    // ── C4 · row2 col1 · WHITE  (diagonal from C2 White, not adjacent) ──
    icon: Cpu,
    title: "Runs Locally",
    description: "Powered by Ollama. 100% private — no cloud or API costs required.",
    tag: "Privacy-First",
    inlineTag: true,
    className: "col-span-1 lg:col-span-1 row-span-1",
    style: { background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", border: "1px solid rgba(30,58,138,0.15)" },
    iconClass: "bg-[#1E3A8A]/10 text-[#1E3A8A]",
    tagClass: "bg-[#1E3A8A]/8 text-[#1E3A8A] border-[#1E3A8A]/20",
    titleClass: "text-[#0F172A]",
    descClass: "text-slate-600",
    isWide: false,
  },
  {
    // ── C5 · row2 col2-3 · LIGHT BLUE  (below C1 DarkBlue✓  left of C3 Black✓  right of C4 White✓) ──
    icon: Activity,
    title: "Progress Tracking",
    description: "Real-time status updates piped directly via VS Code, keeping you informed as each file is generated.",
    tag: "Live Feedback",
    className: "col-span-1 lg:col-span-2 row-span-1",
    style: { background: "rgba(219,234,254,0.93)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,130,246,0.30)" },
    iconClass: "bg-[#1E3A8A]/15 text-[#1E3A8A]",
    tagClass: "bg-[#1E3A8A]/10 text-[#1E3A8A] border-[#1E3A8A]/20",
    titleClass: "text-[#0F172A]",
    descClass: "text-slate-700",
    isWide: true,
    inlineTag: true,
    visual: (
      <div className="w-full lg:w-48 rounded-xl p-3 flex flex-col gap-2"
        style={{ background: "rgba(30,58,138,0.10)", border: "1px solid rgba(30,58,138,0.22)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#1E3A8A] ring-2 ring-[#1E3A8A]/20" />
            <span className="text-[8px] font-bold text-[#1E3A8A]/80 uppercase tracking-widest">Building</span>
          </div>
          <span className="text-[9px] font-bold text-[#1E3A8A] bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 px-1.5 py-px rounded-full">72%</span>
        </div>
        <div className="relative w-full h-1 rounded-full bg-[#1E3A8A]/15 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-[#1E3A8A] to-blue-400 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-[#1E3A8A]/50 tracking-wide">28 files left</span>
          <span className="text-[8px] text-[#1E3A8A]/50">~2 min</span>
        </div>
      </div>
    ),
  },
  {
    // ── C6 · row3 col1 · DARK BLUE  (below C4 White✓  2 rows below C1 DarkBlue — well-separated) ──
    icon: Shield,
    title: "Production-Ready Code",
    description: "ES6 modules, async/await, Mongoose, and robust error handling baked in.",
    tag: "Quality",
    inlineTag: true,
    className: "col-span-1 lg:col-span-1 row-span-1",
    style: { background: "rgba(30,58,138,0.93)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,130,246,0.35)" },
    iconClass: "bg-white/20 text-white",
    tagClass: "bg-white/15 text-white/90 border-white/25",
    titleClass: "text-white",
    descClass: "text-blue-100/80",
    isWide: false,
  },
  {
    // ── C7 · row3 col2-3 · BLACK  (below C5 LightBlue✓  right of C6 DarkBlue✓  separated from C3 Black by C5) ──
    icon: Cloud,
    title: "OpenAI Fallback",
    description: "Optional fallback to OpenAI API when local models are unavailable. Switch between local and cloud seamlessly.",
    tag: "Flexible",
    className: "col-span-1 lg:col-span-2 row-span-1",
    style: { background: "rgba(5,8,20,0.97)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" },
    iconClass: "bg-white/10 text-white",
    tagClass: "bg-white/10 text-white/80 border-white/15",
    titleClass: "text-white",
    descClass: "text-slate-400",
    isWide: true,
    inlineTag: true,
    visual: (
      <div className="flex items-center gap-1 p-1.5 rounded-full"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-bold">Local</div>
        <div className="px-4 py-1.5 rounded-full text-white/40 text-[10px] font-bold">OpenAI</div>
      </div>
    ),
  },
  {
    // ── C8 · row3 col4 · LIGHT BLUE  (below C3 Black✓  right of C7 Black✓  separated from C5 LightBlue by C7) ──
    icon: MessageSquare,
    title: "One-Prompt Generation",
    description: "Generate a fully working backend from a single text prompt.",
    tag: "Simplicity",
    className: "col-span-1 lg:col-span-1 row-span-1",
    style: { background: "rgba(219,234,254,0.93)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,130,246,0.30)" },
    iconClass: "bg-[#1E3A8A]/15 text-[#1E3A8A]",
    tagClass: "bg-[#1E3A8A]/10 text-[#1E3A8A] border-[#1E3A8A]/20",
    titleClass: "text-[#0F172A]",
    descClass: "text-slate-700",
    isWide: false,
    inlineTag: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: "#e5f0ffff" }}>
      <div className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] border border-[#1E3A8A]/20 bg-[#1E3A8A]/8 rounded-full mb-4">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              Everything the pipeline
              <br />
              <span style={{ color: "#1E3A8A" }}>needs to ship.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base leading-relaxed max-w-xs md:text-right">
            From a single English sentence to a fully tested, deployable backend in minutes
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 auto-rows-auto max-w-[1200px] mx-auto">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`relative group rounded-3xl p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40 flex flex-col overflow-hidden ${f.className}`}
                style={f.style}
              >
                {f.inlineTag ? (
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${f.iconClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border whitespace-nowrap ${f.tagClass}`}>
                      {f.tag}
                    </span>
                  </div>
                ) : (
                  <>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-4 ${f.iconClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border whitespace-nowrap mb-4 self-start ${f.tagClass}`}>
                      {f.tag}
                    </span>
                  </>
                )}

                <div className="w-full">
                  {!f.hideTitle && (
                    <h3 className={`text-xl font-bold mb-2 leading-snug tracking-tight ${f.titleClass}`}>
                      {f.title}
                    </h3>
                  )}
                  <p className={`text-sm leading-relaxed ${f.descClass}`}>
                    {f.description}
                  </p>
                </div>

                {f.visual && !f.isWide && (
                  <div className="mt-5 w-full flex flex-col justify-end">{f.visual}</div>
                )}
                {f.visual && f.isWide && (
                  <div className="mt-4 lg:mt-0 lg:absolute lg:right-7 lg:top-7">{f.visual}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}