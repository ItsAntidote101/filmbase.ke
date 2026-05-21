import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import QuoteSection from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote | Filmbase Technology Kenya",
  description:
    "Request a quote for transparent LED display or switchable smart glass installation in Kenya. Visit our showroom in Kileleshwa, Nairobi or contact us by email or WhatsApp.",
  openGraph: {
    title: "Contact Filmbase Technology Kenya",
    description:
      "Tell us about your space. Get technical guidance and a detailed quotation within 48 hours.",
    url: "https://filmbasetechnology.co.ke/contact",
    siteName: "Filmbase Technology",
    type: "website",
    // REPLACE: OG image for contact page
    images: ["https://placehold.co/1200x630/054e72/ffffff?text=Contact+Filmbase"],
  },
};


export default function ContactPage() {
  return (
    <PageTransition>
      {/* ── HERO — stays dark ── */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-dark" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTag dark className="mb-6">Contact</SectionTag>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter max-w-3xl mb-6">
            Tell us about<br />
            <span className="gradient-text">your space.</span>
          </h1>
          <p className="text-xl text-white/50 font-light max-w-2xl leading-relaxed">
            Send us your brief. Our team responds with technical guidance and a detailed quotation within 48 hours.
          </p>
        </div>
      </section>

      <QuoteSection />
    </PageTransition>
  );
}
