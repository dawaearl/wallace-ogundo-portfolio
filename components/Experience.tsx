import React from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { expertise } = portfolioData;

  return (
    <section
      id="expertise"
      className="relative py-16 sm:py-24 lg:py-28 bg-obsidian-800 border-b border-hairline"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Section Header: 01 / WHAT I DO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 pb-10 sm:pb-12 border-b border-hairline">
          <div className="lg:col-span-3 pt-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-stone">
              {expertise.sectionIndex}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-medium text-bone display-section mb-4">
              <span className="block">{expertise.headlineLines[0]}</span>
              <span className="block text-brass">{expertise.headlineLines[1]}</span>
            </h2>
            <p className="text-base sm:text-lg text-bone-stone max-w-[56ch] leading-relaxed">
              {expertise.subheadline}
            </p>
          </div>
        </div>

        {/* Executive Overview Plate */}
        <div className="my-10 sm:my-14 p-6 sm:p-8 bg-obsidian-900 border border-hairline space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brass rounded-full" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-brass">
              EXECUTIVE LEADERSHIP & PROJECT MANAGEMENT SUMMARY
            </span>
          </div>
          <p className="text-base sm:text-[17px] text-bone leading-relaxed font-sans font-normal">
            {expertise.intro}
          </p>
          <p className="text-sm sm:text-base text-bone-muted leading-relaxed">
            {expertise.summary}
          </p>
        </div>

        {/* 3 Strategic Pillars with 12 Core Capabilities */}
        <div className="space-y-12 sm:space-y-16">
          {expertise.pillars.map((pillar) => (
            <div
              key={pillar.code}
              className="border-t border-hairline pt-8 sm:pt-10 space-y-6"
            >
              {/* Pillar Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 pb-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs sm:text-sm text-brass tracking-[0.18em] font-medium">
                    PILLAR {pillar.code}
                  </span>
                  <span className="font-mono text-xs text-bone-dim">/</span>
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-bone tracking-tight">
                    {pillar.pillarTitle}
                  </h3>
                </div>
                <span className="font-mono text-xs text-bone-stone">
                  {pillar.pillarSubtitle}
                </span>
              </div>

              {/* 4 Service Cards Grid (1-col on mobile, 2-col on tablet/desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {pillar.services.map((service) => (
                  <div
                    key={service.id}
                    className="p-5 sm:p-6 bg-obsidian-850/80 hover:bg-obsidian-900 border border-hairline hover:border-brass/50 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-mono text-[11px] text-brass">
                          {service.index}
                        </span>
                        <a
                          href="#contact"
                          className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-dim group-hover:text-brass flex items-center gap-1 transition-colors link-scroll"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="w-3 h-3 text-brass glyph-ne" />
                        </a>
                      </div>
                      <h4 className="font-display text-base sm:text-lg font-medium text-bone group-hover:text-brass-light transition-colors duration-200 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-bone-stone leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Target Client Alignment Strip */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-hairline flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 sm:p-8 bg-obsidian-950 border border-hairline">
          <div className="max-w-[70ch] space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brass block">
              TARGET CLIENT & SECTOR ALIGNMENT
            </span>
            <p className="text-sm sm:text-base text-bone-muted leading-relaxed">
              {expertise.targetClients}
            </p>
          </div>
          <a
            href="#contact"
            className="self-start lg:self-center min-h-[48px] px-6 py-3 bg-brass hover:bg-brass-light text-obsidian-950 font-medium text-xs uppercase tracking-[0.14em] flex items-center gap-2 btn-tactile shrink-0"
          >
            <span>Initiate Mandate</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
