"use client";

import { Phone, ExternalLink, GraduationCap, AtSign, ArrowRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const teamContacts = [
  {
    name: "Koshigawarman Y.",
    id: "IT22273444",
    role: "Research Group Leader",
    phone: "+94 77 568 7001",
    campusMail: "it22273444@my.sliit.lk",
    personalMail: "koshigawarman.y@gmail.com",
    focus: ["Testing Agent", "Docker Sandbox", "Static Safety Scan"],
    github: "https://github.com/Koshigawarman",
    linkedin: "https://www.linkedin.com/in/koshigawarman/",
  },
  {
    name: "Bavithran S.",
    id: "IT22115966",
    role: "Undergraduate",
    phone: "+94 77 484 0116",
    campusMail: "it22115966@my.sliit.lk",
    personalMail: "sivabavithran16@gmail.com",
    focus: ["FSM Orchestrator", "Critic Agent", "Episodic Memory"],
    github: "https://github.com/Bavi2002",
    linkedin: "https://www.linkedin.com/in/bavithran-sivanesan16/",
  },
  {
    name: "Denislas C. J.",
    id: "IT22102928",
    role: "Undergraduate",
    phone: "+94 77 366 6895",
    campusMail: "it22102928@my.sliit.lk",
    personalMail: "jdcoonghe03@gmail.com",
    focus: ["RAG Planning", "Vector DB", "Blueprints"],
    github: "https://github.com/coonghe03",
    linkedin: "https://www.linkedin.com/in/judes-denislas-coonghe/",
  },
  {
    name: "Dilakshan P.",
    id: "IT22297372",
    role: "Undergraduate",
    phone: "+94 75 580 0411",
    campusMail: "it22297372@my.sliit.lk",
    personalMail: "pahitharandilakshan@gmail.com",
    focus: ["Style-aware CodeGen", "Multi-tenant RAG", "Project Synthesis"],
    github: "https://github.com/dilakshanp",
    linkedin: "https://www.linkedin.com/in/dilakshan-pahitharan/",
  },
];

export default function Contact() {
  const [activeMember, setActiveMember] = useState(teamContacts[0]);

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" style={{ background: "#deecffff" }}>
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(rgba(37,99,235, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235, 0.2) 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1450px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">
        
        {/* ── Left Column: Intro & Template ── */}
        <div className="flex flex-col gap-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-6"
              style={{ color: "#3B82F6", borderColor: "rgba(30,58,138,0.3)", background: "rgba(30,58,138,0.06)" }}>
              Research Team & Contact
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6"
              style={{ color: "#0F172A" }}>
              Let's <span style={{ color: "#3B82F6" }}>Talk.</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#475569" }}>
              Meet the minds behind the research. Have questions about our architecture or interested in collaborating? Reach out directly.
            </p>
          </div>

          <div className="rounded-3xl p-8 flex flex-col justify-center border"
            style={{ background: "#FFFFFF", borderColor: "rgba(37,99,235,0.1)", boxShadow: "0 20px 40px -10px rgba(37,99,235,0.15)" }}>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(37,99,235,0.8)" }}>
              Institution
            </div>
            <div className="text-xl font-black leading-tight mb-3" style={{ color: "#0F172A", letterSpacing: "-0.02em" }}>
              Sri Lanka Institute of<br />Information Technology
            </div>
            <div className="text-xs leading-relaxed font-mono" style={{ color: "rgba(15,23,42,0.6)" }}>
              New Kandy Road, Malabe,<br />Sri Lanka
            </div>
          </div>

          {/* Email Template */}
          <div className="rounded-3xl p-6 flex flex-col shadow-sm"
            style={{ background: "#FFFFFF", border: "1px solid rgba(37,99,235,0.1)" }}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#3B82F6" }}>
                Quick Mail
              </div>
              <ExternalLink className="w-4 h-4" style={{ color: "rgba(30,58,138,0.4)" }} />
            </div>
            <a
              href="mailto:it22115966@my.sliit.lk?subject=Inquiry regarding R26-SE-029 Research"
              className="group flex items-center justify-between w-full py-4 px-5 rounded-2xl transition-all duration-300"
              style={{ background: "#F8FAFC", color: "#0F172A", border: "1px solid rgba(37,99,235,0.15)" }}
            >
              <span className="text-sm font-bold">Open Email Template</span>
              <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
                style={{ background: "rgba(30,58,138,0.1)" }}>
                <ArrowRight className="w-3.5 h-3.5" style={{ color: "#3B82F6" }} />
              </div>
            </a>
          </div>
        </div>

        {/* ── Right Column: Interactive Rolodex ── */}
        <div className="flex flex-col gap-4 h-full">
          {teamContacts.map((member) => {
            const isActive = activeMember.id === member.id;
            
            return (
              <div 
                key={member.id}
                onClick={() => setActiveMember(member)}
                className={`relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer border flex flex-col`}
                style={{ 
                  background: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                  borderColor: isActive ? "rgba(37,99,235,0.15)" : "rgba(37,99,235,0.05)",
                  boxShadow: isActive ? "0 20px 50px -10px rgba(37,99,235,0.15)" : "none"
                }}
              >
                
                {/* Header (Always Visible) */}
                <div className={`flex items-center justify-between px-6 md:px-8 z-20 shrink-0 transition-all duration-500
                  ${isActive ? 'h-[100px]' : 'h-[100px] hover:h-[110px]'}
                `}>
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-500 shrink-0"
                      style={{ 
                        background: isActive ? "rgba(37,99,235,0.08)" : "rgba(30,58,138,0.04)",
                        color: isActive ? "#2563EB" : "#3B82F6"
                      }}>
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-black mb-1 transition-colors duration-500 truncate"
                        style={{ color: isActive ? "#0F172A" : "#1E293B", letterSpacing: "-0.02em" }}>
                        {member.name}
                      </div>
                      <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 truncate"
                        style={{ color: isActive ? "#2563EB" : "#64748B" }}>
                        {member.role}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-6">
                    <div className="text-xs font-mono transition-colors duration-500"
                      style={{ color: "rgba(15,23,42,0.4)" }}>
                      {member.id}
                    </div>
                    
                    {/* Socials - Visible on header */}
                    <div className="flex gap-2">
                      <a href={member.github} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ 
                          background: isActive ? "rgba(37,99,235,0.05)" : "rgba(30,58,138,0.03)",
                          border: `1px solid ${isActive ? 'rgba(37,99,235,0.1)' : 'rgba(30,58,138,0.05)'}` 
                        }}>
                        <Github className="w-3.5 h-3.5" style={{ color: isActive ? "#2563EB" : "#3B82F6" }} />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ 
                          background: isActive ? "rgba(37,99,235,0.05)" : "rgba(30,58,138,0.03)",
                          border: `1px solid ${isActive ? 'rgba(37,99,235,0.1)' : 'rgba(30,58,138,0.05)'}` 
                        }}>
                        <Linkedin className="w-3.5 h-3.5" style={{ color: isActive ? "#2563EB" : "#3B82F6" }} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Expanded Content (CSS Grid Transition) */}
                <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 flex flex-col justify-end">
                      
                      {/* Focus Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.focus.map((f) => (
                          <span key={f} className="text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
                            style={{ background: "rgba(37,99,235,0.05)", border: "1px solid rgba(37,99,235,0.2)", color: "#2563EB" }}>
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* Contact Buttons */}
                      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        
                        {/* Phone */}
                        <a href={`tel:${member.phone}`} className="group flex flex-col p-4 md:p-5 rounded-2xl transition-colors hover:bg-white"
                          style={{ background: "#F8FAFC", border: "1px solid rgba(37,99,235,0.1)" }}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:bg-[#2563EB]"
                            style={{ background: "rgba(37,99,235,0.1)" }}>
                            <Phone className="w-4 h-4 transition-colors group-hover:text-[#FAFAFA]" style={{ color: "#2563EB" }} />
                          </div>
                          <div className="text-[10px] font-mono mb-1 uppercase tracking-widest" style={{ color: "rgba(15,23,42,0.5)" }}>Phone</div>
                          <div className="text-xs md:text-sm font-bold truncate transition-colors group-hover:text-[#2563EB]" style={{ color: "#0F172A" }}>{member.phone}</div>
                        </a>

                        {/* Campus Mail */}
                        <a href={`mailto:${member.campusMail}`} className="group flex flex-col p-4 md:p-5 rounded-2xl transition-colors hover:bg-white"
                          style={{ background: "#F8FAFC", border: "1px solid rgba(37,99,235,0.1)" }}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:bg-[#2563EB]"
                            style={{ background: "rgba(37,99,235,0.1)" }}>
                            <GraduationCap className="w-4 h-4 transition-colors group-hover:text-[#FAFAFA]" style={{ color: "#2563EB" }} />
                          </div>
                          <div className="text-[10px] font-mono mb-1 uppercase tracking-widest" style={{ color: "rgba(15,23,42,0.5)" }}>Campus Mail</div>
                          <div className="text-xs md:text-sm font-bold truncate transition-colors group-hover:text-[#2563EB]" style={{ color: "#0F172A" }}>{member.campusMail}</div>
                        </a>

                        {/* Personal Mail */}
                        <a href={`mailto:${member.personalMail}`} className="group flex flex-col p-4 md:p-5 rounded-2xl transition-colors hover:bg-white"
                          style={{ background: "#F8FAFC", border: "1px solid rgba(37,99,235,0.1)" }}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:bg-[#2563EB]"
                            style={{ background: "rgba(37,99,235,0.1)" }}>
                            <AtSign className="w-4 h-4 transition-colors group-hover:text-[#FAFAFA]" style={{ color: "#2563EB" }} />
                          </div>
                          <div className="text-[10px] font-mono mb-1 uppercase tracking-widest" style={{ color: "rgba(15,23,42,0.5)" }}>Personal Mail</div>
                          <div className="text-xs md:text-sm font-bold truncate transition-colors group-hover:text-[#2563EB]" style={{ color: "#0F172A" }}>{member.personalMail}</div>
                        </a>

                      </div>
                    </div>
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
