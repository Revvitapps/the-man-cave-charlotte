"use client";

import CTAButton from "@/components/CTAButton";
import { BUSINESS } from "@/lib/constants";

type BookNowTriggerProps = {
  className?: string;
};

export default function BookNowTrigger({ className }: BookNowTriggerProps) {
  return (
    <CTAButton
      onClick={() => {
        window.location.href = BUSINESS.externalLinks.booksy;
      }}
      className={className}
    >
      Book Your Chair
    </CTAButton>
  );
}
