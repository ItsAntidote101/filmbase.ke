"use client";

// LOGO UPLOAD: Place your logo files in the /public folder of this project
// - /public/logo.png       → dark version (for white/light backgrounds)
// - /public/logo-white.png → white version (for dark/hero backgrounds)
// Recommended size: at least 400px wide, PNG with transparent background
// After uploading via GitHub or direct file addition, Vercel redeploys automatically

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ButtonPill from "@/components/ButtonPill";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const MEGA_PRODUCTS = [
  {
    title: "LED Film Screen",
    href: "/led-film",
    image: "/led-film-Mega-menu@2x-100.jpg",
  },
  {
    title: "LED Crystal Film Screen",
    href: "/led-crystal-film",
    image: "/transparent-film-led-screen.jpg",
  },
  {
    title: "Switchable Smart Glass",
    href: "/switchable-glass",
    image: "/jw-gif2.gif",
  },
];

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

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(MEGA_PRODUCTS[0]);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

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

  const overDark = !scrolled && !mobileOpen;

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white border-b border-brand-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo white={overDark} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link
              href="/"
              className={`nav-underline text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/"
                  ? overDark ? "text-white nav-active" : "text-brand-ink nav-active"
                  : overDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/overview"
              className={`nav-underline text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/overview"
                  ? overDark ? "text-white nav-active" : "text-brand-ink nav-active"
                  : overDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              }`}
            >
              Overview
            </Link>
          </li>

          <li>
            <Link
              href="/gallery"
              className={`nav-underline text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/gallery"
                  ? overDark ? "text-white nav-active" : "text-brand-ink nav-active"
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

          <li>
            <Link
              href="/contact"
              className={`nav-underline text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/contact"
                  ? overDark ? "text-white nav-active" : "text-brand-ink nav-active"
                  : overDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <ButtonPill href="/contact" variant={overDark ? "secondary-dark" : "primary"} size="sm">
            Get a Quote
          </ButtonPill>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen || !overDark ? "bg-[#0a0a0a]" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen || !overDark ? "bg-[#0a0a0a]" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen || !overDark ? "bg-[#0a0a0a]" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* ── MEGA MENU (desktop only) ── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={openMega}
            onMouseLeave={closeMegaDelayed}
            className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-brand-border shadow-2xl"
          >
            {/* Two-panel body */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex">

                {/* LEFT PANEL — 40%: crossfading image + name + link */}
                <div className="w-[40%] flex-shrink-0 py-8 pr-10">
                  <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "500/380" }}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeProduct.href}
                        src={activeProduct.image}
                        alt={activeProduct.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                  <p className="mt-4 text-base font-bold text-[#0a0a0a] leading-tight">
                    {activeProduct.title}
                  </p>
                  <Link
                    href={activeProduct.href}
                    onClick={() => setMegaOpen(false)}
                    className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-brand-ink hover:text-brand-ink-light transition-colors duration-200"
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* RIGHT PANEL — 60%: vertical product list */}
                <div className="flex-1 py-8 pl-10 border-l border-brand-border">
                  <ul className="flex flex-col divide-y divide-[#e8e8e8]">
                    {MEGA_PRODUCTS.map((product) => (
                      <li key={product.href}>
                        <Link
                          href={product.href}
                          onClick={() => setMegaOpen(false)}
                          onMouseEnter={() => setActiveProduct(product)}
                          className="group flex items-center justify-between py-6 w-full"
                        >
                          <span
                            className={`text-base font-semibold transition-colors duration-200 ${
                              activeProduct.href === product.href
                                ? "text-brand-ink"
                                : "text-[#0a0a0a] group-hover:text-brand-ink"
                            }`}
                          >
                            {product.title}
                          </span>
                          <motion.span
                            animate={{ x: activeProduct.href === product.href ? 4 : 0 }}
                            transition={{ duration: 0.15 }}
                            className={`transition-colors duration-200 ${
                              activeProduct.href === product.href
                                ? "text-brand-ink"
                                : "text-[#0a0a0a]/30 group-hover:text-brand-ink"
                            }`}
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom strip — #f8f8f8 */}
            <div className="bg-[#f8f8f8] border-t border-brand-border">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-brand-muted">
                  <svg className="w-4 h-4 text-brand-ink/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit our showroom in Kileleshwa, Nairobi
                </div>
                <ButtonPill href="/contact" size="sm" onClick={() => setMegaOpen(false)}>
                  Book a Visit
                </ButtonPill>
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
                      <div className="pb-3 flex flex-col">
                        {MEGA_PRODUCTS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`py-3 px-2 text-sm border-b border-brand-border last:border-0 transition-colors ${
                              pathname === item.href
                                ? "text-brand-ink font-medium"
                                : "text-[#0a0a0a]/70"
                            }`}
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

              <ButtonPill href="/contact" className="mt-4">
                Get a Quote
              </ButtonPill>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
