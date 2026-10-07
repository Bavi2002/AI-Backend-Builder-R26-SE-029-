"use client";

import { BookOpen, Search, Target, FlaskConical, Brain, Cpu, Database, ShieldCheck, Code2 } from "lucide-react";

const domainSections = [
  {
    id: "literature",
    title: "Literature Survey",
    icon: BookOpen,
    bgColor: "#1E293B",
    textColor: "#FAFAFA",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center">
        <div className="flex flex-col justify-center">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4 border-b border-[rgba(26,31,15,0.1)] pb-4">
            Establishing the Foundation
          </div>
          <p className="text-xl md:text-3xl font-bold leading-snug mb-6">
            Synthesizing recent breakthroughs in autonomous agents.
          </p>
          <p className="text-sm leading-relaxed opacity-80 max-w-lg">
            Through extensive review, we identified that while LLMs excel at localized code completion, they fail catastrophically when attempting to architect, test, and self-correct multi-file codebases without human intervention.
          </p>
        </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-3 p-6 rounded-3xl bg-white shadow-xl shadow-[rgba(0,0,0,0.06)] border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50">
                <Cpu className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <h4 className="font-black text-sm text-[#0F172A]">FSM Orchestration</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Separating structural progression from sub-task solving prevents the infinite reasoning loops commonly seen in AutoGPT.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-3xl bg-white shadow-xl shadow-[rgba(0,0,0,0.06)] border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50">
                <Database className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <h4 className="font-black text-sm text-[#0F172A]">RAG Architecture</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Utilizing ChromaDB vector databases heavily reduces LLM hallucination when generating complex backend blueprints.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-3xl bg-white shadow-xl shadow-[rgba(0,0,0,0.06)] border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50">
                <ShieldCheck className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <h4 className="font-black text-sm text-[#0F172A]">Sandboxed Testing</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Executing AI-generated code in isolated Docker environments mitigates severe security and host system risks.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-3xl bg-white shadow-xl shadow-[rgba(0,0,0,0.06)] border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50">
                <Code2 className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <h4 className="font-black text-sm text-[#0F172A]">Style Enforcement</h4>
              <p className="text-xs text-slate-500 leading-relaxed">AST-based extraction ensures AI outputs strictly match the exact coding conventions of human developers.</p>
            </div>
          </div>
      </div>
    )
  },
  {
    id: "gap",
    title: "Research Gap",
    icon: Search,
    bgColor: "#1E3A8A",
    textColor: "#F1F5F9",
    content: (
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200/60 mb-4 border-b border-[rgba(251,245,221,0.2)] pb-4">
            Identifying the void
          </div>
          <h3 className="text-3xl md:text-5xl font-black leading-tight mb-8 text-white">
            Passive tools vs.<br />Autonomous factories.
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-blue-100/90 max-w-lg mb-8">
            Existing commercial AI tools (like GitHub Copilot and Cursor) act strictly as interactive pair programmers. They remain fundamentally tethered to human developers to guide architectural boundaries and resolve logical conflicts.
          </p>
        </div>
        
        <div className="flex-1 flex flex-col gap-4 w-full">
          <div className="flex items-start gap-5 p-6 rounded-3xl bg-[rgba(0,0,0,0.15)] border border-[rgba(15,23,42,0.05)] transition-transform hover:translate-x-2">
            <div className="text-2xl font-black text-white/30 mt-1">01</div>
            <div>
              <h4 className="font-black text-lg mb-2 text-white">No Closed-Loop Validation</h4>
              <p className="text-sm text-blue-100/80 leading-relaxed">Tools focus entirely on generation, forcing developers to spend hours manually debugging unverified AI output.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-3xl bg-[rgba(0,0,0,0.15)] border border-[rgba(15,23,42,0.05)] transition-transform hover:translate-x-2">
            <div className="text-2xl font-black text-white/30 mt-1">02</div>
            <div>
              <h4 className="font-black text-lg mb-2 text-white">No Episodic Memory</h4>
              <p className="text-sm text-blue-100/80 leading-relaxed">Agents discard successful fixes. If the same error reappears, the system wastes resources solving it from scratch.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-6 rounded-3xl bg-[rgba(0,0,0,0.15)] border border-[rgba(15,23,42,0.05)] transition-transform hover:translate-x-2">
            <div className="text-2xl font-black text-white/30 mt-1">03</div>
            <div>
              <h4 className="font-black text-lg mb-2 text-white">Confirmation Bias</h4>
              <p className="text-sm text-blue-100/80 leading-relaxed">Relying on a single agent to write and evaluate its own code leads to confirmation bias and complete mode collapse.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "problem",
    title: "Research Problem",
    icon: Target,
    bgColor: "#FAFAFA",
    textColor: "#0F172A",
    content: (
      <div className="flex flex-col items-center justify-center text-center h-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
          style={{ background: "#FFFFFF" }} />
        
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-slate-500 relative z-10">
          The Core Challenge
        </div>
        
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl relative z-10 text-[#0F172A]" style={{ letterSpacing: "-0.02em" }}>
          How can a multi-agent system <span style={{ color: "#2563EB" }}>autonomously plan, generate, test, and self-correct</span> backend applications with minimal human intervention?
        </h3>
        
        <p className="mt-8 text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed relative z-10">
          The traditional SDLC remains labor-intensive and error-prone. Without a deterministic orchestration engine and runtime memory, current AI systems cannot reliably act as autonomous software factories.
        </p>
      </div>
    )
  },
  {
    id: "objectives",
    title: "Objectives",
    icon: FlaskConical,
    bgColor: "#0F172A",
    textColor: "#FAFAFA",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 h-full items-center">
        <div className="flex flex-col justify-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E3A8A] mb-4 border-b border-[rgba(30,58,138,0.1)] pb-4">
            Main Objective
          </div>
          <p className="text-3xl md:text-4xl font-black leading-snug mb-8">
            To design, develop, and evaluate an autonomous multi-agent software generation system.
          </p>
          <p className="text-sm font-medium leading-relaxed opacity-80">
            This system integrates context-aware planning, generative coding, sandboxed testing, and an adaptive orchestration engine incorporating Human-in-the-Loop validation to measurably reduce human intervention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-white shadow-[0_10px_30px_-10px_rgba(10,25,10,0.05)] border border-[rgba(30,58,138,0.05)] flex flex-col justify-between h-full">
            <div className="w-10 h-10 rounded-xl bg-[rgba(30,58,138,0.08)] flex items-center justify-center shrink-0 mb-4">
              <span className="font-black text-[#1E3A8A]">01</span>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2 text-[#0F172A]">Adaptive Orchestration</h4>
              <p className="text-xs text-slate-500 leading-relaxed">FSM-driven LangGraph engine with episodic memory to resolve execution errors autonomously.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-3xl bg-white shadow-[0_10px_30px_-10px_rgba(10,25,10,0.05)] border border-[rgba(30,58,138,0.05)] flex flex-col justify-between h-full">
            <div className="w-10 h-10 rounded-xl bg-[rgba(30,58,138,0.08)] flex items-center justify-center shrink-0 mb-4">
              <span className="font-black text-[#1E3A8A]">02</span>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2 text-[#0F172A]">Sandboxed Testing</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Docker environment parsing terminal logs into structured JSON reports for the Critic Agent.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-3xl bg-white shadow-[0_10px_30px_-10px_rgba(10,25,10,0.05)] border border-[rgba(30,58,138,0.05)] flex flex-col justify-between h-full">
            <div className="w-10 h-10 rounded-xl bg-[rgba(30,58,138,0.08)] flex items-center justify-center shrink-0 mb-4">
              <span className="font-black text-[#1E3A8A]">03</span>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2 text-[#0F172A]">Context Planning</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Retrieval mechanism generating structured architectural blueprints from natural language.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-3xl bg-white shadow-[0_10px_30px_-10px_rgba(10,25,10,0.05)] border border-[rgba(30,58,138,0.05)] flex flex-col justify-between h-full">
            <div className="w-10 h-10 rounded-xl bg-[rgba(30,58,138,0.08)] flex items-center justify-center shrink-0 mb-4">
              <span className="font-black text-[#1E3A8A]">04</span>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2 text-[#0F172A]">Style Generation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">AST-based extraction combined with RAG to enforce specific developer conventions.</p>
            </div>
          </div>
        </div>

      </div>
    )
  },
  {
    id: "methodology",
    title: "Methodology",
    icon: Brain,
    bgColor: "#2563EB",
    textColor: "#FAFAFA",
    content: (
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">
              The Engine Pipeline
            </div>
            <h3 className="text-3xl md:text-5xl font-black">A Closed-Loop Architecture.</h3>
          </div>
          <Brain className="w-16 h-16 opacity-30 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-[2rem] flex flex-col justify-between min-h-[220px]" style={{ background: "rgba(10,15,35,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-3">Phase 1</div>
            <div>
              <h4 className="font-black text-xl mb-3 text-white">LangGraph FSM</h4>
              <p className="text-sm font-medium text-white/80 leading-relaxed">StateGraph governs deterministic transitions (Plan → Code → Test) and enforces strict retry budgets.</p>
            </div>
          </div>
          <div className="p-8 rounded-[2rem] flex flex-col justify-between min-h-[220px]" style={{ background: "rgba(10,15,35,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-3">Phase 2</div>
            <div>
              <h4 className="font-black text-xl mb-3 text-white">Consistency Validation</h4>
              <p className="text-sm font-medium text-white/80 leading-relaxed">Scans codebase for missing local imports, named exports, and auto-injects packages.</p>
            </div>
          </div>
          <div className="p-8 rounded-[2rem] flex flex-col justify-between min-h-[220px]" style={{ background: "rgba(10,15,35,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-3">Phase 3</div>
            <div>
              <h4 className="font-black text-xl mb-3 text-white">Docker Sandbox</h4>
              <p className="text-sm font-medium text-white/80 leading-relaxed">Safely executes Jest/Supertest scripts in ephemeral containers to intercept fatal crashes.</p>
            </div>
          </div>
          <div className="p-8 rounded-[2rem] flex flex-col justify-between min-h-[220px]" style={{ background: "rgba(10,15,35,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-3">Phase 4</div>
            <div>
              <h4 className="font-black text-xl mb-3 text-white">Critic Agent</h4>
              <p className="text-sm font-medium text-white/80 leading-relaxed">Queries ChromaDB memory to synthesize targeted repairs for raw errors.</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
];

export default function Domain() {
  return (
    <section id="domain" className="py-24 px-6 md:px-12 lg:px-20" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1300px] mx-auto">
        
        {/* ── Header ── */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-5"
            style={{ color: "#1E3A8A", borderColor: "rgba(30,58,138,0.3)", background: "rgba(30,58,138,0.06)" }}>
            Project Domain
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]"
            style={{ color: "#0F172A", letterSpacing: "-0.03em" }}>
            Research Details.
          </h2>
        </div>

        {/* ── Sticky Stacking Cards ── */}
        {/* Note: the pb-[20vh] ensures scroll space at the bottom before moving to next section */}
        <div className="relative pb-[20vh]">
          {domainSections.map((sec, index) => {
            const Icon = sec.icon;
            
            // Calculates a sticky top offset. Starts at 100px, adds 30px per card for a deck effect.
            const topOffset = 100 + (index * 30);

            return (
              <div 
                key={sec.id}
                // md:sticky enables stacking ONLY on tablet/desktop. On mobile, it scrolls normally to prevent UX issues.
                className="lg:sticky shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-[3rem] border domain-sticky-card"
                style={{ 
                  top: `${topOffset}px`, 
                  background: sec.bgColor, 
                  color: sec.textColor,
                  borderColor: "rgba(15,23,42,0.05)",
                  marginBottom: '10vh', 
                  zIndex: index * 10
                }}
              >
                <div className="p-8 md:p-14 lg:p-20 flex flex-col h-full">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-12 shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ 
                          background: ["#1E293B","#1E3A8A","#2563EB"].includes(sec.bgColor) ? "rgba(255,255,255,0.15)" : "rgba(30,58,138,0.08)",
                          border: ["#1E293B","#1E3A8A","#2563EB"].includes(sec.bgColor) ? "1px solid rgba(255,255,255,0.20)" : "1px solid rgba(30,58,138,0.12)"
                        }}>
                        <Icon className="w-6 h-6" style={{ color: sec.textColor }} />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black tracking-tight">
                        {sec.title}
                      </h3>
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 hidden md:block">
                      0{index + 1} / 0{domainSections.length}
                    </div>
                  </div>

                  {/* Card Content - No inner scroll! It flows naturally. */}
                  <div className="flex-1 w-full">
                    {sec.content}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
