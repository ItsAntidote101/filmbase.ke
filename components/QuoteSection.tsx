"use client";

import { useState, useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const FAKE_DOMAINS = new Set([
  "test.com", "fake.com", "example.com", "mailinator.com",
  "tempmail.com", "guerrillamail.com",
]);

const PHONE_RE = /^(\+?254|0)[17]\d{8}$/;
const NAME_RE  = /^[a-zA-Z\s]{3,}$/;

interface Fields {
  name: string;
  email: string;
  phone: string;
  project_type: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  project_type?: string;
  message?: string;
}

function validate(f: Fields): Errors {
  const e: Errors = {};

  if (!NAME_RE.test(f.name.trim())) {
    e.name = "Please enter your full name";
  }

  const emailLower = f.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLower)) {
    e.email = "Please enter a valid email address";
  } else {
    const domain = emailLower.split("@")[1];
    if (FAKE_DOMAINS.has(domain)) {
      e.email = "Please use a valid email address";
    }
  }

  const phone = f.phone.trim().replace(/\s/g, "");
  if (phone && !PHONE_RE.test(phone)) {
    e.phone = "Please enter a valid Kenyan phone number";
  }

  if (!f.project_type) e.project_type = "Please select a project type";

  if (f.message.trim().length < 20) {
    e.message = "Please tell us a bit more about your project (at least 20 characters)";
  }

  return e;
}

const TRUST_STATS = [
  { value: "47+", label: "Counties Served" },
  { value: "48hr", label: "Response Time" },
  { value: "100%", label: "Own-team Install" },
];

