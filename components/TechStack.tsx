"use client";

import { Layers, Database, Cpu, Wrench, Globe, LayoutTemplate } from "lucide-react";

const stack = [
  {
    label: "VS Code Extension",
    role: "User Interface",
    items: ["TypeScript", "VS Code API", "WebView Panel", "SSE Client"],
    color: "#FAFAFA",
    Icon: LayoutTemplate,
  },
  {
    label: "AI Backend Server",
    role: "Orchestration",
    items: ["FastAPI", "Pydantic v2", "SSE-Starlette", "Python 3.11"],
    color: "#2563EB",
    Icon: Globe,
  },
  {
    label: "AI / LLM Engine",
    role: "Inference",
    items: ["Ollama", "qwen2.5-coder", "llama3.1:8b", "OpenRouter"],
    color: "#BFDBFE",
    Icon: Cpu,
  },
  {
    label: "Generated Stack",
    role: "Output Application",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    color: "#93C5FD",
    Icon: Layers,
  },
  {
    label: "Dev Tooling",
    role: "Quality Assurance",
    items: ["Jest", "Supertest", "Docker", "npm"],
    color: "#FAFAFA",
    Icon: Wrench,
  },
  {
    label: "Infrastructure",
    role: "Runtime & Memory",
    items: ["uvicorn", "dotenv", "ChromaDB", "FAISS"],
    color: "#2563EB",
    Icon: Database,
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 md:px-12 lg:px-20 relative flex flex-col items-center justify-center min-h-screen" style={{ background: "#0A0F1C" }}>
      
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20 text-white/80 bg-[rgba(255,255,255,0.04)] backdrop-blur-md">
          Technology Stack
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter" style={{ color: "#FAFAFA", letterSpacing: "-0.02em" }}>
          Six layers, <span style={{ color: "#2563EB" }}>one core.</span>
        </h2>
        <p className="mt-6 text-sm md:text-base font-medium max-w-lg mx-auto" style={{ color: "rgba(240,234,208,0.5)" }}>
          Hover over each architectural subsystem to reveal the core technologies powering the autonomous pipeline.
        </p>
      </div>

      {/* 1x6 Static Grid */}
      <div className="w-full max-w-[1550px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 relative z-10">
         {stack.map((layer, i) => {
            const Icon = layer.Icon;
            const accent = layer.color;
            
            return (
              <div 
                key={layer.label}
                className="group relative h-[420px] rounded-[2.5rem] border border-white/15 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-[600ms] hover:border-white/20 hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-2"
                style={{
                   boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
                }}
              >
                {/* Bottom Radial Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] pointer-events-none translate-y-8 group-hover:translate-y-0"
                  style={{ background: `radial-gradient(circle at 50% 100%, ${accent}26 0%, transparent 65%)` }}
                />

                {/* Centered Watermark Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1000ms] pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 group-hover:-rotate-12">
                   <Icon className="w-48 h-48" style={{ color: accent }} />
                </div>

                {/* Top Right Number Indicator */}
                <div className="absolute top-6 right-6 text-[10px] font-black font-mono opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ color: accent }}>
                   // 0{i+1}
                </div>
                
                {/* ── Center Content (Perfectly centered, slides up on hover) ── */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-16">
                   
                   {/* Icon Container with Crossfading Colors */}
                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/15 bg-[rgba(255,255,255,0.04)] transition-all duration-[600ms] shadow-xl mb-6 relative overflow-hidden group-hover:scale-110">
                      
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" 
                        style={{ backgroundColor: `${accent}26`, border: `1px solid ${accent}4D` }} 
                      />
                      
                      <Icon className="w-7 h-7 absolute text-white/60 transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                      
                      <Icon className="w-7 h-7 absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100 drop-shadow-2xl" 
                        style={{ color: accent }} 
                      />
                   </div>

                   <h3 className="text-xl font-black tracking-tight text-[#FAFAFA] text-center mb-2 leading-[1.1]">
                     {layer.label}
                   </h3>
                   <div className="text-[9px] font-bold uppercase tracking-widest text-white/60 text-center transition-colors duration-500 group-hover:text-white/60">
                     {layer.role}
                   </div>
                </div>

                {/* ── Tech Stack Pills Drawer (Slides up from bottom stacked) ── */}
                <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-col justify-center gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                   {layer.items.map((item) => (
                     <div key={item} 
                       className="px-3 py-2.5 rounded-[0.8rem] border bg-[#0F172A] flex items-center gap-2 shadow-lg justify-center relative overflow-hidden"
                       style={{ borderColor: `${accent}66` }}
                     >
                        {/* Tiny Background Glow */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundColor: accent }} />
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                        <span className="text-[10px] font-mono font-bold truncate z-10" style={{ color: accent }}>{item}</span>
                     </div>
                   ))}
                </div>

                {/* Hover Prompt (Fades out on hover) */}
                <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                   <div className="w-1 h-1 rounded-full" style={{ backgroundColor: accent }} />
                   <div className="w-1 h-1 rounded-full opacity-50" style={{ backgroundColor: accent }} />
                   <div className="w-1 h-1 rounded-full opacity-25" style={{ backgroundColor: accent }} />
                </div>

              </div>
            )
         })}
      </div>
    </section>
  );
}