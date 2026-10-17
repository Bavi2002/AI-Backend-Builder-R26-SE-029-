"use client";

import { useState } from "react";
import { Terminal, Map, Code2, ClipboardCheck, Rocket } from "lucide-react";

// Data
const steps = [
  {
    n: "01",
    title: "Install Extension",
    body: "Simply install the AI Backend Builder extension directly from the VS Code marketplace to get started. No local server required.",
    code: "code --install-extension R26-SE-029.ai-backend-builder",
    tag: "Setup",
    Icon: Terminal,
    color: "#FFFFFF", // White
  },
  {
    n: "02",
    title: "Describe Architecture",
    body: "Open the Command Palette and run 'Build Backend with AI'. Type a natural-language description — endpoints, models, auth.",
    code: '"Build a REST API with user auth and orders"',
    tag: "Prompt",
    Icon: Map,
    color: "#BFDBFE", // Very Light Blue
  },
  {
    n: "03",
    title: "Multi-Agent Build",
    body: "Planner maps the architecture. CodeGen writes every file. Validator lint-checks. Debug runs tests and fixes errors automatically.",
    code: "12 files · 5 agents · 0 manual edits",
    tag: "Generation",
    Icon: Code2,
    color: "#93C5FD", // Light Blue
  },
  {
    n: "04",
    title: "Review & Approve",
    body: "At each checkpoint the extension surfaces the plan for your review. Approve, retry with feedback, or skip — you stay in control.",
    code: "Human-in-the-loop approval gate",
    tag: "Control",
    Icon: ClipboardCheck,
    color: "#60A5FA", // Medium Light Blue
  },
  {
    n: "05",
    title: "Ship Production",
    body: "Receive a fully tested, production-ready backend in your workspace. All dependencies installed, all files wired up.",
    code: "npm start → Server running 🚀",
    tag: "Deploy",
    Icon: Rocket,
    color: "#3B82F6", // Theme Blue
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="pipeline" className="py-24 px-6 md:px-12 lg:px-20 relative flex flex-col items-center justify-center min-h-screen" style={{ background: "#0A0F1C" }}>

      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] transition-colors duration-1000 pointer-events-none"
        style={{ background: steps[activeStep].color, opacity: 0.05 }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20 text-white/80 bg-white/5 backdrop-blur-md">
          The Pipeline
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter" style={{ color: "#FAFAFA" }}>
          Prompt to prod <span style={{ color: "#2563EB" }}>in minutes.</span>
        </h2>
      </div>

      {/* ── Compact Interactive Widget ── */}
      <div className="w-full max-w-5xl rounded-[2.5rem] border border-white/20 bg-[#0F172A]/80 backdrop-blur-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] relative flex flex-col z-10">

        {/* 1. Top Navigation Track */}
        <div className="relative border-b border-white/15">

          {/* Animated Active Pill Indicator (Desktop only) */}
          <div className="hidden md:flex absolute inset-0 p-2 pointer-events-none">
            <div
              className="h-full w-1/5 rounded-[2rem] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] border"
              style={{
                transform: `translateX(${activeStep * 100}%)`,
                backgroundColor: `${steps[activeStep].color}1A`,
                borderColor: `${steps[activeStep].color}4D`,
                boxShadow: `0 0 30px ${steps[activeStep].color}1A`
              }}
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-center p-2 gap-y-2">
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <button
                  key={step.n}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`flex-shrink-0 flex-1 min-w-[120px] md:w-1/5 py-4 flex flex-col items-center justify-center gap-1.5 relative z-10 transition-all duration-500 rounded-[2rem]
                    ${isActive ? 'bg-[rgba(255,255,255,0.03)] md:bg-transparent' : 'hover:bg-[rgba(255,255,255,0.04)] opacity-50 hover:opacity-100'}
                  `}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest transition-colors duration-500"
                    style={{ color: isActive ? step.color : "rgba(255,255,255,0.4)" }}>
                    Step {step.n}
                  </span>
                  <span className={`text-sm font-bold tracking-tight transition-colors duration-500 
                    ${isActive ? 'text-[#FAFAFA]' : 'text-white/70'}
                  `}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Content Area */}
        <div className="grid w-full">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            const Icon = step.Icon;
            const accent = step.color;

            return (
              <div
                key={step.n}
                className={`col-start-1 row-start-1 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                   ${isActive ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10' : 'opacity-0 translate-y-12 scale-95 pointer-events-none z-0'}
                 `}
              >

                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col justify-center items-start relative z-10 w-full">

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border shadow-lg"
                    style={{ backgroundColor: `${accent}26`, borderColor: `${accent}66` }}>
                    <Icon className="w-6 h-6" style={{ color: accent }} />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#FAFAFA]">
                    {step.title}
                  </h3>

                  <p className="text-base font-medium leading-relaxed max-w-md" style={{ color: "rgba(240,234,208,0.7)" }}>
                    {step.body}
                  </p>
                </div>

                {/* Right: Floating Code Terminal */}
                <div className="flex-1 w-full flex items-center justify-center relative z-10">
                  <div className="w-full max-w-md bg-[#0F172A] rounded-2xl border border-white/20 shadow-2xl p-6 flex flex-col gap-4">

                    {/* Mac window dots */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                    </div>

                    {/* Terminal Output */}
                    <div className="font-mono text-sm font-bold tracking-tight py-6 break-words" style={{ color: accent }}>
                      <span className="opacity-50 mr-2">{'>'}</span>
                      {step.code}
                    </div>

                  </div>
                </div>

                {/* Massive Ghost Icon inside widget */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] transition-all duration-1000 scale-150 -translate-x-[20%]">
                  <Icon className="w-96 h-96" style={{ color: accent }} />
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}