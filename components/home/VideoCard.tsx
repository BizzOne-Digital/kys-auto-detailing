"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import type { DetailVideo } from "@/lib/data/videos";

/**
 * Click-to-play video card. Shows only the poster until the visitor presses play
 * (preload="none"), and pauses any other playing video on the page.
 */
export function VideoCard({ video, index }: { video: DetailVideo; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    ref.current?.play().catch(() => {});
  }

  function pauseOthers() {
    document.querySelectorAll<HTMLVideoElement>("video[data-detail-video]").forEach((el) => {
      if (el !== ref.current) el.pause();
    });
  }

  return (
    <figure className="group relative aspect-[9/16] overflow-hidden rounded-3xl border border-brand/25 bg-navy-950 shadow-card">
      <video
        ref={ref}
        data-detail-video
        src={video.src}
        poster={video.poster}
        preload="none"
        playsInline
        controls={started}
        onPlay={pauseOthers}
        aria-label={video.title}
        className={
          video.orientation === "landscape"
            ? "absolute inset-0 h-full w-full bg-navy-950 object-contain"
            : "absolute inset-0 h-full w-full object-cover"
        }
      />
      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label={`Play video: ${video.title}`}
          className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-navy-950/30 p-4 text-left"
        >
          <span className="self-start rounded-full bg-navy-950/70 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand backdrop-blur">
            Real Detail {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex size-16 items-center justify-center self-center rounded-full border-2 border-brand bg-navy-950/60 text-brand shadow-glow backdrop-blur transition-transform duration-300 group-hover:scale-110">
            <Play aria-hidden className="ml-1 size-7 fill-current" />
          </span>
          <span className="text-sm font-medium leading-snug text-white">{video.title.replace("Interior detail walkthrough: ", "")}</span>
        </button>
      )}
    </figure>
  );
}
