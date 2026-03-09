import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Services",
  "Explore premium men's haircuts, fades, beard trim, youth cuts, and grooming services in Charlotte, NC.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <Section className="border-b border-slatecool/15 pb-10 pt-14 md:pt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-bronze">Service Menu</p>
        <h1 className="mt-2 font-heading text-6xl uppercase">Precision grooming services</h1>
        <p className="mt-4 max-w-3xl text-sm text-slatecool">
          Built for clients searching for the best barber Charlotte experience, from fades Charlotte styles to beard trim Charlotte detail.
        </p>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article key={service.title} className="rounded-xl border border-slatecool/20 bg-charcoal/35 p-6">
              <h2 className="font-heading text-4xl uppercase">{service.title}</h2>
              <p className="mt-2 text-sm text-slatecool">{service.summary}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.1em] text-bronze">{service.priceNote}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="sticky bottom-0 z-30 border-t border-slatecool/20 bg-obsidian/95 p-3 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.1em] text-slatecool">Ready to book?</p>
          <CTAButton href={BUSINESS.externalLinks.booksy} className="px-4 py-2 text-xs">
            Book Now
          </CTAButton>
        </div>
      </div>

      <Section className="pt-4">
        <div className="rounded-xl border border-bronze/30 bg-bronze/10 p-6 text-center">
          <h2 className="font-heading text-4xl uppercase">Need pricing clarity?</h2>
          <p className="mt-2 text-sm text-slatecool">Call for pricing and same-day availability.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <CTAButton href={BUSINESS.externalLinks.booksy}>Book Your Chair</CTAButton>
            <CTAButton href={BUSINESS.phoneHref} variant="secondary">
              Call Now
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
