"use client";

import { useState } from "react";
import { Download, Check, Copy, ExternalLink, Terminal, Shield, Zap, Star, Cpu, ArrowUpRight } from "lucide-react";

export default function ExtensionDownload() {
  const [copied, setCopied] = useState(false);

  const marketplaceUrl = "https://marketplace.visualstudio.com/items?itemName=R26-SE-029.ai-backend-builder";
  const vscodeDeepLink = "vscode:extension/R26-SE-029.ai-backend-builder";
  const officialCommand = "ext install R26-SE-029.ai-backend-builder";

  const handleCopy = () => {
    navigator.clipboard.writeText(officialCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="extension" className="py-24 px-6 md:px-12 lg:px-20 relative flex flex-col items-center justify-center overflow-hidden" style={{ background: "#0A0F1C" }}>
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "#2563EB", opacity: 0.08 }}
      />

      {/* ── Header (Matches HowItWorks & TechStack) ── */}
      <div className="text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20 text-white/80 bg-white/5 backdrop-blur-md">
          Visual Studio Marketplace
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter" style={{ color: "#FAFAFA", letterSpacing: "-0.02em" }}>
          Get the  <span style={{ color: "#2563EB" }}>Extension.</span>
        </h2>
        <p className="mt-6 text-sm md:text-base font-medium max-w-lg mx-auto" style={{ color: "#94A3B8" }}>
          Scaffold, validate, and debug complete full-stack Node.js &amp; FastAPI backends straight from your editor.
        </p>
      </div>

      {/* ── Main Extension Showcase Card (Centered Dark Glass Card) ── */}
      <div className="w-full max-w-4xl rounded-[2.5rem] border border-white/15 bg-[#0F172A]/90 backdrop-blur-3xl overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] relative p-8 sm:p-12 z-10">
        
        {/* Product Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-5">
            {/* Extension Icon / Logo */}
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/10"
              style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)" }}
            >
              <svg className="w-9 h-9 sm:w-11 sm:h-11 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .32 8.7l3.23 2.946-3.23 2.946a1 1 0 0 0 .007 1.439l1.322 1.202a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 19.346V4.254a1.5 1.5 0 0 0-.85-1.347zM18 17.5l-8-6 8-6v12z"/>
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  AI Backend Builder
                </h3>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    color: "#60A5FA",
                    border: "1px solid rgba(59,130,246,0.3)",
                  }}
                >
                  v0.1.0
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 flex items-center gap-2 flex-wrap">
                <span>Publisher:</span>
                <span className="font-semibold text-slate-200">R26-SE-029</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="text-blue-400 flex items-center gap-1 font-medium">
                  <Shield className="w-3.5 h-3.5" /> Verified Research Release
                </span>
              </p>
            </div>
          </div>

          {/* Rating stars */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1.5">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Autonomous Multi-Agent IDE
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-medium mt-6">
          Directly orchestrates Planner, CodeGen, Validator, and Debugger agents inside your editor. Transforms natural language specifications into complete, tested MVC backend codebases with human-in-the-loop review.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {["VS Code Extension", "Machine Learning", "Autonomous Agents", "FastAPI", "Express", "Docker"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-[11px] font-medium text-slate-300"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Official Installation Command Box ── */}
        <div
          className="mt-8 p-4 sm:p-5 rounded-2xl shadow-inner"
          style={{
            background: "#080E1C",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Official Installation Command
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">VS Code Quick Open (Ctrl+P / Cmd+P)</span>
          </div>

          <div
            className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-mono text-xs sm:text-sm"
            style={{
              background: "#030712",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex items-center gap-2.5 text-slate-200 truncate">
              <span className="text-blue-400 select-none font-bold">&gt;</span>
              <span className="truncate select-all font-medium text-white">{officialCommand}</span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex-shrink-0"
              style={{
                background: copied ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.1)",
                color: copied ? "#34D399" : "#FAFAFA",
                border: copied ? "1px solid rgba(16, 185, 129, 0.4)" : "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Primary Action Buttons ── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8">
          {/* 1. Official Marketplace Link */}
          <a
            href={marketplaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-600/30"
            style={{ background: "#2563EB" }}
          >
            <Download className="w-4 h-4" />
            Install from Visual Studio Marketplace
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>

          {/* 2. Direct VS Code Application Deep Link */}
          <a
            href={vscodeDeepLink}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] text-slate-200 hover:text-white border"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            <ExternalLink className="w-4 h-4 text-blue-400" />
            Open in VS Code App
          </a>
        </div>

        {/* ── Bottom Feature Highlights ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10 text-center">
          <div className="flex flex-col items-center gap-1 p-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-slate-200">Local LLM Compatible</span>
            <span className="text-[11px] text-slate-400">Ollama · Qwen2.5-Coder</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-slate-200">Deterministic Safety</span>
            <span className="text-[11px] text-slate-400">Isolated Docker Sandbox</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-slate-200">Zero Telemetry</span>
            <span className="text-[11px] text-slate-400">100% Private Codebase</span>
          </div>
        </div>

      </div>

    </section>
  );
}
