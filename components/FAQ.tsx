"use client";

import { useState } from "react";

const items = [
  {
    q: "Do you accept walk-ins or should I book ahead?",
    a: "Walk-ins are welcome based on availability, but booking is recommended for preferred times."
  },
  {
    q: "How long does a haircut take?",
    a: "Most appointments take 30-45 minutes depending on style and detail work."
  },
  {
    q: "What services do you specialize in?",
    a: "Precision cuts, fades, beard trims, line-ups, and classic grooming experiences."
  },
  {
    q: "Where are you located?",
    a: "We’re at 926 Westmere Ave, Charlotte, NC 28208."
  },
  {
    q: "What if I’m running late?",
    a: "Call us as soon as possible. We’ll do our best to adjust while respecting all scheduled clients."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <article key={item.q} className="rounded-xl border border-slatecool/20 bg-charcoal/30">
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.07em]">{item.q}</span>
              <span className="text-bronze">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm text-slatecool">{item.a}</p>}
          </article>
        );
      })}
    </div>
  );
}
