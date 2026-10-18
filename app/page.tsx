import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] bg-obsidian-950 text-bone">
      {/* Mobile-First Navigation & Scroll-Aware Sticky Action Bar */}
      <Navbar />

      {/* Hero: Fractured Rock Monolith & Commercial Value Proposition */}
      <Hero />

      {/* 01 / WHAT I DO: 3 Core Marketing & B2B Growth Capabilities */}
      <Experience />

      {/* 02 / SELECTED WORK: 3 Inline Commercial Interventions */}
      <Projects />

      {/* 03 / ABOUT WALLACE: Portrait Plate, 36-Word Bio & 3-Row Academic List */}
      <About />

      {/* 04 / LET'S TALK: Zero-Typing Objective Chip Selector & 1-Tap WhatsApp/Call/Email */}
      <Contact />

      {/* Minimalist Colophon Footer */}
      <Footer />
    </main>
  );
}
