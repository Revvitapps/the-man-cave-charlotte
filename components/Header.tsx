"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slatecool/15 bg-obsidian/85 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-heading text-2xl uppercase tracking-[0.12em] text-white">
          The Man Cave
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm uppercase tracking-[0.08em] text-slatecool transition hover:text-white",
                pathname === item.href && "text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={BUSINESS.phoneHref} className="rounded-full border border-slatecool/40 p-2" aria-label="Call now">
            <PhoneIcon />
          </a>
          <CTAButton onClick={() => (window.location.href = BUSINESS.externalLinks.booksy)}>Book Your Chair</CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slatecool/30 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-white">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-slatecool/10 bg-charcoal md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm uppercase tracking-[0.1em] text-slatecool",
                    pathname === item.href && "text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  window.location.href = BUSINESS.externalLinks.booksy;
                }}
                className="rounded-full bg-bronze px-4 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-white"
              >
                Book Your Chair
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 16.92V20a1 1 0 0 1-1.1 1A18 18 0 0 1 3 4.1 1 1 0 0 1 4 3h3.09a1 1 0 0 1 1 .75l.7 3a1 1 0 0 1-.27.98l-1.27 1.27a16 16 0 0 0 7.48 7.48l1.27-1.27a1 1 0 0 1 .98-.27l3 .7a1 1 0 0 1 .75 1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        className="text-white"
      />
    </svg>
  );
}
