"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Category = "all" | "led-film" | "led-crystal-film" | "switchable-glass";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Category;
  categoryLabel: string;
  location: string;
  href: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  // LED Film — 4 images
  {
    id: 1,
    // REPLACE: LED Film Screen on a retail storefront in Westlands — daytime exterior
    src: "https://placehold.co/800x600/054e72/ffffff?text=LED+Film+%E2%80%94+Westlands",
    alt: "LED Film Screen installed at a retail storefront in Westlands, Nairobi",
    category: "led-film",
    categoryLabel: "LED Film Screen",
    location: "Westlands, Nairobi",
    href: "/led-film",
  },
  {
    id: 2,
    // REPLACE: LED Film Screen on a bank facade in CBD Nairobi — exterior evening shot
    src: "https://placehold.co/800x600/054e72/ffffff?text=LED+Film+%E2%80%94+CBD+Nairobi",
    alt: "LED Film Screen on a bank facade in CBD, Nairobi",
    category: "led-film",
    categoryLabel: "LED Film Screen",
    location: "CBD, Nairobi",
    href: "/led-film",
  },
  {
    id: 3,
    // REPLACE: LED Film Screen in a car showroom on Mombasa Road — interior wide shot
    src: "https://placehold.co/800x600/054e72/ffffff?text=LED+Film+%E2%80%94+Mombasa+Road",
    alt: "LED Film Screen in a car showroom on Mombasa Road",
    category: "led-film",
    categoryLabel: "LED Film Screen",
    location: "Mombasa Road",
    href: "/led-film",
  },
  {
    id: 4,
    // REPLACE: LED Film Screen on a restaurant glazing in Karen — interior/exterior dusk shot
    src: "https://placehold.co/800x600/054e72/ffffff?text=LED+Film+%E2%80%94+Karen",
    alt: "LED Film Screen on a restaurant in Karen, Nairobi",
    category: "led-film",
    categoryLabel: "LED Film Screen",
    location: "Karen, Nairobi",
    href: "/led-film",
  },

  // LED Crystal Film — 4 images
  {
    id: 5,
    // REPLACE: LED Crystal Film Screen in a five-star hotel lobby in Upper Hill — interior shot
    src: "https://placehold.co/800x600/033a55/ffffff?text=Crystal+Film+%E2%80%94+Upper+Hill",
    alt: "LED Crystal Film Screen in a hotel lobby in Upper Hill, Nairobi",
    category: "led-crystal-film",
    categoryLabel: "LED Crystal Film Screen",
    location: "Upper Hill, Nairobi",
    href: "/led-crystal-film",
  },
  {
    id: 6,
    // REPLACE: LED Crystal Film Screen in a luxury retail store in Westlands — daylight interior
    src: "https://placehold.co/800x600/033a55/ffffff?text=Crystal+Film+%E2%80%94+Westlands",
    alt: "LED Crystal Film Screen in a luxury retail store in Westlands",
    category: "led-crystal-film",
    categoryLabel: "LED Crystal Film Screen",
    location: "Westlands, Nairobi",
    href: "/led-crystal-film",
  },
  {
    id: 7,
    // REPLACE: LED Crystal Film Screen in a corporate executive lobby in Gigiri — interior wide shot
    src: "https://placehold.co/800x600/033a55/ffffff?text=Crystal+Film+%E2%80%94+Gigiri",
    alt: "LED Crystal Film Screen in a corporate lobby in Gigiri, Nairobi",
    category: "led-crystal-film",
    categoryLabel: "LED Crystal Film Screen",
    location: "Gigiri, Nairobi",
    href: "/led-crystal-film",
  },
  {
    id: 8,
    // REPLACE: LED Crystal Film Screen in a museum atrium in Kilimani — natural light, display on
    src: "https://placehold.co/800x600/033a55/ffffff?text=Crystal+Film+%E2%80%94+Kilimani",
    alt: "LED Crystal Film Screen in a museum atrium in Kilimani",
    category: "led-crystal-film",
    categoryLabel: "LED Crystal Film Screen",
    location: "Kilimani, Nairobi",
    href: "/led-crystal-film",
  },

  // Switchable Glass — 4 images
  {
    id: 9,
    src: "/single-glazed-switchable-smart-glass-retail.jpg",
    alt: "Switchable smart glass installed in a retail environment, Nairobi",
    category: "switchable-glass",
    categoryLabel: "Switchable Smart Glass",
    location: "Nairobi, Kenya",
    href: "/switchable-glass",
  },
  {
    id: 10,
    src: "/Switchable.gif",
    alt: "Switchable smart glass switching between clear and frosted states, Kileleshwa",
    category: "switchable-glass",
    categoryLabel: "Switchable Smart Glass",
    location: "Kileleshwa, Nairobi",
    href: "/switchable-glass",
  },
  {
    id: 11,
    src: "/JW-Switchable.gif",
    alt: "Switchable smart glass installation in Westlands, Nairobi",
    category: "switchable-glass",
    categoryLabel: "Switchable Smart Glass",
    location: "Westlands, Nairobi",
    href: "/switchable-glass",
  },
  {
    id: 12,
    src: "/jw-gif2.gif",
    alt: "Switchable smart glass installation in Karen, Nairobi",
    category: "switchable-glass",
    categoryLabel: "Switchable Smart Glass",
    location: "Karen, Nairobi",
    href: "/switchable-glass",
  },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "LED Film", value: "led-film" },
  { label: "LED Crystal Film", value: "led-crystal-film" },
  { label: "Switchable Glass", value: "switchable-glass" },
];

export default function GalleryClient() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    filter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  // ESC key + scroll lock
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-12">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f.value
                    ? "bg-brand-ink text-white"
                    : "bg-brand-alt text-brand-muted hover:bg-brand-ink/10 hover:text-brand-ink border border-brand-border"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Image grid with Framer Motion layout animation */}
          <motion.div
            layout
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-brand-alt"
                  onClick={() => setLightbox(img)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-xs font-semibold uppercase tracking-wider">
                      {img.categoryLabel}
                    </p>
                    <p className="text-white/70 text-xs font-light mt-1">{img.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t border-brand-border text-center">
            <p className="text-2xl font-bold text-[#0a0a0a] mb-3">Have a project in mind?</p>
            <p className="text-brand-muted font-light mb-8">
              Tell us about your space and we&apos;ll respond with technical guidance and a quotation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-brand-ink text-white font-semibold text-sm tracking-wide rounded-xl hover:bg-brand-ink-light transition-colors duration-200"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 lg:p-10"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto rounded-xl"
              />

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors duration-200"
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Caption + link */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{lightbox.categoryLabel}</p>
                  <p className="text-white/50 text-xs font-light mt-0.5">{lightbox.location}</p>
                </div>
                <Link
                  href={lightbox.href}
                  onClick={closeLightbox}
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  View Product
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
