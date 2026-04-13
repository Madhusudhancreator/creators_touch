"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98859 33339",
    sub: "Mon – Sat, 9 AM – 7 PM",
    href: "tel:+919885933339",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@creatorstouch.in",
    sub: "We reply within 24 hours",
    href: "mailto:hello@creatorstouch.in",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "MG Road, Vijayawada",
    sub: "Andhra Pradesh — 520 010",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Saturday",
    sub: "9:00 AM – 7:00 PM IST",
    href: null,
  },
];

const services = [
  "Video Production",
  "Digital Marketing",
  "Website Design",
  "App Development",
  "Logo & Branding",
  "Photography",
  "SEO & Content",
  "Social Media",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: form.name,
            phone:     form.phone,
            email:     form.email,
            service:   form.service,
            budget:    form.budget,
            message:   form.message,
          }),
        }
      );
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-24 pb-16 px-4 text-center" style={{ backgroundColor: "#0d1b2e" }}>
        <p className="text-xs uppercase tracking-[0.35em] font-semibold mb-3" style={{ color: "#0977a8" }}>
          Contact Us
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Work <span style={{ color: "#0977a8" }}>Together</span>
        </h1>
        <p className="mt-4 text-white/50 text-base max-w-lg mx-auto">
          Have a project in mind? We&apos;d love to hear from you. Tell us about your goals and we&apos;ll get back to you within 24 hours.
        </p>
      </section>

      {/* ── Contact cards ── */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col gap-3"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(9,119,168,0.1)" }}
            >
              <Icon size={18} style={{ color: "#0977a8" }} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
              {href ? (
                <a href={href} className="text-sm font-semibold text-[#0d1b2e] hover:text-[#0977a8] transition-colors">
                  {value}
                </a>
              ) : (
                <p className="text-sm font-semibold text-[#0d1b2e]">{value}</p>
              )}
              <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Form + Map ── */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Form */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-[#0d1b2e] mb-1">Send Us a Message</h2>
          <p className="text-sm text-gray-500 mb-8">Fill in the form below and we&apos;ll reach out shortly.</p>

          {submitError && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
              {submitError}
            </div>
          )}

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center gap-4 py-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(9,119,168,0.1)" }}
              >
                <Send size={28} style={{ color: "#0977a8" }} />
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2e]">Message Sent!</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Thank you! We&apos;ll review your message and get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); }}
                className="mt-2 text-sm font-semibold px-6 py-2.5 rounded-xl text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#0977a8" }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="John Doe"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#0977a8] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Phone</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#0977a8] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Email *</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="you@example.com"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#0977a8] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Service Needed</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#0977a8] transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Budget Range</label>
                  <select
                    name="budget" value={form.budget} onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#0977a8] transition-colors bg-white"
                  >
                    <option value="">Select budget</option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Message *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell us about your project..."
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#0977a8] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center gap-2 text-sm font-bold text-white py-4 rounded-xl transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                style={{ backgroundColor: "#0977a8" }}
              >
                <Send size={16} /> {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Right — Map + Quick links */}
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex-1 min-h-[300px]">
            <iframe
              title="Creators Touch Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61440.45286582388!2d80.58751999999999!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efa1712d5c1b%3A0x8c6e5e89f8f46a5!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-3xl border border-gray-100 shadow-sm p-6 bg-white">
            <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-3">
              {["Our Work", "Services", "About Us", "Blog"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center gap-2 text-sm font-medium text-[#0d1b2e] hover:text-[#0977a8] transition-colors group"
                >
                  <ArrowRight size={13} className="text-[#0977a8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
