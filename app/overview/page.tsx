import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";

export const metadata: Metadata = {
  title: "About Us | Filmbase Technology Kenya",
  description:
    "Learn about Filmbase Technology — Kenya's first dedicated specialist in transparent LED display and switchable smart glass. End-to-end supply, installation and support.",
  openGraph: {
    title: "About Filmbase Technology Kenya",
    description:
      "A specialist company with a focused mission. Kenya's first in transparent LED and smart glass.",
    url: "https://filmbasetechnology.co.ke/overview",
    siteName: "Filmbase Technology",
    type: "website",
    // REPLACE: OG image for overview page
    images: ["https://placehold.co/1200x630/054e72/ffffff?text=Filmbase+Overview"],
  },
};

const OVERVIEW_SECTIONS = [
  {
    tag: "Our Mission",
    heading: "A specialist company.\nA focused mission.",
    body: "Filmbase Technology is Kenya's first dedicated specialist in transparent display and switchable smart glass. We work with architects, brands, and developers to deliver installations that change how a space is experienced.",
  },
  {
    tag: "Quality",
    heading: "Engineered to global standards.",
    body: "Every product is sourced from leading global manufacturers, technically vetted by our team, and proven on real installations before we offer it to a client.",
  },
  {
    tag: "Standards",
    heading: "The installation discipline\nbehind the finish.",
    body: "Site assessment. Mounting. Electrical. Commissioning. Every stage handled by our trained team.",
  },
  {
    tag: "Warranty",
    heading: "A long-term partner,\nnot a one-time supplier.",
    body: "Written warranty issued by Filmbase Technology Limited. Local spares. Local service. The team that installed your project is the team that supports it.",
  },
  {
    tag: "Sustainability",
    heading: "Designed to last.",
    body: "Our products are engineered for years of operation, not seasons. Service-and-repair over replacement. Lower long-term cost. Lower environmental footprint.",
  },
];

export default function OverviewPage() {
  return (
    <PageTransition>
      {/* ── PAGE HERO — stays dark ── */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-dark" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTag dark className="mb-6">Company</SectionTag>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter max-w-3xl">
            Over<span className="gradient-text">view</span>
          </h1>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        {OVERVIEW_SECTIONS.map((section, i) => {
          const altBg = i % 2 === 1;
          return (
            <section
              key={section.tag}
              className={`py-20 lg:py-28 ${altBg ? "bg-brand-alt -mx-6 lg:-mx-8 px-6 lg:px-8" : ""} ${
                i < OVERVIEW_SECTIONS.length - 1 ? "border-b border-brand-border" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <SectionTag className="mb-6">{section.tag}</SectionTag>
                  <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight whitespace-pre-line mb-6">
                    {section.heading}
                  </h2>
                  <p className="text-brand-muted text-lg leading-relaxed font-light">{section.body}</p>
                </div>

                {/* Visual accent column */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex items-center justify-center`}>
                  <div className="relative w-full max-w-sm aspect-square">
                    <div className="absolute inset-0 rounded-3xl border border-brand-border rotate-3 opacity-60" />
                    <div className="absolute inset-4 rounded-2xl border border-brand-ink/10 -rotate-2 opacity-80" />
                    <div className="absolute inset-8 rounded-xl bg-brand-alt border border-brand-border flex items-center justify-center">
                      <span className="text-8xl font-black opacity-8 text-brand-ink select-none">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-brand-ink opacity-20" />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CLOSING CTA ── */}
      <section className="py-24 bg-brand-ink">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag dark className="mb-6">Showroom</SectionTag>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            Experience the technology in person.
          </h2>
          <p className="text-white/60 text-lg mb-10 font-light">
            Our Nairobi showroom is open by appointment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-brand-ink font-semibold text-sm tracking-wide rounded-xl hover:bg-white/90 transition-colors duration-200"
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
