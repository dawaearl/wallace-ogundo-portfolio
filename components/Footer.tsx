"use client";

import React from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-obsidian-950 py-10 px-6 sm:px-10 lg:px-14">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Copyright & Monograph Colophon (Mirrors PDF Footer) */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim">
            © {new Date().getFullYear()} {profile.name.toUpperCase()}. INDEPENDENT BY DESIGN.
          </span>
        </div>

        {/* Right: Minimalist Utility Links (Mirrors PDF Footer) */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] text-bone-stone">
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone border-b border-brass/50 pb-0.5 transition-colors inline-flex items-center gap-1 link-external"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-brass glyph-ne" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-bone transition-colors inline-flex items-center gap-1 link-external"
          >
            <span>Direct Mail</span>
            <ArrowUpRight className="w-3 h-3 text-brass glyph-ne" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-bone transition-colors inline-flex items-center gap-1 focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-brass" />
          </button>
        </div>
      </div>
    </footer>
  );
}
