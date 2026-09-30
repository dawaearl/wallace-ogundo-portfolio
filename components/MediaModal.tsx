"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Calendar } from "lucide-react";
import { parseVideoUrl } from "@/lib/mediaUtils";
import { MediaItem } from "@/data/portfolioData";

export type { MediaItem };

interface MediaModalProps {
  item: MediaItem | null;
  onClose: () => void;
}

export default function MediaModal({ item, onClose }: MediaModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const parsedVideo = item.type === "video" && item.videoUrl ? parseVideoUrl(item.videoUrl) : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="media-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-obsidian-950/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl border border-white/15 bg-obsidian-900 text-white shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="mb-6">
          {item.type === "video" && item.videoUrl ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
              {parsedVideo?.type === "direct" && parsedVideo.directUrl ? (
                <video
                  src={parsedVideo.directUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video playback.
                </video>
              ) : parsedVideo?.embedUrl ? (
                <iframe
                  src={parsedVideo.embedUrl}
                  title={item.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-full text-sm text-neutral-400">
                  Video player could not load source.
                </div>
              )}
            </div>
          ) : (
            <div className="relative w-full h-80 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>

        {/* Details & Metadata */}
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-2 text-neutral-300">
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-semibold uppercase">
              {item.type === "video" ? "Video Presentation" : "Visual Asset / Framework"}
            </span>
            <span className="text-emerald-400 font-bold uppercase">{item.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-neutral-400" />
              {item.date}
            </span>
            {item.duration && (
              <>
                <span>•</span>
                <span>{item.duration}</span>
              </>
            )}
          </div>

          <h3 id="media-modal-title" className="font-display text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
            {item.title}
          </h3>

          <p className="text-sm text-neutral-300 leading-relaxed mb-4">
            {item.description}
          </p>

          {item.metrics && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-200">
              <span className="text-neutral-400">Key Takeaway / Reach:</span>
              <span className="font-semibold text-white">{item.metrics}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
