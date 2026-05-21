import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Layers, MapPin, Users, type LucideIcon } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import AnimatedNumber from "@/components/AnimatedNumber";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteSection from "@/components/QuoteSection";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroHeadline from "@/components/HeroHeadline";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedProductCards from "@/components/AnimatedProductCards";
import AnimatedFeatureBlocks from "@/components/AnimatedFeatureBlocks";
import QuoteBreak from "@/components/QuoteBreak";
import MarqueeTicker from "@/components/MarqueeTicker";

export const metadata: Metadata = {
  title: "Filmbase Technology | Transparent LED & Smart Glass Kenya",
  description:
    "Kenya's first specialist in transparent LED display screens and switchable smart glass. Engineered globally, installed across all 47 counties.",
  keywords: [
    "transparent LED screen Kenya",
    "smart glass Kenya",
    "switchable glass Nairobi",
    "LED film screen",
    "PDLC glass Kenya",
  ],
  openGraph: {
    title: "Filmbase Technology | Make Glass Do More",
    description: "Transparent LED. Switchable smart glass. Engineered globally. Delivered across Kenya.",
    url: "https://filmbasetechnology.co.ke",
    siteName: "Filmbase Technology",
    locale: "en_KE",
    type: "website",
    // REPLACE: OG image for home page
    images: ["https://placehold.co/1200x630/054e72/ffffff?text=Filmbase+Technology"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Filmbase Technology | Make Glass Do More",
    description: "Kenya's first specialist in transparent LED and smart glass.",
  },
};

const STATS: Array<{ value: string | number; label: string; Icon: LucideIcon }> = [
  { value: "1st", label: "First in Kenya",            Icon: Trophy },
  { value: 2,     label: "Product Categories",        Icon: Layers },
  { value: 47,    label: "Across 47 Counties",          Icon: MapPin },
  { value: "100%",label: "Installed by Our Own Team", Icon: Users  },
];

const PRODUCTS = [
  {
    title: "LED Film Screen",
    description: "Transparent LED mounted directly on glass. For storefronts, banking halls, car showrooms, and anywhere glass needs to communicate.",
    href: "/led-film",
    image: "/LED-film-screen@2x-100.jpg",
    gif: true,
  },
  {
    title: "LED Crystal Film Screen",
    description: "Higher transparency, finer pixel detail. For luxury retail, five-star hotels, and premium architectural environments.",
    href: "/led-crystal-film",
    image: "/transparent-film-led-screen.jpg",
    unoptimized: true,
  },
  {
    title: "Switchable Smart Glass",
    description: "Transparent to frosted at the touch of a button. For boardrooms, executive offices, hotel suites, and premium homes.",
    href: "/switchable-glass",
    image: "/jw-gif2.gif",
    gif: true,
  },
];


const SHOWCASE_IMAGES = [
  {
    id: 1,
    src: "/samsung-store.jpg",
    alt: "Samsung Store LED Film Screen installation",
    product: "LED Film Screen",
    href: "/led-film",
  },
  {
    id: 2,
    src: "/single-glazed-switchable-smart-glass-retail.jpg",
    alt: "Switchable smart glass installed in a retail environment",
    product: "Switchable Smart Glass",
    href: "/switchable-glass",
  },
  {
    id: 3,
    src: "/jw-gif2.gif",
    alt: "Switchable smart glass installation",
    product: "Switchable Smart Glass",
    href: "/switchable-glass",
  },
  {
    id: 4,
    src: "/Switchable.gif",
    alt: "Switchable smart glass switching between clear and frosted states",
    product: "Switchable Smart Glass",
    href: "/switchable-glass",
  },
  {
    id: 5,
    src: "/JW-Switchable.gif",
    alt: "Switchable smart glass in a corporate environment",
    product: "Switchable Smart Glass",
    href: "/switchable-glass",
  },
  {
    id: 6,
    src: "/transparent-film-led-screen.jpg",
    alt: "LED Crystal Film Screen installation",
    product: "LED Crystal Film Screen",
    href: "/led-crystal-film",
  },
  {
    id: 7,
    src: "/LED-film-screen@2x-100.jpg",
    alt: "LED Film Screen installation",
    product: "LED Film Screen",
    href: "/led-film",
  },
  {
    id: 8,
    src: "/DBB-Board-Room.gif",
    alt: "Switchable smart glass — Diamond Business Bay boardroom",
    product: "Switchable Smart Glass",
    href: "/switchable-glass",
  },
  {
    id: 9,
    src: "/Boardroom.gif",
    alt: "Switchable smart glass corporate boardroom installation",
    product: "Switchable Smart Glass",
    href: "/switchable-glass",
  },
];

const FAQ_ITEMS = [
  {
    q: "What does Filmbase Technology do?",
    a: "We supply, install, and support two specialist technologies: transparent LED display screens and switchable smart glass. We serve clients across all 47 counties in Kenya.",
  },
  {
    q: "Are these technologies available elsewhere in Kenya?",
    a: "Filmbase Technology is the first dedicated specialist in Kenya for these products. We are not a general AV supplier or import agent. This is all we do.",
  },
  {
    q: "How do I get a quotation?",
    a: "Send us your project brief through our contact form, by email, or on WhatsApp. Our team responds with technical guidance and a detailed quotation, typically within 48 hours.",
  },
  {
    q: "Can I see the products working before I decide?",
    a: "Yes. Our Nairobi showroom has working installations of every product in our range. Visits are by appointment.",
  },
  {
    q: "Do you handle installation yourselves?",
    a: "Yes. Our own trained team handles every installation from site survey to commissioning.",
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* ── HERO — stays dark ── */}
      <section className="relative flex flex-col overflow-hidden bg-brand-dark h-[85vh] min-h-[560px] sm:h-[75vh] sm:min-h-[620px] lg:h-[90vh] lg:min-h-[680px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/gtc-led-film.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Smooth gradient scrim for text legibility — no hard edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Vertically centered content */}
        <div className="relative flex-1 flex flex-col justify-center" style={{ zIndex: 2 }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <HeroHeadline />
          </div>
        </div>

        {/* Scroll indicator anchored inside the bottom of the hero */}
        <ScrollIndicator />
      </section>

      {/* ── MARQUEE TICKER ── */}
      <MarqueeTicker />

      {/* ── WHY CHOOSE FILMBASE (stats) ── */}
      <section id="stats-section" className="relative bg-brand-ink overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Top fade — hides grid near heading, reveals it near stats */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "60%",
            background: "linear-gradient(to bottom, #054e72 0%, transparent 100%)",
            zIndex: 1,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20" style={{ zIndex: 2 }}>
          {/* Heading */}
          <ScrollReveal className="mb-16 lg:mb-20">
            <SectionTag dark className="mb-6">About Us</SectionTag>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              Why Choose <span className="accent-text">Filmbase</span>
            </h2>
            <p className="text-white/60 text-lg font-light max-w-2xl leading-relaxed">
              Kenya&apos;s first company dedicated entirely to transparent LED and smart glass. Not a side product. Not an import agent. A specialist operation built around two technologies.
            </p>
          </ScrollReveal>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => {
              const isLastInMobileRow = i % 2 === 1;
              const isLastInDesktop = i === 3;
              return (
                <div key={stat.label} className="relative px-6 lg:px-10 py-10">
                  {/* Vertical divider — right of left-column items on mobile */}
                  {!isLastInMobileRow && (
                    <span
                      className="absolute right-0 top-0 bottom-0 w-px"
                      style={{ background: "rgba(255,255,255,0.25)", zIndex: 3 }}
                    />
                  )}
                  {/* Vertical divider — desktop only for item i=1 */}
                  {!isLastInDesktop && isLastInMobileRow && (
                    <span
                      className="hidden lg:block absolute right-0 top-0 bottom-0 w-px"
                      style={{ background: "rgba(255,255,255,0.25)", zIndex: 3 }}
                    />
                  )}
                  {/* Horizontal separator — mobile second row only */}
                  {i >= 2 && (
                    <span
                      className="lg:hidden absolute top-0 left-0 right-0 h-px"
                      style={{ background: "rgba(255,255,255,0.25)", zIndex: 3 }}
                    />
                  )}

                  <stat.Icon size={28} color="#7dd3f0" style={{ display: "block", marginBottom: "12px" }} />

                  <div className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                    <AnimatedNumber value={stat.value} className="accent-text" />
                  </div>

                  <p className="text-xs text-white/80 font-light leading-snug uppercase tracking-widest">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom link */}
          <div className="mt-12 flex justify-end">
            <Link href="/overview" className="arr-link text-sm text-brand-accent/70 hover:text-brand-accent transition-colors duration-200">
              About us
              <span className="arr-link-icon"><ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ── */}
      <div className="flex justify-center py-2">
        <div className="w-[60%] h-px opacity-30" style={{ background: "linear-gradient(to right, transparent, #054e72, transparent)" }} />
      </div>

      {/* ── PRODUCTS SECTION ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-16 max-w-3xl">
            <SectionTag className="mb-6">Our Products</SectionTag>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
              Built for spaces that<br />
              demand <span className="gradient-text-teal">more.</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed font-light">
              Filmbase supplies two of the most advanced architectural technologies available: transparent LED display
              and switchable smart glass. Both sourced from leading global manufacturers. Both installed by our own team.
              Both backed by a warranty issued in writing.
            </p>
          </ScrollReveal>

          <AnimatedProductCards products={PRODUCTS} />
        </div>
      </section>

      {/* ── SECTION DIVIDER ── */}
      <div className="flex justify-center py-2 bg-white">
        <div className="w-[60%] h-px opacity-30" style={{ background: "linear-gradient(to right, transparent, #054e72, transparent)" }} />
      </div>

      {/* ── SEEN IN THE FIELD ── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <ScrollReveal>
              <SectionTag className="mb-4">Gallery</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight">
                Seen in the Field
              </h2>
              <p className="text-brand-muted mt-3 font-light">A look at what these technologies look like in real spaces.</p>
            </ScrollReveal>
            <Link href="/gallery" className="arr-link text-sm font-medium text-brand-ink flex-shrink-0">
              View all
              <span className="arr-link-icon"><ArrowRight size={14} /></span>
            </Link>
          </div>

          {/* 70/30 featured split */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Left — 70% */}
            <Link
              href="/led-film"
              className="group relative overflow-hidden rounded-xl h-[280px] sm:h-[500px] sm:flex-[7]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Absa-LED-FILM.png"
                alt="Absa Bank LED Film Screen installation, Nairobi"
                className="w-full h-full object-cover object-center transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-white font-semibold text-[13px]">LED Film — Absa Bank, Nairobi</p>
              </div>
            </Link>

            {/* Right — 30% */}
            <Link
              href="/led-film"
              className="group relative overflow-hidden rounded-xl h-[200px] sm:h-[500px] sm:flex-[3]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/samsung-store.jpg"
                alt="Samsung Store LED Film Screen installation, Nairobi"
                className="w-full h-full object-cover object-center transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-white font-semibold text-[13px]">LED Film — Samsung Store</p>
              </div>
            </Link>
          </div>

          {/* Remaining tiles — 3 column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SHOWCASE_IMAGES.map((img) => (
              <Link
                key={img.id}
                href={img.href}
                className="group relative overflow-hidden rounded-xl h-[300px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="text-white font-semibold text-sm">{img.product}</p>
                  <span className="arr-link text-white/70 text-xs mt-1">
                    View Product
                    <span className="arr-link-icon"><ArrowRight size={12} /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ── */}
      <div className="flex justify-center py-2 bg-brand-alt">
        <div className="w-[60%] h-px opacity-30" style={{ background: "linear-gradient(to right, transparent, #054e72, transparent)" }} />
      </div>

      {/* ── WHY FILMBASE ── */}
      <section className="py-24 lg:py-32 bg-brand-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <SectionTag className="mb-6">Why Us</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
                The first. The only. The local team behind it.
              </h2>
              <p className="text-brand-muted leading-relaxed mb-10 font-light">
                Filmbase Technology is the first company in Kenya focused exclusively on transparent LED display and
                switchable smart glass. We work directly with established manufacturers and bring their most advanced
                products to Kenya through a fully integrated supply, installation, and support operation.
              </p>
              <Link href="/overview" className="arr-link text-brand-ink font-medium text-sm">
                Read our overview
                <span className="arr-link-icon"><ArrowRight size={16} /></span>
              </Link>
            </ScrollReveal>

            <AnimatedFeatureBlocks />
          </div>
        </div>
      </section>

      {/* ── QUOTE BREAK ── */}
      <QuoteBreak />

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal className="lg:sticky lg:top-28 self-start">
              <SectionTag className="mb-6">FAQ</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight">
                Questions We Get Asked
              </h2>
            </ScrollReveal>
            <div>
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </div>
      </section>

      <QuoteSection />
    </PageTransition>
  );
}
