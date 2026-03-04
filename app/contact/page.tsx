import type { Metadata } from "next";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import CTAButton from "@/components/CTAButton";
import { BUSINESS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Book your chair or call The Man Cave Barbershop Charlotte. Find hours, map, and directions.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-slatecool/15 pb-10 pt-14 md:pt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-bronze">Contact</p>
        <h1 className="mt-2 font-heading text-6xl uppercase">Book Your Chair</h1>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slatecool/20 bg-charcoal/35 p-6">
            <h2 className="font-heading text-4xl uppercase">Visit Us</h2>
            <a href={BUSINESS.mapsLink} className="mt-4 block text-sm underline underline-offset-4">
              {BUSINESS.address.full}
            </a>
            <a href={BUSINESS.phoneHref} className="mt-2 block text-sm text-white hover:text-bronze">
              {BUSINESS.phoneDisplay}
            </a>
            <div className="mt-4 space-y-2 text-sm text-slatecool">
              {BUSINESS.hours.map((hour) => (
                <p key={hour.day}>
                  {hour.day}: {hour.open} - {hour.close}
                </p>
              ))}
            </div>
            <p className="mt-5 text-sm text-slatecool">
              From I-77, take Exit 9A toward Trade St. Continue west, then turn onto Westmere Ave. Free nearby parking is available.
            </p>
            <div className="mt-5">
              <CTAButton href={BUSINESS.phoneHref} variant="secondary">
                Call Now
              </CTAButton>
            </div>
          </article>

          <article className="rounded-2xl border border-slatecool/20 bg-charcoal/35 p-6">
            <h2 className="font-heading text-4xl uppercase">Request Appointment</h2>
            <p className="mb-4 mt-2 text-sm text-slatecool">Tell us your preferred day, time, and service.</p>
            <LeadForm compact />
          </article>
        </div>
      </Section>

      <Section className="pt-2">
        <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-slatecool/20">
          <iframe title="Map to shop" src={BUSINESS.mapEmbed} className="h-[360px] w-full" loading="lazy" />
        </div>
      </Section>
    </>
  );
}
