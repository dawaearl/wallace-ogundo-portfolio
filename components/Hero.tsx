"use client";

import React from "react";
import {
  Mail,
  ArrowRight,
  TrendingUp,
  Layers,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { LinkedInIcon, TwitterXIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [activeSection, setActiveSection] = React.useState(".01");
  const { profile, hero } = portfolioData;

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const projectsEl = document.getElementById("projects");
      const contactEl = document.getElementById("contact");

      const contactTop = contactEl ? contactEl.offsetTop - 300 : 7000;
      const projectsTop = projectsEl ? projectsEl.offsetTop - 300 : 4000;

      if (scrollY >= contactTop) {
        setActiveSection(".03");
      } else if (scrollY >= projectsTop) {
        setActiveSection(".02");
      } else {
        setActiveSection(".01");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const metricIcons = [TrendingUp, Layers, Globe2, CheckCircle2];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-radial-spotlight"
    >
      {/* Background ambient lighting and fine grid */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none" />

      {/* Left Pinned Bar: Social Links & Section Indicator (.01) - Matching Reference */}
      <div className="hidden lg:flex fixed left-8 bottom-12 z-30 flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-5 text-neutral-400">
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.twitterX}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Twitter / X Profile"
          >
            <TwitterXIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label={`Email ${profile.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          <div className="w-[1px] h-12 bg-white/15 my-1" />
        </div>

        {/* Section Counter - Dynamically changes on scroll (.01, .02, .03) */}
        <span className="font-mono text-xs font-bold tracking-widest text-emerald-400 bg-obsidian-950/80 px-2 py-1 rounded border border-white/10 transition-all duration-300">
          {activeSection}
        </span>
      </div>

      {/* Right Pinned Bar: Vertical Scroll Indicator - Matching Reference */}
      <div className="hidden lg:flex fixed right-8 bottom-12 z-30 flex-col items-center">
        <a
          href="#about"
          className="flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-neutral-300 hover:text-white transition-colors uppercase -rotate-90 origin-bottom"
        >
          <span>SCROLL</span>
          <span className="w-8 h-[1px] bg-white/20"></span>
        </a>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col items-center justify-center text-center">
        {/* Mobile/Tablet Section badge */}
        <div className="lg:hidden mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-neutral-300">
          <span>{activeSection}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
          <span>OVERVIEW</span>
        </div>

        {/* Pre-title: HELLO, I AM */}
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-6 h-[1px] bg-white/40"></span>
          <p className="text-xs sm:text-sm font-semibold tracking-ultra text-neutral-300 uppercase">
            {hero.preTitle}
          </p>
          <span className="w-6 h-[1px] bg-white/40"></span>
        </div>

        {/* Center Title: WALLACE OGUNDO - Proportioned and centered without stretching */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-6 leading-tight select-none w-full max-w-5xl mx-auto text-center">
          <span>{profile.firstName}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400">
            {profile.lastName}
          </span>
        </h1>

        {/* Professional Subheading / Role */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg font-medium text-neutral-300 tracking-wider uppercase mb-6">
          {profile.role.split("/")[0]?.trim()}
          {profile.role.includes("/") && (
            <>
              <span className="hidden sm:inline text-neutral-600 mx-3">/</span>
              <br className="sm:hidden" />
              <span>{profile.role.split("/")[1]?.trim()}</span>
            </>
          )}
        </p>

        {/* Executive Bio Tagline */}
        <p className="max-w-2xl text-sm sm:text-base text-neutral-400 leading-relaxed mb-10 font-normal">
          {hero.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-obsidian-950 hover:bg-neutral-200 font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-white/20"
          >
            <span>{hero.ctaPrimaryText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <span>{hero.ctaSecondaryText}</span>
            <span className="text-[10px] text-neutral-300 font-mono">(.03)</span>
          </a>
        </div>
      </div>

      {/* Bottom Floating Executive Metrics Card */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="rounded-2xl border border-white/10 bg-obsidian-900/60 backdrop-blur-xl p-6 sm:p-8 shadow-glow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {hero.metrics.map((metric, idx) => {
              const Icon = metricIcons[idx % metricIcons.length];
              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-center ${
                    idx > 0 ? "pt-4 md:pt-0 md:pl-6 lg:pl-8" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                      {metric.value}
                    </span>
                    <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-0.5">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-neutral-300 font-mono">
                    {metric.sub}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
