"use client";

import { motion } from "framer-motion";

const testimonials = [
  { quote: "Best fade I’ve had in Charlotte. Clean lines every time.", author: "D. Mitchell" },
  { quote: "Atmosphere is top-tier and the team is always on point.", author: "Marcus T." },
  { quote: "They got my beard exactly how I wanted. Highly recommend.", author: "Chris A." },
  { quote: "Great with my son and very consistent with timing.", author: "Andre R." },
  { quote: "Professional service, modern vibe, and sharp results.", author: "Malik H." },
  { quote: "Easy booking, no hassle, and I always leave looking fresh.", author: "Tyson B." }
];

export default function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((item, index) => (
        <motion.article
          key={item.author}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: index * 0.05 }}
          className="rounded-xl border border-slatecool/20 bg-charcoal/35 p-5"
        >
          <p className="text-sm text-white">“{item.quote}”</p>
          <p className="mt-4 text-xs uppercase tracking-[0.1em] text-bronze">{item.author}</p>
        </motion.article>
      ))}
    </div>
  );
}
