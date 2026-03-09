"use client";

import { BUSINESS } from "@/lib/constants";

export default function MobileBookNow() {
  return (
    <button
      type="button"
      onClick={() => (window.location.href = BUSINESS.externalLinks.booksy)}
      className="fixed bottom-4 right-4 z-40 rounded-full bg-bronze px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-bronze md:hidden"
    >
      Book Now
    </button>
  );
}
