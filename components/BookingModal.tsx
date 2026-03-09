"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book appointment"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-slatecool/20 bg-obsidian p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-bronze">Book Your Chair</p>
                <h2 className="mt-2 font-heading text-4xl uppercase leading-none">Choose your route</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slatecool/35 px-3 py-1 text-sm"
              >
                Close
              </button>
            </div>

            <div className="mb-6 rounded-xl border border-slatecool/20 bg-charcoal/40 p-4">
              <p className="text-sm text-slatecool">Need immediate availability? Call the shop directly.</p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-2 inline-block text-base font-semibold uppercase tracking-[0.1em] text-white hover:text-bronze"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.externalLinks.booksy}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block rounded-full border border-bronze/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-bronze hover:bg-bronze hover:text-white"
              >
                Book on Booksy
              </a>
            </div>

            <LeadForm onSuccess={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
