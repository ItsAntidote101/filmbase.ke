import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import QuoteForm from "@/components/QuoteForm";

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

// REPLACE: Update social links with actual Filmbase social media URLs
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

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
            Send us your brief. Our team responds with technical guidance and a detailed quotation.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact form — wider column */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">Request a Quotation</h2>
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <QuoteForm showProjectType projectLabel="Tell us about your project" />
              </div>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">Direct Contact</h2>

              <div className="glass-card rounded-2xl p-8 mb-5">
                <h3 className="text-xs font-semibold text-brand-ink tracking-wider uppercase mb-5">
                  Filmbase Technology Limited
                </h3>
                <address className="not-italic flex flex-col gap-5">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-brand-alt border border-brand-border flex items-center justify-center text-brand-muted">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[#0a0a0a]">Location</p>
                      <p className="text-sm text-brand-muted font-light leading-relaxed mt-0.5">
                        Diamond Homes, Othaya Road,<br />
                        Kileleshwa, Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-alt border border-brand-border flex items-center justify-center text-brand-muted">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[#0a0a0a]">Email</p>
                      <a
                        href="mailto:info@filmbasetechnology.co.ke"
                        className="text-sm text-brand-muted font-light hover:text-brand-ink transition-colors duration-200 mt-0.5 block"
                      >
                        info@filmbasetechnology.co.ke
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-alt border border-brand-border flex items-center justify-center text-brand-muted">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[#0a0a0a]">Phone / WhatsApp</p>
                      <a
                        href="tel:+254727808264"
                        className="text-sm text-brand-muted font-light hover:text-brand-ink transition-colors duration-200 mt-0.5 block"
                      >
                        +254 727 808 264
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-alt border border-brand-border flex items-center justify-center text-brand-muted">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[#0a0a0a]">Showroom</p>
                      <p className="text-sm text-brand-muted font-light mt-0.5">By appointment</p>
                    </div>
                  </div>
                </address>
              </div>

              {/* Social links */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-5">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-alt border border-brand-border hover:border-brand-ink/20 hover:bg-brand-ink/5 transition-all duration-200 group"
                    >
                      <span className="text-brand-muted group-hover:text-brand-ink transition-colors duration-200">
                        {social.icon}
                      </span>
                      <span className="text-sm text-brand-muted group-hover:text-[#0a0a0a] font-light transition-colors duration-200">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
