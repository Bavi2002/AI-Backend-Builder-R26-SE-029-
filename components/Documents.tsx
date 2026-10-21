"use client";

import { useState } from "react";
import { FileText, Lock, FileSpreadsheet, FileIcon, ArrowUpRight, BookOpen } from "lucide-react";

const documents = [
  {
    id: 0,
    title: "TAF Document",
    description: "Topic Assessment Form(TAF) - Introduces the topic, the past research, research gaps, objectives, and the approach taken.",
    link: "https://drive.google.com/file/d/1pVGIq9NlY_B5iNjEXrTOIJPOqjsuGN7J/view?usp=sharing",
    status: "available",
    type: "PDF",
    icon: FileText,
    color: "#9e9e9eff",
  },
  {
    id: 1,
    title: "Proposal Document",
    description: "Detailed comprehensive proposal encompassing all individual research contributions and methodology.",
    link: "https://drive.google.com/drive/folders/1lplLVLNUGjibaRaXJvcjgGzanzg87-Nw?usp=sharing",
    status: "available",
    type: "PDF",
    icon: FileText,
    color: "#60A5FA",
  },
  {
    id: 2,
    title: "Check List Documents",
    description: "Evaluation criteria, progress tracking checklists, and internal milestone markers.",
    link: "https://drive.google.com/drive/folders/1sRhcwnWnd-euUW8quO-UnjRU4emnFYVf?usp=sharing",
    status: "available",
    type: "XLSX",
    icon: FileSpreadsheet,
    color: "#93C5FD",
  },
  {
    id: 3,
    title: "Draft Individual Thesis",
    description: "Individual research thesis drafts covering distinct subsystem architectures and research contributions.",
    link: "https://drive.google.com/drive/folders/1nUwwnXIbz25p7n174_Mzg6e5VEQF8XRx?usp=sharing",
    status: "available",
    type: "PDF",
    icon: FileText,
    color: "#818CF8",
  },
  {
    id: 4,
    title: "Research Paper",
    description: "Official research publication detailing the multi-agent backend generation framework, evaluation, and empirical results.",
    link: "https://drive.google.com/file/d/1I6VwvJQXJZ3GtcwYI296eOSbJCqU9ejl/view?usp=sharing",
    status: "available",
    type: "PDF",
    icon: BookOpen,
    color: "#38BDF8",
  },
  {
    id: 5,
    title: "Final Document",
    description: "The complete thesis encompassing all individual reports alongside the main system documentation.",
    link: "https://drive.google.com/file/d/1_lCmp0sU41cuvHB-Xftq5WwTSh6BDjKP/view?usp=drive_link",
    status: "available",
    type: "PDF",
    icon: FileIcon,
    color: "#3B82F6",
  },
];

