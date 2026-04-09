"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  GraduationCap, HeartPulse, Building2, ShoppingBag,
  UtensilsCrossed, BedDouble, Landmark, Gem, HardHat, ArrowRight,
} from "lucide-react";

/* ── Brand tokens ──────────────────────────────────────────────── */
const BLUE = "#0977a8";
const DARK = "#0d1b2e";

/* ── Industries data ───────────────────────────────────────────── */
const INDUSTRIES = [
  {
    id: "01",
    name: "Education",
    tag: "Schools · Colleges · Ed-Tech",
    desc: "We help educational institutions attract the right students, build institutional trust, and grow enrolment through purpose-driven campaigns and a strong digital presence.",
    points: ["Admissions Marketing", "Social Media", "Website Design"],
    icon: GraduationCap,
    from: "#0977a8",
    to:   "#0553a1",
    img:  "/assets/industry/in%201.png",
  },
  {
    id: "02",
    name: "Healthcare",
    tag: "Clinics · Hospitals · Wellness",
    desc: "From single clinics to multi-specialty hospitals, we build credible healthcare brands that communicate care, competence, and compassion at every digital touchpoint.",
    points: ["Patient Acquisition", "Brand Identity", "Digital Marketing"],
    icon: HeartPulse,
    from: "#059669",
    to:   "#0369a1",
    img:  "/assets/industry/in%202.png",
  },
  {
    id: "03",
    name: "Real Estate",
    tag: "Builders · Agencies · Projects",
    desc: "We build high-converting digital experiences for builders and real estate agencies — from project launch campaigns to ongoing qualified lead generation.",
    points: ["Project Launches", "Lead Generation", "Visual Content"],
    icon: Building2,
    from: "#d97706",
    to:   "#b45309",
    img:  "/assets/industry/in%203.png",
  },
  {
    id: "04",
    name: "Retail & Malls",
    tag: "Stores · Malls · E-Commerce",
    desc: "Whether you're a standalone store or a major shopping destination, we create campaigns that drive footfall, boost repeat visits, and build long-term brand loyalty.",
    points: ["Footfall Campaigns", "Social Content", "Seasonal Promotions"],
    icon: ShoppingBag,
    from: "#e11d48",
    to:   "#9f1239",
    img:  "/assets/industry/in%204.png",
  },
  {
    id: "05",
    name: "Food & Beverage",
    tag: "Restaurants · Cafés · Brands",
    desc: "We make food brands impossible to scroll past — stunning photography, social-first storytelling, and branding that communicates taste and atmosphere in a single glance.",
    points: ["Food Photography", "Instagram Growth", "Brand Identity"],
    icon: UtensilsCrossed,
    from: "#16a34a",
    to:   "#065f46",
    img:  "/assets/industry/in%205.png",
  },
  {
    id: "06",
    name: "Hospitality",
    tag: "Hotels · Resorts · Venues",
    desc: "We craft hospitality brands that make guests want to book before they've even arrived — through immersive visuals, SEO, and experience-led storytelling.",
    points: ["Booking Campaigns", "Video Production", "Website Design"],
    icon: BedDouble,
    from: "#ea580c",
    to:   "#c2410c",
    img:  "/assets/industry/in%207.png",
  },
  {
    id: "07",  
    name: "Jewellery",
    tag: "Jewellers · Designers · Brands",
    desc: "We bring the craftsmanship of your pieces to life digitally — high-end product photography, refined brand identity, and curated social content that conveys real luxury.",
    points: ["Product Photography", "Brand Identity", "Social Media"],
    icon: Gem,
    from: "#7c3aed",
    to:   "#5b21b6",
    img:  "/assets/industry/in%206.png",
  },
  {
    id: "08",
    name: "Construction",
    tag: "Contractors · Developers · Firms",
    desc: "We help construction and infrastructure firms communicate their scale, quality, and reliability — turning complex projects into compelling, trust-building brand stories.",
    points: ["Corporate Branding", "Project Showcases", "Lead Generation"],
    icon: HardHat,
    from: "#78716c",
    to:   "#44403c",
    img:  "/assets/industry/in%208.png",
  },
  {
    id: "09",
    name: "Politics & Government",
    tag: "Campaigns · Govt. Bodies · NGOs",
    desc: "From election campaigns to public awareness drives, we craft communications that connect authentically with communities and inspire action at scale.",
    points: ["Campaign Strategy", "Social Media", "Video Production"],
    icon: Landmark,
    from: "#334155",
    to:   "#1e3a5f",
    img:  "/assets/industry/in%209.png",
  },
];

