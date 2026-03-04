import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About",
  "Learn the story behind The Man Cave Barbershop Charlotte and our commitment to craft, consistency, and community.",
  "/about"
);

const team = ["Master Barber", "Senior Barber", "Style Specialist"];

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-slatecool/15 pb-10 pt-14 md:pt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-bronze">About Us</p>
        <h1 className="mt-2 font-heading text-6xl uppercase">Grooming as a destination</h1>
        <p className="mt-4 max-w-3xl text-sm text-slatecool">
          The Man Cave was built as a modern barbershop where quality, atmosphere, and consistency meet.
        </p>
      </Section>

      <Section>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slatecool/20">
            <Image src="/images/about-story.jpg" alt="Barbershop chairs" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-5xl uppercase">Our Story</h2>
            <p className="mt-4 text-sm text-slatecool">
              From first-time fades to signature beard work, every appointment is handled with detail, respect, and intention.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {["Craft", "Consistency", "Community"].map((value) => (
                <div key={value} className="rounded-lg border border-slatecool/20 bg-charcoal/35 p-4 text-center">
                  <p className="font-heading text-2xl uppercase">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-5xl uppercase">Meet the Team</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {team.map((role, idx) => (
            <article key={role} className="rounded-xl border border-slatecool/20 bg-charcoal/35 p-5">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg border border-slatecool/20">
                <Image src={`/images/barber-${idx + 1}.jpg`} alt={`${role} profile`} fill className="object-cover" />
              </div>
              <h3 className="font-heading text-3xl uppercase">{role}</h3>
              <p className="mt-2 text-sm text-slatecool">Profile placeholder for barber bio, specialties, and booking preference.</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-2">
        <div className="rounded-xl border border-bronze/35 bg-bronze/10 p-6 text-center">
          <h2 className="font-heading text-4xl uppercase">Experience The Man Cave</h2>
          <div className="mt-4 flex justify-center">
            <CTAButton href="/contact">Book Your Chair</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
