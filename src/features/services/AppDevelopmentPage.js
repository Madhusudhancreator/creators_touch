"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Smartphone, Code2, Layers, Zap, Shield, Database,
  ArrowRight, Phone, X, CheckCircle2, ChevronRight,
  GitBranch, PenTool, Rocket, Lock,
} from "lucide-react";

/* ── Brand tokens ──────────────────────────────────────────────── */
const BLUE       = "#0977a8";
const PINK       = "#cc0066";
const VIVID_PINK = "#f72585";
const DARK       = "#0d1b2e";
const LIGHT_CARD = "#f8fafc";

function useInView(ref, threshold = 0.08) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

/* ── Data ──────────────────────────────────────────────────────── */
const STATS = [
  { num: "iOS + Android", label: "Both Platforms" },
  { num: "React Native", label: "Cross-Platform Stack" },
  { num: "Full Stack",   label: "Design to Deploy" },
  { num: "Post-Launch",  label: "Ongoing Support" },
];

const CAPABILITIES = [
  {
    id: "01", title: "iOS & Android Apps", tag: "Native",
    desc: "Full-featured native applications for both platforms — fast, reliable, and built to App Store standards.",
    items: ["Swift / Kotlin", "App Store Ready", "Push Notifications", "Device APIs"],
    icon: Smartphone, color: PINK,
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: "02", title: "Cross-Platform (React Native)", tag: "Hybrid",
    desc: "One codebase, two platforms. We ship on iOS and Android simultaneously without compromise.",
    items: ["React Native", "Expo", "Shared Codebase", "Native Feel"],
    icon: Code2, color: BLUE,
  },
  {
    id: "03", title: "Mobile UI / UX Design", tag: "Design",
    desc: "Mobile-first interfaces built around how people actually hold and use their phones.",
    items: ["Figma Prototypes", "Gesture Nav", "Dark Mode", "Accessibility"],
    icon: PenTool, color: PINK,
  },
  {
    id: "04", title: "Backend & API", tag: "Server",
    desc: "Scalable Node.js backends and REST / GraphQL APIs powering your app with speed and reliability.",
    items: ["Node.js / Express", "REST & GraphQL", "Auth & Security", "Cloud Deploy"],
    icon: Database, color: BLUE,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: "05", title: "Performance & Speed", tag: "Optimisation",
    desc: "Buttery-smooth animations, fast loads, and offline support — every millisecond matters.",
    items: ["Lazy Loading", "Memory Mgmt", "Offline Support", "Caching"],
    icon: Zap, color: PINK,
  },
  {
    id: "06", title: "Security & Maintenance", tag: "Ongoing",
    desc: "Secure auth flows, encrypted storage, App Store updates, and long-term support after launch.",
    items: ["Secure Auth", "Encryption", "Store Updates", "Bug Fixes"],
    icon: Lock, color: BLUE,
  },
];

const TECH = [
  { label: "React Native", sub: "Cross-platform framework", color: PINK },
  { label: "Expo",         sub: "Rapid dev & OTA updates",  color: BLUE },
  { label: "Node.js",      sub: "Scalable backend runtime", color: PINK },
  { label: "Swift",        sub: "Native iOS development",   color: BLUE },
  { label: "Kotlin",       sub: "Native Android dev",       color: PINK },
  { label: "Firebase",     sub: "Auth, push & realtime DB", color: BLUE },
  { label: "GraphQL",      sub: "Flexible API layer",       color: PINK },
  { label: "AWS / Vercel", sub: "Cloud deploy & hosting",   color: BLUE },
];

const TICKER = [
  "iOS Development", "Android", "React Native", "Expo",
  "REST API", "GraphQL", "Push Notifications", "Offline Mode",
  "App Store Launch", "Secure Auth", "Cross-Platform",
];

