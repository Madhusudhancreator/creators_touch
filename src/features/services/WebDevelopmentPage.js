"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Globe, Code2, Layers, Smartphone, ShoppingCart, Zap,
  ArrowRight, Phone, X, CheckCircle2, ChevronRight,
  Monitor, PenTool, GitBranch, Layout,
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
  { num: "50+",  label: "Websites Delivered" },
  { num: "100%", label: "Mobile-First Builds" },
  { num: "3×",   label: "Avg. Conversion Lift" },
  { num: "< 2s", label: "Target Load Time"  },
];

const SERVICES = [
  {
    id: "01", title: "UI / UX Design", tag: "Design",
    desc: "Interfaces designed around how real users think — every layout, colour, and flow purposeful.",
    items: ["Wireframing", "Prototyping", "User Research", "Responsive Design"],
    icon: PenTool, color: BLUE,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: "02", title: "Frontend Development", tag: "Code",
    desc: "Fast, accessible, pixel-perfect code using React & Next.js.",
    items: ["React / Next.js", "Tailwind CSS", "Animations", "Cross-browser"],
    icon: Code2, color: PINK,
  },
  {
    id: "03", title: "CMS Integration", tag: "Content",
    desc: "Your team edits content confidently — no developer needed.",
    items: ["Sanity", "WordPress", "Webflow", "Custom Admin"],
    icon: Layout, color: BLUE,
  },
  {
    id: "04", title: "E-Commerce", tag: "Store",
    desc: "Storefronts that convert browsers into buyers, smoothly.",
    items: ["Shopify", "WooCommerce", "Payments", "Inventory"],
    icon: ShoppingCart, color: PINK,
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    id: "05", title: "Mobile-First Sites", tag: "Mobile",
    desc: "Sites that feel native on every phone and tablet.",
    items: ["Responsive Layout", "Touch UX", "PWA", "Fast Load"],
    icon: Smartphone, color: BLUE,
  },
  {
    id: "06", title: "Performance & SEO", tag: "Speed",
    desc: "Core Web Vitals optimised for both users and search engines.",
    items: ["Core Web Vitals", "Image Optimisation", "Schema Markup", "Caching"],
    icon: Zap, color: PINK,
  },
];

const PROJECTS = [
  {
    name: "Fashion Brand Store",
    category: "Shopify + UI Design",
    tag: "E-Commerce",
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&auto=format&fit=crop",
    color: BLUE,
    tall: true,
  },
  {
    name: "SaaS Dashboard",
    category: "React / Next.js",
    tag: "SaaS",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    color: PINK,
  },
  {
    name: "Corporate Portal",
    category: "CMS + Frontend",
    tag: "Business",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
    color: BLUE,
  },
  {
    name: "Real Estate Platform",
    category: "Custom CMS + Dev",
    tag: "Real Estate",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format&fit=crop",
    color: PINK,
    tall: true,
  },
  {
    name: "Restaurant & Food Brand",
    category: "Design + Dev",
    tag: "Hospitality",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop",
    color: BLUE,
  },
  {
    name: "Health & Wellness App",
    category: "Next.js + Branding",
    tag: "Health",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop",
    color: PINK,
  },
];

const TICKER = [
  "UI Design", "Next.js", "React", "Responsive",
  "E-Commerce", "CMS", "SEO-Ready", "Performance",
  "Accessibility", "Animations", "Fast Delivery",
];

const PROCESS = [
  {
    number: "01", title: "Discovery",
    desc: "Deep dive into your business, audience, and goals before a single pixel is placed.",
    icon: GitBranch, color: BLUE,
  },
  {
    number: "02", title: "Design",
    desc: "High-fidelity prototypes you can click through — real look and feel before any code.",
    icon: PenTool, color: PINK,
  },
  {
    number: "03", title: "Build",
    desc: "Clean React / Next.js code, CMS wired up, performance tuned, and tested on every device.",
    icon: Code2, color: BLUE,
  },
  {
    number: "04", title: "Launch",
    desc: "Hosting, DNS, final QA, and a smooth go-live — then ongoing support when you need it.",
    icon: Globe, color: PINK,
  },
];

/* ── HERO — full-screen split ──────────────────────────────────── */
function Hero({ mounted }) {
  return (
    <section className="relative min-h-screen flex overflow-hidden" style={{ backgroundColor: DARK }}>

      {/* ── Left panel ── */}
      <div className="relative z-10 flex flex-col justify-end pb-16 px-8 sm:px-14 lg:px-20 pt-28 w-full lg:w-[52%]">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-10"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <div className="h-px w-8" style={{ backgroundColor: BLUE }} />
          <span className="text-[10px] uppercase tracking-[0.55em] font-bold" style={{ color: BLUE }}>
            Web Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-8">
          {["Websites That", "Work As Hard", "As You Do."].map((line, i) => (
            <span
              key={line}
              className="block font-extrabold tracking-tighter leading-[0.88]"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: i === 1 ? BLUE : "#ffffff",
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
          From landing pages to full-scale platforms — beautiful, fast, and built
          to convert visitors into customers.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.7s",
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: BLUE }}
          >
            Start a Project
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3.5 rounded-xl transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)" }}
          >
            All Services
          </Link>
        </div>

        {/* Bottom tags */}
        <div
          className="flex flex-wrap gap-2 mt-14"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.9s",
          }}
        >
          {["Next.js", "React", "Shopify", "Tailwind", "CMS"].map((t) => (
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

      {/* ── Right panel — hero image ── */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 0.3s",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=85&auto=format&fit=crop"
          alt="Web development workspace"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay blending into dark left */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${DARK} 0%, rgba(13,27,46,0.5) 35%, rgba(13,27,46,0.05) 100%)`,
          }}
        />
        {/* Top / bottom fades */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${DARK}, transparent)` }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${DARK}, transparent)` }}
        />

        {/* Floating badge */}
        <div
          className="absolute top-1/2 right-12 -translate-y-1/2 rounded-2xl px-6 py-5"
          style={{
            backgroundColor: "rgba(13,27,46,0.9)",
            border: `1px solid rgba(9,119,168,0.35)`,
            backdropFilter: "blur(12px)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 1s",
          }}
        >
          <p className="text-xs uppercase tracking-[0.4em] font-semibold mb-1" style={{ color: BLUE }}>
            Average Result
          </p>
          <p className="text-3xl font-extrabold text-white">3× More</p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Conversions After Redesign</p>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none z-20"
        style={{ background: `linear-gradient(to top, #ffffff, transparent)` }}
      />
    </section>
  );
}

