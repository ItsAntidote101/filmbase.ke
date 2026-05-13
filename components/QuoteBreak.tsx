"use client";

import { motion } from "framer-motion";

export default function QuoteBreak() {
  return (
    <section className="py-24 lg:py-32 bg-brand-ink overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-tight tracking-tight mb-2">
            The glass was always there.
          </p>
          <p className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight mb-10 gradient-text-light">
            Now it works harder.
          </p>
          <p className="text-[10px] font-semibold tracking-[0.35em] text-white/30 uppercase">
            Filmbase Technology &nbsp;&bull;&nbsp; Nairobi, Kenya
          </p>
        </motion.div>
      </div>
    </section>
  );
}
