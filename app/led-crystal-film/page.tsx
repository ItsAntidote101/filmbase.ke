import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "LED Crystal Film Screen Kenya | Premium Transparent Display | Filmbase",
  description:
    "Premium transparent LED crystal film display. Higher transparency, sharper pixel detail. For luxury retail, five-star hotels and executive spaces across Kenya.",
  keywords: [
    "LED crystal film Kenya",
    "premium transparent display",
    "luxury LED glass screen Nairobi",
  ],
  openGraph: {
    title: "LED Crystal Film Screen | Filmbase Technology Kenya",
    description: "Premium-grade transparent display. Engineered for the spaces that lead.",
    url: "https://filmbasetechnology.co.ke/led-crystal-film",
    siteName: "Filmbase Technology",
    type: "website",
    // REPLACE: OG image for LED Crystal Film page
    images: ["https://placehold.co/1200x630/033a55/ffffff?text=LED+Crystal+Film"],
  },
};

const FEATURES = [
  {
    title: "What sets it apart",
    body: "Higher transparency and finer pixel performance than standard LED Film. The visual finish is more refined, designed to integrate with premium architectural environments rather than impose on them.",
    // REPLACE: Side-by-side or close-up showing crystal clarity of LED Crystal Film vs standard film
    image: "https://placehold.co/700x500/e8e8e8/666666?text=Crystal+Film+Detail",
    imageAlt: "LED Crystal Film showing high transparency and pixel clarity",
  },
  {
    title: "Where it is specified",
    body: "Luxury retail. Five-star hotels. Executive lobbies. Showrooms. Museums. Any environment where the display must be near-invisible when off and extraordinary when on.",
    // REPLACE: LED Crystal Film installed in a five-star hotel lobby or luxury retail environment
    image: "https://placehold.co/700x500/e8e8e8/666666?text=Luxury+Hotel+Crystal+Install",
    imageAlt: "LED Crystal Film installed in a luxury hotel lobby",
  },
  {
    title: "Performance in daylight",
    body: "Vivid output in bright conditions. Near-invisible when powered off. Specified for atriums, naturally lit lobbies, and glass-fronted spaces where standard LED performance is not sufficient.",
    // REPLACE: Crystal Film displaying content in a naturally lit atrium or sunlit lobby
    image: "https://placehold.co/700x500/e8e8e8/666666?text=Daylight+Performance",
    imageAlt: "LED Crystal Film performing in bright natural light conditions",
  },
  {
    title: "Installation",
    body: "Direct mount on glass. No structural framework required. Our own technicians manage every installation from site survey through to final commissioning.",
    // REPLACE: Installation process showing direct glass mounting
    image: "https://placehold.co/700x500/e8e8e8/666666?text=Crystal+Film+Install",
    imageAlt: "LED Crystal Film being installed directly onto glass",
  },
  {
    title: "Support",
    body: "Written warranty. Local spare parts. Local service team. The same engineers who installed your system are the ones who support it. No third-party agents.",
    // REPLACE: Service technician providing on-site support
    image: "https://placehold.co/700x500/e8e8e8/666666?text=Local+Support+%26+Warranty",
    imageAlt: "Filmbase service team providing local support",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is the difference from standard LED Film?",
    a: "Higher transparency, sharper pixel detail, and a more refined visual finish. Designed for premium environments where the standard product is not the right specification.",
  },
  {
    q: "Where is it specified?",
    a: "Luxury retail. Five-star hotels. Executive lobbies. Galleries. Architectural showcase installations. Any environment where the display must be near-invisible when off.",
  },
  {
    q: "How transparent is it when powered off?",
    a: "Near-invisible. The film integrates with the architecture rather than dominating it. When powered down, you see glass, not screen.",
  },
  {
    q: "Does it work in daylight?",
    a: "Yes. Specified for atriums, naturally lit lobbies, and bright glass-fronted spaces. High-brightness output keeps it readable in direct sunlight.",
  },
  {
    q: "Does it require a special structure?",
    a: "No. Direct mount on existing glass. No steel framework required. Minimal architectural disruption.",
  },
];

export default function LEDCrystalFilmPage() {
  return (
    <PageTransition>
      {/* ── HERO — stays dark ── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-brand-dark">
        <div className="absolute inset-0">
          {/* REPLACE: Luxury hotel lobby or high-end retail space with crystal LED display in operation */}
          <Image
            src="https://placehold.co/1400x700/0a0a0a/1a1a2e?text=LED+Crystal+Film+%E2%80%94+Luxury+Hotel+Lobby"
            alt="LED Crystal Film Screen in a luxury hotel lobby"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 w-full">
          <SectionTag dark className="mb-6">LED Crystal Film Screen</SectionTag>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter max-w-4xl mb-6">
            Premium transparent<br />
            <span className="accent-text">display.</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            Higher transparency. Finer pixel detail. Near-invisible when off, extraordinary when on.
            For environments where the standard product is not enough.
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {FEATURES.map((feature, i) => (
          <section
            key={feature.title}
            className={`py-16 lg:py-20 ${i < FEATURES.length - 1 ? "border-b border-brand-border" : ""}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-xs font-semibold text-brand-ink/30 tracking-[0.2em] uppercase block mb-4">
                  0{i + 1}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-5">
                  {feature.title}
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed font-light">{feature.body}</p>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} rounded-2xl overflow-hidden aspect-[7/5] relative bg-brand-alt`}>
                <Image src={feature.image} alt={feature.imageAlt} fill className="object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── COMPARISON CALLOUT ── */}
      <section className="py-16 bg-brand-alt border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { metric: "Higher", label: "transparency than standard LED Film" },
              { metric: "Finer", label: "pixel resolution and visual finish" },
              { metric: "Near-zero", label: "visual presence when off" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-8 text-center hover:border-brand-ink/20 transition-colors duration-200">
                <div className="text-3xl font-bold text-brand-ink mb-2">{item.metric}</div>
                <p className="text-sm text-brand-muted font-light">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="lg:sticky lg:top-28 self-start">
              <SectionTag className="mb-6">FAQ</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight">
                Questions about Crystal Film.
              </h2>
            </div>
            <div>
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
            See Crystal Film working in person.
          </h2>
          <p className="text-brand-muted text-lg mb-10 font-light">Our Nairobi showroom has a live demonstration. Visits are by appointment.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-brand-ink text-white font-semibold text-sm tracking-wide rounded-xl hover:bg-brand-ink-light transition-colors duration-200"
          >
            Request a Quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
