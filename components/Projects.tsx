import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const projectsList = portfolioData.projects;

  return (
    <section
      id="work"
      className="relative py-16 sm:py-24 lg:py-28 bg-obsidian-900 border-b border-hairline"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Section Header: 02 / SELECTED WORK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 pb-10 sm:pb-14 border-b border-hairline">
          <div className="lg:col-span-3 pt-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-stone">
              02 / SELECTED WORK
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-medium text-bone display-section mb-3">
              Commercial impact, verified.
            </h2>
            <p className="text-base text-bone-stone max-w-[56ch] leading-relaxed">
              Selected B2B market expansion, route-to-market, and enterprise deal mandates across Kenya and East Africa.
            </p>
          </div>
        </div>

        {/* 3 Inline Split-Row Case Studies (Zero Clicks Needed) */}
        <div className="divide-y divide-white/[0.08]">
          {projectsList.map((project) => (
            <article
              key={project.id}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-start"
            >
              {/* Left Column (4 cols): Mandate Title, Role & 3 Key Metric Pills */}
              <div className="lg:col-span-4 space-y-5">
                <div>
                  <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-brass mb-2">
                    <span>{project.index}</span>
                    <span className="text-bone-dim">/</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-bone tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-bone-stone mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* 3 Inline Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-obsidian-750 border border-hairline">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="font-display text-base sm:text-xl font-medium text-brass tracking-tight">
                        {m.value}
                      </span>
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-bone-stone mt-0.5 leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (8 cols): 3 Core Lines Directly Visible Inline (Context -> Action -> Outcome) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 pt-1">
                {/* 1. Context */}
                <div className="space-y-1.5 border-l border-hairline pl-4 md:border-l-0 md:pl-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-bone-stone">
                    01 / Context
                  </span>
                  <p className="text-base text-bone-muted leading-[1.6]">
                    {project.challenge}
                  </p>
                </div>

                {/* 2. Strategic Action */}
                <div className="space-y-1.5 border-l border-brass/40 pl-4 md:border-l-0 md:pl-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-brass">
                    02 / Strategic Action
                  </span>
                  <p className="text-base text-bone-muted leading-[1.6]">
                    {project.solution}
                  </p>
                </div>

                {/* 3. Verified Outcome */}
                <div className="space-y-1.5 border-l border-brass pl-4 md:border-l-0 md:pl-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-bone">
                    03 / Verified Outcome
                  </span>
                  <p className="text-base text-bone leading-[1.6] font-normal">
                    {project.impactSummary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
