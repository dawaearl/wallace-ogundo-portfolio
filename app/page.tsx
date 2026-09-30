import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MediaShowcase from "@/components/MediaShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-obsidian-950 text-neutral-100 selection:bg-white selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Section .01: Hero Center-stage */}
      <Hero />

      {/* Section .01.1: About & Executive Synthesis */}
      <About />

      {/* Section .01.2: Career Timeline & Competency Matrix */}
      <Experience />

      {/* Section .02: Signature Projects & Strategic Case Studies */}
      <Projects />

      {/* Section .02.1: Rich Media Gallery (Videos & Visuals) with Lightbox */}
      <MediaShowcase />

      {/* Section .03: Contact & Inquiry Split Form */}
      <Contact />

      {/* Signature Footer */}
      <Footer />
    </main>
  );
}
