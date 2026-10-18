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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (5 cols): Signature Portrait Plate with Wallace's Avatar */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/4] sm:aspect-[4/5] w-full max-w-[440px] lg:max-w-none mx-auto overflow-hidden border border-hairline bg-obsidian-950 flex flex-col justify-between p-5 sm:p-8 group">
              {/* Executive Portrait Layer */}
              <Image
                src={profile.avatarImage || "/wallace-avatar.png"}
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 ease-out"
              />

              {/* Multi-stop Obsidian Vignette for Contrast & Readability */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(9,10,9,0.32) 0%, rgba(9,10,9,0.04) 38%, rgba(9,10,9,0.48) 68%, rgba(9,10,9,0.94) 100%)",
                }}
              />

              {/* Top Executive Status Frame */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-obsidian-950/85 backdrop-blur-md border border-hairline">
                  <span className="w-1.5 h-1.5 bg-brass-chartreuse rounded-full" />
                  <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.15em] text-bone">
                    {profile.statusBadgeText}
                  </span>
                </div>

                <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] text-brass bg-obsidian-950/85 backdrop-blur-md px-2.5 py-1.5 border border-hairline shrink-0">
                  15+ YRS
                </span>
              </div>

              {/* Bottom Monogram Signature */}
              <div className="relative z-10 pt-10">
                <div className="font-display text-5xl sm:text-6xl font-semibold tracking-tighter text-brass-chartreuse leading-none mb-2.5 select-none drop-shadow-md">
                  {profile.monogram}.
                </div>
                <div className="pt-2.5 border-t border-white/20 bg-obsidian-950/60 backdrop-blur-sm -mx-2 px-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone">
                    {profile.name.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brass">
                    NAIROBI, KENYA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Concise 36-Word Bio + Compact 3-Row Academic List */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-bone-stone mb-3">
                {credentials.sectionIndex}
              </span>
              <h2 className="font-display font-medium text-bone display-section mb-5">
                <span className="block">{credentials.headlineLines[0]}</span>
                <span className="block">{credentials.headlineLines[1]}</span>
              </h2>
              <p className="text-base sm:text-lg text-bone leading-[1.65] max-w-[54ch]">
                {credentials.shortBio}
              </p>
            </div>

            {/* Compact 3-Row Academic Foundation (1 Line Per Degree) */}
            <div className="pt-6 border-t border-hairline">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brass">
                  ACADEMIC FOUNDATION
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-dim">
                  DEKUT / UON / JKUAT
                </span>
              </div>

              <div className="border-t border-hairline divide-y divide-white/[0.08]">
                {credentials.degrees.map((cred, idx) => (
                  <div
                    key={cred.degree}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-6"
                  >
                    <div className="flex items-baseline gap-3 shrink-0">
                      <span className="font-mono text-xs text-brass">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-medium text-bone">
                          {cred.degree}
                        </h3>
                        <span className="block font-mono text-[11px] text-bone-stone">
                          {cred.institution}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-bone-stone leading-relaxed pl-6 sm:pl-0 sm:text-right max-w-[42ch]">
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
