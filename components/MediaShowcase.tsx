"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ZoomIn, Video, Image as ImageIcon } from "lucide-react";
import MediaModal from "./MediaModal";
import { portfolioData, MediaItem } from "@/data/portfolioData";
import { getVideoThumbnail } from "@/lib/mediaUtils";

export default function MediaShowcase() {
  const [activeTab, setActiveTab] = useState<"All" | "Videos" | "Visuals / Projects">("All");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaList = portfolioData.media;

  const filteredMedia = mediaList.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Videos") return item.type === "video";
    if (activeTab === "Visuals / Projects") return item.type === "image";
    return true;
  });

  return (
    <section id="media" className="relative py-28 px-6 sm:px-8 lg:px-12 bg-obsidian-900/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-300 uppercase mb-2">
              <span className="text-white font-bold">.02.1</span>
              <span>—</span>
              <span>MEDIA & ASSETS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              MEDIA & SHOWCASE GALLERY
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center p-1 rounded-full bg-obsidian-950 border border-white/10">
            {(["All", "Videos", "Visuals / Projects"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === tab
                    ? "bg-white text-obsidian-950 shadow-md"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab === "Videos" && <Video className="w-3.5 h-3.5" />}
                {tab === "Visuals / Projects" && <ImageIcon className="w-3.5 h-3.5" />}
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMedia.map((item) => {
            const thumbnailSrc = getVideoThumbnail(item.videoUrl, item.thumbnail);

            return (
              <div
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-obsidian-950/70 hover:border-white/25 hover:bg-obsidian-850 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-glow-card"
              >
                {/* Thumbnail Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-950">
                  <Image
                    src={thumbnailSrc}
                    alt={item.title}
                    fill
                    className="object-cover filter grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase font-semibold text-neutral-300">
                    {item.type === "video" ? (
                      <>
                        <Video className="w-3 h-3 text-emerald-400" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3 h-3 text-cyan-400" />
                        <span>Visual</span>
                      </>
                    )}
                  </div>

                  {/* Duration or Zoom indicator */}
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-300 bg-obsidian-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                    {item.duration ? item.duration : "Expand"}
                  </div>

                  {/* Play / Zoom Icon Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-90 opacity-80 group-hover:scale-110 group-hover:opacity-100 group-hover:bg-white group-hover:text-obsidian-950 transition-all duration-300 shadow-xl">
                      {item.type === "video" ? (
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      ) : (
                        <ZoomIn className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-300 mb-2">
                      <span className="uppercase text-emerald-400">{item.category}</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-white group-hover:text-neutral-200 transition-colors uppercase tracking-tight line-clamp-2 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-300 group-hover:text-white transition-colors">
                    <span className="font-mono text-[11px] uppercase tracking-wider">
                      {item.type === "video" ? "Watch Video Player" : "Open In Lightbox"}
                    </span>
                    <span className="font-bold">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Player / Lightbox */}
        <MediaModal
          item={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      </div>
    </section>
  );
}
