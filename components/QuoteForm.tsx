"use client";

import { useState, useRef } from "react";
import ButtonPill from "@/components/ButtonPill";

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
  budget: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  project_type?: string;
  budget?: string;
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
  if (!f.budget)       e.budget       = "Please select a budget range";

  if (f.message.trim().length < 20) {
    e.message = "Please tell us a bit more about your project (at least 20 characters)";
  }

  return e;
}

// Props kept for backwards compatibility with existing call sites
interface QuoteFormProps {
  showBudget?: boolean;
  showProjectType?: boolean;
  projectLabel?: string;
}

export default function QuoteForm({
  projectLabel = "Tell us about your project",
}: QuoteFormProps) {
  const [fields, setFields] = useState<Fields>({
    name: "", email: "", phone: "", project_type: "", budget: "", message: "",
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

    // Honeypot — silently succeed for bots
    if (honeypotRef.current?.value) { setSubmitted(true); return; }

    // Rate limit
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
    "w-full bg-white border rounded-lg px-4 py-3.5 text-[#0a0a0a] placeholder-brand-muted/60 text-sm font-light focus:outline-none focus:ring-1 transition-all duration-200";
  const inputOk  = "border-brand-border focus:border-brand-ink/40 focus:ring-brand-ink/10";
  const inputErr = "border-[#dc2626] focus:border-[#dc2626] focus:ring-[#dc2626]/10";
  const cls = (key: keyof Errors) => `${inputBase} ${errors[key] ? inputErr : inputOk}`;
  const labelClass = "block text-xs font-semibold text-[#0a0a0a]/60 uppercase tracking-wider mb-2";
  const errClass   = "mt-1.5 text-xs text-[#dc2626]";

  if (submitted) {
    return (
      <div className="rounded-2xl p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-brand-ink/10 border border-brand-ink/20 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-brand-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Thank you.</h3>
        <p className="text-brand-muted text-sm font-light mb-6 max-w-xs mx-auto">
          We have received your brief and will get back to you within 48 hours.
          In the meantime you can reach us on WhatsApp.
        </p>
        <a
          href="https://wa.me/254727808264"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] text-white font-semibold text-sm rounded-xl hover:bg-[#1ebe5d] transition-colors duration-200"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot — hidden from humans */}
      <input
        ref={honeypotRef}
        type="text"
        name="_honeypot"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label className={labelClass} htmlFor="name">Name *</label>
        <input
          id="name" name="name" type="text"
          placeholder="Your full name"
          value={fields.name} onChange={set("name")}
          className={cls("name")}
        />
        {errors.name && <p className={errClass}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClass} htmlFor="email">Email *</label>
        <input
          id="email" name="email" type="email"
          placeholder="you@company.com"
          value={fields.email} onChange={set("email")}
          className={cls("email")}
        />
        {errors.email && <p className={errClass}>{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass} htmlFor="phone">
          Phone <span className="normal-case font-normal text-[#0a0a0a]/40">(optional)</span>
        </label>
        <input
          id="phone" name="phone" type="tel"
          placeholder="07XX XXX XXX or +2547XX XXX XXX"
          value={fields.phone} onChange={set("phone")}
          className={cls("phone")}
        />
        {errors.phone && <p className={errClass}>{errors.phone}</p>}
      </div>

      {/* Project Type */}
      <div>
        <label className={labelClass} htmlFor="project_type">Project Type *</label>
        <select
          id="project_type" name="project_type"
          value={fields.project_type} onChange={set("project_type")}
          className={cls("project_type")}
        >
          <option value="">Select project type</option>
          <option value="Retail">Retail</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Banking">Banking</option>
          <option value="Corporate">Corporate</option>
          <option value="Residential">Residential</option>
          <option value="Other">Other</option>
        </select>
        {errors.project_type && <p className={errClass}>{errors.project_type}</p>}
      </div>

      {/* Budget */}
      <div>
        <label className={labelClass} htmlFor="budget">Budget *</label>
        <select
          id="budget" name="budget"
          value={fields.budget} onChange={set("budget")}
          className={cls("budget")}
        >
          <option value="">Select budget range</option>
          <option value="Less than KES 500,000">Less than KES 500,000</option>
          <option value="KES 500,000 to 1,000,000">KES 500,000 to 1,000,000</option>
          <option value="Over KES 1,000,000">Over KES 1,000,000</option>
          <option value="Please advise">Please advise</option>
        </select>
        {errors.budget && <p className={errClass}>{errors.budget}</p>}
      </div>

      {/* Message */}
      <div>
        <label className={labelClass} htmlFor="message">{projectLabel} *</label>
        <textarea
          id="message" name="message" rows={5}
          placeholder="Describe your space, installation requirements, or any questions..."
          value={fields.message} onChange={set("message")}
          className={`${cls("message")} resize-none`}
        />
        {errors.message && <p className={errClass}>{errors.message}</p>}
      </div>

      {rateError && <p className={errClass}>{rateError}</p>}

      <ButtonPill
        type="submit"
        loading={submitting}
        disabled={submitting}
        className="max-sm:w-full max-sm:justify-between"
      >
        {submitting ? "Sending..." : "Request a Quote"}
      </ButtonPill>
    </form>
  );
}
