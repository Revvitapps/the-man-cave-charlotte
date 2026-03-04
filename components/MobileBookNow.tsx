"use client";

type MobileBookNowProps = {
  onClick: () => void;
};

export default function MobileBookNow({ onClick }: MobileBookNowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-4 right-4 z-40 rounded-full bg-bronze px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-bronze md:hidden"
    >
      Book Now
    </button>
  );
}
