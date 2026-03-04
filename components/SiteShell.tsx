"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBookNow from "@/components/MobileBookNow";

const BookingModal = dynamic(() => import("@/components/BookingModal"), {
  ssr: false
});

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [openBooking, setOpenBooking] = useState(false);

  useEffect(() => {
    const open = () => setOpenBooking(true);
    window.addEventListener("open-booking-modal", open);
    return () => window.removeEventListener("open-booking-modal", open);
  }, []);

  return (
    <>
      <Header onBookClick={() => setOpenBooking(true)} />
      <main>{children}</main>
      <Footer />
      <MobileBookNow onClick={() => setOpenBooking(true)} />
      <BookingModal isOpen={openBooking} onClose={() => setOpenBooking(false)} />
    </>
  );
}
