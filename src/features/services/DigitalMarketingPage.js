"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  TrendingUp, Search, Share2, Mail, Target, BarChart2,
  ArrowRight, Phone, X, CheckCircle2, ChevronRight,
  GitBranch, PenTool, Megaphone, LineChart,
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
  { num: "3.2×",  label: "Average ROAS on Paid Ads" },
  { num: "68%",   label: "Organic Traffic Increase" },
  { num: "2.4×",  label: "Email Open Rate vs Average" },
  { num: "40%",   label: "Avg. Cost-Per-Lead Drop"   },
];

const SERVICES = [
  {
    id: "01", title: "Search Engine Optimisation", tag: "SEO",
    desc: "Get found by the right people at the right time. We optimise your site to rank higher and stay there.",
    items: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
    icon: Search, color: BLUE,
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: "02", title: "Paid Advertising (PPC)", tag: "Paid Ads",
    desc: "Google and Meta campaigns built to drive qualified leads while keeping cost-per-acquisition tight.",
    items: ["Google Ads", "Meta Ads", "Retargeting", "A/B Testing"],
    icon: Target, color: VIVID_PINK,
  },
  {
    id: "03", title: "Social Media Marketing", tag: "Social",
    desc: "Content that resonates, communities that grow, and paid social that converts followers into customers.",
    items: ["Content Calendar", "Reels & Stories", "Community Mgmt", "Influencer"],
    icon: Share2, color: BLUE,
  },
  {
    id: "04", title: "Email Marketing", tag: "Email",
    desc: "Automated sequences and broadcast campaigns that nurture leads and drive repeat revenue.",
    items: ["Automation Flows", "Newsletter Design", "Segmentation", "A/B Testing"],
    icon: Mail, color: VIVID_PINK,
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: "05", title: "Growth Strategy", tag: "Strategy",
    desc: "A full-funnel growth plan built around your business goals — not just clicks and impressions.",
    items: ["Funnel Design", "KPI Framework", "Channel Mix", "Reporting"],
    icon: TrendingUp, color: BLUE,
  },
  {
    id: "06", title: "Analytics & Reporting", tag: "Data",
    desc: "Clear dashboards and monthly reports showing exactly what's working and where to invest next.",
    items: ["GA4 Setup", "Conversion Tracking", "Dashboards", "Insight Reviews"],
    icon: BarChart2, color: VIVID_PINK,
  },
];

const RESULTS = [
  {
    metric: "3.2×",
    label: "Average ROAS",
    sub: "Paid campaigns across Google & Meta",
    color: BLUE,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
  },
  {
    metric: "68%",
    label: "More Organic Traffic",
    sub: "Average increase within 6 months of SEO",
    color: VIVID_PINK,
    img: "https://images.unsplash.com/photo-1533750516327-c5c2d8a74916?w=900&q=80&auto=format&fit=crop",
  },
  {
    metric: "40%",
    label: "Lower Cost Per Lead",
    sub: "Through funnel optimisation & targeting",
    color: BLUE,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
  },
];

const TICKER = [
  "SEO", "Google Ads", "Meta Ads", "Social Media",
  "Email Marketing", "Content Strategy", "Analytics", "Retargeting",
  "Funnel Design", "Lead Generation", "Growth Strategy",
];

