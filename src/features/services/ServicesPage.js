"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Target, Layers, Globe, Smartphone, TrendingUp,
  Video, Search, Share2, Camera, ArrowDown, Phone, X,
} from "lucide-react";

/* ── Brand tokens ──────────────────────────────────────────────── */
const BLUE       = "#0977a8";
const PINK       = "#cc0066";
const DARK       = "#0d1b2e";
const LIGHT_CARD = "#f8fafc";

/* ── Overview grid data (9 services) ──────────────────────────── */
const OVERVIEW = [
  {
    id: "01", title: "Strategy & Planning", tag: "Foundation",
    desc: "Data-driven roadmaps that position your brand ahead of the competition. Research first, execution always.",
    items: ["Market Research", "Competitor Analysis", "Brand Roadmap", "KPI Framework"],
    icon: Target, color: BLUE, featured: true,
  },
  {
    id: "02", title: "Brand Identity", tag: "Identity",
    desc: "Logos, systems, and visual languages that make your brand instantly recognisable — and hard to forget.",
    items: ["Logo Design", "Brand Guidelines", "Typography", "Colour System"],
    icon: Layers, color: PINK,
  },
  {
    id: "03", title: "Website Design", tag: "UI / UX",
    desc: "Stunning, conversion-focused websites built around how your customers actually think and behave.",
    items: ["UI Design", "UX Research", "Prototyping", "Responsive"],
    icon: Globe, color: BLUE,
  },
  {
    id: "04", title: "App Development", tag: "Mobile",
    desc: "High-performance iOS & Android apps your users return to — built fast, shipped properly.",
    items: ["iOS & Android", "React Native", "Backend API", "App Store"],
    icon: Smartphone, color: PINK,
  },
  {
    id: "05", title: "Digital Marketing", tag: "Growth",
    desc: "Full-funnel campaigns that reach the right audience and deliver measurable, repeatable ROI.",
    items: ["PPC Ads", "Email Marketing", "Analytics", "Funnel Design"],
    icon: TrendingUp, color: BLUE,
  },
  {
    id: "06", title: "Video Production", tag: "Storytelling",
    desc: "Cinematic brand films, social reels, and product videos that stop the scroll and drive action.",
    items: ["Brand Films", "Social Reels", "Product Demos", "Animation"],
    icon: Video, color: PINK,
  },
  {
    id: "07", title: "SEO & Content", tag: "Visibility",
    desc: "Rank higher and get found faster. Technical SEO, content strategy, and local search dominance.",
    items: ["Technical SEO", "Content Strategy", "Local SEO", "Link Building"],
    icon: Search, color: BLUE,
  },
  {
    id: "08", title: "Social Media", tag: "Community",
    desc: "Consistent, engaging social presence across every platform that builds loyal brand communities.",
    items: ["Content Calendar", "Community Mgmt", "Paid Social", "Analytics"],
    icon: Share2, color: PINK,
  },
  {
    id: "09", title: "Photography", tag: "Visual Assets",
    desc: "Professional photography for products, events, and brand identity shoots that elevate perception.",
    items: ["Product Shoots", "Event Coverage", "Brand Portraits", "Editing"],
    icon: Camera, color: BLUE,
  },
];

