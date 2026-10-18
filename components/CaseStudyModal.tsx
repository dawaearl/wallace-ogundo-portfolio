"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight, Check } from "lucide-react";
import { CaseStudy } from "@/data/portfolioData";

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (study) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-obsidian-950/88 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto bg-obsidian-800 border border-brass-rule text-bone p-6 sm:p-10 lg:p-12"
      >
        {/* Top Dossier Bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-hairline mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-brass mb-2">
              <span>MANDATE DOSSIER / {study.index}</span>
              <span className="text-bone-dim">/</span>
              <span className="text-bone-stone">{study.category}</span>
            </div>
            <h2
              id="dossier-modal-title"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-bone tracking-tight"
            >
              {study.title}
            </h2>
            <p className="text-sm text-bone-stone mt-1">{study.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 border border-hairline hover:border-brass text-bone-stone hover:text-bone transition-colors shrink-0"
            aria-label="Close mandate dossier"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mandate Metadata Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 border-b border-hairline mb-8 font-mono text-xs">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-bone-stone mb-1">
              Principal Role
            </span>
            <span className="text-bone">{study.mandateRole}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-bone-stone mb-1">
              Jurisdiction & Footprint
            </span>
            <span className="text-bone">{study.location}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-bone-stone mb-1">
              Tenure / Horizon
            </span>
            <span className="text-bone">{study.period}</span>
          </div>
        </div>

        {/* Quantified Metrics Ledger */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-obsidian-750 border border-hairline mb-8">
          {study.metrics.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-medium text-brass tracking-tight">
                {m.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-stone mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tri-Part Case Study Architecture */}
        <div className="space-y-8 mb-10">
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-brass mb-2">
              01 / Context & Commercial Dilemma
            </span>
            <p className="text-sm sm:text-base text-bone-muted leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div className="pt-6 border-t border-hairline">
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-brass mb-2">
              02 / The Strategic & Engineering Solution
            </span>
            <p className="text-sm sm:text-base text-bone-muted leading-relaxed">
              {study.solution}
            </p>
          </div>

          <div className="pt-6 border-t border-hairline">
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-brass mb-3">
              03 / Verified Enterprise ROI & Outcomes
            </span>
            <ul className="space-y-3">
              {study.results.map((res, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-bone leading-relaxed"
                >
                  <Check className="w-4 h-4 text-brass shrink-0 mt-1" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-stone">
            WALLACE OGUNDO / EXECUTIVE RECORD
          </span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-hairline hover:border-white/30 text-xs font-mono uppercase tracking-[0.14em] text-bone-stone hover:text-bone transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-6 py-2.5 bg-brass hover:bg-brass-light text-obsidian-950 font-medium text-xs tracking-tight inline-flex items-center gap-2 btn-tactile link-external"
            >
              <span>Initiate Similar Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5 glyph-ne" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
