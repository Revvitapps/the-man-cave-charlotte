import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const defaultDescription =
  "The Man Cave Barbershop Charlotte delivers premium men's haircuts, fades, and beard grooming in a modern masculine setting. Book your chair or call now.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.shortName} | Premium Barber Shop Charlotte NC`,
    template: `%s | ${BUSINESS.shortName}`
  },
  description: defaultDescription,
  keywords: [...BUSINESS.keywords],
  openGraph: {
    title: `${BUSINESS.shortName} | Premium Barber Shop Charlotte NC`,
    description: defaultDescription,
    type: "website",
    locale: "en_US",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.shortName,
    images: [
      {
        url: "/images/og-default.svg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.shortName} Charlotte`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.shortName} | Premium Barber Shop Charlotte NC`,
    description: defaultDescription,
    images: ["/images/og-default.svg"]
  },
  alternates: {
    canonical: BUSINESS.siteUrl
  }
};

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    keywords: [...BUSINESS.keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${title} | ${BUSINESS.shortName}`,
      description,
      url: `${BUSINESS.siteUrl}${path}`,
      images: [
        {
          url: "/images/og-default.svg",
          width: 1200,
          height: 630,
          alt: `${BUSINESS.shortName} ${title}`
        }
      ]
    },
    twitter: {
      title: `${title} | ${BUSINESS.shortName}`,
      description
    }
  };
}

export function barbershopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: BUSINESS.name,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    url: BUSINESS.siteUrl,
    image: `${BUSINESS.siteUrl}/images/hero-shop.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US"
    },
    openingHoursSpecification: BUSINESS.hours.map((hour) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hour.day,
      opens: to24Hour(hour.open),
      closes: to24Hour(hour.close)
    })),
    aggregateRating: {
      "@type": "AggregateRating"
    },
    sameAs: [],
    priceRange: "$$"
  };
}

function to24Hour(value: string): string {
  const [time, meridiem] = value.split(" ");
  const [h, m] = time.split(":").map(Number);
  const isPm = meridiem === "PM";
  const hour = isPm ? (h === 12 ? 12 : h + 12) : h === 12 ? 0 : h;
  return `${hour.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}
