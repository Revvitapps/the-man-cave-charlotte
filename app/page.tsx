"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import BookNowTrigger from "@/components/BookNowTrigger";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GalleryGrid from "@/components/GalleryGrid";
import { BUSINESS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="grain-overlay relative flex min-h-[88vh] items-center border-b border-slatecool/15">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 md:bg-fixed"
          style={{ backgroundImage: "url('/images/70a2195dc1922b736df5703715e59b77a1bfb336722b8870dccc1ac16d5b991f.jpeg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-obsidian/80 to-obsidian" />

        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs uppercase tracking-[0.2em] text-bronze"
          >
            Charlotte, North Carolina
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-4xl font-heading text-5xl uppercase leading-[0.95] md:text-8xl"
          >
            Charlotte&apos;s Premier Barbershop for Precision Cuts &amp; Clean Fades
          </motion.h1>
          <div className="bronze-line mt-4 h-[2px] w-52" />
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-base text-slatecool md:text-lg"
          >
            More than a haircut - it&apos;s a ritual. Step into a premium grooming sanctuary built for the modern gentleman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <BookNowTrigger />
            <CTAButton href={BUSINESS.phoneHref} variant="secondary">
              Call Now
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <Section className="pt-10">
        <div className="grid gap-4 rounded-2xl border border-slatecool/20 bg-charcoal/40 p-5 md:grid-cols-3">
          <div className="rounded-lg border border-bronze/35 bg-bronze/10 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.1em]">
            Highly Rated in Charlotte
          </div>
          <p className="text-center text-sm text-slatecool md:col-span-2 md:text-left">
            Walk-ins welcome | Appointment-friendly | Family-friendly
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-8 text-center">
          <div className="mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-bronze">Services Preview</p>
            <h2 className="mt-2 font-heading text-5xl uppercase">Built for modern gentlemen</h2>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            {
              title: "Cuts",
              body: "Men's haircuts and fades shaped to your look.",
              icon: "Cut"
            },
            {
              title: "Beard",
              body: "Trim, sculpt, and precise line-up with balance.",
              icon: "Beard"
            },
            {
              title: "Full Experience",
              body: "Hot towel and straight razor inspired finish.",
              icon: "Full"
            }
          ].map((card) => (
            <article key={card.title} className="w-full rounded-xl border border-slatecool/20 bg-charcoal/35 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <p className="rounded-md border border-bronze/40 bg-bronze/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-bronze">
                  {card.icon}
                </p>
                <div>
                  <h3 className="font-heading text-3xl uppercase">{card.title}</h3>
                  <p className="mt-2 text-sm text-slatecool">{card.body}</p>
                </div>
              </div>
              <Link href="/services" className="mt-5 inline-block text-xs uppercase tracking-[0.12em] text-white hover:text-bronze">
                View Services
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slatecool/20">
            <Image src="/images/difference.jpg" alt="Barber at work" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bronze">The Man Cave Difference</p>
            <h2 className="mt-2 font-heading text-5xl uppercase leading-none">Where skill meets atmosphere</h2>
            <ul className="mt-6 space-y-3">
              {["Expert precision", "Premium atmosphere", "Top-tier products", "Great with kids"].map((bullet, idx) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="text-sm uppercase tracking-[0.1em] text-slatecool"
                >
                  - {bullet}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-heading text-5xl uppercase">Style Gallery</h2>
          <CTAButton href="/gallery" variant="secondary">
            View Full Gallery
          </CTAButton>
        </div>
        <GalleryGrid preview />
      </Section>

      <Section>
        <h2 className="font-heading text-5xl uppercase">Client Reviews</h2>
        <p className="mt-2 text-sm text-slatecool">Real feedback from Charlotte clients.</p>
        <div className="mt-6">
          <Testimonials />
        </div>
        <div id="book" className="mt-8 rounded-xl border border-bronze/35 bg-bronze/10 p-5 text-center">
          <p className="text-sm uppercase tracking-[0.1em]">Ready for your next cut?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <BookNowTrigger />
            <CTAButton href={BUSINESS.phoneHref} variant="secondary">
              Call Now
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-5xl uppercase">FAQ</h2>
        <div className="mt-6">
          <FAQ />
        </div>
      </Section>

      <Section className="pb-20">
        <div className="grid gap-6 rounded-2xl border border-slatecool/20 bg-charcoal/30 p-5 md:grid-cols-2">
          <div className="relative min-h-[290px] overflow-hidden rounded-xl border border-slatecool/15">
            <iframe title="Map to The Man Cave" src={BUSINESS.mapEmbed} className="h-full w-full" loading="lazy" />
          </div>
          <div>
            <h2 className="font-heading text-4xl uppercase">Visit The Shop</h2>
            <a href={BUSINESS.mapsLink} className="mt-3 block text-sm text-slatecool underline underline-offset-4">
              {BUSINESS.address.full}
            </a>
            <a href={BUSINESS.phoneHref} className="mt-2 block text-sm text-white hover:text-bronze">
              {BUSINESS.phoneDisplay}
            </a>
            <div className="mt-5 space-y-2 text-sm text-slatecool">
              {BUSINESS.hours.map((hour) => (
                <p key={hour.day}>
                  {hour.day}: {hour.open} - {hour.close}
                </p>
              ))}
            </div>
            <div className="mt-6">
              <BookNowTrigger />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
