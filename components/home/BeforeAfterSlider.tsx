"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

/**
 * Draggable before/after comparison built on a native range input, so it works with
 * mouse, touch and keyboard (arrow keys) without custom pointer logic.
 */
export function BeforeAfterSlider({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl border border-brand/30 shadow-glow sm:aspect-[16/9]">
      {/* After (full, vivid) */}
      <Image src={src} alt={`After: ${alt}`} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover saturate-[1.15]" />
      <span className="absolute right-4 top-4 rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-950">
        After
      </span>

      {/* Before (clipped, dulled) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-cover [filter:grayscale(0.7)_sepia(0.35)_brightness(0.55)_contrast(0.8)_blur(0.6px)]"
        />
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgb(120_100_70/0.35),transparent_60%)]" />
        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-navy-950/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
          Before
        </span>
      </div>

      {/* Divider + handle */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 border-l-2 border-brand shadow-[0_0_16px_rgb(0_217_245)]" />
        <div className="absolute top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand bg-navy-950 text-brand shadow-glow">
          <ChevronsLeftRight className="size-6" />
        </div>
      </div>

      <label htmlFor="before-after-range" className="sr-only">
        Drag to compare before and after
      </label>
      <input
        id="before-after-range"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
