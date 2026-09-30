"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import { LinkedInIcon, TwitterXIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 px-6 sm:px-8 lg:px-12 bg-obsidian-950 border-t border-white/10 text-center overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Subtle Pre-header: THE END */}
        <p className="text-[11px] font-mono tracking-ultra uppercase text-neutral-300 mb-3">
          THE END
        </p>

        {/* Big Footer Signature: THANKS FOR VISITING */}
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-8">
          THANKS FOR VISITING!
        </h2>

        {/* Smooth Back-to-Top Button */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-obsidian-950 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-200 transition-all duration-300 mb-12 shadow-lg hover:shadow-white/10"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>

        {/* Brand Monogram & Social links */}
        <div className="w-full pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 bg-obsidian-850">
              <Image
                src={profile.avatarImage}
                alt={profile.name}
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-bold text-white tracking-widest uppercase">
              {profile.name}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="uppercase">{profile.location}</span>
          </div>

          <div className="flex items-center gap-5 text-neutral-400">
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.twitterX}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <TwitterXIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="font-mono text-[11px] text-neutral-300">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
