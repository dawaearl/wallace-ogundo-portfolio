"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  Briefcase,
  Target,
  Workflow,
  Sparkles,
  MapPin,
  Award,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { profile, about } = portfolioData;

  const pillarIcons = [Target, Briefcase, Workflow, Compass];

  return (
    <section id="about" className="relative py-28 px-6 sm:px-8 lg:px-12 bg-obsidian-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-300 uppercase mb-2">
              <span className="text-white font-bold">.01.1</span>
              <span>—</span>
              <span>BIOGRAPHY & PHILOSOPHY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              {about.sectionTitle}
            </h2>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase">
              NAIROBI • REGIONAL • GLOBAL
            </span>
          </div>
        </div>

        {/* Content Grid: Portrait Visual + Deep Executive Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: High-Impact Portrait Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-obsidian-850 p-2 shadow-glow-card">
                <div className="relative h-[440px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-neutral-900">
                  <Image
                    src={profile.portraitImage}
                    alt={`${profile.name} - Executive Portrait`}
                    fill
                    className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-neutral-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{profile.statusBadgeText}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white uppercase tracking-wider font-display">
                        {profile.name}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-neutral-300">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {profile.location.split(",")[0]}, KE
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 line-clamp-1">
                      {profile.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stat Pill */}
              <div className="mt-4 flex items-center justify-between px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Verified Executive Record</span>
                </div>
                <span className="text-xs font-mono font-bold text-white">{profile.regionBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Narrative & Strategic Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Synthesis</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {about.headline}
              </h3>

              {about.narrative.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 4 Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {about.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx % pillarIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1 tracking-wide">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href="#experience"
                className="px-6 py-3 rounded-full bg-white text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Inspect Career Milestones
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white/40 font-medium text-xs uppercase tracking-wider transition-colors"
              >
                Request Executive Briefing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
