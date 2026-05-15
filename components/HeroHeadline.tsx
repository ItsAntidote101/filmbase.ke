"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ButtonPill from "@/components/ButtonPill";

const INTERVAL = 3500;

const SLIDES = [
  {
    id: 0,
    headlineParts: [
      { text: "Make Glass Do ", accent: false },
      { text: "More.", accent: true },
    ],
    sub: "Transparent LED displays and switchable smart glass, supplied and installed across Kenya.",
    proof: {
      icon: "pin",
      stat: "47 Counties",
      label: "Nationwide installation coverage",
    },
  },
  {
    id: 1,
    headlineParts: [
      { text: "Your Storefront. Now a ", accent: false },
      { text: "Screen.", accent: true },
    ],
    sub: "LED Film Screen transforms any glass window into a vivid, transparent digital display.",
    proof: {
      icon: "clock",
      stat: "2–5 Days",
      label: "From order to commissioned display",
    },
  },
  {
    id: 2,
    headlineParts: [
      { text: "Privacy. At the Touch of a ", accent: false },
      { text: "Button.", accent: true },
    ],
    sub: "Switchable smart glass converts from clear to frosted instantly. No blinds. No curtains.",
    proof: {
      icon: "zap",
      stat: "Instant",
      label: "Millisecond switching speed",
    },
  },
];

function PinIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

const ICONS: Record<string, React.FC> = {
  pin: PinIcon,
  clock: ClockIcon,
  zap: ZapIcon,
};

export default function HeroHeadline() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const goTo = (index: number) => {
    setCurrent(index);
    startInterval();
  };

  const slide = SLIDES[current];
  const ProofIcon = ICONS[slide.proof.icon];

  return (
    <div className="max-w-4xl pt-[90px] sm:pt-[100px] lg:pt-[120px]">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 mb-5"
        style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
        <span className="text-xs font-semibold text-white/50 tracking-[0.25em] uppercase">
          Kenya&apos;s First Specialist
        </span>
      </motion.div>

      {/* Rotating headline */}
      <div className="min-h-[84px] sm:min-h-[112px] lg:min-h-[156px]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[38px] sm:text-[52px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tighter text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
          >
            {slide.headlineParts.map((part, i) =>
              part.accent ? (
                <span key={i} className="accent-text">{part.text}</span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Rotating subheadline */}
      <div className="min-h-[60px] sm:min-h-[56px] mt-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl text-white font-light max-w-2xl leading-relaxed"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
          >
            {slide.sub}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Indicator dots */}
      <div className="flex items-center gap-2 mt-5">
        {SLIDES.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            animate={{
              width: i === current ? 24 : 6,
              backgroundColor: i === current ? "#7dd3f0" : "rgba(255,255,255,0.4)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-1.5 rounded-full cursor-pointer"
            aria-label={`Go to slide ${i + 1}`}
            style={{ minWidth: 6 }}
          />
        ))}
      </div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex items-center mt-7"
      >
        <ButtonPill href="/led-film" variant="primary-white">See Our Products</ButtonPill>
        <span className="hero-cta-sep" />
        <ButtonPill href="/contact" variant="secondary-dark">Get a Quote</ButtonPill>
      </motion.div>

      {/* Proof strip — hidden on mobile */}
      <div className="hidden sm:block mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              textShadow: "0 1px 10px rgba(0,0,0,0.5)",
            }}
          >
            <span className="text-brand-accent">
              <ProofIcon />
            </span>
            <span className="text-brand-accent font-bold text-base tracking-tight">
              {slide.proof.stat}
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-white/60 text-sm font-light">
              {slide.proof.label}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
