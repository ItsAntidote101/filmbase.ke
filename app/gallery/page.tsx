import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Project Gallery | Filmbase Technology Kenya Installations",
  description:
    "Browse Filmbase Technology installations across Kenya. LED film screens, crystal displays and switchable smart glass in retail, hospitality, corporate and residential spaces.",
  openGraph: {
    title: "Gallery | Filmbase Technology Kenya",
    description: "Our installations across Kenya — LED film, crystal displays and smart glass.",
    url: "https://filmbasetechnology.co.ke/gallery",
    siteName: "Filmbase Technology",
    type: "website",
    // REPLACE: OG image for gallery page
    images: ["https://placehold.co/1200x630/054e72/ffffff?text=Filmbase+Gallery"],
  },
};

export default function GalleryPage() {
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
          <SectionTag dark className="mb-6">
            Gallery
          </SectionTag>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter max-w-3xl mb-6">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-white/50 font-light max-w-xl leading-relaxed">
            Installations across Kenya.
          </p>
        </div>
      </section>

      {/* ── GALLERY — client component handles filters, grid, lightbox ── */}
      <GalleryClient />
    </PageTransition>
  );
}
