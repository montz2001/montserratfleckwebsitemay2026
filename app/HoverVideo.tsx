"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * Renders the poster as a real <img> so it paints immediately (even inside a
 * collapsed hover-reveal container). On hover/focus of the nearest `.group`
 * ancestor (the post <li>), starts playing the matching <video> on top and
 * crossfades to it. On unhover, pauses, rewinds, and crossfades back.
 */
export default function HoverVideo({ src, poster, className }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const v = videoRef.current;
    if (!root || !v) return;
    const trigger = root.closest<HTMLElement>(".group");
    if (!trigger) return;

    const play = () => {
      setPlaying(true);
      void v.play().catch(() => setPlaying(false));
    };
    const pause = () => {
      v.pause();
      try {
        v.currentTime = 0;
      } catch {
        /* ignore */
      }
      setPlaying(false);
    };

    trigger.addEventListener("mouseenter", play);
    trigger.addEventListener("mouseleave", pause);
    trigger.addEventListener("focusin", play);
    trigger.addEventListener("focusout", pause);
    return () => {
      trigger.removeEventListener("mouseenter", play);
      trigger.removeEventListener("mouseleave", pause);
      trigger.removeEventListener("focusin", play);
      trigger.removeEventListener("focusout", pause);
    };
  }, []);

  return (
    <div ref={rootRef} className={`relative ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        className="block w-full h-auto rounded-md border border-[var(--rule)]"
      />
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover rounded-md border border-[var(--rule)] transition-opacity duration-200 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
