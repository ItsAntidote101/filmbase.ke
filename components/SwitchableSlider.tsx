"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    src: "/DBB-Board-Room.gif",
    label: "Diamond Business Bay",
    sub: "Corporate Boardroom — Nairobi",
  },
  {
    src: "/JW-Switchable.gif",
    label: "JW Marriott",
    sub: "Hotel Suite — Nairobi",
  },
  {
    src: "/jw-gif2.gif",
    label: "JW Marriott",
    sub: "Bedroom Partition — Nairobi",
  },
  {
    src: "/single-glazed-switchable-smart-glass-retail.jpg",
    label: "Retail Installation",
    sub: "Nairobi, Kenya",
  },
];

export default function SwitchableSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setCurrent(next);
  }, []);

  const prev = () => go((current - 1 + SLIDES.length) % SLIDES.length, -1);
  const next = useCallback(() => go((current + 1) % SLIDES.length, 1), [current, go]);

  useEffect(() => {
    const t = setTimeout(next, 4500);
    return () => clearTimeout(t);
  }, [current, next]);

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[7/5] bg-[#e8f4fb] select-none"
      style={{ boxShadow: "0 8px 40px rgba(5,78,114,0.12)" }}>

      {/* Slides */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SLIDES[current].src}
            alt={SLIDES[current].label}
            className="w-full h-full object-cover"
          />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-5 bg-gradient-to-t from-black/65 to-transparent">
            <p className="text-white text-sm font-semibold leading-tight">{SLIDES[current].label}</p>
            <p className="text-white/70 text-xs mt-0.5">{SLIDES[current].sub}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} color="white" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={18} color="white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-1.5 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? "white" : "rgba(255,255,255,0.45)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