/* ── useInView ─────────────────────────────────────────────────── */
function useInView(ref, threshold = 0.1) {
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
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-36 pb-28"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% -5%, rgba(9,119,168,0.1) 0%, transparent 65%), #f0f8fc`,
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.032) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <p
          className="text-xs uppercase tracking-[0.45em] font-semibold mb-6"
          style={{
            color: BLUE,
            opacity:    mounted ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          Industries We Serve
        </p>

        {/* Headline */}
        <h1
          className="font-extrabold tracking-tight leading-[1.0] mb-6"
          style={{
            fontSize:   "clamp(3rem, 9vw, 7rem)",
            color:      DARK,
            opacity:    mounted ? 1 : 0,
            transform:  mounted ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          Your industry.<br />Our expertise.
        </h1>

        {/* Subtext */}
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          style={{
            color:      "#64748b",
            opacity:    mounted ? 1 : 0,
            transform:  mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
        >
          We&apos;ve worked across nine sectors, understood their unique challenges,
          and built creative strategies that make brands within them grow.
        </p>

        {/* Industry count pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mt-10"
          style={{
            opacity:    mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.65s",
          }}
        >
          {INDUSTRIES.map((ind) => (
            <span
              key={ind.id}
              className="text-[11px] font-medium px-4 py-1.5 rounded-full"
              style={{
                color:           DARK,
                backgroundColor: "rgba(255,255,255,0.8)",
                border:          "1px solid rgba(0,0,0,0.1)",
              }}
            >
              {ind.name}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
      />
    </section>
  );
}

/* ── Single industry row ───────────────────────────────────────── */
function IndustryRow({ industry, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref);
  const isLeft = index % 2 === 0;   // gradient panel on left for even rows
  const Icon   = industry.icon;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(44px)",
        transition: `opacity 0.7s ease ${index * 0.04}s, transform 0.7s ease ${index * 0.04}s`,
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      {/* ── Gradient / visual panel ── */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${!isLeft ? "lg:order-2" : ""}`}
        style={{ minHeight: "420px" }}
      >
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={industry.img}
          alt={industry.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient colour overlay — tints the photo with the industry colour */}
        <div
          className="absolute inset-0"
          // style={{
          //   background: `linear-gradient(135deg, ${industry.from}d6 0%, ${industry.to}d6 100%)`,
          // }}
        />

        {/* Radial glow overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 60%)",
          }}
        />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize:  "28px 28px",
          }}
        />

        {/* Icon card */}
        {/* <div className="relative z-10 flex flex-col items-center gap-5 px-8 text-center">
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center"
            style={{
              background:    "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              border:        "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <Icon size={40} className="text-white" />
          </div>
          <p className="text-white/70 text-xs font-semibold uppercase tracking-[0.32em]">
            {industry.tag}
          </p>
        </div> */}

        {/* Ghost industry number */}
        <span
          className="absolute bottom-3 right-5 font-extrabold leading-none select-none pointer-events-none text-white/10"
          style={{ fontSize: "7rem" }}
        >
          {industry.id}
        </span>
      </div>

      {/* ── Text panel ── */}
      <div
        className={`flex flex-col justify-center px-10 sm:px-16 py-14 bg-white ${!isLeft ? "lg:order-1" : ""}`}
      >
        {/* Number + eyebrow */}
        <p
          className="text-[10px] uppercase tracking-[0.42em] font-semibold mb-4"
          style={{ color: industry.from }}
        >
          {industry.id} &nbsp;/&nbsp; Industry
        </p>

        {/* Name */}
        <h2
          className="font-extrabold tracking-tight leading-tight mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: DARK }}
        >
          {industry.name}
        </h2>

        {/* Description */}
        <p
          className="text-base leading-[1.8] mb-8"
          style={{ color: "#64748b", maxWidth: "420px" }}
        >
          {industry.desc}
        </p>

        {/* Service pills */}
        <div className="flex flex-wrap gap-2">
          {industry.points.map((p) => (
            <span
              key={p}
              className="text-xs font-medium px-4 py-2 rounded-full"
              style={{
                color:           industry.from,
                backgroundColor: `${industry.from}10`,
                border:          `1px solid ${industry.from}28`,
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Bottom CTA ────────────────────────────────────────────────── */
function CtaSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      className="py-28 px-6 text-center"
      style={{
        backgroundColor: "#f8fafc",
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p
        className="text-xs uppercase tracking-[0.42em] font-semibold mb-4"
        style={{ color: BLUE }}
      >
        Get Started
      </p>

      <h2
        className="font-extrabold tracking-tight mb-5"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
      >
        Don&apos;t see your industry?
      </h2>

      <p
        className="text-base leading-relaxed max-w-md mx-auto mb-10"
        style={{ color: "#64748b" }}
      >
        We work with businesses of all types and sizes. If your sector isn&apos;t listed above,
        reach out — we&apos;ve likely worked with something very similar.
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-sm font-bold text-white px-9 py-4 rounded-full transition-opacity hover:opacity-90"
        style={{ backgroundColor: BLUE }}
      >
        Talk to Us <ArrowRight size={15} />
      </Link>
    </section>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function IndustriesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main style={{ backgroundColor: "#ffffff" }}>

      <Hero mounted={mounted} />

      {/* Industry rows — full width, alternating */}
      <section>
        {INDUSTRIES.map((ind, i) => (
          <IndustryRow key={ind.id} industry={ind} index={i} />
        ))}
      </section>

      <CtaSection />

    </main>
  );
}
