"use client";

import { useState } from "react";

interface QuoteFormProps {
  showBudget?: boolean;
  showProjectType?: boolean;
  projectLabel?: string;
}

export default function QuoteForm({
  showBudget = false,
  showProjectType = false,
  projectLabel = "Tell us about your project",
}: QuoteFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // REPLACE: update the Formspree form ID below
      const res = await fetch("https://formspree.io/f/YOURFORMID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silent fail — user can retry
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-brand-border rounded-lg px-4 py-3.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 focus:bg-white/8 transition-all duration-200";
  const labelClass = "block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2";

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message received.</h3>
        <p className="text-gray-400 text-sm">
          Our team will respond within 48 hours with technical guidance and a quotation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="name">Name *</label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">Company *</label>
          <input id="company" name="company" type="text" required placeholder="Your company" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+254 7xx xxx xxx" className={inputClass} />
        </div>
      </div>

      {!showProjectType && (
        <div>
          <label className={labelClass} htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="Project subject" className={inputClass} />
        </div>
      )}

      {showProjectType && (
        <div>
          <label className={labelClass} htmlFor="project_type">Project Type</label>
          <select id="project_type" name="project_type" className={`${inputClass} [&>option]:bg-brand-navy`}>
            <option value="">Select project type</option>
            <option value="Retail">Retail</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Banking">Banking</option>
            <option value="Corporate">Corporate</option>
            <option value="Residential">Residential</option>
            <option value="Other">Other</option>
          </select>
        </div>
      )}

      {showBudget && (
        <div>
          <label className={labelClass} htmlFor="budget">Budget</label>
          <select id="budget" name="budget" className={`${inputClass} [&>option]:bg-brand-navy`}>
            <option value="">Select budget range</option>
            <option value="Less than USD 5,000">Less than USD 5,000</option>
            <option value="USD 5,000 to 10,000">USD 5,000 to 10,000</option>
            <option value="Over USD 10,000">Over USD 10,000</option>
            <option value="Please advise">Please advise</option>
          </select>
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="message">{projectLabel}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Describe your space, installation requirements, or any questions..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="px-8 py-4 bg-brand-accent text-brand-dark font-bold text-sm tracking-wide rounded-xl hover:bg-brand-accent-dim transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Request a Quote"}
      </button>
    </form>
  );
}
