"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { number: 99, suffix: "%+", label: "UV Block" },
  { number: 5, suffix: " W/m²", label: "Low Power Consumption" },
  { number: 20, suffix: "%", label: "Noise Immunity Improvement" },
];

function CountUp({ target, suffix, delay }: { target: number; suffix: string; delay: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1000;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [target, delay]);

  return (
    <>
      {value}
      <span className="text-2xl font-black">{suffix}</span>
    </>
  );
}

export default function HeroStats() {
  return (
    <div className="flex items-start mt-10">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 + i * 0.15 }}
          className={`${i > 0 ? "pl-6 border-l border-white/40" : ""} ${i < STATS.length - 1 ? "pr-6" : ""}`}
        >
          <div className="text-[32px] sm:text-[52px] font-black text-white leading-none mb-1.5">
            <CountUp target={stat.number} suffix={stat.suffix} delay={1.2 + i * 0.15} />
          </div>
          <div className="hidden min-[380px]:block text-[12px] uppercase tracking-[0.12em] text-white/70">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
