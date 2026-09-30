/**
 * Media Utility functions for parsing video URLs (YouTube, Vimeo, MP4)
 * Allows non-technical clients to paste ANY standard video link without formatting issues.
 */

export interface ParsedVideo {
  type: "youtube" | "vimeo" | "direct" | "iframe" | "unknown";
  embedUrl?: string;
  directUrl?: string;
  videoId?: string;
}

export function parseVideoUrl(url?: string): ParsedVideo {
  if (!url || typeof url !== "string") {
    return { type: "unknown" };
  }

  const cleanUrl = url.trim();

  // 1. YouTube: standard watch, shortened youtu.be, shorts, or existing embed
  const ytWatchMatch = cleanUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
  if (ytWatchMatch && ytWatchMatch[1]) {
    const videoId = ytWatchMatch[1];
    return {
      type: "youtube",
      videoId,
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
    };
  }

  // 2. Vimeo: vimeo.com/123456789 or player.vimeo.com/video/123456789
  const vimeoMatch = cleanUrl.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    const videoId = vimeoMatch[1];
    return {
      type: "vimeo",
      videoId,
      embedUrl: `https://player.vimeo.com/video/${videoId}?autoplay=1&color=10b981&title=0&byline=0`,
    };
  }

  // 3. Direct HTML5 video file (.mp4, .webm, .ogg)
  const isDirectVideo = /\.(mp4|webm|ogg)($|\?)/i.test(cleanUrl) || cleanUrl.startsWith("blob:");
  if (isDirectVideo) {
    return {
      type: "direct",
      directUrl: cleanUrl,
    };
  }

  // 4. Fallback if it's already an embeddable URL or other protocol
  if (cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://")) {
    return {
      type: "iframe",
      embedUrl: cleanUrl,
    };
  }

  return { type: "unknown" };
}

/**
 * Returns a fallback thumbnail if none was provided by the user.
 * For YouTube videos, automatically pulls the high-res thumbnail.
 */
export function getVideoThumbnail(videoUrl?: string, customThumbnail?: string): string {
  if (customThumbnail && customThumbnail.trim().length > 0) {
    return customThumbnail;
  }

  if (videoUrl) {
    const parsed = parseVideoUrl(videoUrl);
    if (parsed.type === "youtube" && parsed.videoId) {
      return `https://img.youtube.com/vi/${parsed.videoId}/maxresdefault.jpg`;
    }
  }

  return "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80";
}
