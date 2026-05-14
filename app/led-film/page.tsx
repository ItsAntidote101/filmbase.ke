import type { Metadata } from "next";
import Image from "next/image";
import ButtonPill from "@/components/ButtonPill";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "LED Film Screen Kenya | Transparent LED Display | Filmbase",
  description:
    "Transparent LED film screens that mount directly on glass. Transform storefronts, banking halls, and retail spaces into vivid digital displays. Available across Kenya.",
  keywords: [
    "LED film screen Kenya",
    "transparent LED display Nairobi",
    "LED glass screen",
    "storefront LED display Kenya",
  ],
  openGraph: {
    title: "LED Film Screen | Filmbase Technology Kenya",
    description:
      "Next-generation transparent LED display mounted directly on glass. For storefronts, banks, hotels and more.",
    url: "https://filmbasetechnology.co.ke/led-film",
    siteName: "Filmbase Technology",
    type: "website",
    // REPLACE: OG image for LED Film page
    images: ["https://placehold.co/1200x630/054e72/ffffff?text=LED+Film+Screen"],
  },
};

const FEATURES = [
  {
    title: "What it is",
    body: "LED elements embedded in thin transparent film, mounted directly onto glass. Displays video, animation, and graphics through the glass surface without blocking the view behind it.",
    // REPLACE: Close-up of LED film texture showing transparent LED elements embedded in film
    image: "https://placehold.co/700x500/e8e8e8/666666?text=LED+Film+Close-Up",
    imageAlt: "Close-up of LED film elements embedded in transparent film",
  },
  {
    title: "Why it is different",
    body: "Thinner, lighter, and more transparent than conventional LED screens. No bulky steel framework. Installs directly onto existing glass with minimal disruption to the space or structure.",
    // REPLACE: Comparison image showing LED film vs traditional LED panel installation
    image: "https://placehold.co/700x500/e8e8e8/666666?text=Film+vs+Traditional+LED",
    imageAlt: "LED Film compared to traditional LED screen installation",
  },
  {
    title: "Where it is used",
    body: "Retail storefronts. Banking halls. Car showrooms. Hotel lobbies. Restaurants. Museums. Anywhere a glass surface can become a communication or branding asset.",
    // REPLACE: Wide shot of LED film installed in a retail storefront or bank hall
    image: "https://placehold.co/700x500/e8e8e8/666666?text=LED+Film+Retail+Installation",
    imageAlt: "LED Film Screen installed in a retail storefront",
  },
  {
    title: "Visibility in daylight",
    body: "High-brightness output. Vivid and readable in direct sunlight. Engineered for the demanding light conditions of glass-fronted commercial environments.",
    // REPLACE: LED film displaying content in bright daylight conditions
    image: "https://placehold.co/700x500/e8e8e8/666666?text=Daylight+Visibility",
    imageAlt: "LED Film Screen displaying vibrant content in direct sunlight",
  },
  {
    title: "Installation",
    body: "Adhesive or screw-fixed directly to glass. No structural framework required. Our trained technical team manages every installation from site survey to final commissioning.",
    // REPLACE: Technicians installing LED film onto a glass surface
    image: "https://placehold.co/700x500/e8e8e8/666666?text=LED+Film+Installation",
    imageAlt: "Filmbase technicians installing LED Film onto a glass surface",
  },
];

const FAQ_ITEMS = [
  {
    q: "How does it work?",
    a: "Transparent LED elements bonded to thin film, mounted directly on glass. When powered off, the film is nearly invisible. When on, it displays vivid content while the view behind it remains visible.",
  },
  {
    q: "Where is it best suited?",
    a: "Retail storefronts, banking halls, car showrooms, hotels, restaurants, museums. Anywhere glass can be transformed into a communication or branding surface.",
  },
  {
    q: "How is it different from a traditional LED screen?",
    a: "It is transparent, lighter, and thinner. No bulky framework is required. Daylight passes through when the screen is off. The architectural openness of a glass-fronted space is preserved.",
  },
  {
    q: "Does it work in bright daylight?",
    a: "Yes. Engineered for high-brightness performance, including direct sun. Suitable for south-facing glass-fronted retail and banking environments.",
  },
  {
    q: "How is it installed?",
    a: "Adhesive or screw-fixed to glass. Our own trained technical team handles everything from site assessment to final commissioning.",
  },
  {
    q: "How long does installation take?",
    a: "Two to five working days for most projects. Larger or more complex installations may take longer. We confirm the timeline at the site assessment stage.",
  },
];

export default function LEDFilmPage() {
  return (
    <PageTransition>
      {/* ── HERO — stays dark ── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-brand-dark">
        <div className="absolute inset-0">
          {/* REPLACE: Wide storefront glass with vivid LED display overlay — daytime exterior shot */}
          <Image
            src="https://placehold.co/1400x700/0a0a0a/1a1a2e?text=LED+Film+Screen+%E2%80%94+Glass+Storefront+with+LED+Overlay"
            alt="LED Film Screen installed on glass storefront"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 w-full">
          <SectionTag dark className="mb-6">LED Film Screen</SectionTag>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter max-w-4xl mb-6">
            Transparent LED.<br />
            <span className="accent-text">Mounted on glass.</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            LED film screen is a transparent display that mounts directly onto glass surfaces,
            transforming windows and partitions into vivid digital screens
            without obstructing the view behind them.
          </p>
        </div>
      </section>

      {/* ── FEATURES (alternating layout) ── */}
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

      {/* ── FAQ ── */}
      <section className="py-24 bg-brand-alt border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="lg:sticky lg:top-28 self-start">
              <SectionTag className="mb-6">FAQ</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight">
                Questions about LED Film.
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
            See LED Film<br />working in person.
          </h2>
          <p className="text-brand-muted text-lg mb-10 font-light">Showroom visits are by appointment. Our team will walk you through a live demonstration.</p>
          <ButtonPill href="/contact">Request a Quote</ButtonPill>
        </div>
      </section>
    </PageTransition>
  );
}
