import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { profile, credentials } = portfolioData;

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 lg:py-28 bg-obsidian-800 border-b border-hairline"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Section Header */}
        <div className="pb-10 sm:pb-14 border-b border-hairline">
          <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-bone-stone mb-3">
            {credentials.sectionIndex}
          </span>
          <h2 className="font-display font-medium text-bone display-section mb-4">
            <span className="block">{credentials.headlineLines[0]}</span>
            <span className="block text-brass">{credentials.headlineLines[1]}</span>
          </h2>
          <p className="text-base sm:text-lg text-bone-stone max-w-[56ch] leading-relaxed">
            {credentials.shortBio}
          </p>
        </div>

        {/* Main Grid: Portrait Plate + 3-Act Story */}
        <div className="pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (5 cols): Signature Portrait Plate */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto lg:max-w-none overflow-hidden border border-hairline bg-obsidian-950 flex flex-col justify-between p-5 sm:p-8 group shadow-2xl">
              {/* Executive Portrait Layer */}
              <Image
                src={profile.avatarImage || "/wallace-avatar.png"}
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              {/* Multi-stop Obsidian Vignette for Contrast & Readability */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(9,10,9,0.35) 0%, rgba(9,10,9,0.06) 38%, rgba(9,10,9,0.52) 68%, rgba(9,10,9,0.96) 100%)",
                }}
              />

              {/* Top Executive Status Frame */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-obsidian-950/90 backdrop-blur-md border border-hairline">
                  <span className="w-1.5 h-1.5 bg-brass rounded-full animate-pulse" />
                  <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.15em] text-bone">
                    {profile.statusBadgeText}
                  </span>
                </div>

                <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] text-brass bg-obsidian-950/90 backdrop-blur-md px-2.5 py-1.5 border border-hairline shrink-0">
                  17+ YRS
                </span>
              </div>

              {/* Bottom Monogram Signature */}
              <div className="relative z-10 pt-10">
                <div className="font-display text-5xl sm:text-6xl font-semibold tracking-tighter text-brass leading-none mb-2.5 select-none drop-shadow-md">
                  {profile.monogram}.
                </div>
                <div className="pt-2.5 border-t border-white/20 bg-obsidian-950/80 backdrop-blur-sm -mx-2 px-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone">
                    {profile.name.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brass">
                    NAIROBI, KENYA
                  </span>
                </div>
              </div>
            </div>

            {/* Monograph Pull-Quote Box */}
            <div className="mt-6 p-5 sm:p-6 bg-obsidian-900 border border-hairline relative">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-brass block mb-2">
                STRATEGIC SYNTHESIS
              </span>
              <blockquote className="text-sm sm:text-[14.5px] text-bone-stone leading-relaxed italic border-l-2 border-brass pl-4">
                &ldquo;{credentials.pullQuote}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right Column (7 cols): 3-Act Biographical Story + Academic Foundation */}
          <div className="lg:col-span-7 space-y-10">
            {/* 3-Act Executive Monograph */}
            <div className="space-y-8">
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-hairline">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-brass">
                  EXECUTIVE BIOGRAPHY: THREE ACTS
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-dim">
                  2008 - PRESENT
                </span>
              </div>

              <div className="space-y-8 divide-y divide-white/[0.08]">
                {credentials.storyActs.map((act) => (
                  <div
                    key={act.actNumber}
                    className="pt-6 first:pt-0 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs text-brass font-medium">
                          ACT {act.actNumber}
                        </span>
                        <span className="font-mono text-xs text-bone-dim">/</span>
                        <span className="font-mono text-xs uppercase tracking-[0.14em] text-bone-stone">
                          {act.period}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-brass/80 bg-obsidian-900 px-2 py-0.5 border border-hairline">
                        {act.focus}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-medium text-bone">
                      {act.title}
                    </h3>

                    <p className="text-sm sm:text-base text-bone-stone leading-relaxed">
                      {act.narrative}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Foundation */}
            <div className="pt-8 border-t border-hairline space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-brass">
                  ACADEMIC FOUNDATION
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-dim">
                  DEKUT / UON / JKUAT
                </span>
              </div>

              <div className="border border-hairline bg-obsidian-900/60 divide-y divide-white/[0.08]">
                {credentials.degrees.map((cred, idx) => (
                  <div
                    key={cred.degree}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6"
                  >
                    <div className="flex items-baseline gap-3 shrink-0">
                      <span className="font-mono text-xs text-brass">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="font-display text-base font-medium text-bone">
                          {cred.degree}
                        </h4>
                        <span className="block font-mono text-[11px] text-bone-stone mt-0.5">
                          {cred.institution}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-bone-stone leading-relaxed pl-6 sm:pl-0 sm:text-right max-w-[40ch]">
                      {cred.summaryLine}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
