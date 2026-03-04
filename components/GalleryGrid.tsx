"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg"
];

type GalleryGridProps = {
  preview?: boolean;
};

export default function GalleryGrid({ preview = false }: GalleryGridProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const items = preview ? galleryImages.slice(0, 6) : galleryImages;

  return (
    <>
      <div
        className={
          preview
            ? "flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible"
            : "columns-2 gap-3 space-y-3 md:columns-3"
        }
      >
        {items.map((src, idx) => (
          <button
            key={src}
            type="button"
            className={
              preview
                ? "group relative aspect-[4/5] w-[68vw] shrink-0 snap-start overflow-hidden rounded-xl border border-slatecool/20 md:w-auto"
                : "group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-slatecool/20"
            }
            onClick={() => setSelected(src)}
            aria-label={`Open gallery image ${idx + 1}`}
          >
            <div className={preview ? "relative h-full w-full" : `relative w-full ${idx % 3 === 0 ? "aspect-[4/6]" : "aspect-[4/5]"}`}>
            <Image
              src={src}
              alt={`Barbershop gallery ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative h-[78vh] w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={selected} alt="Expanded style shot" fill className="object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