export default function QuoteSection() {
  const [fields, setFields] = useState<Fields>({
    name: "", email: "", phone: "", project_type: "", message: "",
  });
  const [errors, setErrors]       = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [rateError, setRateError]   = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields(prev => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }));
    if (rateError)   setRateError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypotRef.current?.value) { setSubmitted(true); return; }

    const last = sessionStorage.getItem("lastQuoteSubmit");
    if (last && Date.now() - parseInt(last) < 60000) {
      setRateError("Please wait a moment before submitting again.");
      return;
    }

    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setSubmitting(true);
    const data = new FormData();
    (Object.entries(fields) as [string, string][]).forEach(([k, v]) => data.append(k, v));

    try {
      const res = await fetch("https://formspree.io/f/YOURFORMID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        sessionStorage.setItem("lastQuoteSubmit", Date.now().toString());
        setSubmitted(true);
      } else {
        setErrors({ message: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full bg-[#f8f9fa] border rounded-lg px-4 py-3 text-[#0a0a0a] placeholder-[#0a0a0a]/30 text-sm font-light focus:outline-none focus:ring-1 transition-all duration-200";
  const inputOk  = "border-[#e5e7eb] focus:border-[#054e72]/40 focus:ring-[#054e72]/10 focus:bg-white";
  const inputErr = "border-[#dc2626] focus:border-[#dc2626] focus:ring-[#dc2626]/10";
  const cls = (key: keyof Errors) => `${inputBase} ${errors[key] ? inputErr : inputOk}`;
  const labelClass = "block text-[11px] font-semibold text-[#0a0a0a]/50 uppercase tracking-wider mb-1.5";
  const errClass   = "mt-1 text-xs text-[#dc2626]";

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ background: "#054e72" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">

            {/* ── LEFT PANEL ── */}
            <div className="p-10 lg:p-16 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-6" style={{ color: "#7dd3f0" }}>
                  GET A QUOTE
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
                  Tell us about<br />
                  your space.<br />
                  <span style={{ color: "#7dd3f0" }}>Let&apos;s get started.</span>
                </h2>
                <p className="text-white/60 text-base font-light leading-relaxed max-w-sm">
                  Send us your brief. Our team responds with technical guidance and a detailed quotation within 48 hours.
                </p>
              </div>

              {/* Trust stats */}
              <div className="mt-12 flex items-stretch gap-0 border-t border-white/10 pt-10">
                {TRUST_STATS.map((stat, i) => (
                  <div key={stat.label} className="flex-1 relative">
                    {i > 0 && (
                      <span
                        className="absolute left-0 top-0 bottom-0 w-px"
                        style={{ background: "rgba(255,255,255,0.15)" }}
                      />
                    )}
                    <div className="pl-5 first:pl-0">
                      {i === 0 && (
                        <div className="pl-0">
                          <p className="text-3xl font-bold text-white leading-none">{stat.value}</p>
                          <p className="text-xs text-white/50 font-light mt-1.5">{stat.label}</p>
                        </div>
                      )}
                      {i > 0 && (
                        <div className="pl-5">
                          <p className="text-3xl font-bold text-white leading-none">{stat.value}</p>
                          <p className="text-xs text-white/50 font-light mt-1.5">{stat.label}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact links */}
              <div className="mt-10 flex flex-col gap-3">
                <a
                  href="https://wa.me/254796502192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light transition-colors duration-200 group"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors duration-200" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#7dd3f0" }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span className="group-hover:text-white transition-colors duration-200">+254 796 502 192</span>
                </a>
                <a
                  href="mailto:info@filmbasetechnology.co.ke"
                  className="flex items-center gap-3 text-sm font-light transition-colors duration-200 group"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors duration-200" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#7dd3f0" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="group-hover:text-white transition-colors duration-200">info@filmbasetechnology.co.ke</span>
                </a>
              </div>
            </div>

            {/* ── RIGHT PANEL — form card ── */}
            <div className="p-6 lg:p-10 flex items-stretch">
              <div
                className="w-full rounded-2xl p-8 lg:p-10"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center h-full py-10">
                    <CheckCircle className="w-12 h-12 mb-5" style={{ color: "#054e72" }} strokeWidth={1.5} />
                    <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Thank you.</h3>
                    <p className="text-[#0a0a0a]/50 text-sm font-light mb-8 max-w-xs leading-relaxed">
                      We&apos;ve received your brief and will get back to you within 48 hours.
                      In the meantime you can reach us on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/254796502192"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-colors duration-200"
                      style={{ background: "#25D366" }}
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-[#0a0a0a] mb-6">Request a Quote</h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                      {/* Honeypot */}
                      <input
                        ref={honeypotRef}
                        type="text"
                        name="_honeypot"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      {/* Row 1: Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass} htmlFor="qs-name">Name *</label>
                          <input
                            id="qs-name" name="name" type="text"
                            placeholder="Your full name"
                            value={fields.name} onChange={set("name")}
                            className={cls("name")}
                          />
                          {errors.name && <p className={errClass}>{errors.name}</p>}
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="qs-email">Email *</label>
                          <input
                            id="qs-email" name="email" type="email"
                            placeholder="you@company.com"
                            value={fields.email} onChange={set("email")}
                            className={cls("email")}
                          />
                          {errors.email && <p className={errClass}>{errors.email}</p>}
                        </div>
                      </div>

                      {/* Row 2: Phone + Project Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass} htmlFor="qs-phone">
                            Phone <span className="normal-case font-normal opacity-50">(optional)</span>
                          </label>
                          <input
                            id="qs-phone" name="phone" type="tel"
                            placeholder="07XX XXX XXX"
                            value={fields.phone} onChange={set("phone")}
                            className={cls("phone")}
                          />
                          {errors.phone && <p className={errClass}>{errors.phone}</p>}
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="qs-project_type">Project Type *</label>
                          <select
                            id="qs-project_type" name="project_type"
                            value={fields.project_type} onChange={set("project_type")}
                            className={cls("project_type")}
                          >
                            <option value="">Select type</option>
                            <option value="Retail">Retail</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Banking">Banking</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Residential">Residential</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.project_type && <p className={errClass}>{errors.project_type}</p>}
                        </div>
                      </div>

                      {/* Message — full width */}
                      <div>
                        <label className={labelClass} htmlFor="qs-message">Tell us about your project *</label>
                        <textarea
                          id="qs-message" name="message" rows={4}
                          placeholder="Describe your space, installation requirements, or any questions..."
                          value={fields.message} onChange={set("message")}
                          className={`${cls("message")} resize-none`}
                        />
                        {errors.message && <p className={errClass}>{errors.message}</p>}
                      </div>

                      {rateError && <p className={errClass}>{rateError}</p>}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full font-semibold text-sm text-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                        style={{ background: submitting ? "#0a7aad" : "#054e72" }}
                        onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.background = "#0a7aad"; }}
                        onMouseLeave={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.background = "#054e72"; }}
                      >
                        {submitting ? "Sending…" : "Request a Quote"}
                        {!submitting && <ArrowRight size={16} />}
                      </button>

                      <p className="text-center text-[11px] text-[#0a0a0a]/30 font-light">
                        We respond within 48 hours. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
