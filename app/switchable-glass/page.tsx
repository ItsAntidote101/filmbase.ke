import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ButtonFilled from "@/components/ButtonFilled";
import PageTransition from "@/components/PageTransition";
import SectionTag from "@/components/SectionTag";
import FAQAccordion from "@/components/FAQAccordion";
import HeroStats from "@/components/HeroStats";
import InstallationTimeline from "@/components/InstallationTimeline";
import LocationIconGrid from "@/components/LocationIconGrid";

export const metadata: Metadata = {
  title: "Switchable Smart Glass Kenya | PDLC Privacy Glass | Filmbase",
  description:
    "PDLC switchable smart glass that switches from transparent to frosted instantly. For boardrooms, hotels, hospitals and luxury homes across Kenya.",
  keywords: [
    "switchable smart glass Kenya",
    "PDLC glass Nairobi",
    "privacy glass Kenya",
    "smart glass boardroom",
  ],
  openGraph: {
    title: "Switchable Smart Glass | Filmbase Technology Kenya",
    description: "Privacy on demand. Transparent to frosted at the touch of a button.",
    url: "https://filmbasetechnology.co.ke/switchable-glass",
    siteName: "Filmbase Technology",
    type: "website",
    // REPLACE: OG image for Switchable Glass page
    images: ["https://placehold.co/1200x630/0a7aad/ffffff?text=Switchable+Smart+Glass"],
  },
};

const FEATURES = [
  {
    title: "How it works",
    body: "PDLC (Polymer Dispersed Liquid Crystal) film mounts onto glass and switches between fully transparent and fully frosted states with electrical activation. Power on: clear. Power off: frosted. Instant, repeatable, reliable.",
    image: "/Switchable.gif",
    imageAlt: "Switchable smart glass switching between clear and frosted states",
    gif: true,
  },
  {
    title: "Where it is used",
    body: "Corporate boardrooms and executive offices, hotel suite bathrooms and bedroom partitions, hospital consultation rooms, law firm partner offices, premium residential master suites, home offices, and spa facilities.",
    image: "/JW-Switchable.gif",
    imageAlt: "Switchable smart glass in a corporate boardroom setting",
    gif: true,
    iconGrid: true,
  },
  {
    title: "Why it wins",
    body: "Outlasts blinds, curtains, and fabric partitions that wear, tear, and require constant maintenance. Modernises any glass surface without architectural disruption. Delivers a result that traditional privacy solutions cannot match.",
    image: "/jw-gif2.gif",
    imageAlt: "Smart glass versus traditional blind and curtain alternatives",
    gif: true,
  },
  {
    title: "A second function",
    body: "In its frosted state, smart glass works as a rear-projection surface. A meeting room divider becomes a presentation screen. One installation. Two functions. No additional hardware required.",
    image: "/smart-glass-plus-graphic-makeup-02.svg",
    imageAlt: "Smart glass used as a rear projection screen in a meeting room",
    gif: true,
  },
  {
    title: "Installed by our own team",
    body: "Most installations are completed in one to three days. Locally stocked and locally installed. Our technical team is on the ground and ready to serve you. Estimated installation duration will be 1 to 3 days.",
    image: "",
    imageAlt: "",
    timeline: true,
  },
];

const FAQ_ITEMS = [
  {
    q: "How does it work?",
    a: "A smart film bonded to glass. Power on: clear. Power off: frosted. Instant electrical activation via a standard switch, remote, or automation system.",
  },
  {
    q: "How fast does it switch?",
    a: "Milliseconds. The transition is instant, faster than a light switch. There is no gradual fade.",
  },
  {
    q: "Where is it being installed today?",
    a: "Boardrooms. Executive offices. Hotel suites. Hospital consultation rooms. High-end residential bathrooms and bedrooms.",
  },
  {
    q: "Does it need power to stay clear?",
    a: "Yes. The default state is frosted. Power makes it clear. Energy use is minimal, far less than a single LED bulb.",
  },
  {
    q: "Can it work as a projection screen?",
    a: "Yes. The frosted state is ideal for rear projection. One installation, two functions: privacy partition and presentation screen.",
  },
  {
    q: "Can it be retrofitted on existing glass?",
    a: "Yes. Most projects are retrofits. We assess on-site to confirm the glass condition and specify the right product for the application.",
  },
  {
    q: "How long does it last?",
    a: "Years. It far outlasts blinds, curtains, and fabric partitions. No mechanical parts. No wear from repeated use.",
  },
];

export default function SwitchableGlassPage() {
  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[80vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: "url('/single-glazed-switchable-smart-glass-retail.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 w-full">
          <SectionTag dark className="mb-6">Switchable Smart Glass</SectionTag>
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter max-w-4xl mb-6"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}
          >
            Privacy. At the<br />
            <span className="accent-text">Touch of a Button.</span>
          </h1>
          <p
            className="text-xl text-white font-light max-w-2xl leading-relaxed mb-10"
            style={{ textShadow: "0 1px 15px rgba(0,0,0,0.5)" }}
          >
            The new standard for boardrooms, executive offices, and premium homes.
            Advanced PDLC smart film: transparent at the flick of a switch. Frosted at the next.
          </p>
          <ButtonFilled href="/contact" variant="light">Book a Demo</ButtonFilled>
          <HeroStats />
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
                {"iconGrid" in feature && feature.iconGrid && <LocationIconGrid />}
              </div>

              {"timeline" in feature && feature.timeline ? (
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <InstallationTimeline />
                </div>
              ) : "gif" in feature && feature.gif ? (
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    style={{ width: "100%", height: "auto", borderRadius: "8px", display: "block" }}
                  />
                </div>
              ) : (
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} rounded-2xl overflow-hidden aspect-[7/5] relative bg-brand-alt`}>
                  <Image src={feature.image} alt={feature.imageAlt} fill className="object-cover" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* ── USE CASE STRIP ── */}
      <section className="py-16 bg-brand-alt border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-8 text-center">
            Installed in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Corporate Boardrooms",
              "Executive Offices",
              "Hotel Suites",
              "Hospital Rooms",
              "Law Firm Offices",
              "Residential Bedrooms",
              "Spa Facilities",
              "Home Offices",
            ].map((use) => (
              <span
                key={use}
                className="px-4 py-2 bg-white border border-brand-border rounded-full text-sm text-[#0a0a0a] font-light whitespace-nowrap"
              >
                {use}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="lg:sticky lg:top-28 self-start">
              <SectionTag className="mb-6">FAQ</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight">
                Questions about Smart Glass.
              </h2>
            </div>
            <div>
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/switchable-section-footer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(3, 58, 85, 0.65)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            See it. Press the button. Decide.
          </h2>
          <p className="text-white/60 text-lg mb-10 font-light">
            Our Nairobi showroom has a working smart glass installation. Book a visit and experience it for yourself.
          </p>
          <ButtonFilled href="/contact" variant="light">Book a Demo</ButtonFilled>
        </div>
      </section>
    </PageTransition>
  );
}