/* ── Core services for sticky deep-dive ───────────────────────── */
const CORE = [
  {
    number: "01", title: "Strategy", tag: "Business Planning",
    description: "We begin every engagement with deep research. Understanding your market, your competitors, and your customers lets us build a plan that actually works — not guesswork dressed up as strategy.",
    bullets: ["Market & Competitor Research", "Brand Positioning", "Growth Roadmap", "KPI Framework"],
    accent: BLUE,
  },
  {
    number: "02", title: "Branding", tag: "Brand Identity",
    description: "A brand is not a logo. It's a system of trust signals. We craft cohesive brand identities that communicate quality and intention across every single touchpoint your customers encounter.",
    bullets: ["Logo Design", "Brand Guidelines", "Typography System", "Brand Voice & Tone"],
    accent: PINK,
  },
  {
    number: "03", title: "Design & Dev", tag: "Digital Products",
    description: "From wireframe to live website — we design and build digital products that look stunning, load fast, and convert. Every pixel is intentional. Every interaction is tested.",
    bullets: ["UI / UX Design", "Frontend Development", "CMS Integration", "Performance Optimisation"],
    accent: BLUE,
  },
  {
    number: "04", title: "Marketing", tag: "Growth Engine",
    description: "Traffic without strategy is noise. We build end-to-end marketing systems — SEO, paid ads, email, social — that generate qualified leads consistently and measurably.",
    bullets: ["SEO & Local Search", "Paid Advertising", "Social Media Management", "Email Campaigns"],
    accent: PINK,
  },
  {
    number: "05", title: "Video & Photo", tag: "Visual Storytelling",
    description: "Scroll-stopping video and photography that makes your brand impossible to ignore. We handle scripting, production, and post-production entirely in-house.",
    bullets: ["Brand Films", "Product Photography", "Social Media Reels", "Event Coverage"],
    accent: BLUE,
  },
];

/* ── Ticker items ──────────────────────────────────────────────── */
const TICKER = [
  "Strategy", "Branding", "Website Design", "App Development",
  "Digital Marketing", "Video Production", "SEO & Content",
  "Social Media", "Photography", "Graphic Design", "Event Coverage",
];

const ROW_H = 64;
const NAV_H = 88;

/* ── useInView hook ────────────────────────────────────────────── */
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

