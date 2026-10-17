"use client";

import { Calendar, Award, CheckCircle2, Circle } from "lucide-react";

const milestones = [
  {
    id: "proposal",
    title: "Proposal Presentation",
    date: "17.03.2026",
    details: "Initial submission of the project concept, literature review, and methodology.",
    status: "completed",
  },
  {
    id: "progress-1",
    title: "Progress Presentation I",
    date: "12.05.2026",
    details: "First assessment of architecture planning and initial prototypes.",
    status: "completed",
  },
  {
    id: "progress-2",
    title: "Progress Presentation II",
    date: "01.09.2026",
    details: "Second assessment focusing on core feature implementation and testing.",
    status: "completed",
  },
  {
    id: "final",
    title: "Final Presentation",
    date: "21.10.2026",
    details: "Comprehensive evaluation of the fully implemented autonomous multi-agent system.",
    status: "upcoming",
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* ── Header ── */}
        <div className="text-center mb-24 md:mb-32">
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            style={{ color: "#FAFAFA", background: "#2563EB" }}>
            The Roadmap
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1]"
            style={{ color: "#0F172A" }}>
            Project Timeline.
          </h2>
        </div>

        {/* ── Horizontal Roadmap (Desktop) / Vertical (Mobile) ── */}
        <div className="relative">
          
          {/* Continuous Track Line (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] rounded-full z-0"
            style={{ background: "rgba(15,23,42,0.05)" }}>
            <div className="absolute top-0 left-0 h-full rounded-full"
              style={{ background: "#2563EB", width: "75%", boxShadow: "0 0 15px rgba(37,99,235,0.5)" }} />
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {milestones.map((m, i) => {
              const isCompleted = m.status === 'completed';
              const isCurrent = m.status === 'current';
              const isUpcoming = m.status === 'upcoming';
              
              return (
                <div key={m.id} className="group flex flex-col">
                  
                  {/* Node (Desktop maps to horizontal line, Mobile maps to top of card) */}
                  <div className="mb-6 lg:mb-12 flex items-center justify-start lg:justify-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative"
                      style={{ 
                        background: isCompleted || isCurrent ? "#FAFAFA" : "rgba(15,23,42,0.04)",
                        border: `2px solid ${isCompleted || isCurrent ? '#2563EB' : 'rgba(15,23,42,0.05)'}`,
                        boxShadow: isCurrent ? '0 0 30px -5px rgba(37,99,235,0.4)' : 'none'
                      }}>
                      {/* Connecting Line for Mobile */}
                      {i !== milestones.length - 1 && (
                        <div className="lg:hidden absolute top-14 left-1/2 -translate-x-1/2 w-[2px] h-12"
                          style={{ background: isCompleted || isCurrent ? "#2563EB" : "rgba(15,23,42,0.05)" }} />
                      )}

                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6" style={{ color: "#2563EB" }} />
                      ) : isCurrent ? (
                        <Circle className="w-6 h-6 animate-pulse" style={{ color: "#2563EB", fill: "rgba(37,99,235,0.2)" }} />
                      ) : (
                        <span className="font-black text-lg" style={{ color: "rgba(15,23,42,0.2)" }}>
                          0{i + 1}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                    style={{ 
                      background: isCurrent ? "rgba(15,23,42,0.04)" : "rgba(15,23,42,0.04)",
                      border: `1px solid ${isCurrent ? 'rgba(37,99,235,0.2)' : 'rgba(15,23,42,0.03)'}`,
                    }}>
                    
                    {/* Glowing highlight inside current card */}
                    {isCurrent && (
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none"
                        style={{ background: "#2563EB", opacity: 0.15 }} />
                    )}

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-md"
                          style={{ 
                            color: isCompleted || isCurrent ? "#FAFAFA" : "rgba(15,23,42,0.5)",
                            background: isCompleted || isCurrent ? "#2563EB" : "rgba(15,23,42,0.05)"
                          }}>
                          {m.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold leading-tight mb-3" 
                        style={{ color: isUpcoming ? "rgba(15,23,42,0.4)" : "#0F172A" }}>
                        {m.title}
                      </h3>
                      
                      <p className="text-xs leading-relaxed" style={{ color: isUpcoming ? "rgba(15,23,42,0.5)" : "rgba(15,23,42,0.8)" }}>
                        {m.details}
                      </p>
                    </div>

                    <div className="mt-auto pt-5 border-t" style={{ borderColor: "rgba(15,23,42,0.05)" }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" style={{ color: "rgba(15,23,42,0.4)" }} />
                          <span className="text-[10px] font-mono font-bold" style={{ color: "rgba(15,23,42,0.6)" }}>{m.date}</span>
                        </div>
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
