export const BUSINESS = {
  name: "The Man Cave Barbershop Charlotte LLC",
  shortName: "The Man Cave Barbershop",
  address: {
    street: "926 Westmere Ave",
    city: "Charlotte",
    state: "NC",
    zip: "28208",
    full: "926 Westmere Ave, Charlotte, NC 28208"
  },
  phoneDisplay: "(704) 333-2283",
  phoneHref: "tel:+17043332283",
  email: "appointments@themancavecharlotte.com",
  hours: [
    { day: "Monday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "8:00 PM" },
    { day: "Saturday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Sunday", open: "10:00 AM", close: "4:00 PM" }
  ],
  openingHoursSpec: [
    "Mo-Th 09:00-19:00",
    "Fr 09:00-20:00",
    "Sa 08:00-18:00",
    "Su 10:00-16:00"
  ],
  mapEmbed:
    "https://www.google.com/maps?q=926+Westmere+Ave,+Charlotte,+NC+28208&output=embed",
  mapsLink: "https://maps.google.com/?q=926+Westmere+Ave,+Charlotte,+NC+28208",
  externalLinks: {
    yelp: "https://share.google/BZbRjb1SOoNPN81Tg",
    booksy:
      "https://booksy.com/en-us/546919_the-man-cave-barbershop-charlotte-llc_barber-shop_26844_charlotte#ba_s=seo",
    googleReviews:
      "https://www.google.com/maps/place/The+Man+Cave+Barbershop+Charlotte+LLC/data=!4m2!3m1!1s0x0:0x32929227a5b3cd9a?sa=X&ved=1t:2428&ictx=111"
  },
  siteUrl: "https://www.themancavecharlotte.com",
  keywords: [
    "barber shop Charlotte NC",
    "best barber Charlotte",
    "men's haircuts Charlotte",
    "fades Charlotte",
    "beard trim Charlotte"
  ]
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
] as const;

export const SERVICES = [
  {
    title: "Men's Haircuts",
    summary: "Classic and modern cuts tailored to your style.",
    priceNote: "Call for pricing"
  },
  {
    title: "Fades",
    summary: "Clean low, mid, and high fades with precise blending.",
    priceNote: "Starting at standard chair rates"
  },
  {
    title: "Beard Grooming",
    summary: "Shape, sculpt, and line-up for a polished finish.",
    priceNote: "Call for pricing"
  },
  {
    title: "Youth Cuts",
    summary: "Patient, detailed cuts great for kids and teens.",
    priceNote: "Call for pricing"
  },
  {
    title: "Shaves",
    summary: "Traditional straight razor and hot towel experience.",
    priceNote: "Call for pricing"
  },
  {
    title: "Shear Cuts",
    summary: "Longer styles shaped with scissor precision.",
    priceNote: "Call for pricing"
  },
  {
    title: "Color Services",
    summary: "Grey blending and select color enhancements.",
    priceNote: "Consultation required"
  }
] as const;
