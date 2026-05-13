"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    title: "First in Kenya",
    body: "We brought these technologies to the market. We know them better than any general supplier.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Direct manufacturer access",
    body: "Direct partnerships with leading global manufacturers. No middlemen.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Installed by Our Own Team",
    body: "Sourcing, installation, warranty, and support. All handled by our team. No subcontractors.",
  },
];

export default function AnimatedFeatureBlocks() {
  return (
    <div className="flex flex-col gap-5">
      {FEATURES.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl p-7 flex gap-5 hover:border-brand-ink/20 hover:shadow-md transition-all duration-300"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-ink/8 border border-brand-ink/10 flex items-center justify-center text-brand-ink">
            {f.icon}
          </div>
          <div>
            <h3 className="font-semibold text-[#0a0a0a] mb-1.5">{f.title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed font-light">{f.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
