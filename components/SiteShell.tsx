"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBookNow from "@/components/MobileBookNow";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileBookNow />
    </>
  );
}
