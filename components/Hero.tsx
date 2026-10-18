import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { profile, hero } = portfolioData;

  const whatsAppUrl = `https://wa.me/${profile.whatsApp}?text=${encodeURIComponent(
    hero.whatsAppPrefill
  )}`;

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 bg-obsidian-950 border-b border-hairline overflow-hidden"
    >
      {/* Fractured Rock Monolith Atmospheric Background Layer (Mobile + Desktop Calibrated) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[68%] xl:w-[64%]">
          <Image
            src={profile.monolithImage}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 68vw"
            className="object-cover object-[65%_38%] sm:object-[center_42%] brightness-[0.42] sm:brightness-[0.46] contrast-[1.18] saturate-[0.65] sepia-[0.08]"
          />

          {/* Mobile + Desktop Horizontal Alpha Mask: Guarantees WCAG AAA contrast on copy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #090A09 0%, rgba(9, 10, 9, 0.94) 32%, rgba(9, 10, 9, 0.52) 64%, rgba(9, 10, 9, 0.22) 85%, rgba(9, 10, 9, 0.6) 100%)",
            }}
          />

          {/* Vertical Vignette Mask */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9, 10, 9, 0.88) 0%, rgba(9, 10, 9, 0.25) 24%, rgba(9, 10, 9, 0.18) 70%, #090A09 100%)",
            }}
          />

          {/* Radial Depth Vignette around the rock column */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 62% 68% at 65% 48%, transparent 0%, rgba(9, 10, 9, 0.45) 65%, #090A09 100%)",
            }}
          />
        </div>
      </div>

      {/* Top Spacer for Nav Clearance */}
      <div className="h-2 sm:h-4" />

      {/* Main Mobile-First Hero Content */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14 my-auto py-6 sm:py-12">
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-7 animate-line-1">
            <span className="w-1.5 h-1.5 bg-brass shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-bone-stone">
              {hero.eyebrow}
            </span>
          </div>

          {/* Monumental Display Headline */}
          <h1 className="font-display font-medium text-bone display-monumental mb-5 sm:mb-7">
            <span className="block overflow-hidden pb-1">
              <span className="block animate-line-1">
                {hero.headlineLines[0]}
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="block animate-line-2">
                {hero.headlineLines[1]}
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="block animate-line-3 text-bone">
                {hero.headlineLines[2]}
              </span>
            </span>
          </h1>

          {/* Supporting Thesis (17 words, >=16px on mobile) */}
          <p className="text-base sm:text-[17px] text-bone-muted leading-[1.6] max-w-[50ch] mb-8 sm:mb-10 animate-fade-delayed">
            {hero.supportingThesis}
          </p>

          {/* Primary WhatsApp CTA & Secondary Track Record Link (44px+ tap targets) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7 animate-fade-delayed">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-3.5 bg-brass hover:bg-brass-light text-obsidian-950 font-medium text-[13px] tracking-tight btn-tactile link-external"
            >
              <span>{hero.ctaPrimaryText}</span>
              <ArrowUpRight className="w-4 h-4 glyph-ne shrink-0" />
            </a>

            <a
              href="#work"
              className="min-h-[44px] inline-flex items-center gap-2 text-[13px] font-medium text-bone-muted hover:text-bone border-b border-white/20 hover:border-brass pb-1 self-start sm:self-auto transition-colors duration-200 link-scroll"
            >
              <span>{hero.ctaSecondaryText}</span>
              <ArrowDown className="w-3.5 h-3.5 text-brass glyph-down" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Executive Proof Strip */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14 pt-6 sm:pt-8 border-t border-hairline">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-10">
          {hero.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col ${
                idx > 0 ? "lg:border-l lg:border-hairline lg:pl-8" : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-display text-lg sm:text-2xl font-medium text-bone tracking-tight">
                  {metric.value}
                </span>
                <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.14em] text-brass">
                  {metric.label}
                </span>
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] text-bone-stone mt-0.5">
                {metric.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
