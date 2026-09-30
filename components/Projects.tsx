"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import CaseStudyModal, { CaseStudyData } from "./CaseStudyModal";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<CaseStudyData | null>(null);

  const projectsList = portfolioData.projects;

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-8 lg:px-12 bg-obsidian-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header (.02) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-300 uppercase mb-2">
              <span className="text-white font-bold">.02</span>
              <span>—</span>
              <span>STRATEGIC INITIATIVES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              SELECTED CASE STUDIES
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase">
              PROVEN HIGH-IMPACT SCALE
            </span>
          </div>
        </div>

        {/* Project Cards Grid - 2x2 Dark Glassmorphic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl border border-white/10 bg-obsidian-900/50 hover:bg-obsidian-900/80 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-glow-card flex flex-col justify-between"
            >
              {/* Image Container with Title Overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold uppercase text-emerald-400">
                  <span>{project.category}</span>
                </div>

                <div className="absolute top-4 right-4 text-xs font-mono text-neutral-300 bg-obsidian-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {project.period}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-neutral-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {project.subtitle}
                  </p>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] mb-6">
                    {project.metrics.slice(0, 3).map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="font-display font-extrabold text-lg text-white">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3.5 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white hover:text-obsidian-950 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Eye className="w-4 h-4 text-neutral-400 group-hover/btn:text-obsidian-950 transition-colors" />
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal deep dive */}
        <CaseStudyModal
          study={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