const PROCESS = [
  {
    number: "01", title: "Discovery",
    desc: "We map out your users, features, and flows — pinning scope before any code is written.",
    icon: GitBranch, color: PINK,
  },
  {
    number: "02", title: "Prototype",
    desc: "Clickable Figma prototypes let you experience the app before development starts.",
    icon: PenTool, color: BLUE,
  },
  {
    number: "03", title: "Development",
    desc: "Agile sprints with weekly demos — you see real progress every single week.",
    icon: Code2, color: PINK,
  },
  {
    number: "04", title: "Launch & Grow",
    desc: "App Store submission, monitoring, OTA updates, and post-launch improvements.",
    icon: Rocket, color: BLUE,
  },
];

/* ── HERO ──────────────────────────────────────────────────────── */
function Hero({ mounted }) {
  return (
    <section className="relative min-h-screen flex overflow-hidden" style={{ backgroundColor: DARK }}>

      {/* Left panel */}
      <div className="relative z-10 flex flex-col justify-end pb-16 px-8 sm:px-14 lg:px-20 pt-28 w-full lg:w-[52%]">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-10"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease" }}
        >
          <div className="h-px w-8" style={{ backgroundColor: PINK }} />
          <span className="text-[10px] uppercase tracking-[0.55em] font-bold" style={{ color: PINK }}>
            App Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-8">
          {["Apps People", "Actually Want", "To Use."].map((line, i) => (
            <span
              key={line}
              className="block font-extrabold tracking-tighter leading-[0.88]"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: i === 1 ? PINK : "#ffffff",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-40px)",
                transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
              }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p
          className="text-base sm:text-lg leading-relaxed max-w-md mb-12"
          style={{
            color: "rgba(255,255,255,0.5)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          iOS, Android, and cross-platform mobile apps — from concept and prototype
          to App Store launch and beyond.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: PINK }}
          >
            Start Your App <ArrowRight size={14} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3.5 rounded-xl transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)" }}
          >
            All Services
          </Link>
        </div>

        {/* Tech tags */}
        <div
          className="flex flex-wrap gap-2 mt-14"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.9s" }}
        >
          {["React Native", "Swift", "Kotlin", "Expo", "Firebase"].map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full font-semibold"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right panel — hero image */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 1.2s ease 0.3s" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1400&q=85&auto=format&fit=crop"
          alt="App development on phone"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${DARK} 0%, rgba(13,27,46,0.5) 35%, rgba(13,27,46,0.05) 100%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${DARK}, transparent)` }} />
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: `linear-gradient(to top, ${DARK}, transparent)` }} />

        {/* Floating badge */}
        <div
          className="absolute top-1/2 right-12 -translate-y-1/2 rounded-2xl px-6 py-5"
          style={{
            backgroundColor: "rgba(13,27,46,0.9)",
            border: `1px solid rgba(204,0,102,0.35)`,
            backdropFilter: "blur(12px)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 1s",
          }}
        >
          <p className="text-xs uppercase tracking-[0.4em] font-semibold mb-1" style={{ color: PINK }}>
            We Build For
          </p>
          <p className="text-3xl font-extrabold text-white">iOS + Android</p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>One Team. Both Platforms.</p>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none z-20"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
      />
    </section>
  );
}

/* ── Stats bar ─────────────────────────────────────────────────── */
function StatsBar() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "1px solid #e2e8f0" }}>
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center py-10 px-4 text-center"
          style={{
            borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
            opacity:   inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.55s ease ${i * 0.08}s, transform 0.55s ease ${i * 0.08}s`,
          }}
        >
          <p className="font-extrabold tracking-tight" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)", color: DARK }}>
            {s.num}
          </p>
          <p className="text-[10px] uppercase tracking-[0.35em] mt-2" style={{ color: "#94a3b8" }}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Ticker ────────────────────────────────────────────────────── */
