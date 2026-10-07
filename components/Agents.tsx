"use client";

import { useState } from "react";
import { Network, FileText, Code, Bug, Eye } from "lucide-react";

const agents = [
  {
    id: "00",
    name: "Orchestrator",
    role: "Master State Controller",
    icon: Network,
    tagline: "The central nervous system of the autonomous pipeline.",
    specs: [
      { label: "Framework", value: "LangGraph" },
      { label: "Core Function", value: "State & Routing" },
      { label: "Communication", value: "SSE Streaming" }
    ],
    highlights: ["Task Delegation", "Memory Management", "Approval Gates"],
    model: "Stateless (Node.js)",
    color: "#2563EB"
  },
  {
    id: "01",
    name: "Planner",
    role: "Architecture Designer",
    icon: FileText,
    tagline: "Translates human requirements into a deterministic system blueprint.",
    specs: [
      { label: "Input", value: "SRS / Prompts" },
      { label: "Core Function", value: "Entity Mapping" },
      { label: "Output", value: "JSON Manifest" }
    ],
    highlights: ["Schema Validation", "Microservice Design", "Database Modeling"],
    model: "qwen2.5-coder",
    color: "#1E293B"
  },
  {
    id: "02",
    name: "CodeGen",
    role: "Synthesis Engine",
    icon: Code,
    tagline: "Systematically synthesizes source files from the architectural manifest.",
    specs: [
      { label: "Input", value: "JSON Manifest" },
      { label: "Core Function", value: "Code Generation" },
      { label: "Context", value: "Cross-file Vector sharing" }
    ],
    highlights: ["Iterative Synthesis", "MVC Scaffolding", "Import Consistency"],
    model: "qwen2.5-coder",
    color: "#0F172A"
  },
  {
    id: "03",
    name: "Debug Agent",
    role: "Execution Sandbox",
    icon: Bug,
    tagline: "A deterministic sandbox for testing generated code in isolation.",
    specs: [
      { label: "Environment", value: "Isolated Shell" },
      { label: "Core Function", value: "Compilation & Runtime" },
      { label: "Output", value: "Structured Crash Logs" }
    ],
    highlights: ["Automated Dependency Setup", "Stdout/Stderr Parsing", "Timeout Protection"],
    model: "Deterministic",
    color: "#475569"
  },
  {
    id: "04",
    name: "Critic",
    role: "Self-Healing Brain",
    icon: Eye,
    tagline: "The diagnostic analyst that patches bugs without blindly rewriting files.",
    specs: [
      { label: "Memory Bank", value: "ChromaDB Episodic" },
      { label: "Core Function", value: "Root Cause Analysis" },
      { label: "Output", value: "Targeted AST Patches" }
    ],
    highlights: ["Stack Trace Analysis", "Memory Retrieval", "Recursive Fixing"],
    model: "qwen2.5-coder",
    color: "#1E3A8A"
  },
];

