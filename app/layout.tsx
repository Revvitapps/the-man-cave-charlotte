import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import SiteShell from "@/components/SiteShell";
import { baseMetadata } from "@/lib/seo";
import { barbershopJsonLd } from "@/lib/seo";

const headingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = barbershopJsonLd();

  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-obsidian text-white antialiased`}>
        <Script id="local-business-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
