"use client";

import { Presentation, ArrowUpRight, Play, Calendar, BookOpen, Cpu, BrainCircuit, Flag } from "lucide-react";
import { useState } from "react";

const presentations = [
  {
    id: "proposal",
    title: "Proposal Presentation",
    date: "17.03.2026",
    description: "Initial research context, identified gaps, main objectives, and proposed architecture.",
    link: "https://canva.link/4vho3370393ao8e",
    color: "#FAFAFA",
    textColor: "#0F172A",
    activeBg: "linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)",
    icon: BookOpen,
    stats: { type: "Internal Review" }
  },
  {
    id: "progress-1",
    title: "Progress Presentation I",
    date: "12.05.2026",
    description: "Showcasing the functional development of core LangGraph agents and state transitions.",
    link: "https://canva.link/idnvkyvkw3n4llc",
    color: "#1E3A8A",
    textColor: "#F1F5F9",
    activeBg: "linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)",
    icon: Cpu,
    stats: { type: "Technical Demo" }
  },
  {
    id: "progress-2",
    title: "Progress Presentation II",
    date: "01.09.2026",
    description: "Advanced demonstration focusing on agent orchestration and ChromaDB episodic memory.",
    link: "https://canva.link/98vfs6hue25vor5",
    color: "#1E293B",
    textColor: "#FAFAFA",
    activeBg: "linear-gradient(135deg, #1E293B 0%, #475569 100%)",
    icon: BrainCircuit,
    stats: { type: "Integration Demo" }
  },
  {
    id: "final",
    title: "Final Presentation",
    date: "TBD",
    description: "Comprehensive final defense of the autonomous multi-agent software generation pipeline.",
    link: "#",
    color: "#2563EB",
    textColor: "#FAFAFA",
    activeBg: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    icon: Flag,
    stats: { type: "Final Defense" }
  },
];

export default function Presentations() {
  const [activeId, setActiveId] = useState(presentations[0].id);

  return (
    <section id="presentations" className="py-24 px-6 md:px-12 lg:px-20" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1450px] mx-auto">
        
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-5"
            style={{ color: "#1E3A8A", borderColor: "rgba(30,58,138,0.3)", background: "rgba(30,58,138,0.06)" }}>
            Visual Aides
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6"
            style={{ color: "#0F172A", letterSpacing: "-0.03em" }}>
            Slide Decks.
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#64748B" }}>
            Explore the presentation materials used during our milestone assessments. Click on any card to expand and view the full details.
          </p>
        </div>

        {/* ── Accordion Deck ── */}
        <div className="flex flex-col lg:flex-row h-[1100px] md:h-[800px] lg:h-[600px] gap-4 w-full">
          {presentations.map((pres, i) => {
            const isActive = activeId === pres.id;
            const Icon = pres.icon;

            return (
              <div 
                key={pres.id}
                onClick={() => setActiveId(pres.id)}
                className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] shadow-xl
                  ${isActive ? 'flex-[4] lg:flex-[3]' : 'flex-[1] lg:flex-1 hover:flex-[1.2] lg:hover:flex-[1.2]'}
                `}
                style={{ background: isActive ? pres.activeBg : pres.color }}
              >
                
                {/* ── Inactive Center Icon (Fills the middle when closed) ── */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 pointer-events-none
                  ${isActive ? 'opacity-0 scale-150' : 'opacity-30 scale-100'}
                `}>
                  <Icon className="w-16 h-16 lg:w-20 lg:h-20" style={{ color: pres.textColor, strokeWidth: 1.5 }} />
                </div>

                {/* ── Massive Watermark Graphic (Fills when open) ── */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1500ms] pointer-events-none
                  ${isActive ? 'scale-100 opacity-[0.07] rotate-0' : 'scale-50 opacity-0 -rotate-12'}
                `}>
                  <Icon className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]" style={{ color: pres.textColor, strokeWidth: 0.5 }} />
                </div>

                {/* ── Background Glows (Only when active) ── */}
                <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700
                  ${isActive ? 'opacity-20' : 'opacity-0'}
                `} style={{ background: pres.textColor }} />

                {/* ── Top Bar (Date & Badge) ── */}
                <div className="absolute top-0 left-0 right-0 p-6 lg:p-8 flex items-start justify-between z-30">
                  {/* Date (Always visible now, fills top left) */}
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-700 border
                    ${isActive ? 'bg-[rgba(15,23,42,0.05)] border-[rgba(15,23,42,0.1)]' : 'bg-transparent border-transparent opacity-60'}
                  `}>
                    <Calendar className="w-3.5 h-3.5" style={{ color: pres.textColor }} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest hidden md:inline-block"
                      style={{ color: pres.textColor }}>
                      {pres.date}
                    </span>
                  </div>

                  {/* Number Badge (Always visible, anchors top right) */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-sm font-black transition-colors duration-500 shrink-0"
                    style={{ 
                      background: isActive ? "rgba(15,23,42,0.15)" : "rgba(15,23,42,0.05)",
                      color: pres.textColor,
                      border: "1px solid rgba(15,23,42,0.1)"
                    }}>
                    0{i + 1}
                  </div>
                </div>

                {/* ── Card Content Container ── */}
                <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end z-20">
                  
                  <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 transition-transform duration-700 ${isActive ? 'translate-y-0' : 'translate-y-2 lg:translate-y-0'}`}>
                    
                    {/* Left side: Title & Description */}
                    <div className="w-full max-w-[450px]">
                      
                      {/* Assessment Type (Visible in both states to add structure to bottom) */}
                      <div className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-3 transition-opacity duration-700
                        ${isActive ? 'opacity-100' : 'opacity-40'}
                      `} style={{ color: pres.textColor }}>
                        {pres.stats.type}
                      </div>

                      <h3 className={`font-black tracking-tight leading-[1.1] transition-all duration-700 mb-4
                        ${isActive ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl opacity-90'}
                      `} style={{ color: pres.textColor }}>
                        {pres.title}
                      </h3>

                      {/* Expanded Content (Description & Stats) */}
                      <div className={`grid transition-all duration-700 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-sm md:text-base font-medium leading-relaxed"
                            style={{ color: pres.textColor, opacity: 0.8 }}>
                            {pres.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right side: Play Button (Only visible when active) */}
                    <div className={`transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}>
                      <a href={pres.link} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 hover:rotate-12"
                        style={{ 
                          background: "rgba(15,23,42,0.15)", 
                          border: "1px solid rgba(15,23,42,0.2)",
                          color: pres.textColor,
                          boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)"
                        }}>
                        <Play className="w-6 h-6 lg:w-8 lg:h-8 fill-current ml-1" />
                      </a>
                    </div>
                    
                  </div>

                </div>
                
                {/* ── Overlay for inactive cards to fade them slightly ── */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 pointer-events-none
                  ${isActive ? 'opacity-0' : 'opacity-10'}
                `} />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
