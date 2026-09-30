"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, ShieldCheck, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Media / Showcase", href: "#media" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian-950/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Monogram + Circular Avatar */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 p-0.5 bg-obsidian-800 transition-transform duration-300 group-hover:scale-105 group-hover:border-white/50 shadow-glow-avatar">
              <Image
                src={profile.avatarImage}
                alt={profile.name}
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            {/* LinkedIn Verification style badge */}
            <span
              className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-obsidian-950 flex items-center justify-center text-[8px] text-white"
              title={profile.verifiedBadgeText}
            >
              <ShieldCheck className="w-2.5 h-2.5" />
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-sm tracking-widest text-white uppercase group-hover:text-neutral-200 transition-colors">
                {profile.monogram}
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
              <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
                {profile.name}
              </span>
            </div>
            <span className="text-[10px] text-neutral-400 tracking-wide line-clamp-1 max-w-[220px]">
              {profile.role}
            </span>
          </div>
        </a>

        {/* Center/Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-obsidian-950 text-xs font-semibold tracking-wider uppercase transition-all duration-300 group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-neutral-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full bg-white text-obsidian-950 text-xs font-bold uppercase tracking-wider"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
