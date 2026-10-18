import React from "react";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 pb-10 sm:pb-14">
          <div className="lg:col-span-3 pt-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-stone">
              {expertise.sectionIndex}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-medium text-bone display-section mb-3">
              <span className="block">{expertise.headlineLines[0]}</span>
              <span className="block">{expertise.headlineLines[1]}</span>
            </h2>
            <p className="text-base text-bone-stone max-w-[54ch] leading-relaxed">
              {expertise.subheadline}
            </p>
          </div>
        </div>

        {/* 3 Hairline-Separated Commercial Capability Rows */}
        <div className="border-t border-hairline divide-y divide-white/[0.08]">
          {expertise.disciplines.map((item) => (
            <div
              key={item.index}
              className="py-7 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 items-baseline group transition-colors duration-300 hover:bg-white/[0.01]"
            >
              {/* Index + Title on Mobile */}
              <div className="lg:col-span-5 flex items-baseline gap-3.5 sm:gap-5">
                <span className="font-mono text-xs text-brass tracking-[0.16em] shrink-0">
                  {item.index}
                </span>
                <h3 className="font-display text-lg sm:text-2xl font-medium text-bone tracking-tight group-hover:text-brass-light transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* 1-Line Summary + Vectors */}
              <div className="lg:col-span-7 pl-7 sm:pl-9 lg:pl-0 space-y-3">
                <p className="text-base text-bone-stone leading-relaxed max-w-[58ch]">
                  {item.summary}
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
                  {item.vectors.map((vec) => (
                    <span
                      key={vec}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-dim group-hover:text-bone-stone transition-colors"
                    >
                      / {vec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