/* ── Stats bar ─────────────────────────────────────────────────── */
function StatsBar() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-4"
      style={{ borderBottom: "1px solid #e2e8f0" }}
    >
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
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "ticker 26s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.38em] px-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              {item}
            </span>
            <span style={{ color: BLUE, fontSize: "0.3rem" }}>◆</span>
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
      {/* Header */}
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
            Six Ways We Build<br />Your Digital Presence
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl self-start sm:self-auto shrink-0 transition-opacity hover:opacity-80"
          style={{ border: `1px solid ${BLUE}`, color: BLUE }}
        >
          Discuss a Project <ChevronRight size={14} />
        </Link>
      </div>

      {/* Bento grid */}
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
                /* Image card */
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
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: svc.color }}
                  />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.38em] mb-2 block"
                      style={{ color: svc.color === BLUE ? "#60b8d4" : "#e06aa3" }}
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
                            color: svc.color === BLUE ? "#a0d8ef" : "#f0a0c8",
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
                /* Plain card */
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
                    <span
                      className="font-mono text-[10px] tracking-widest block mb-2"
                      style={{ color: svc.color }}
                    >
                      {svc.id}
                    </span>
                    <h3
                      className="font-extrabold tracking-tight leading-snug text-lg"
                      style={{ color: DARK }}
                    >
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

/* ── Previous Work — asymmetric masonry ────────────────────────── */
function WorkSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: DARK }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: BLUE }}>
              Previous Work
            </p>
            <h2
              className="font-extrabold tracking-tight leading-tight text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Sites We&apos;ve Built<br />for Real Clients
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            A cross-industry selection — each site designed to perform and built to last.
          </p>
        </div>

        {/* Masonry — two columns with alternating heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.name}
              className="relative overflow-hidden rounded-3xl group"
              style={{
                height: proj.tall ? "420px" : "300px",
                opacity:   inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 0.65s ease ${i * 0.09 + 0.1}s, transform 0.65s ease ${i * 0.09 + 0.1}s`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={proj.src}
                alt={proj.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(13,27,46,0.95) 0%, rgba(13,27,46,0.2) 50%, transparent 100%)",
                }}
              />
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: proj.color }} />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.35em] px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${proj.color}28`,
                      color: proj.color === BLUE ? "#60b8d4" : "#e06aa3",
                    }}
                  >
                    {proj.tag}
                  </span>
                </div>
                <h3 className="text-white font-extrabold text-base tracking-tight">{proj.name}</h3>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{proj.category}</p>
              </div>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 2px ${proj.color}70` }}
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
      {/* Header */}
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
          From Brief to Browser<br />in Four Clear Steps
        </h2>
      </div>

      {/* Cards row */}
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
              {/* Ghost number */}
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
                <span
                  className="font-mono text-[10px] tracking-widest block mb-2"
                  style={{ color: step.color }}
                >
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

/* ── Full-width CTA with background image ──────────────────────── */
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
      {/* BG image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&q=80&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(13,27,46,0.96) 0%, rgba(13,27,46,0.75) 100%)" }}
      />
      {/* Blue glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(9,119,168,0.25) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 px-10 sm:px-16 py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-4" style={{ color: BLUE }}>
            Ready to Build?
          </p>
          <h2
            className="font-extrabold tracking-tight leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Let&apos;s create a website<br />you&apos;re proud of.
          </h2>
          <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Tell us about your project — we&apos;ll come back with ideas, a timeline, and a clear plan. No fluff.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-8 py-4 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: BLUE }}
          >
            Start a Project
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold px-8 py-4 rounded-xl transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
          >
            View Our Work
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
    <div
      className="fixed bottom-6 right-6 z-50 w-80"
      style={{ animation: "popupIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards" }}
    >
      <div
        className="relative rounded-2xl p-6 shadow-2xl"
        style={{
          backgroundColor: "#0d1b2e",
          border: `1px solid rgba(9,119,168,0.35)`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)` }}
        />
        <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors">
          <X size={15} />
        </button>
        {!sent ? (
          <>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(9,119,168,0.18)" }}>
              <Phone size={17} style={{ color: BLUE }} />
            </div>
            <h3 className="text-white font-bold text-[0.95rem] mb-1.5">Need a website?</h3>
            <p className="text-white/45 text-xs leading-relaxed mb-5">
              Share your number and we&apos;ll get back to you with ideas and honest pricing.
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
                onFocus={e => e.target.style.borderColor = BLUE}
                onBlur={e  => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
              <button
                onClick={() => phone && setSent(true)}
                className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 shrink-0"
                style={{ backgroundColor: BLUE }}
              >
                Call Me
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(9,119,168,0.18)" }}>
              <CheckCircle2 size={20} style={{ color: BLUE }} />
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
export default function WebDevelopmentPage() {
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
      <WorkSection />
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
        .group-hover\\:scale-108:hover { transform: scale(1.08); }
      `}</style>
    </main>
  );
}
