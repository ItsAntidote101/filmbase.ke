import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Filmbase Technology — Kenya's first dedicated specialist in transparent LED display and switchable smart glass. Quality, standards, warranty, sustainability.",
  openGraph: {
    title: "Overview | Filmbase Technology Limited",
    description:
      "A specialist company with a focused mission. Quality sourced globally. Installed and supported locally.",
    // REPLACE: OG image for overview page
    images: ["https://placehold.co/1200x630/111827/ffffff?text=Filmbase+Overview"],
  },
};

const OVERVIEW_SECTIONS = [
  {
    tag: "Our Mission",
    heading: "A specialist company.\nA focused mission.",
    body: "Filmbase Technology is Kenya's first dedicated specialist in transparent display and switchable smart glass. We work with architects, brands, and developers to deliver installations that change how a space is experienced.",
    accent: false,
  },
  {
    tag: "Quality",
    heading: "Engineered to global standards.",
    body: "Every product is sourced from leading global manufacturers, technically vetted by our team, and proven on real installations before we offer it to a client.",
    accent: true,
  },
  {
    tag: "Standards",
    heading: "The installation discipline\nbehind the finish.",
    body: "Site assessment. Mounting. Electrical. Commissioning. Every stage handled by our trained team.",
    accent: false,
  },
  {
    tag: "Warranty",
    heading: "A long-term partner,\nnot a one-time supplier.",
    body: "Written warranty issued by Filmbase Technology Limited. Local spares. Local service. The team that installed your project is the team that supports it.",
    accent: true,
  },
  {
    tag: "Sustainability",
    heading: "Designed to last.",
    body: "Our products are engineered for years of operation, not seasons. Service-and-repair over replacement. Lower long-term cost. Lower environmental footprint.",
    accent: false,
  },
];

export default function OverviewPage() {
  return (
    <PageTransition>
      {/* ── PAGE HERO ── */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-dark" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTag className="mb-6">Company</SectionTag>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter max-w-3xl">
            Over<span className="gradient-text">view</span>
          </h1>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        {OVERVIEW_SECTIONS.map((section, i) => (
          <section
            key={section.tag}
            className={`py-20 lg:py-28 ${
              i < OVERVIEW_SECTIONS.length - 1 ? "border-b border-brand-border" : ""
            }`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <SectionTag className="mb-6">{section.tag}</SectionTag>
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight whitespace-pre-line mb-6">
                  {section.heading}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">{section.body}</p>
              </div>

              {/* Visual accent column */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex items-center justify-center`}>
                <div className="relative w-full max-w-md aspect-square">
                  {/* Decorative layered squares */}
                  <div className="absolute inset-0 rounded-3xl border border-brand-border rotate-3 opacity-40" />
                  <div className="absolute inset-4 rounded-2xl border border-brand-accent/20 -rotate-2 opacity-60" />
                  <div
                    className={`absolute inset-8 rounded-xl flex items-center justify-center ${
                      section.accent
                        ? "bg-brand-accent/5 border border-brand-accent/20"
                        : "bg-white/3 border border-brand-border"
                    }`}
                  >
                    <span className="text-8xl font-black opacity-10 text-brand-accent select-none">
                      0{i + 1}
                    </span>
                  </div>
                  {/* Accent dot */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-brand-accent opacity-60 blur-sm" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CLOSING CTA ── */}
      <section className="py-24 bg-brand-navy border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag className="mb-6">Showroom</SectionTag>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            Experience the technology in person.
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Our Nairobi showroom is open by appointment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-brand-accent text-brand-dark font-bold text-sm tracking-wide rounded-xl hover:bg-brand-accent-dim transition-colors duration-200"
          >
            Book a Visit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