/* ── Hero ──────────────────────────────────────────────────────── */
function Hero({ mounted }) {
  const words = [
    { text: "We Build", delay: "0s" },
    { text: "Experiences", delay: "0.18s" },
    { text: "That Convert.", delay: "0.36s" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-14 lg:px-24 pt-20 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(9,119,168,0.1) 0%, transparent 65%), #f0f8fc`,
      }}
    >
      {/* CSS grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(9,119,168,0.08) 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        <p
          className="text-xs uppercase tracking-[0.45em] font-semibold mb-8"
          style={{
            color: BLUE,
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          Our Services
        </p>

        <h1 className="leading-[0.9] mb-10">
          {words.map(({ text, delay }) => (
            <span
              key={text}
              className="block font-extrabold tracking-tighter"
              style={{
                fontSize: "clamp(3.2rem, 10.5vw, 9rem)",
                color: DARK,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}`,
              }}
            >
              {text}
            </span>
          ))}
        </h1>

        <p
          className="text-base sm:text-lg max-w-xl leading-relaxed mb-16"
          style={{
            color: "#64748b",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s",
          }}
        >
          From brand strategy to digital execution — we craft results-driven services
          that make businesses grow. Nine specialisations. One team.
        </p>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-10 sm:gap-16 mb-16"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.85s",
          }}
        >
          {[["9+", "Core Services"], ["200+", "Projects Delivered"], ["50+", "Happy Clients"]].map(([num, label]) => (
            <div key={label}>
              <p className="font-extrabold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: DARK }}>
                {num}
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] mt-1" style={{ color: "#94a3b8" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div
          className="flex flex-wrap items-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 1s",
          }}
        >
          <Link
            href="/contact"
            className="text-sm font-bold text-white px-7 py-3 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: BLUE }}
          >
            Start a Project
          </Link>
          <span className="flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: "#94a3b8" }}>
            <ArrowDown size={13} style={{ animation: "nudge 2.2s ease infinite" }} />
            Scroll to explore
          </span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
      />
    </section>
  );
}

/* ── Ticker ────────────────────────────────────────────────────── */
function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div
      className="overflow-hidden border-y py-4"
      style={{ borderColor: "rgba(0,0,0,0.07)", backgroundColor: "#eef4f8" }}
    >
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "ticker 30s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 shrink-0">
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] px-6" style={{ color: "#94a3b8" }}>
              {item}
            </span>
            <span style={{ color: BLUE, fontSize: "0.35rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Individual overview card ──────────────────────────────────── */
function OverviewCard({ svc, index }) {
  const ref   = useRef(null);
  const inView = useInView(ref);
  const Icon  = svc.icon;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl flex flex-col gap-5 cursor-default ${svc.featured ? "sm:col-span-2" : ""}`}
      style={{
        backgroundColor: LIGHT_CARD,
        border: "1px solid #e2e8f0",
        borderTop: `2px solid ${svc.color}`,
        padding: svc.featured ? "2.25rem" : "1.75rem",
        opacity:   inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(52px)",
        transition: `opacity 0.65s ease ${index * 0.07}s, transform 0.65s ease ${index * 0.07}s`,
        minHeight: svc.featured ? "260px" : "220px",
      }}
    >
      {/* Ghost number */}
      <span
        className="absolute bottom-3 right-5 font-extrabold leading-none select-none pointer-events-none"
        style={{
          fontSize:  "7rem",
          lineHeight: 1,
          color: svc.color === BLUE ? "rgba(9,119,168,0.06)" : "rgba(204,0,102,0.06)",
        }}
      >
        {svc.id}
      </span>

      {/* Header row */}
      <div className="flex items-start justify-between relative z-10">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${svc.color}18` }}
        >
          <Icon size={19} style={{ color: svc.color }} />
        </div>
        <span
          className="text-[9px] font-semibold uppercase tracking-[0.3em] px-3 py-1 rounded-full"
          style={{ color: svc.color, backgroundColor: `${svc.color}12` }}
        >
          {svc.tag}
        </span>
      </div>

      {/* Title + desc */}
      <div className="relative z-10">
        <h3
          className="font-extrabold tracking-tight leading-snug"
          style={{
            color: DARK,
            fontSize: svc.featured ? "clamp(1.5rem, 2.8vw, 2rem)" : "clamp(1rem, 1.8vw, 1.25rem)",
          }}
        >
          {svc.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "#64748b", maxWidth: svc.featured ? "540px" : "none" }}>
          {svc.desc}
        </p>
      </div>

      {/* Deliverables */}
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {svc.items.map((item) => (
          <span
            key={item}
            className="text-[10px] font-medium px-3 py-1 rounded-full"
            style={{
              color: svc.color,
              backgroundColor: `${svc.color}0f`,
              border: `1px solid ${svc.color}28`,
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Hover reveal bottom line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 pointer-events-none"
        style={{ backgroundColor: svc.color }}
      />
    </div>
  );
}

/* ── Overview grid section ─────────────────────────────────────── */
function OverviewSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
      {/* Header */}
      <div
        ref={ref}
        className="mb-14"
        style={{
          opacity:   inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: BLUE }}>
          Everything We Do
        </p>
        <h2
          className="font-extrabold tracking-tight leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
        >
          Nine Ways We Help<br />Your Business Grow
        </h2>
      </div>

      {/* Grid: first card spans 2 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {OVERVIEW.map((svc, i) => (
          <OverviewCard key={svc.id} svc={svc} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ── Sticky deep-dive (light version) ─────────────────────────── */
function StickyServices() {
  const sectionRef = useRef(null);
  const [scrolled, setScrolled] = useState(0);
  const [vh, setVh]             = useState(800);

  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      setScrolled(Math.max(0, -sectionRef.current.getBoundingClientRect().top));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const n        = CORE.length;
  const rawIndex = scrolled / vh;
  const activeIdx = Math.min(n - 1, Math.floor(rawIndex));
  const transP    = activeIdx < n - 1
    ? Math.max(0, Math.min(1, rawIndex - activeIdx)) : 0;

  return (
    <section ref={sectionRef} style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ backgroundColor: "#ffffff" }}>

        {CORE.map((svc, i) => {
          const pinnedTop  = NAV_H + i * ROW_H;
          const expandedH  = vh - pinnedTop;
          let cardH, cardTY, contentOp;

          if (i < activeIdx) {
            cardH = ROW_H; cardTY = 0; contentOp = 0;
          } else if (i === activeIdx) {
            cardH     = expandedH - (expandedH - ROW_H) * transP;
            cardTY    = 0;
            contentOp = Math.max(0, 1 - transP * 2.8);
          } else if (i === activeIdx + 1) {
            cardH     = expandedH;
            cardTY    = expandedH * (1 - transP);
            contentOp = Math.max(0, (transP - 0.35) / 0.65);
          } else {
            cardH = expandedH; cardTY = vh; contentOp = 0;
          }

          const pinned = i < activeIdx;

          return (
            <div
              key={svc.number}
              style={{
                position: "absolute",
                left: 0, right: 0,
                top:    pinnedTop,
                height: cardH,
                zIndex: i + 1,
                overflow: "hidden",
                transform: `translateY(${cardTY}px)`,
                willChange: "height, transform",
                backgroundColor: "#ffffff",
                borderTop: `1px solid rgba(0,0,0,0.07)`,
              }}
            >
              {/* Title row */}
              <div
                className="flex items-center justify-between px-6 sm:px-14 lg:px-24"
                style={{ height: ROW_H }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="rounded-full shrink-0 transition-all duration-300"
                    style={{
                      width:  pinned ? 5 : 9,
                      height: pinned ? 5 : 9,
                      backgroundColor: pinned ? "rgba(0,0,0,0.15)" : svc.accent,
                      boxShadow: pinned ? "none" : `0 0 8px ${svc.accent}80`,
                    }}
                  />
                  <span
                    className="font-mono text-[10px] tracking-widest transition-colors duration-300"
                    style={{ color: pinned ? "rgba(0,0,0,0.25)" : svc.accent }}
                  >
                    {svc.number}
                  </span>
                  <span
                    className="font-semibold tracking-tight transition-all duration-300"
                    style={{
                      fontSize: pinned ? "0.78rem" : "0.95rem",
                      color:    pinned ? "rgba(0,0,0,0.3)" : DARK,
                    }}
                  >
                    {svc.title}
                  </span>
                </div>
                {!pinned && (
                  <span
                    className="hidden sm:inline text-[10px] uppercase tracking-[0.32em] font-medium"
                    style={{ color: svc.accent }}
                  >
                    {svc.tag}
                  </span>
                )}
              </div>

              {/* Expanded content */}
              <div
                className="flex gap-8 lg:gap-20 px-6 sm:px-14 lg:px-24 pt-3 pb-6"
                style={{ height: `calc(100% - ${ROW_H}px)`, opacity: contentOp, overflow: "hidden" }}
              >
                {/* Left: ghost number + progress dots */}
                <div className="hidden sm:flex flex-col justify-between w-28 lg:w-44 shrink-0 py-4">
                  <span
                    className="font-extrabold leading-none select-none"
                    style={{
                      fontSize: "clamp(5rem, 10vw, 9rem)",
                      color: svc.accent === BLUE
                        ? "rgba(9,119,168,0.1)"
                        : "rgba(204,0,102,0.1)",
                    }}
                  >
                    {svc.number}
                  </span>
                  <div className="flex flex-col gap-2">
                    {CORE.map((_, di) => (
                      <div
                        key={di}
                        className="rounded-full transition-all duration-500"
                        style={{
                          height: 3,
                          width:  di === i ? 32 : 7,
                          backgroundColor: di === i
                            ? svc.accent
                            : di < i
                              ? `${svc.accent}28`
                              : "rgba(0,0,0,0.1)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Main content */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h3
                    className="font-extrabold tracking-tighter leading-[0.9]"
                    style={{ fontSize: "clamp(1.8rem, 4.5vw, 4rem)", color: DARK }}
                  >
                    {svc.title}
                  </h3>

                  <div
                    className="mt-4 mb-5 rounded-full"
                    style={{ width: 40, height: 2, backgroundColor: svc.accent }}
                  />

                  <p className="text-sm sm:text-base leading-[1.8] max-w-lg" style={{ color: "#64748b" }}>
                    {svc.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {svc.bullets.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] font-medium tracking-wide px-4 py-2 rounded-full"
                        style={{
                          border: `1px solid ${svc.accent}30`,
                          color:  svc.accent,
                          backgroundColor: `${svc.accent}0e`,
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: decorative geometric */}
                <div className="hidden lg:flex items-center justify-center w-52 xl:w-64 shrink-0">
                  <div className="relative w-44 h-44 xl:w-56 xl:h-56">
                    {/* Outer square */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{ border: `1px solid ${svc.accent}22` }}
                    />
                    {/* Mid square rotated */}
                    <div
                      className="absolute inset-6 rounded-xl"
                      style={{
                        border: `1px solid ${svc.accent}18`,
                        transform: "rotate(12deg)",
                      }}
                    />
                    {/* Inner square */}
                    <div
                      className="absolute inset-12 rounded-lg"
                      style={{
                        border: `1px solid ${svc.accent}28`,
                        transform: "rotate(24deg)",
                      }}
                    />
                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: svc.accent,
                          boxShadow: `0 0 16px ${svc.accent}`,
                        }}
                      />
                    </div>
                    {/* Number watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span
                        className="font-extrabold"
                        style={{
                          fontSize: "5rem",
                          color: `${svc.accent}0d`,
                        }}
                      >
                        {svc.number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Sticky section label ──────────────────────────────────────── */
function SectionLabel() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto px-6 sm:px-14 lg:px-24 pt-20 pb-10"
      style={{
        opacity:   inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: BLUE }}>
        Core Process
      </p>
      <h2
        className="font-extrabold tracking-tight"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
      >
        How We Work
      </h2>
      <p className="mt-3 text-sm max-w-md leading-relaxed" style={{ color: "#94a3b8" }}>
        Scroll through our five-step process — strategy to delivery.
      </p>
    </div>
  );
}

/* ── Lead capture popup ────────────────────────────────────────── */
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
          boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(9,119,168,0.1)",
        }}
      >
        {/* Glow accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)` }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors"
        >
          <X size={15} />
        </button>

        {!sent ? (
          <>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(9,119,168,0.18)" }}
            >
              <Phone size={17} style={{ color: BLUE }} />
            </div>

            <h3 className="text-white font-bold text-[0.95rem] mb-1.5">
              You want the services.
            </h3>
            <p className="text-white/45 text-xs leading-relaxed mb-5">
              We&apos;re ready to serve you. Share your number and we&apos;ll contact you as soon as possible.
            </p>

            <div className="flex gap-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && phone && setSent(true)}
                placeholder="+91 00000 00000"
                className="flex-1 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onFocus={e => e.target.style.borderColor = BLUE}
                onBlur={e  => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
              <button
                onClick={() => phone && setSent(true)}
                className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90 shrink-0"
                style={{ backgroundColor: BLUE }}
              >
                Call Me
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "rgba(9,119,168,0.18)" }}
            >
              <Phone size={20} style={{ color: BLUE }} />
            </div>
            <h3 className="text-white font-bold mb-1.5">We&apos;ll call you soon!</h3>
            <p className="text-white/45 text-xs leading-relaxed">
              Our team will reach out within a few hours. Get ready to grow.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main page component ───────────────────────────────────────── */
export default function ServicesPage() {
  const [mounted,      setMounted]      = useState(false);
  const [showPopup,    setShowPopup]    = useState(false);
  const dismissedRef                    = useRef(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissedRef.current) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && window.scrollY / total > 0.38) {
        setShowPopup(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setShowPopup(false);
    dismissedRef.current = true;
  };

  return (
    <main style={{ backgroundColor: "#ffffff" }}>

      <Hero mounted={mounted} />
      <Ticker />
      <OverviewSection />
      <SectionLabel />
      <StickyServices />

      {/* Bottom breathing room before footer */}
      <div style={{ height: "80px" }} />

      {/* Lead popup */}
      {showPopup && <LeadPopup onClose={handleDismiss} />}

      {/* Global keyframes */}
      <style>{`
        @keyframes nudge {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes popupIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </main>
  );
}
