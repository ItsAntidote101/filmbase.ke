"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const handleClick = () => {
    document.getElementById("stats-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex justify-center pb-6">
      <motion.button
        onClick={handleClick}
        aria-label="Scroll to explore"
        className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-[0.25em] text-white uppercase font-light">
          Scroll to explore
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white" />
      </motion.button>
    </div>
  );
}
