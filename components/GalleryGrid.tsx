"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const galleryImages = [
  "/images/522eb12956caade759d8c3266157b938c4ca7f5755f007380a5a7b4f5fd3ed7c.jpeg",
  "/images/70a2195dc1922b736df5703715e59b77a1bfb336722b8870dccc1ac16d5b991f.jpeg",
  "/images/8c31d0dcd6d964d797c9bbe5a7757b0227eb34af766b94c15562b377ed453742.jpeg",
  "/images/a5c1d42c470d2f25067d816112ca8b309725e826ecf6e76d54e72d3e5814845f.jpeg",
  "/images/c4d5f441fbed77f0d0b2a06aa88590c3ca27b3fca9a2709c98a08a2b18937949.jpeg",
  "/images/d82c078cd947201b49f1d370a450655e439b9a7d8b86680568dbcb95f868e16e.jpeg",
  "/images/e6c58ae945f7e521c444ddea224d429c7d32f1ed51161b80e6d21b6e4ccfbeee.jpeg",
  "/images/1b42e6b43f0417363523ae9fc6d0b54638c0ca1ebb62fa64b2bfbd5d7dc032e3.png"
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
