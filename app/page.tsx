import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import AnimatedNumber from "@/components/AnimatedNumber";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroHeadline from "@/components/HeroHeadline";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedProductCards from "@/components/AnimatedProductCards";
import AnimatedFeatureBlocks from "@/components/AnimatedFeatureBlocks";
import QuoteBreak from "@/components/QuoteBreak";

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

const STATS = [
  { value: "1st", label: "First in Kenya" },
  { value: 2, label: "Product Categories" },
  { value: 47, label: "Counties We Serve" },
  { value: "100%", label: "Installed by Our Own Team" },
];

const PRODUCTS = [
  {
    title: "LED Film Screen",
    description: "Transparent LED mounted directly on glass. For storefronts, banking halls, car showrooms, and anywhere glass needs to communicate.",
    href: "/led-film",
    // REPLACE: Product card image — LED film display installed on a retail storefront
    image: "https://placehold.co/800x600/e8e8e8/666666?text=LED+Film+Screen",
  },
  {
    title: "LED Crystal Film Screen",
    description: "Higher transparency, finer pixel detail. For luxury retail, five-star hotels, and premium architectural environments.",
    href: "/led-crystal-film",
    // REPLACE: Product card image — LED Crystal Film in a luxury hotel or high-end retail environment
    image: "https://placehold.co/800x600/e8e8e8/666666?text=LED+Crystal+Film+Screen",
  },
  {
    title: "Switchable Smart Glass",
    description: "Transparent to frosted at the touch of a button. For boardrooms, executive offices, hotel suites, and premium homes.",
    href: "/switchable-glass",
    // REPLACE: Product card image — switchable smart glass partition in a corporate boardroom
    image: "https://placehold.co/800x600/e8e8e8/666666?text=Switchable+Smart+Glass",
  },
];


