import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slatecool/15 bg-charcoal/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="font-heading text-2xl uppercase tracking-[0.12em]">The Man Cave</h2>
          <p className="mt-4 text-sm text-slatecool">Premium grooming for Charlotte gentlemen.</p>
          <div className="mt-5 flex gap-3">
            <a
              className="rounded-full border border-slatecool/25 px-3 py-1 text-xs uppercase tracking-[0.1em]"
              href={BUSINESS.externalLinks.yelp}
              target="_blank"
              rel="noreferrer"
            >
              Yelp
            </a>
            <a
              className="rounded-full border border-slatecool/25 px-3 py-1 text-xs uppercase tracking-[0.1em]"
              href={BUSINESS.externalLinks.googleReviews}
              target="_blank"
              rel="noreferrer"
            >
              Google
            </a>
            <a
              className="rounded-full border border-slatecool/25 px-3 py-1 text-xs uppercase tracking-[0.1em]"
              href={BUSINESS.externalLinks.booksy}
              target="_blank"
              rel="noreferrer"
            >
              Booksy
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.18em] text-slatecool">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-bronze">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.18em] text-slatecool">Visit Us</h3>
          <p className="mt-4 text-sm">{BUSINESS.address.full}</p>
          <a href={BUSINESS.phoneHref} className="mt-2 block text-sm hover:text-bronze">
            {BUSINESS.phoneDisplay}
          </a>
          <p className="mt-3 text-xs text-slatecool">Open 7 days • Walk-ins welcome • Appointments encouraged</p>
        </div>
      </div>
      <div className="border-t border-slatecool/15 px-4 py-5 text-center text-xs text-slatecool">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
