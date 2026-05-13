"use client";

// LOGO UPLOAD: Place your logo files in the /public folder of this project
// - /public/logo.png       → dark version (for white/light backgrounds)
// - /public/logo-white.png → white version (for dark/hero backgrounds)
// Recommended size: at least 400px wide, PNG with transparent background
// After uploading via GitHub or direct file addition, Vercel redeploys automatically

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const MEGA_PRODUCTS = {
  mediaGlass: [
    {
      title: "LED Film Screen",
      href: "/led-film",
      description: "Transparent LED on glass. For storefronts, banks, and brand environments.",
      // REPLACE: Mega menu product image — LED Film installed on a retail storefront
      image: "https://placehold.co/300x200/0a0a0a/ffffff?text=LED+Film+Screen",
    },
    {
      title: "LED Crystal Film Screen",
      href: "/led-crystal-film",
      description: "Premium-grade transparent display. For luxury retail and hotels.",
      // REPLACE: Mega menu product image — LED Crystal Film in a luxury hotel lobby
      image: "https://placehold.co/300x200/0a0a0a/ffffff?text=LED+Crystal+Film",
    },
  ],
  smartFilm: [
    {
      title: "Switchable Smart Glass",
      href: "/switchable-glass",
      description: "Privacy on demand. Transparent to frosted at the flick of a switch.",
      // REPLACE: Mega menu product image — smart glass boardroom partition
      image: "https://placehold.co/300x200/0a0a0a/ffffff?text=Switchable+Smart+Glass",
    },
  ],
};