const SHOWCASE_IMAGES = [
  {
    id: 1,
    // REPLACE: LED Film Screen installed on a retail storefront window — daytime exterior shot
    src: "https://placehold.co/800x600/054e72/ffffff?text=LED+Film+Storefront",
    alt: "LED Film Screen on a retail storefront window",
    product: "LED Film Screen",
    href: "/led-film",
  },
  {
    id: 2,
    // REPLACE: LED Crystal Film Screen in a five-star hotel lobby — interior shot
    src: "https://placehold.co/800x600/033a55/ffffff?text=LED+Crystal+Hotel+Lobby",
    alt: "LED Crystal Film Screen in a hotel lobby",
    product: "LED Crystal Film Screen",
    href: "/led-crystal-film",
  },
  {
    id: 3,
    // REPLACE: Switchable smart glass partition in a corporate boardroom — portrait interior shot
    src: "https://placehold.co/600x800/054e72/ffffff?text=Smart+Glass+Boardroom",
    alt: "Switchable smart glass in a corporate boardroom",
    product: "Switchable Smart Glass",
    href: "/switchable-glass",
  },
  {
    id: 4,
    // REPLACE: LED Film Screen on a bank facade — exterior daytime shot
    src: "https://placehold.co/800x600/033a55/ffffff?text=LED+Film+Bank+Facade",
    alt: "LED Film Screen on a bank facade",
    product: "LED Film Screen",
    href: "/led-film",
  },
  {
    id: 5,
    // REPLACE: Switchable smart glass in a luxury residential bathroom — portrait interior shot
    src: "https://placehold.co/600x800/0a7aad/ffffff?text=Smart+Glass+Bathroom",
    alt: "Switchable smart glass in a luxury bathroom",
    product: "Switchable Smart Glass",
    href: "/switchable-glass",
  },
  {
    id: 6,
    // REPLACE: LED Film Screen on a car showroom glass facade — interior shot showing display content
    src: "https://placehold.co/800x600/054e72/ffffff?text=LED+Film+Car+Showroom",
    alt: "LED Film Screen on a car showroom",
    product: "LED Film Screen",
    href: "/led-film",
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
    a: "Yes. Our own trained team handles every installation from site survey to commissioning. We do not subcontract.",
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* ── HERO — stays dark ── */}
      <section className="relative flex flex-col overflow-hidden bg-brand-dark h-[80vh] min-h-[480px] sm:h-[70vh] sm:min-h-[520px] lg:h-[65vh] lg:min-h-[580px]">
        <div className="absolute inset-0 bg-brand-dark">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/165648422.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(3, 58, 85, 0.68)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(3, 58, 85, 0.3) 0%, rgba(3, 58, 85, 0.75) 50%, rgba(3, 58, 85, 0.85) 100%)" }} />
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Vertically centered content */}
        <div className="relative flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <HeroHeadline />
          </div>
        </div>

        {/* Scroll indicator anchored inside the bottom of the hero */}
        <ScrollIndicator />
      </section>

      {/* ── WHY CHOOSE FILMBASE (stats) ── */}
      <section id="stats-section" className="relative bg-brand-ink overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          {/* Heading */}
          <ScrollReveal className="mb-16 lg:mb-20">
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
              const isFirstMobileRow = i < 2;
              const isLastInDesktop = i === 3;
              return (
                <div
                  key={stat.label}
                  className={[
                    "px-0 sm:px-6 lg:px-10 py-10",
                    !isLastInMobileRow ? "border-r border-white/10" : "",
                    isFirstMobileRow ? "border-b lg:border-b-0 border-white/10" : "",
                    !isLastInDesktop && isLastInMobileRow ? "lg:border-r border-white/10" : "",
                  ].filter(Boolean).join(" ")}
                >
                  <div className="text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
                    <AnimatedNumber value={stat.value} className="accent-text" />
                  </div>
                  <div className="w-8 h-px mb-3" style={{ backgroundColor: "rgba(125, 211, 240, 0.6)" }} />
                  <p className="text-sm text-white/60 font-light leading-snug">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom link */}
          <div className="mt-12 flex justify-end">
            <Link
              href="/overview"
              className="inline-flex items-center gap-2 text-sm text-brand-accent/70 hover:text-brand-accent transition-colors duration-200"
            >
              About us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
              Two technologies.<br />
              Serious <span className="gradient-text-teal">applications.</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed font-light">
              Filmbase supplies two of the most advanced architectural technologies available: transparent LED display
              and switchable smart glass. Both sourced from leading global manufacturers. Both installed by our own team.
              Both backed by a written warranty.
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
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-ink hover:gap-4 transition-all duration-200 flex-shrink-0"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile: horizontal scroll strip */}
        <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-6">
          {SHOWCASE_IMAGES.map((img) => (
            <Link
              key={img.id}
              href={img.href}
              className="flex-none w-72 snap-start group relative overflow-hidden rounded-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="w-full h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm">{img.product}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Tablet + Desktop: uniform grid, all tiles equal height */}
        <div className="hidden sm:block max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
            style={{ gridAutoRows: "400px" }}
          >
            {SHOWCASE_IMAGES.map((img) => (
              <Link
                key={img.id}
                href={img.href}
                className="group relative overflow-hidden rounded-xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="text-white font-semibold text-sm">{img.product}</p>
                  <span className="text-white/70 text-xs mt-1 inline-flex items-center gap-1.5">
                    View Product
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
              <SectionTag className="mb-6">Why Filmbase</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
                The first. The only. The local team behind it.
              </h2>
              <p className="text-brand-muted leading-relaxed mb-10 font-light">
                Filmbase Technology is the first company in Kenya focused exclusively on transparent LED display and
                switchable smart glass. We work directly with established manufacturers and bring their most advanced
                products to Kenya through a fully integrated supply, installation, and support operation.
              </p>
              <Link
                href="/overview"
                className="inline-flex items-center gap-3 text-brand-ink font-medium text-sm hover:gap-5 transition-all duration-200"
              >
                Read our overview
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
              <SectionTag className="mb-6">FAQs</SectionTag>
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

      {/* ── SECTION DIVIDER ── */}
      <div className="flex justify-center py-2 bg-brand-alt">
        <div className="w-[60%] h-px opacity-30" style={{ background: "linear-gradient(to right, transparent, #054e72, transparent)" }} />
      </div>

      {/* ── QUOTE FORM ── */}
      <section className="py-24 lg:py-32 bg-brand-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal className="lg:sticky lg:top-28">
              <SectionTag className="mb-6">Get a Quote</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
                Tell us about your project.
              </h2>
              <p className="text-brand-muted leading-relaxed text-lg font-light">
                Send us your brief and our team will respond with technical guidance, product recommendations,
                and a detailed quotation within 48 hours.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <a
                  href="mailto:info@filmbasetechnology.co.ke"
                  className="flex items-center gap-3 text-sm text-brand-muted hover:text-brand-ink transition-colors duration-200"
                >
                  <span className="w-8 h-8 rounded-full bg-brand-ink/5 border border-brand-border flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  info@filmbasetechnology.co.ke
                </a>
                <a
                  href="tel:+254727808264"
                  className="flex items-center gap-3 text-sm text-brand-muted hover:text-brand-ink transition-colors duration-200"
                >
                  <span className="w-8 h-8 rounded-full bg-brand-ink/5 border border-brand-border flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  +254 727 808 264
                </a>
              </div>
            </ScrollReveal>

            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <QuoteForm showBudget />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
