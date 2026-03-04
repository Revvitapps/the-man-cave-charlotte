import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Section from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Gallery",
  "Browse haircut, fade, and beard trim looks from The Man Cave Barbershop Charlotte.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <>
      <Section className="border-b border-slatecool/15 pb-10 pt-14 md:pt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-bronze">Gallery</p>
        <h1 className="mt-2 font-heading text-6xl uppercase">Cuts, fades, and detail work</h1>
      </Section>

      <Section>
        <GalleryGrid />
      </Section>

      <Section className="pt-4">
        <BeforeAfterSlider />
      </Section>
    </>
  );
}
