"use client";

import CTAButton from "@/components/CTAButton";

type BookNowTriggerProps = {
  className?: string;
};

export default function BookNowTrigger({ className }: BookNowTriggerProps) {
  return (
    <CTAButton
      onClick={() => {
        window.dispatchEvent(new Event("open-booking-modal"));
      }}
      className={className}
    >
      Book Your Chair
    </CTAButton>
  );
}