const PROCESS = [
  {
    number: "01", title: "Audit & Strategy",
    desc: "We review your current marketing, competitors, and audience — then build a data-backed growth plan.",
    icon: Search, color: BLUE,
  },
  {
    number: "02", title: "Channel Setup",
    desc: "Pixels, tracking, ad accounts, and email platforms — all configured correctly before a single campaign goes live.",
    icon: PenTool, color: VIVID_PINK,
  },
  {
    number: "03", title: "Execute & Optimise",
    desc: "Campaigns launch with daily monitoring and weekly optimisation — we never set-and-forget.",
    icon: Megaphone, color: BLUE,
  },
  {
    number: "04", title: "Report & Scale",
    desc: "Monthly reports with clear insights and quarterly reviews to decide where to double down.",
    icon: LineChart, color: VIVID_PINK,
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
          <div className="h-px w-8" style={{ backgroundColor: VIVID_PINK }} />
          <span className="text-[10px] uppercase tracking-[0.55em] font-bold" style={{ color: VIVID_PINK }}>
            Digital Marketing
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-8">
          {["Marketing That", "Grows Your", "Business."].map((line, i) => (
            <span
              key={line}
              className="block font-extrabold tracking-tighter leading-[0.88]"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: i === 1 ? VIVID_PINK : "#ffffff",
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
          SEO, paid ads, social media, and email — all working together as
          a single growth engine built around your business goals.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: VIVID_PINK }}
          >
            Grow My Brand <ArrowRight size={14} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3.5 rounded-xl transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)" }}
          >
            All Services
          </Link>
        </div>

        {/* Channel tags */}
        <div
          className="flex flex-wrap gap-2 mt-14"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.9s" }}
        >
          {["SEO", "Google Ads", "Meta Ads", "Email", "Analytics"].map((t) => (
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
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&q=85&auto=format&fit=crop"
          alt="Digital marketing analytics"
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
            border: `1px solid rgba(247,37,133,0.35)`,
            backdropFilter: "blur(12px)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 1s",
          }}
        >
          <p className="text-xs uppercase tracking-[0.4em] font-semibold mb-1" style={{ color: VIVID_PINK }}>
            Typical Result
          </p>
          <p className="text-3xl font-extrabold text-white">3.2× ROAS</p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Average Return on Ad Spend</p>
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
          <p className="font-extrabold tracking-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: DARK }}>
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
      <div className="flex gap-0 whitespace-nowrap" style={{ animation: "ticker 28s linear infinite" }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.38em] px-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              {item}
            </span>
            <span style={{ color: VIVID_PINK, fontSize: "0.3rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Services Bento Grid ───────────────────────────────────────── */
function ServicesSection() {
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
            What We Do
          </p>
          <h2
            className="font-extrabold tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
          >
            Six Marketing Services.<br />One Unified Strategy.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl self-start sm:self-auto shrink-0 transition-opacity hover:opacity-80"
          style={{ border: `1px solid ${VIVID_PINK}`, color: VIVID_PINK }}
        >
          Get a Free Audit <ChevronRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {SERVICES.map((svc, i) => {
          const Icon = svc.icon;
          const isWide = svc.wide;
          return (
            <div
              key={svc.id}
              className={`group relative overflow-hidden rounded-3xl ${isWide ? "lg:col-span-2" : ""}`}
              style={{
                opacity:   inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(48px)",
                transition: `opacity 0.65s ease ${i * 0.08}s, transform 0.65s ease ${i * 0.08}s`,
              }}
            >
              {svc.img ? (
                <div className="relative h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={svc.img}
                    alt={svc.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(13,27,46,0.92) 0%, rgba(13,27,46,0.3) 60%, transparent 100%)",
                    }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: svc.color }} />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.38em] mb-2 block"
                      style={{ color: svc.color === BLUE ? "#60b8d4" : "#f985b8" }}
                    >
                      {svc.id} — {svc.tag}
                    </span>
                    <h3 className="text-white font-extrabold text-xl tracking-tight leading-snug mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {svc.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {svc.items.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: `${svc.color}22`,
                            color: svc.color === BLUE ? "#a0d8ef" : "#f9a8cc",
                            border: `1px solid ${svc.color}30`,
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
                    borderTop: `3px solid ${svc.color}`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${svc.color}14` }}
                    >
                      <Icon size={20} style={{ color: svc.color }} />
                    </div>
                    <span
                      className="text-[9px] font-semibold uppercase tracking-[0.35em] px-3 py-1 rounded-full"
                      style={{ color: svc.color, backgroundColor: `${svc.color}12` }}
                    >
                      {svc.tag}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest block mb-2" style={{ color: svc.color }}>
                      {svc.id}
                    </span>
                    <h3 className="font-extrabold tracking-tight leading-snug text-lg" style={{ color: DARK }}>
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "#64748b" }}>
                      {svc.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {svc.items.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                        style={{
                          color: svc.color,
                          backgroundColor: `${svc.color}0e`,
                          border: `1px solid ${svc.color}28`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 pointer-events-none"
                    style={{ backgroundColor: svc.color }}
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

/* ── Results — dark section with image cards ───────────────────── */
function ResultsSection() {
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
            <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: VIVID_PINK }}>
              Typical Results
            </p>
            <h2
              className="font-extrabold tracking-tight leading-tight text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Numbers That<br />Actually Matter
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Real performance benchmarks from our ongoing client campaigns — not vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {RESULTS.map((r, i) => (
            <div
              key={r.label}
              className="relative overflow-hidden rounded-3xl group"
              style={{
                height: "340px",
                opacity:   inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 0.65s ease ${i * 0.1 + 0.1}s, transform 0.65s ease ${i * 0.1 + 0.1}s`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.img}
                alt={r.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(13,27,46,0.97) 0%, rgba(13,27,46,0.4) 55%, rgba(13,27,46,0.15) 100%)",
                }}
              />
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: r.color }} />

              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <p
                  className="font-extrabold tracking-tighter leading-none mb-3"
                  style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: r.color === BLUE ? "#60b8d4" : "#f985b8" }}
                >
                  {r.metric}
                </p>
                <p className="text-white font-extrabold text-base tracking-tight">{r.label}</p>
                <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>{r.sub}</p>
              </div>

              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 2px ${r.color}60` }}
              />
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
          Our Approach
        </p>
        <h2
          className="font-extrabold tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
        >
          From Audit to Growth<br />in Four Clear Steps
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
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(13,27,46,0.97) 0%, rgba(13,27,46,0.75) 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(247,37,133,0.22) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(9,119,168,0.2) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 px-10 sm:px-16 py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-4" style={{ color: VIVID_PINK }}>
            Ready to Grow?
          </p>
          <h2
            className="font-extrabold tracking-tight leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Let&apos;s build a marketing<br />engine for your brand.
          </h2>
          <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Start with a free audit — we&apos;ll show you exactly where your biggest
            growth opportunities are. No obligation.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-8 py-4 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: VIVID_PINK }}
          >
            Get a Free Audit <ArrowRight size={15} />
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
          border: `1px solid rgba(247,37,133,0.35)`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${VIVID_PINK}, transparent)` }}
        />
        <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors">
          <X size={15} />
        </button>
        {!sent ? (
          <>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(247,37,133,0.18)" }}>
              <Phone size={17} style={{ color: VIVID_PINK }} />
            </div>
            <h3 className="text-white font-bold text-[0.95rem] mb-1.5">Want more leads?</h3>
            <p className="text-white/45 text-xs leading-relaxed mb-5">
              Share your number and we&apos;ll call you back with a free marketing audit.
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
                onFocus={e => e.target.style.borderColor = VIVID_PINK}
                onBlur={e  => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
              <button
                onClick={() => phone && setSent(true)}
                className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 shrink-0"
                style={{ backgroundColor: VIVID_PINK }}
              >
                Call Me
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(247,37,133,0.18)" }}>
              <CheckCircle2 size={20} style={{ color: VIVID_PINK }} />
            </div>
            <h3 className="text-white font-bold mb-1.5">Audit incoming!</h3>
            <p className="text-white/45 text-xs leading-relaxed">Our team will reach out shortly with your free marketing audit.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main page ─────────────────────────────────────────────────── */
export default function DigitalMarketingPage() {
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
      <ServicesSection />
      <ResultsSection />
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
