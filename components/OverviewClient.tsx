"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy, MapPin, Building2, Shield, CheckCircle,
  X, HardHat, Ruler, Zap, Settings, Clock,
} from "lucide-react";
import ButtonFilled from "@/components/ButtonFilled";
import SectionTag from "@/components/SectionTag";
import KenyaMap from "@/components/KenyaMap";

// ── SHARED FADE-UP VARIANT ────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

// ── QUALITY BARS ──────────────────────────────────────────
const BARS = [
  "Global Manufacturers",
  "Technical Vetting",
  "Local Testing",
  "Client Proven",
];

function QualityBars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div ref={ref} className="flex flex-col gap-5">
      {BARS.map((label, i) => (
        <div key={label}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[13px] font-semibold text-[#333]">{label}</span>
            <span className="text-[13px] font-bold" style={{ color: "#054e72" }}>100%</span>
          </div>
          <div className="h-1.5 rounded-full" style={{ background: "#e8f4fb" }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: inView ? "100%" : "0%" }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: "#054e72" }}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-wrap gap-2 mt-2">
        {["ISO Certified Manufacturers", "CE Marked Products", "Locally Vetted"].map((b) => (
          <span
            key={b}
            className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full"
            style={{ background: "#054e72" }}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── INSTALLATION STEPS ────────────────────────────────────
const STEPS = [
  { Icon: HardHat, title: "Site Assessment", sub: "Dimensions, surfaces, power supply" },
  { Icon: Ruler, title: "Surface Preparation", sub: "Cleaning, marking, priming" },
  { Icon: Zap, title: "Electrical Integration", sub: "Power routing, control wiring" },
  { Icon: Settings, title: "Commissioning", sub: "Calibration and system testing" },
  { Icon: CheckCircle, title: "Final Testing", sub: "Client sign-off and handover" },
];

function InstallationSteps() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setActive((s) => (s + 1) % STEPS.length), 900);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <div ref={ref} className="relative flex flex-col pl-5">
      {/* Dashed vertical line */}
      <div
        className="absolute left-[18px] top-5 bottom-5 w-px"
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(5,78,114,0.3) 0px, rgba(5,78,114,0.3) 6px, transparent 6px, transparent 12px)",
        }}
      />
      {STEPS.map(({ Icon, title, sub }, i) => {
        const isActive = i === active;
        return (
          <div key={title} className="flex items-start gap-4 py-3">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
              style={{
                background: isActive ? "#054e72" : "#e8f4fb",
                boxShadow: isActive ? "0 0 0 4px rgba(5,78,114,0.15)" : "none",
              }}
            >
              <Icon size={18} color={isActive ? "white" : "#054e72"} />
            </div>
            <div className="pt-2">
              <p
                className="text-sm font-semibold transition-colors duration-300"
                style={{ color: isActive ? "#054e72" : "#0a0a0a" }}
              >
                {title}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#999" }}>
                {sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── CIRCLE GRAPHIC ────────────────────────────────────────
function CircleGraphic() {
  return (
    <div className="relative flex items-center justify-center w-[300px] h-[300px] mx-auto">
      {/* Rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: "rgba(5,78,114,0.1)" }}
        />
        <div
          className="absolute inset-6 rounded-full border-2"
          style={{ borderColor: "rgba(5,78,114,0.2)" }}
        />
        <div
          className="absolute inset-12 rounded-full border-2"
          style={{ borderColor: "rgba(5,78,114,0.3)" }}
        />
      </motion.div>

      {/* Static center circle */}
      <div
        className="absolute inset-16 rounded-full flex items-center justify-center"
        style={{ background: "#e8f4fb" }}
      >
        <Building2 size={44} color="#054e72" />
      </div>

      {/* Floating labels */}
      <div
        className="absolute -top-3 right-0 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
        style={{ background: "white", color: "#054e72", border: "1px solid #054e72", boxShadow: "0 4px 12px rgba(5,78,114,0.1)" }}
      >
        Transparent LED
      </div>
      <div
        className="absolute -bottom-3 right-0 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
        style={{ background: "white", color: "#054e72", border: "1px solid #054e72", boxShadow: "0 4px 12px rgba(5,78,114,0.1)" }}
      >
        Smart Glass
      </div>
      <div
        className="absolute top-1/2 -left-2 -translate-y-1/2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
        style={{ background: "white", color: "#054e72", border: "1px solid #054e72", boxShadow: "0 4px 12px rgba(5,78,114,0.1)" }}
      >
        Nairobi, Kenya
      </div>
    </div>
  );
}

// ── WARRANTY CARD ─────────────────────────────────────────
function WarrantyCard() {
  return (
    <div className="relative inline-block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          width: 320,
          height: 196,
          background: "linear-gradient(135deg, #033a55 0%, #0a7aad 100%)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Diagonal stripe pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="relative p-6 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <Shield size={24} color="#7dd3f0" />
            <span
              className="text-[10px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Warranty
            </span>
          </div>
          <p className="text-lg font-bold text-white">Filmbase Technology</p>
          <div className="flex justify-between items-end">
            <span className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.7)" }}>
              Written Warranty Issued
            </span>
            <span className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.7)" }}>
              Local Support Team
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-full"
        style={{
          background: "white",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        <CheckCircle size={15} color="#054e72" />
        <span className="text-xs font-semibold" style={{ color: "#054e72" }}>
          Locally Supported
        </span>
      </motion.div>
    </div>
  );
}

// ── COMPARISON COLUMNS ────────────────────────────────────
const TRADITIONAL = [
  "Blinds wear out",
  "Curtains need replacing",
  "Mechanisms fail",
  "High maintenance cost",
  "Visually dated quickly",
];
const FILMBASE = [
  "No moving parts",
  "No fabric to wear",
  "Millisecond reliability",
  "Minimal maintenance",
  "Timeless finish",
];

function ComparisonColumns() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex-1 rounded-xl p-6"
        style={{ background: "#fff5f5", border: "1px solid #fee2e2" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <X size={18} color="#dc2626" />
          <span className="text-[15px] font-bold text-[#0a0a0a]">Traditional Solutions</span>
        </div>
        {TRADITIONAL.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 py-2 border-b border-red-100 last:border-0"
          >
            <X size={13} className="mt-0.5 flex-shrink-0" color="#dc2626" />
            <span className="text-[13px] text-[#444]">{item}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex-1 rounded-xl p-6"
        style={{ background: "#e8f4fb", border: "1px solid rgba(5,78,114,0.3)" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={18} color="#054e72" />
          <span className="text-[15px] font-bold text-[#0a0a0a]">Filmbase Products</span>
        </div>
        {FILMBASE.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 py-2 border-b last:border-0"
            style={{ borderColor: "rgba(5,78,114,0.1)" }}
          >
            <CheckCircle size={13} className="mt-0.5 flex-shrink-0" color="#054e72" />
            <span className="text-[13px] text-[#444]">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ── HERO CARD STACK ───────────────────────────────────────
function CardStack() {
  return (
    <div className="relative w-72 h-80 mx-auto">
      {/* Card 1 — back, -6deg */}
      <div className="absolute inset-0" style={{ transform: "rotate(-6deg)", zIndex: 1 }}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Trophy size={32} color="rgba(255,255,255,0.6)" />
          <p className="text-sm text-white/60 font-medium">1st in Kenya</p>
        </motion.div>
      </div>

      {/* Card 2 — middle, -2deg */}
      <div className="absolute inset-0" style={{ transform: "rotate(-2deg)", zIndex: 2 }}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <MapPin size={32} color="rgba(255,255,255,0.75)" />
          <p className="text-sm text-white/75 font-medium">47 Counties</p>
        </motion.div>
      </div>

      {/* Card 3 — front, no rotation */}
      <div className="absolute inset-2" style={{ zIndex: 3 }}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="w-full h-full rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "white",
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          }}
        >
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <p className="text-4xl font-black tracking-tight" style={{ color: "#054e72" }}>
              Since 2024
            </p>
            <p className="text-sm font-light mt-2 text-center" style={{ color: "rgba(5,78,114,0.6)" }}>
              Kenya&apos;s first specialist
            </p>
          </div>
          <div className="px-6 py-3" style={{ background: "#054e72" }}>
            <p className="text-xs text-white font-medium tracking-widest">
              filmbasetechnology.co.ke
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────
export default function OverviewClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-40 pb-28 lg:pb-36"
        style={{ background: "#054e72" }}
      >
        {/* GTC background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gtc-led-film.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.18 }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #054e72)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase mb-6"
                style={{
                  background: "rgba(125,211,240,0.15)",
                  color: "#7dd3f0",
                  border: "1px solid rgba(125,211,240,0.3)",
                }}
              >
                About Us
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold text-white leading-tight tracking-tighter mb-6">
                A specialist company.<br />
                A focused mission.
              </h1>
              <p
                className="text-lg font-light leading-relaxed max-w-lg"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Kenya&apos;s first dedicated operation built entirely around transparent LED
                display and switchable smart glass.
              </p>
            </motion.div>

            {/* Right — card stack */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <CardStack />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 01 — Mission ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <SectionTag className="mb-6">Our Mission</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
                A specialist company.<br />A focused mission.
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Filmbase Technology is Kenya&apos;s first dedicated specialist in transparent LED
                display and switchable smart glass.
              </p>
            </motion.div>

            {/* Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center py-10"
            >
              <CircleGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02 — Quality ── */}
      <section className="py-24 lg:py-32" style={{ background: "#f8fbff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Graphic — left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 lg:p-10"
              style={{ boxShadow: "0 4px 24px rgba(5,78,114,0.06)", border: "1px solid #e8f4fb" }}
            >
              <QualityBars />
            </motion.div>

            {/* Text — right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.1}
            >
              <SectionTag className="mb-6">Quality</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
                Engineered to global standards.
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                We&apos;ve partnered with the leading global manufacturers, technically vetted
                every product, and proven it in real installations before bringing it to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03 — Installation ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <SectionTag className="mb-6">Standards</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
                The installation discipline<br />behind the finish.
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Site assessment. Mounting. Electrical. Commissioning. Every stage is handled
                by our own trained technical team.
              </p>
            </motion.div>

            {/* Steps graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 lg:p-10"
              style={{ boxShadow: "0 4px 24px rgba(5,78,114,0.06)", border: "1px solid #e8f4fb" }}
            >
              <InstallationSteps />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04 — Warranty (dark) ── */}
      <section className="py-24 lg:py-32" style={{ background: "#054e72" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Card graphic — left */}
            <div className="flex items-center justify-center">
              <WarrantyCard />
            </div>

            {/* Text — right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <SectionTag dark className="mb-6">Warranty</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                A long-term partner,<br />not a one-time supplier.
              </h2>
              <p className="text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Certified warranty issuance. Readily available local parts and dedicated
                service team. The serviced personnel who installed your project films are
                the same who will support it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 05 — Designed to last ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <SectionTag className="mb-6">Sustainability</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-6">
                Designed to last.
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Our products are built for years of continuous operation. We prioritise repair
                and maintenance over replacement — keeping costs low and extending the working
                life of every installation.
              </p>
            </motion.div>

            {/* Comparison graphic */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <ComparisonColumns />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06 — Kenya Coverage Map ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase mb-5"
              style={{
                background: "#e8f4fb",
                color: "#054e72",
                border: "1px solid rgba(5,78,114,0.2)",
              }}
            >
              Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-4">
              Installed across Kenya.
            </h2>
            <p className="text-brand-muted text-lg font-light">
              From Nairobi to the coast. From the highlands to the lake region.
            </p>
          </motion.div>
          <KenyaMap />
        </div>
      </section>

      {/* ── SECTION 07 — Showroom CTA ── */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "#033a55" }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapPin size={64} color="#7dd3f0" className="mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              See it working<br />before you decide.
            </h2>
            <p className="text-lg font-light mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
              Our Nairobi showroom has live demonstrations of every product in our range.
            </p>
            <ButtonFilled href="/contact" variant="light">Book a Visit</ButtonFilled>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <div className="flex items-center gap-2">
                <MapPin size={16} color="#7dd3f0" />
                <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Diamond Homes, Othaya Road, Kileleshwa
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} color="#7dd3f0" />
                <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Open by appointment
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
