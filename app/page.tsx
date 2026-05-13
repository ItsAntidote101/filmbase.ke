import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import AnimatedNumber from "@/components/AnimatedNumber";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import HomeAnimations from "@/components/HomeAnimations";

export const metadata: Metadata = {
  title: "Filmbase Technology Limited | Transparent LED & Smart Glass Kenya",
  description:
    "Kenya's first specialist in transparent LED display screens and switchable smart glass. Supply, installation, and support across all 47 counties.",
  openGraph: {
    title: "Filmbase Technology Limited",
    description: "Transparent LED. Switchable smart glass. Engineered globally. Delivered across Kenya.",
    // REPLACE: OG image for home page
    images: ["https://placehold.co/1200x630/111827/ffffff?text=Filmbase+Technology"],
  },
};

const STATS = [
  { value: "1st", label: "Kenya's first specialist supplier" },
  { value: 2, label: "Product categories" },
  { value: 47, label: "Counties served" },
  { value: "100%", label: "Locally installed and supported" },
];

const PRODUCTS = [
  {
    title: "LED Film Screen",
    description:
      "Transparent LED on glass. Designed for storefronts, banks, and brand environments.",
    href: "/led-film",
    // REPLACE: Product card image — LED film display installed on a retail storefront
    image: "https://placehold.co/800x600/111827/ffffff?text=LED+Film+Screen",
  },
  {
    title: "LED Crystal Film Screen",
    description:
      "Premium-grade transparent display. For luxury retail, hotels, and architectural showcases.",
    href: "/led-crystal-film",
    // REPLACE: Product card image — LED Crystal Film in a luxury hotel or high-end retail environment
    image: "https://placehold.co/800x600/111827/ffffff?text=LED+Crystal+Film+Screen",
  },
  {
    title: "Switchable Smart Glass",
    description:
      "Privacy on demand. From transparent to frosted at the flick of a switch.",
    href: "/switchable-glass",
    // REPLACE: Product card image — switchable smart glass partition in a corporate boardroom
    image: "https://placehold.co/800x600/111827/ffffff?text=Switchable+Smart+Glass",
  },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 3l14 9-14 9V3z" />
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
    title: "End-to-end delivery",
    body: "Sourcing, installation, warranty, support — all handled by our team.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What does Filmbase do?",
    a: "We supply, install, and support transparent display screens and switchable smart glass — across Kenya.",
  },
  {
    q: "Are these technologies new in Kenya?",
    a: "Yes. Filmbase Technology is the first dedicated specialist in Kenya focused exclusively on transparent LED display and switchable smart glass. We bring these innovations to the Kenyan market with full local installation, warranty, and ongoing support.",
  },
  {
    q: "How do I get a quotation?",
    a: "Send us your project brief through our contact form, by email, or by WhatsApp. Our team will review your requirements and respond with technical guidance, recommended product options, and a detailed quotation — typically within 48 hours of receiving your brief.",
  },
  {
    q: "Can I see the products before committing?",
    a: "Absolutely. Our demonstration space is open by appointment. Our team will walk you through working installations of every product in our range and discuss your specific project.",
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* REPLACE: Full-screen hero background — modern glass building storefront with LED display */}
          <Image
            src="https://placehold.co/1920x1080/080c14/111827?text=Modern+Glass+Building+with+LED+Display"
            alt="Modern glass building storefront with LED display"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/30 to-brand-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent" />
        </div>

        {/* Decorative accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <HomeAnimations>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-xs font-semibold text-brand-accent tracking-[0.25em] uppercase">
                  Kenya&apos;s First Specialist
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter text-white mb-8">
                Make Glass<br />
                <span className="gradient-text">Do More.</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed mb-12">
                Transparent LED. Switchable smart glass.<br />
                Engineered globally. Delivered across Kenya.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/led-film"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-brand-dark font-bold text-sm tracking-wide rounded-xl hover:bg-brand-accent-dim transition-all duration-200 group"
                >
                  Explore Products
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-sm tracking-wide rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </HomeAnimations>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
          <span className="text-xs tracking-widest text-white uppercase">Scroll</span>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="relative bg-brand-navy border-y border-brand-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-brand-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:px-8">
                <div className="text-4xl lg:text-5xl font-black text-brand-accent mb-2 tracking-tight">
                  <AnimatedNumber value={stat.value} />
                </div>
                <p className="text-sm text-gray-400 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS SECTION ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <SectionTag className="mb-6">Our Products</SectionTag>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Two technologies.<br />
              Built for the spaces that lead.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Filmbase delivers two of the most advanced architectural display technologies on the market today —
              sourced from leading global manufacturers and engineered for the demands of premium commercial and
              residential environments across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <Link
                key={product.href}
                href={product.href}
                className="group glass-card rounded-2xl overflow-hidden hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/5"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{product.description}</p>
                  <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium">
                    Learn more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FILMBASE ── */}
      <section className="py-24 lg:py-32 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionTag className="mb-6">Why Filmbase</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                Kenya&apos;s first specialist in transparent LED and smart glass.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                Filmbase Technology is the first company in Kenya focused exclusively on transparent LED display and
                switchable smart glass technology. We work directly with established manufacturers — the global center
                of display innovation — and bring their most advanced products to Kenya through a fully integrated
                supply, installation, and support operation.
              </p>
              <Link
                href="/overview"
                className="inline-flex items-center gap-3 text-brand-accent font-medium text-sm hover:gap-5 transition-all duration-200"
              >
                Read our overview
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="glass-card rounded-2xl p-7 flex gap-5 hover:border-brand-accent/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1.5">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionTag className="mb-6">FAQs</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div>
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section className="py-24 lg:py-32 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionTag className="mb-6">Get a Quote</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                Let&apos;s bring your space to life.
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Send us your project brief and our team will respond with technical guidance, product recommendations,
                and a detailed quotation.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <a
                  href="mailto:info@filmbasetechnology.co.ke"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-accent transition-colors duration-200"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  info@filmbasetechnology.co.ke
                </a>
                <a
                  href="tel:+254965021920"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-accent transition-colors duration-200"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  +254 965 021 920
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <QuoteForm showBudget />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
