"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="rounded-2xl border border-slatecool/20 bg-charcoal/30 p-4">
      <h3 className="mb-4 font-heading text-3xl uppercase">Before / After</h3>
      <div className="relative mx-auto aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-xl border border-slatecool/20">
        <Image src="/images/before.jpg" alt="Before haircut" fill className="object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div className="relative h-full w-full">
            <Image src="/images/after.jpg" alt="After haircut" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-y-0" style={{ left: `calc(${position}% - 1px)` }}>
          <div className="h-full w-0.5 bg-white/70" />
        </div>
      </div>
      <label className="mt-4 block text-xs uppercase tracking-[0.1em] text-slatecool">
        Slide to compare
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="mt-2 w-full accent-bronze"
        />
      </label>
    </div>
  );
}
