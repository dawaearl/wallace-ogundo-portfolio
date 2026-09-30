"use client";

import React from "react";
import { Building2, ChevronRight, Layers, TrendingUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;
  const experiences = experience.timeline;
  const toolsAndCapabilities = experience.competencies;

  return (
    <section id="experience" className="relative py-28 px-6 sm:px-8 lg:px-12 bg-obsidian-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-300 uppercase mb-2">
              <span className="text-white font-bold">.01.2</span>
              <span>—</span>
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {experience.sectionTitle}
            </h2>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase whitespace-nowrap">
              12+ YEARS PROVEN TRACK RECORD
            </span>
          </div>
        </div>

        {/* Chronological Timeline Cards */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 mb-20">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian-950 border-2 border-white/40 group-hover:border-white group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-obsidian-900/40 hover:bg-obsidian-900/80 hover:border-white/20 transition-all duration-300 shadow-glow-card">
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 mb-2">
                      {exp.period}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                    <Building2 className="w-4 h-4 text-neutral-400" />
                    <span>{exp.company}</span>
                    <span className="text-neutral-500">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 flex items-center gap-1.5 mb-2">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Key Strategic Milestones & Impact</span>
                  </div>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide text-neutral-300 bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Toolset & Core Capabilities Matrix */}
        <div className="p-8 rounded-2xl border border-white/10 bg-obsidian-900/60 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
              Executive Competency & Capability Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolsAndCapabilities.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300 mb-4 border-b border-white/10 pb-2">
                  {cat.category}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