export default function Documents() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const renderCardContent = (doc: typeof documents[0], isHovered: boolean) => {
    const isAvailable = doc.status === "available";
    const Icon = doc.icon;
    const accent = doc.color;

    return (
      <a
        href={doc.link}
        target={isAvailable ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10 ${isAvailable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      >

        {/* ── Background Fillers ── */}

        {/* 1. Closed State Blueprint Pattern (Dots) */}
        <div className={`absolute inset-0 pointer-events-none transition-all duration-[1000ms]
          ${isHovered ? 'opacity-0' : 'opacity-100'}
        `}
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* 2. Closed State Massive Extension Watermark */}
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-[1000ms]
          ${isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100 delay-[200ms]'}
        `}>
          <div className="text-[70px] md:text-[100px] font-black tracking-tighter select-none" style={{ color: `${accent}2D` }}>
            .{doc.type.toLowerCase()}
          </div>
        </div>

        {/* 3. Closed State Top Right Size Pill */}
        <div className={`absolute top-6 right-6 md:top-10 md:right-10 pointer-events-none transition-all duration-700
          ${isHovered ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0 delay-[300ms]'}
        `}>

        </div>

        {/* 2. Hovered State Abstract Lines (Only visible on desktop) */}
        <div className={`hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-3 pointer-events-none transition-all duration-[1000ms]
          ${isHovered ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 translate-x-8'}
        `}>
          <div className="w-32 h-1.5 bg-[rgba(255,255,255,0.03)] rounded-full" />
          <div className="w-24 h-1.5 bg-[rgba(255,255,255,0.03)] rounded-full" />
          <div className="w-40 h-1.5 bg-[rgba(255,255,255,0.03)] rounded-full" />
          <div className="w-20 h-1.5 bg-[rgba(255,255,255,0.03)] rounded-full" />
          <div className="w-32 h-1.5 bg-[rgba(255,255,255,0.03)] rounded-full mt-2" />
          <div className="w-28 h-1.5 bg-[rgba(255,255,255,0.03)] rounded-full" />
        </div>

        {/* Top Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-[800ms] border
              ${isHovered ? 'scale-110 rotate-3' : 'scale-100'}
            `} style={{
                backgroundColor: isHovered ? `${accent}26` : `${accent}26`,
                borderColor: isHovered ? `${accent}4D` : `${accent}66`,
                boxShadow: isHovered ? `0 10px 20px -5px ${accent}33` : 'none'
              }}>
              <Icon className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-[800ms]" style={{ color: accent }} />
            </div>
            {isHovered && (
              <span className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] transition-opacity duration-500" style={{ color: accent }}>
                {doc.type}
              </span>
            )}
          </div>

          {/* Action Button (Fades out when not hovered to save space) */}
          <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-[800ms]
            ${isHovered ? 'opacity-100 scale-100 shadow-xl' : 'opacity-0 scale-50 pointer-events-none'}
          `} style={isHovered ? { backgroundColor: accent, color: "#FAFAFA" } : {}}>
            {isAvailable ? <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" /> : <Lock className="w-4 h-4 md:w-5 md:h-5" />}
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-auto relative z-10">

          <div className={`flex items-center gap-3 transition-all duration-500 overflow-hidden
            ${isHovered ? 'max-h-10 opacity-100 mb-3' : 'max-h-0 opacity-0 mb-0'}
          `}>
            <div className={`w-2 h-2 rounded-full animate-pulse`} style={{ backgroundColor: accent }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: accent }}>
              {isAvailable ? 'Ready for Download' : 'Locked'}
            </span>
          </div>

          <h3 className={`font-black tracking-tight transition-all duration-500 line-clamp-2 text-[#FAFAFA]
            ${isHovered ? 'text-3xl md:text-4xl lg:text-5xl mb-4' : 'text-xl'}
          `} style={{ letterSpacing: "-0.02em" }}>
            {doc.title}
          </h3>

          <p className={`text-sm md:text-base leading-relaxed font-medium max-w-md transition-all duration-500 overflow-hidden
            ${isHovered ? 'max-h-40 opacity-100 text-[rgba(255,255,255,0.7)]' : 'max-h-0 opacity-0 text-transparent'}
          `}>
            {doc.description}
          </p>
        </div>
      </a>
    );
  };

  const getCardStyle = (index: number, isHovered: boolean) => {
    const doc = documents[index];
    return {
      background: "#0A0F1C",
      border: `1px solid ${isHovered ? `${doc.color}80` : `${doc.color}33`}`,
      boxShadow: isHovered ? `0 40px 100px -20px ${doc.color}33` : "none",
    };
  };

  const getBackgroundGlow = (index: number, isHovered: boolean) => {
    const doc = documents[index];
    return (
      <div className={`absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-[1000ms]
        ${isHovered ? 'opacity-20' : 'opacity-0'}
      `} style={{ background: doc.color }} />
    );
  };

  const getMassiveIcon = (index: number, isHovered: boolean) => {
    const doc = documents[index];
    const Icon = doc.icon;
    const accent = doc.color;

    return (
      <Icon className={`absolute pointer-events-none transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isHovered ? '-bottom-16 -right-16 w-[250px] h-[250px] md:w-[350px] md:h-[350px] scale-110 -rotate-12 opacity-[0.08]' : '-bottom-4 -right-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px] scale-100 rotate-0 opacity-[0.06]'}
      `} style={{ color: accent }} />
    );
  };

  return (
    <section id="documents" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" style={{ background: "#0A0F1C" }}>

      <div className="max-w-[1450px] mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-6"
              style={{ color: "#3B82F6", background: "rgba(30,58,138,0.1)", border: "1px solid rgba(30,58,138,0.2)" }}>
              Document Repository
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1]"
              style={{ color: "#FAFAFA", letterSpacing: "-0.02em" }}>
              Project<br />
              <span style={{ color: "#3B82F6" }}>Documentation.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed max-w-sm md:text-right font-medium" style={{ color: "#64748B" }}>
            Hover over any document to expand its details. The official repository for all research reports, theses, and evaluation files.
          </p>
        </div>

        {/* ── Desktop: Elastic Bento Grid (Interactive Physics) ── */}
        <div className="hidden lg:flex flex-col gap-6 h-[780px] w-full">

          {/* Row 1: 3 Cards */}
          <div className={`flex gap-6 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
            ${hoveredIndex <= 2 ? 'flex-[1.4]' : 'flex-1'}
          `}>
            {/* Card 0 */}
            <div
              onMouseEnter={() => setHoveredIndex(0)}
              className={`relative overflow-hidden rounded-[3rem] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${hoveredIndex === 0 ? 'flex-[1.8]' : hoveredIndex <= 2 ? 'flex-[0.7]' : 'flex-1'}
              `}
              style={getCardStyle(0, hoveredIndex === 0)}
            >
              {getBackgroundGlow(0, hoveredIndex === 0)}
              {getMassiveIcon(0, hoveredIndex === 0)}
              {renderCardContent(documents[0], hoveredIndex === 0)}
            </div>

            {/* Card 1 */}
            <div
              onMouseEnter={() => setHoveredIndex(1)}
              className={`relative overflow-hidden rounded-[3rem] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${hoveredIndex === 1 ? 'flex-[1.8]' : hoveredIndex <= 2 ? 'flex-[0.7]' : 'flex-1'}
              `}
              style={getCardStyle(1, hoveredIndex === 1)}
            >
              {getBackgroundGlow(1, hoveredIndex === 1)}
              {getMassiveIcon(1, hoveredIndex === 1)}
              {renderCardContent(documents[1], hoveredIndex === 1)}
            </div>

            {/* Card 2 */}
            <div
              onMouseEnter={() => setHoveredIndex(2)}
              className={`relative overflow-hidden rounded-[3rem] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${hoveredIndex === 2 ? 'flex-[1.8]' : hoveredIndex <= 2 ? 'flex-[0.7]' : 'flex-1'}
              `}
              style={getCardStyle(2, hoveredIndex === 2)}
            >
              {getBackgroundGlow(2, hoveredIndex === 2)}
              {getMassiveIcon(2, hoveredIndex === 2)}
              {renderCardContent(documents[2], hoveredIndex === 2)}
            </div>
          </div>

          {/* Row 2: 3 Cards */}
          <div className={`flex gap-6 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
            ${hoveredIndex >= 3 ? 'flex-[1.4]' : 'flex-1'}
          `}>
            {/* Card 3 */}
            <div
              onMouseEnter={() => setHoveredIndex(3)}
              className={`relative overflow-hidden rounded-[3rem] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${hoveredIndex === 3 ? 'flex-[1.8]' : hoveredIndex >= 3 ? 'flex-[0.7]' : 'flex-1'}
              `}
              style={getCardStyle(3, hoveredIndex === 3)}
            >
              {getBackgroundGlow(3, hoveredIndex === 3)}
              {getMassiveIcon(3, hoveredIndex === 3)}
              {renderCardContent(documents[3], hoveredIndex === 3)}
            </div>

            {/* Card 4 */}
            <div
              onMouseEnter={() => setHoveredIndex(4)}
              className={`relative overflow-hidden rounded-[3rem] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${hoveredIndex === 4 ? 'flex-[1.8]' : hoveredIndex >= 3 ? 'flex-[0.7]' : 'flex-1'}
              `}
              style={getCardStyle(4, hoveredIndex === 4)}
            >
              {getBackgroundGlow(4, hoveredIndex === 4)}
              {getMassiveIcon(4, hoveredIndex === 4)}
              {renderCardContent(documents[4], hoveredIndex === 4)}
            </div>

            {/* Card 5 */}
            <div
              onMouseEnter={() => setHoveredIndex(5)}
              className={`relative overflow-hidden rounded-[3rem] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${hoveredIndex === 5 ? 'flex-[1.8]' : hoveredIndex >= 3 ? 'flex-[0.7]' : 'flex-1'}
              `}
              style={getCardStyle(5, hoveredIndex === 5)}
            >
              {getBackgroundGlow(5, hoveredIndex === 5)}
              {getMassiveIcon(5, hoveredIndex === 5)}
              {renderCardContent(documents[5], hoveredIndex === 5)}
            </div>
          </div>

        </div>

        {/* ── Mobile/Tablet: Standard Vertical Stack ── */}
        <div className="lg:hidden flex flex-col gap-6 mt-16">
          {documents.map((doc, index) => (
            <div
              key={doc.title}
              className={`relative overflow-hidden rounded-[2.5rem] h-[350px] md:h-[400px]`}
              style={getCardStyle(index, true)}
            >
              {getMassiveIcon(index, true)}
              {renderCardContent(doc, true)}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
