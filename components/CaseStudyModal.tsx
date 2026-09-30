"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, TrendingUp, Layers, Calendar, MapPin } from "lucide-react";

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  period: string;
  location: string;
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
}

interface CaseStudyModalProps {
  study: CaseStudyData | null;
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
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-obsidian-950/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-obsidian-900 text-white shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Metadata Header */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-4 text-neutral-300">
          <span className="px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-bold uppercase tracking-wider">
            {study.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            {study.period}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            {study.location}
          </span>
        </div>

        {/* Title */}
        <h2 id="case-study-title" className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
          {study.title}
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mb-8 max-w-2xl">
          {study.subtitle}
        </p>

        {/* Hero Visual Image */}
        <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 mb-8 bg-neutral-950">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] mb-8">
          {study.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-black text-white">
                {m.value}
              </span>
              <span className="text-[11px] font-mono text-neutral-300 uppercase tracking-wide">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              Strategic Executive Overview
            </h3>
            <p className="text-neutral-300">{study.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 mb-2">
                The Operational Challenge
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">{study.challenge}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300 mb-2">
                The Implemented Architecture
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">{study.solution}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>Verifiable Key Results & Impact</span>
            </h3>
            <div className="space-y-2">
              {study.results.map((res, rIdx) => (
                <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <span className="text-xs text-neutral-400">
            Confidential case summary • Wallace Ogundo Portfolio
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
            >
              Close Window
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Discuss Similar Initiative
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
