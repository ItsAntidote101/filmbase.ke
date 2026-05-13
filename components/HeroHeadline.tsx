"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LINE1 = ["Make", "Glass"];
const LINE2 = ["Do", "More."];

export default function HeroHeadline() {
  return (
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
        <span className="text-xs font-semibold text-white/50 tracking-[0.25em] uppercase">
          Kenya&apos;s First Specialist
        </span>
      </motion.div>

      <h1
        className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter text-white mb-8"
        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
      >
        <span className="block">
          {LINE1.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </span>
        <span className="block">
          {LINE2.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i + 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word === "More." ? (
                <span className="accent-text">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-lg sm:text-xl lg:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-12"
        style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
      >
        Transparent LED displays and switchable smart glass,<br />
        supplied and installed across Kenya.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/led-film"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark font-semibold text-sm tracking-wide rounded-xl hover:bg-white/90 transition-all duration-200 group"
        >
          See Our Products
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white/8 border border-white/15 text-white font-medium text-sm tracking-wide rounded-xl hover:bg-white/12 transition-all duration-200"
        >
          Get a Quote
        </Link>
      </motion.div>
    </div>
  );
}