function Logo({ white = false }: { white?: boolean }) {
  const [imgError, setImgError] = useState(false);
  const src = white ? "/logo-white.png" : "/logo.png";

  if (imgError) {
    return (
      <span
        className={`text-xl font-bold tracking-[0.15em] ${
          white ? "text-white" : "text-[#0a0a0a]"
        }`}
      >
        FILMBASE
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Filmbase Technology"
      className="h-10 w-auto"
      onError={() => setImgError(true)}
    />
  );
}

function MegaMenuCard({
  item,
  onClick,
}: {
  item: (typeof MEGA_PRODUCTS.mediaGlass)[0];
  onClick: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex gap-4 p-3 rounded-xl hover:bg-brand-alt transition-colors duration-200"
    >
      <div className="flex-shrink-0 w-[110px] h-[76px] rounded-lg overflow-hidden relative">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm font-semibold text-[#0a0a0a] group-hover:text-brand-ink transition-colors duration-200 leading-tight">
          {item.title}
        </span>
        <span className="text-xs text-brand-muted leading-snug mt-1 line-clamp-2">
          {item.description}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-brand-ink font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Learn more
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // close mega menu on outside click
  useEffect(() => {
    if (!megaOpen) return;
    const handler = (e: MouseEvent) => {
      const nav = document.getElementById("main-nav");
      if (nav && !nav.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [megaOpen]);

  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const closeMegaDelayed = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 120);
  };

  // Nav is "over dark" when not scrolled (hero sections are always dark on all pages)
  const overDark = !scrolled && !mobileOpen;

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-white border-b border-brand-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo white={overDark} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {/* Home */}
          <li>
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/"
                  ? overDark ? "text-white" : "text-brand-ink"
                  : overDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              }`}
            >
              Home
            </Link>
          </li>

          {/* Overview */}
          <li>
            <Link
              href="/overview"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/overview"
                  ? overDark ? "text-white" : "text-brand-ink"
                  : overDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              }`}
            >
              Overview
            </Link>
          </li>

          {/* Gallery */}
          <li>
            <Link
              href="/gallery"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/gallery"
                  ? overDark ? "text-white" : "text-brand-ink"
                  : overDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              }`}
            >
              Gallery
            </Link>
          </li>

          {/* Products — mega menu trigger */}
          <li
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={closeMegaDelayed}
          >
            <button
              className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
                ["/led-film", "/led-crystal-film", "/switchable-glass"].includes(pathname)
                  ? overDark ? "text-white" : "text-brand-ink"
                  : overDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              }`}
              onClick={() => setMegaOpen(!megaOpen)}
              aria-expanded={megaOpen}
            >
              Products
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/contact"
                  ? overDark ? "text-white" : "text-brand-ink"
                  : overDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 tracking-wide ${
              overDark
                ? "bg-white text-[#0a0a0a] hover:bg-white/90"
                : "bg-brand-ink text-white hover:bg-brand-ink-light"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen || !overDark ? "bg-[#0a0a0a]" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen || !overDark ? "bg-[#0a0a0a]" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen || !overDark ? "bg-[#0a0a0a]" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* ── MEGA MENU ── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={openMega}
            onMouseLeave={closeMegaDelayed}
            className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-brand-border shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {/* Media Glass column */}
                <div className="col-span-2">
                  <span className="text-[10px] font-semibold text-brand-muted uppercase tracking-[0.2em] block mb-4 px-3">
                    Media Glass
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {MEGA_PRODUCTS.mediaGlass.map((item) => (
                      <MegaMenuCard key={item.href} item={item} onClick={() => setMegaOpen(false)} />
                    ))}
                  </div>
                </div>

                {/* Smart Film column */}
                <div>
                  <span className="text-[10px] font-semibold text-brand-muted uppercase tracking-[0.2em] block mb-4 px-3">
                    Smart Film
                  </span>
                  <div className="flex flex-col gap-2">
                    {MEGA_PRODUCTS.smartFilm.map((item) => (
                      <MegaMenuCard key={item.href} item={item} onClick={() => setMegaOpen(false)} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="mt-6 pt-5 border-t border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-brand-muted">
                  <svg className="w-4 h-4 text-brand-ink/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit our showroom in Kileleshwa, Nairobi
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMegaOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-ink text-white text-xs font-semibold rounded-lg hover:bg-brand-ink-light transition-colors duration-200"
                >
                  Book a Visit
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-brand-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <Link
                href="/"
                className={`py-3 text-base font-medium border-b border-brand-border ${pathname === "/" ? "text-brand-ink" : "text-[#0a0a0a]"}`}
              >
                Home
              </Link>
              <Link
                href="/overview"
                className={`py-3 text-base font-medium border-b border-brand-border ${pathname === "/overview" ? "text-brand-ink" : "text-[#0a0a0a]"}`}
              >
                Overview
              </Link>
              <Link
                href="/gallery"
                className={`py-3 text-base font-medium border-b border-brand-border ${pathname === "/gallery" ? "text-brand-ink" : "text-[#0a0a0a]"}`}
              >
                Gallery
              </Link>

              {/* Products accordion */}
              <div className="border-b border-brand-border">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between py-3 text-base font-medium text-[#0a0a0a]"
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-3 flex flex-col gap-1">
                        <p className="text-[10px] font-semibold text-brand-muted uppercase tracking-widest py-2">
                          Media Glass
                        </p>
                        {MEGA_PRODUCTS.mediaGlass.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`py-2 text-sm pl-2 border-l-2 transition-colors ${pathname === item.href ? "border-brand-ink text-brand-ink" : "border-transparent text-[#0a0a0a]/70"}`}
                          >
                            {item.title}
                          </Link>
                        ))}
                        <p className="text-[10px] font-semibold text-brand-muted uppercase tracking-widest py-2 mt-1">
                          Smart Film
                        </p>
                        {MEGA_PRODUCTS.smartFilm.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`py-2 text-sm pl-2 border-l-2 transition-colors ${pathname === item.href ? "border-brand-ink text-brand-ink" : "border-transparent text-[#0a0a0a]/70"}`}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className={`py-3 text-base font-medium border-b border-brand-border ${pathname === "/contact" ? "text-brand-ink" : "text-[#0a0a0a]"}`}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="mt-4 px-5 py-3.5 bg-brand-ink text-white text-sm font-semibold rounded-xl text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
