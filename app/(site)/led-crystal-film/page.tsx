import type { Metadata } from "next";
import ButtonFilled from "@/components/ButtonFilled";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import FAQAccordion from "@/components/FAQAccordion";
import CrystalFilmGraphics from "@/components/CrystalFilmGraphics";

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
    images: ["https://placehold.co/1200x630/033a55/ffffff?text=LED+Crystal+Film"],
  },
};

const FAQ_ITEMS = [
  {
    q: "What is the difference from standard LED Film?",
    a: "Higher transparency, sharper pixel detail, and a more refined visual finish. Designed for premium environments where the standard product is not the right specification.",
  },
  {
    q: "Where is it specified?",
    a: "Retail showrooms. Corporate offices. Hotel lobbies. Galleries. Museums. Any environment where a premium display needs to disappear when off and impress when on.",
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
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-brand-dark">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
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

      {/* ── INSTALLATION GALLERY ── */}
      <section className="py-16 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold text-brand-ink/30 tracking-[0.2em] uppercase mb-8">Installed in</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[7/5] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/LC-waikiki.jpg" alt="LED Crystal Film retail installation" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[7/5] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Woolworths.jpg" alt="LED Crystal Film retail installation" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INFOGRAPHIC SECTIONS ── */}
      <CrystalFilmGraphics />

      {/* ── COMPARISON CALLOUT ── */}
      <section className="py-16 bg-brand-alt border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { metric: "Higher",   label: "transparency than standard LED Film" },
              { metric: "Finer",    label: "pixel resolution and visual finish" },
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
          <ButtonFilled href="/contact">Request a Quote</ButtonFilled>
        </div>
      </section>
    </PageTransition>
  );
}
