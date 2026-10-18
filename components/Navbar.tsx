"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const SECTIONS = [
  { id: "hero", code: "00", label: "INDEX" },
  { id: "expertise", code: "01", label: "WHAT I DO" },
  { id: "work", code: "02", label: "SELECTED WORK" },
  { id: "about", code: "03", label: "ABOUT WALLACE" },
  { id: "contact", code: "04", label: "LET'S TALK" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);
  const { profile, hero } = portfolioData;

  const whatsAppUrl = `https://wa.me/${profile.whatsApp}?text=${encodeURIComponent(
    hero.whatsAppPrefill
  )}`;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    const heroEl = document.getElementById("hero");
    const contactEl = document.getElementById("contact");

    let sentinelObserver: IntersectionObserver | null = null;
    if (sentinel) {
      sentinelObserver = new IntersectionObserver(
        ([entry]) => {
          setIsScrolled(!entry.isIntersecting);
        },
        { threshold: 0 }
      );
      sentinelObserver.observe(sentinel);
    }

    const boundaryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero") {
            setHeroVisible(entry.isIntersecting);
          } else if (entry.target.id === "contact") {
            setContactVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (heroEl) boundaryObserver.observe(heroEl);
    if (contactEl) boundaryObserver.observe(contactEl);

    const sectionElements = SECTIONS.map((s) =>
      document.getElementById(s.id)
    ).filter(Boolean) as HTMLElement[];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = SECTIONS.find((s) => s.id === entry.target.id);
            if (matched) {
              setActiveSection(matched);
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => sectionObserver.observe(el));

    return () => {
      if (sentinelObserver) sentinelObserver.disconnect();
      boundaryObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "What I do", href: "#expertise", index: "01" },
    { name: "Selected work", href: "#work", index: "02" },
    { name: "About", href: "#about", index: "03" },
  ];

  const showMobileStickyBar = !heroVisible && !contactVisible && !mobileMenuOpen;

  return (
    <>
      <div
        id="top-sentinel"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-4 pointer-events-none"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] sm:h-[72px] flex items-center transition-colors duration-200 ${
          mobileMenuOpen
            ? "bg-[#090A09] border-b border-hairline"
            : isScrolled
            ? "bg-obsidian-950/95 backdrop-blur-md border-b border-hairline"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
          {/* Left: Circular Emblem Logo + Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none min-h-[44px]"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-brass-rule/40 transition-transform duration-200 group-hover:scale-105 bg-obsidian-900">
              <Image
                src={profile.logoImage || "/images/logo.png"}
                alt={`${profile.name} Logo`}
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-bone tracking-tight leading-none">
                {profile.name}
                <sup className="text-[9px] text-bone-stone ml-0.5">®</sup>
              </span>
              <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.16em] text-bone-stone mt-1 leading-none">
                {profile.shortRole}
              </span>
            </div>
          </a>

          {/* Center: Scroll-Linked Section Indicator (Desktop) */}
          <div className="hidden xl:flex items-center gap-2.5 px-3 py-1 border border-hairline bg-obsidian-900/70">
            <span className="w-1.5 h-1.5 bg-brass" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
              {activeSection.code}
            </span>
            <span className="font-mono text-[10px] text-bone-dim">/</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-stone">
              {activeSection.label}
            </span>
          </div>

          {/* Right: Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {navLinks.map((link) => {
              const isActive = activeSection.code === link.index;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] transition-colors duration-200 py-2 ${
                    isActive
                      ? "text-bone font-medium"
                      : "text-bone-stone hover:text-bone"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#contact"
              className="text-[13px] font-medium text-bone border-b border-brass pb-0.5 hover:text-brass-light transition-colors duration-200 link-external inline-flex items-center gap-1"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brass glyph-ne" />
            </a>
          </nav>

          {/* Mobile Menu Trigger (44x44px min tap target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-bone-stone hover:text-bone focus:outline-none -mr-1"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Full-Screen Solid Opaque Mobile Navigation Menu (Zero Text Bleed-Through) */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 z-50 bg-[#090A09] flex flex-col justify-between px-6 py-8 overflow-y-auto border-t border-hairline shadow-2xl">
            <div className="flex flex-col divide-y divide-white/[0.08]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[56px] flex items-center justify-between text-base font-medium text-bone hover:text-brass transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-brass">
                    {link.index}
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[56px] flex items-center justify-between text-base font-medium text-bone hover:text-brass transition-colors"
              >
                <span>Let&apos;s talk</span>
                <span className="font-mono text-xs text-brass">04</span>
              </a>
            </div>

            <div className="pt-8 pb-safe space-y-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[52px] px-5 bg-brass hover:bg-brass-light text-obsidian-950 font-medium text-sm tracking-tight flex items-center justify-between btn-tactile"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[50px] px-5 border border-hairline bg-obsidian-850 text-bone font-mono text-xs flex items-center justify-between btn-tactile hover:border-brass/40 transition-colors"
              >
                <span>Email: {profile.email}</span>
                <Mail className="w-4 h-4 text-brass shrink-0" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Thumb-Zone Action Bar (Visible after Hero, hidden in Contact) */}
      <div
        aria-hidden={!showMobileStickyBar}
        className={`lg:hidden fixed bottom-0 inset-x-0 z-40 bg-obsidian-950/95 backdrop-blur-md border-t border-hairline px-4 pt-2.5 pb-safe transition-all duration-300 ${
          showMobileStickyBar
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-md mx-auto flex items-center gap-2.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[46px] px-4 bg-brass hover:bg-brass-light text-obsidian-950 font-medium text-xs tracking-tight flex items-center justify-between btn-tactile"
          >
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="min-h-[46px] px-4 border border-brass-rule bg-obsidian-800 text-bone font-mono text-xs flex items-center gap-2 btn-tactile shrink-0 hover:text-brass transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brass" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </>
  );
}