export default function Agents() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculates the fanned 3D position of each card
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;

    if (diff === 0) {
      // Active Top Card
      return {
        zIndex: 50,
        transform: "rotate(0deg) translateY(0) translateX(0) scale(1)",
        opacity: 1,
        pointerEvents: "auto" as const,
        filter: "blur(0px)",
      };
    } else if (diff > 0) {
      // Fanned underneath (rotated and shifted right)
      return {
        zIndex: 50 - diff,
        transform: `rotate(${diff * 4}deg) translateX(${diff * 15}px) translateY(${diff * 30}px) scale(${1 - diff * 0.05})`,
        opacity: Math.max(1 - diff * 0.15, 0),
        pointerEvents: "none" as const,
        filter: `blur(${diff * 2}px)`,
      };
    } else {
      // Swiped away (Flies up and left, fades out)
      return {
        zIndex: 60,
        transform: "rotate(-15deg) translateX(-150px) translateY(-100px) scale(1.05)",
        opacity: 0,
        pointerEvents: "none" as const,
        filter: "blur(10px)",
      };
    }
  };

  return (
    <section id="agents" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-[0.15] transition-colors duration-1000"
        style={{ background: agents[activeIndex].color }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* ── Header ── */}
        <div className="text-center mb-4 md:mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-6 border"
            style={{ color: "#1E3A8A", background: "rgba(30,58,138,0.06)", borderColor: "rgba(30,58,138,0.2)" }}>
            Multi-Agent System
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1]"
            style={{ color: "#0F172A", letterSpacing: "-0.02em" }}>
            Five agents.<br />
            <span style={{ color: "#1E3A8A" }}>One pipeline.</span>
          </h2>
        </div>

        {/* ── Ultra-Modern Fanned Deck Layout ── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left: Typography-Driven Navigation Menu */}
          <div className="w-full lg:w-[450px] flex flex-col gap-6 relative z-30">
            {agents.map((agent, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={agent.id}
                  onClick={() => setActiveIndex(index)}
                  className="flex items-center gap-6 cursor-pointer group py-2"
                >
                  {/* Animated Dash Indicator */}
                  <div className={`h-[3px] rounded-full transition-all duration-500 ease-out shrink-0
                    ${isActive ? 'w-16 bg-[#1E3A8A]' : 'w-0 bg-transparent group-hover:w-8 group-hover:bg-[#1E3A8A]/30'}
                  `} />
                  
                  {/* Typography */}
                  <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter transition-all duration-500
                    ${isActive ? 'text-[#0F172A]' : 'text-slate-400 group-hover:text-slate-400'}
                  `}>
                    {agent.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Right: The Fanned Glass Deck */}
          <div className="flex-1 w-full h-auto lg:h-[750px] relative">
            {agents.map((agent, index) => {
              const isActive = index === activeIndex;
              const style = getCardStyle(index);
              const Icon = agent.icon;
              
              return (
                <div 
                  key={agent.id}
                  className={`
                    ${isActive ? 'relative z-50 flex mb-8 lg:absolute' : 'hidden lg:flex lg:absolute'}
                    lg:top-24 left-0 right-0 h-auto min-h-[500px] lg:h-[500px] rounded-[3rem] p-6 lg:p-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_30px_80px_-15px_rgba(15,23,42,0.4)] flex-col justify-between overflow-hidden
                  `}
                  style={{ 
                    ...style,
                    background: isActive ? "rgba(255, 255, 255, 0.95)" : "rgba(248, 250, 252, 0.95)", // Dim inactive cards slightly
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(15,23,42,0.15)"
                  }}
                >
                  
                  {/* Ambient Glow inside the card */}
                  <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000"
                    style={{ background: agent.color, opacity: isActive ? 0.15 : 0.05 }} />
                  
                  {/* Massive Background Ghost Number (Always visible) */}
                  <div className="absolute -top-12 -right-6 text-[200px] md:text-[250px] font-black leading-none pointer-events-none transition-opacity duration-1000" 
                    style={{ color: agent.color, letterSpacing: "-0.05em", opacity: isActive ? 0.05 : 0.15 }}>
                    {agent.id}
                  </div>

                  {/* ── Animated Inner Content (Only flies in when active) ── */}
                  <div className={`flex flex-col h-full justify-between relative z-10 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isActive ? 'opacity-100 translate-y-0 delay-[200ms]' : 'opacity-0 translate-y-12 pointer-events-none'}
                  `}>
                    
                    {/* ── Card Header ── */}
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center border shadow-sm"
                        style={{ background: "rgba(255,255,255,1)", borderColor: "rgba(30,58,138,0.15)" }}>
                        <Icon className="w-8 h-8" style={{ color: agent.color }} />
                      </div>
                      
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: agent.color }}>
                          {agent.role}
                        </div>
                        <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                          Powered by {agent.model}
                        </div>
                      </div>
                    </div>

                    {/* ── Card Body (Specs Grid instead of big paragraph) ── */}
                    <div className="flex-1 flex flex-col gap-6 pt-2">
                      {/* Tagline */}
                      <h4 className="text-xl md:text-2xl font-medium leading-snug max-w-lg" style={{ color: "#0F172A" }}>
                        {agent.tagline}
                      </h4>
                      
                      {/* Technical Specs Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t" style={{ borderColor: "rgba(30,58,138,0.1)" }}>
                        {agent.specs.map(spec => (
                          <div key={spec.label} className="flex flex-col gap-1.5">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">
                              {spec.label}
                            </span>
                            <span className="text-sm font-bold tracking-tight text-[#0F172A]">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── Card Footer (Sleek Highlights) ── */}
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest mb-4 text-slate-400">
                        Key Capabilities
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {agent.highlights.map(h => (
                          <div key={h} className="px-5 py-2.5 rounded-full border text-xs font-bold transition-colors hover:bg-slate-50"
                            style={{ 
                              background: "rgba(30,58,138,0.04)", 
                              borderColor: "rgba(30,58,138,0.1)", 
                              color: "#1E3A8A" 
                            }}>
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}