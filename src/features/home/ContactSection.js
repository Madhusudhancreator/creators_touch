"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ICON_MAP = { phone: Phone, email: Mail, map: MapPin };

const DEFAULT_DATA = {
  eyebrow: "Get In Touch",
  heading: "Let's Work Together",
  subtext: "Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.",
  tagline: "From brand strategy to digital execution — we craft experiences that make your business stand out. Let's build something remarkable together.",
  brand:   "— Creators Touch Global",
  details: [
    { type: "phone", label: "Call Us",  value: "+91 98765 43210",        href: "tel:+919876543210"              },
    { type: "email", label: "Email Us", value: "hello@creatorstouch.in", href: "mailto:hello@creatorstouch.in" },
    { type: "map",   label: "Visit Us", value: "Vijayawada, Andhra Pradesh, India", href: null                 },
  ],
};

export default function ContactSection({ block = null }) {
  const content = block?.data ?? DEFAULT_DATA;
  const details = content.details ?? DEFAULT_DATA.details;

  const [form, setForm]           = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="py-24 px-4" style={{ backgroundColor: "var(--brand-navy-dark)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: "var(--brand-blue)" }}>
            {content.eyebrow ?? DEFAULT_DATA.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            {(content.heading ?? DEFAULT_DATA.heading).split("Together").length > 1 ? (
              <>Let&apos;s Work <span style={{ color: "var(--brand-blue)" }}>Together</span></>
            ) : (
              content.heading ?? DEFAULT_DATA.heading
            )}
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            {content.subtext ?? DEFAULT_DATA.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — contact info */}
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              {details.map(({ type, label, value, href }) => {
                const Icon = ICON_MAP[type] ?? Phone;
                return (
                  <div key={label} className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(9,119,168,0.2)" }}>
                      <Icon size={20} style={{ color: "var(--brand-blue)" }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white font-medium hover:text-[#0977a8] transition-colors">{value}</a>
                      ) : (
                        <p className="text-white font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-white/70 text-sm leading-relaxed">
                {content.tagline ?? DEFAULT_DATA.tagline}
              </p>
              <p className="mt-3 font-semibold" style={{ color: "var(--brand-blue)" }}>
                {content.brand ?? DEFAULT_DATA.brand}
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(9,119,168,0.2)" }}>
                  <Send size={28} style={{ color: "var(--brand-blue)" }} />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-white/50 text-sm max-w-xs">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="mt-2 text-sm font-medium px-6 py-2.5 rounded-xl text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/50 uppercase tracking-widest">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                      className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0977a8] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/50 uppercase tracking-widest">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000"
                      className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0977a8] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                    className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0977a8] transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project..."
                    className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0977a8] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-white py-3.5 rounded-xl transition-opacity hover:opacity-90 active:scale-[0.98]"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