function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="overflow-hidden py-[13px]" style={{ backgroundColor: DARK }}>
      <div className="flex gap-0 whitespace-nowrap" style={{ animation: "ticker 26s linear infinite" }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.38em] px-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              {item}
            </span>
            <span style={{ color: PINK, fontSize: "0.3rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Capabilities Bento Grid ───────────────────────────────────── */
function CapabilitiesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
      <div
        ref={ref}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        style={{
          opacity:   inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: VIVID_PINK }}>
            What We Build
          </p>
          <h2
            className="font-extrabold tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
          >
            Six Core App<br />Development Capabilities
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl self-start sm:self-auto shrink-0 transition-opacity hover:opacity-80"
          style={{ border: `1px solid ${PINK}`, color: PINK }}
        >
          Discuss Your App <ChevronRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {CAPABILITIES.map((cap, i) => {
          const Icon = cap.icon;
          const isWide = cap.wide;
          return (
            <div
              key={cap.id}
              className={`group relative overflow-hidden rounded-3xl ${isWide ? "lg:col-span-2" : ""}`}
              style={{
                opacity:   inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(48px)",
                transition: `opacity 0.65s ease ${i * 0.08}s, transform 0.65s ease ${i * 0.08}s`,
              }}
            >
              {cap.img ? (
                <div className="relative h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cap.img}
                    alt={cap.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(13,27,46,0.92) 0%, rgba(13,27,46,0.3) 60%, transparent 100%)",
                    }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: cap.color }} />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.38em] mb-2 block"
                      style={{ color: cap.color === PINK ? "#e06aa3" : "#60b8d4" }}
                    >
                      {cap.id} — {cap.tag}
                    </span>
                    <h3 className="text-white font-extrabold text-xl tracking-tight leading-snug mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {cap.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {cap.items.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: `${cap.color}22`,
                            color: cap.color === PINK ? "#f0a0c8" : "#a0d8ef",
                            border: `1px solid ${cap.color}30`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="h-full flex flex-col gap-4 p-7 min-h-[230px]"
                  style={{
                    backgroundColor: LIGHT_CARD,
                    border: "1px solid #e2e8f0",
                    borderTop: `3px solid ${cap.color}`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${cap.color}14` }}
                    >
                      <Icon size={20} style={{ color: cap.color }} />
                    </div>
                    <span
                      className="text-[9px] font-semibold uppercase tracking-[0.35em] px-3 py-1 rounded-full"
                      style={{ color: cap.color, backgroundColor: `${cap.color}12` }}
                    >
                      {cap.tag}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest block mb-2" style={{ color: cap.color }}>
                      {cap.id}
                    </span>
                    <h3 className="font-extrabold tracking-tight leading-snug text-lg" style={{ color: DARK }}>
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "#64748b" }}>
                      {cap.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {cap.items.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                        style={{
                          color: cap.color,
                          backgroundColor: `${cap.color}0e`,
                          border: `1px solid ${cap.color}28`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 pointer-events-none"
                    style={{ backgroundColor: cap.color }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Tech Stack — dark section ─────────────────────────────────── */
function TechSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: DARK }}>
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
          style={{
            opacity:   inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: PINK }}>
              Technology
            </p>
            <h2
              className="font-extrabold tracking-tight leading-tight text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Our Tech Stack
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Modern, proven tools chosen for performance, developer speed, and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TECH.map((t, i) => (
            <div
              key={t.label}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `2px solid ${t.color}`,
                opacity:   inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.55s ease ${i * 0.06}s, transform 0.55s ease ${i * 0.06}s`,
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${t.color}25` }}
              >
                <Smartphone size={14} style={{ color: t.color }} />
              </div>
              <p className="font-bold text-sm text-white">{t.label}</p>
              <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{t.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process — horizontal cards ────────────────────────────────── */
function ProcessSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
      <div
        ref={ref}
        className="mb-14"
        style={{
          opacity:   inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: VIVID_PINK }}>
          Our Process
        </p>
        <h2
          className="font-extrabold tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
        >
          From Idea to App Store<br />in Four Clear Steps
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROCESS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative rounded-3xl p-8 flex flex-col gap-5 overflow-hidden"
              style={{
                backgroundColor: i % 2 === 0 ? DARK : LIGHT_CARD,
                border: i % 2 === 0 ? "none" : "1px solid #e2e8f0",
                borderTop: `3px solid ${step.color}`,
                opacity:   inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <span
                className="absolute -bottom-2 -right-1 font-extrabold leading-none select-none pointer-events-none"
                style={{
                  fontSize: "7rem",
                  color: i % 2 === 0 ? "rgba(255,255,255,0.04)" : `${step.color}08`,
                }}
              >
                {step.number}
              </span>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${step.color}20` }}
              >
                <Icon size={20} style={{ color: step.color }} />
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest block mb-2" style={{ color: step.color }}>
                  {step.number}
                </span>
                <h3
                  className="font-extrabold text-xl tracking-tight"
                  style={{ color: i % 2 === 0 ? "#ffffff" : DARK }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.45)" : "#64748b" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── CTA — full-width with background image ────────────────────── */
function CTASection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden mx-4 sm:mx-6 mb-6 rounded-3xl"
      style={{
        opacity:   inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        minHeight: "420px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&q=80&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(13,27,46,0.97) 0%, rgba(13,27,46,0.75) 100%)" }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(204,0,102,0.25) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 px-10 sm:px-16 py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-4" style={{ color: PINK }}>
            Have an App Idea?
          </p>
          <h2
            className="font-extrabold tracking-tight leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Let&apos;s turn your idea<br />into a real product.
          </h2>
          <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Tell us what you want to build — we&apos;ll come back with a plan, a timeline, and honest pricing. No fluff.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-8 py-4 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: PINK }}
          >
            Start Your App <ArrowRight size={15} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold px-8 py-4 rounded-xl transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
          >
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Lead popup ────────────────────────────────────────────────── */
function LeadPopup({ onClose }) {
  const [phone, setPhone] = useState("");
  const [sent,  setSent]  = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80" style={{ animation: "popupIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards" }}>
      <div
        className="relative rounded-2xl p-6 shadow-2xl"
        style={{
          backgroundColor: "#0d1b2e",
          border: `1px solid rgba(204,0,102,0.35)`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${PINK}, transparent)` }}
        />
        <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors">
          <X size={15} />
        </button>
        {!sent ? (
          <>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(204,0,102,0.18)" }}>
              <Phone size={17} style={{ color: PINK }} />
            </div>
            <h3 className="text-white font-bold text-[0.95rem] mb-1.5">Have an app idea?</h3>
            <p className="text-white/45 text-xs leading-relaxed mb-5">
              Drop your number and we&apos;ll call you back with a plan and honest pricing.
            </p>
            <div className="flex gap-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && phone && setSent(true)}
                placeholder="+91 00000 00000"
                className="flex-1 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                onFocus={e => e.target.style.borderColor = PINK}
                onBlur={e  => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
              <button
                onClick={() => phone && setSent(true)}
                className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 shrink-0"
                style={{ backgroundColor: PINK }}
              >
                Call Me
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(204,0,102,0.18)" }}>
              <CheckCircle2 size={20} style={{ color: PINK }} />
            </div>
            <h3 className="text-white font-bold mb-1.5">We&apos;ll call you soon!</h3>
            <p className="text-white/45 text-xs leading-relaxed">Our team will reach out shortly. Let&apos;s build something great.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main page ─────────────────────────────────────────────────── */
export default function AppDevelopmentPage() {
  const [mounted,   setMounted]   = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dismissedRef              = useRef(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissedRef.current) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && window.scrollY / total > 0.40) setShowPopup(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <Hero mounted={mounted} />
      <StatsBar />
      <Ticker />
      <CapabilitiesSection />
      <TechSection />
      <ProcessSection />
      <CTASection />
      <div style={{ height: "80px" }} />

      {showPopup && <LeadPopup onClose={() => { setShowPopup(false); dismissedRef.current = true; }} />}

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes popupIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </main>
  );
}
