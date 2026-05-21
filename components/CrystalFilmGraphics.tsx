"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Store, Building2, Briefcase, Palette, Landmark, Sun,
  Shield, MapPin, Users, Zap, Eye, EyeOff, ClipboardCheck, Layers,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ── Spec comparison bars ──────────────────────────────────────────────────────
const SPECS = [
  { label: "Transparency",        crystal: 92, standard: 72, unit: "%", higherIsBetter: true },
  { label: "Pixel clarity",       crystal: 90, standard: 66, unit: "%", higherIsBetter: true },
  { label: "Off-state presence",  crystal: 5,  standard: 28, unit: "%", higherIsBetter: false },
];

function SpecBar({
  label, crystal, standard, unit, higherIsBetter, delay,
}: (typeof SPECS)[0] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="mb-6 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[#0a0a0a]">{label}</span>
        <span className="text-xs text-brand-muted">{higherIsBetter ? "higher is better" : "lower is better"}</span>
      </div>
      <div className="mb-1.5">
        <div className="flex items-center gap-3">
          <span className="text-xs w-28 font-semibold" style={{ color: "#054e72" }}>Crystal Film</span>
          <div className="flex-1 rounded-full h-2.5 overflow-hidden" style={{ background: "#e8f4fb" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "#054e72" }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${crystal}%` } : {}}
              transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="text-xs font-bold w-10 text-right" style={{ color: "#054e72" }}>{crystal}{unit}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <span className="text-xs w-28 text-brand-muted">Standard Film</span>
          <div className="flex-1 rounded-full h-2.5 overflow-hidden" style={{ background: "#f0f0f0" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "#c8d8e0" }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${standard}%` } : {}}
              transition={{ delay: delay + 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="text-xs text-brand-muted w-10 text-right">{standard}{unit}</span>
        </div>
      </div>
    </div>
  );
}

// ── Application environments ──────────────────────────────────────────────────
const APPLICATIONS = [
  { Icon: Store,     label: "Retail Showrooms" },
  { Icon: Building2, label: "Hotel Lobbies" },
  { Icon: Briefcase, label: "Corporate Offices" },
  { Icon: Palette,   label: "Galleries" },
  { Icon: Landmark,  label: "Museums" },
  { Icon: Sun,       label: "Atriums" },
];

// ── Installation steps ────────────────────────────────────────────────────────
const INSTALL_STEPS = [
  { Icon: ClipboardCheck, label: "Site Survey",   sub: "Day 0" },
  { Icon: Layers,         label: "Glass Mount",   sub: "Day 1" },
  { Icon: Zap,            label: "Commissioning", sub: "Day 1–3" },
];

// ── Support items ─────────────────────────────────────────────────────────────
const SUPPORT_ITEMS = [
  { Icon: Shield,  title: "Certified Warranty",     sub: "Issued in writing by Filmbase Technology Limited" },
  { Icon: MapPin,  title: "Local Spare Parts",      sub: "Stocked in Nairobi. No import delays." },
  { Icon: Users,   title: "Dedicated Service Team", sub: "The same personnel who installed it support it." },
];

export default function CrystalFilmGraphics() {
  return (
    <>
      {/* ── 01  What sets it apart ── */}
      <section className="py-24 lg:py-32 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0}
            >
              <span className="text-xs font-semibold text-brand-ink/30 tracking-[0.2em] uppercase block mb-4">01</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-5">
                What sets it apart
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Higher transparency and finer pixel performance than standard LED Film. The visual
                finish is more refined, designed to integrate with premium architectural environments
                rather than impose on them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 lg:p-10"
              style={{ background: "#f8fbff", border: "1px solid #e8f4fb" }}
            >
              <p className="text-xs font-semibold text-brand-ink/40 tracking-[0.15em] uppercase mb-7">
                Performance comparison
              </p>
              {SPECS.map((spec, i) => (
                <SpecBar key={spec.label} {...spec} delay={0.2 + i * 0.15} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02  Where it is specified ── */}
      <section className="py-24 lg:py-32 border-b border-brand-border" style={{ background: "#f8fbff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0}
            >
              <span className="text-xs font-semibold text-brand-ink/30 tracking-[0.2em] uppercase block mb-4">02</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-5">
                Where it is specified
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Retail showrooms. Corporate offices. Hotel lobbies. Galleries. Museums. Any
                environment where a premium display needs to disappear when off and impress when on.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {APPLICATIONS.map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={i * 0.5}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-white"
                  style={{ border: "1px solid #e8f4fb", boxShadow: "0 2px 12px rgba(5,78,114,0.05)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "#e8f4fb" }}
                  >
                    <Icon size={20} color="#054e72" />
                  </div>
                  <span className="text-xs font-semibold leading-snug" style={{ color: "#054e72" }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 03  Performance in daylight ── */}
      <section className="py-24 lg:py-32 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0}
              className="lg:order-2"
            >
              <span className="text-xs font-semibold text-brand-ink/30 tracking-[0.2em] uppercase block mb-4">03</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-5">
                Performance in daylight
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Vivid output in bright conditions. Near-invisible when powered off. Specified for
                atriums, naturally lit lobbies, and glass-fronted spaces where standard LED
                performance is not sufficient.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
              className="lg:order-1 grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e8f4fb" }}>
                <div
                  className="flex flex-col items-center justify-center h-44 gap-3"
                  style={{ background: "linear-gradient(135deg, #e8f4fb 0%, #f8fbff 100%)" }}
                >
                  <EyeOff size={36} color="#b0ccd8" />
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#b0ccd8" }}>Off</span>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-xs font-bold text-[#0a0a0a] uppercase tracking-wide mb-1">Powered Off</p>
                  <p className="text-xs text-brand-muted leading-relaxed">Near-invisible. You see glass, not screen.</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #054e72" }}>
                <div
                  className="flex flex-col items-center justify-center h-44 gap-3"
                  style={{ background: "linear-gradient(135deg, #054e72 0%, #0a7ab5 100%)" }}
                >
                  <Eye size={36} color="white" />
                  <span className="text-xs font-bold tracking-widest uppercase text-white">On</span>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "#054e72" }}>Powered On</p>
                  <p className="text-xs text-brand-muted leading-relaxed">Vivid. Readable in direct sunlight.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 04  Installation ── */}
      <section className="py-24 lg:py-32 border-b border-brand-border" style={{ background: "#f8fbff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0}
            >
              <span className="text-xs font-semibold text-brand-ink/30 tracking-[0.2em] uppercase block mb-4">04</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-5">
                Installation
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Direct mount on glass. No structural framework required. Our own technicians manage
                every installation from site survey through to final commissioning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 lg:p-10 bg-white"
              style={{ border: "1px solid #e8f4fb", boxShadow: "0 4px 24px rgba(5,78,114,0.06)" }}
            >
              <div className="flex items-start">
                {INSTALL_STEPS.map(({ Icon, label, sub }, i) => (
                  <div key={label} className="flex-1 flex flex-col items-center text-center relative">
                    {i < INSTALL_STEPS.length - 1 && (
                      <div
                        className="absolute top-5 left-1/2 w-full h-px"
                        style={{ background: "#e8f4fb" }}
                      />
                    )}
                    <div
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center mb-3"
                      style={{ background: "#054e72" }}
                    >
                      <Icon size={17} color="white" />
                    </div>
                    <p className="text-xs font-bold text-[#0a0a0a] mb-0.5">{label}</p>
                    <p className="text-xs text-brand-muted">{sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid #e8f4fb" }}>
                <p className="text-center text-2xl font-bold" style={{ color: "#054e72" }}>1 to 3 days</p>
                <p className="text-center text-xs text-brand-muted mt-1">for most installations in Kenya</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 05  Support ── */}
      <section className="py-24 lg:py-32 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0}
              className="lg:order-2"
            >
              <span className="text-xs font-semibold text-brand-ink/30 tracking-[0.2em] uppercase block mb-4">05</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-5">
                Support
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Certified warranty issuance. Readily available local parts and dedicated service team.
                The same personnel who installed your project are the ones who will support it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
              className="lg:order-1 flex flex-col gap-3"
            >
              {SUPPORT_ITEMS.map(({ Icon, title, sub }, i) => (
                <motion.div
                  key={title}
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={i * 0.5}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: "#f8fbff", border: "1px solid #e8f4fb" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#054e72" }}
                  >
                    <Icon size={17} color="white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0a0a0a] mb-0.5">{title}</p>
                    <p className="text-xs text-brand-muted leading-relaxed">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
