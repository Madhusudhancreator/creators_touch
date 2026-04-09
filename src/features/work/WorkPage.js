"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";

/* ── Brand tokens ───────────────────────────────────────────────── */
const BLUE = "#0977a8";
const PINK = "#cc0066";
const DARK = "#0d1b2e";

/* ── Project data ───────────────────────────────────────────────── */
const PROJECTS = [
  {
    name:     "Trust Hospital",
    url:      "https://www.trusthospital.com/",
    domain:   "trusthospital.com",
    category: "Healthcare",
    tag:      "Website Design",
    year:     "2023",
    desc:     "A full-featured hospital website covering patient information, specialist profiles, department pages, and an appointment booking flow — built to establish trust and drive conversions.",
    services: ["Website Design", "UI/UX", "SEO"],
    accent:   BLUE,
    gradient: "linear-gradient(135deg,#0977a820,#0977a805)",
  },
  {
    name:     "Anjaneya Jewellery",
    url:      "https://www.anjaneyajewellery.com/",
    domain:   "anjaneyajewellery.com",
    category: "Jewellery & Luxury",
    tag:      "E-commerce",
    year:     "2023",
    desc:     "A high-end jewellery showcase with curated collection pages, custom order enquiry, a photo lookbook, and certification details — designed to reflect premium brand positioning.",
    services: ["E-commerce", "Brand Design", "Photography"],
    accent:   PINK,
    gradient: "linear-gradient(135deg,#cc006620,#cc006605)",
  },
  {
    name:     "Change NGO",
    url:      "https://change.ngo/",
    domain:   "change.ngo",
    category: "Non-profit",
    tag:      "Campaign Site",
    year:     "2024",
    desc:     "An impact-driven NGO platform with donation funnels, volunteer registration, campaign microsites, and impact reporting dashboards — built to inspire action and drive giving.",
    services: ["Website Design", "Digital Marketing", "Strategy"],
    accent:   BLUE,
    gradient: "linear-gradient(135deg,#0977a820,#0977a805)",
  },
  {
    name:     "Dr. Matla",
    url:      "https://drmatla.com",
    domain:   "drmatla.com",
    category: "Healthcare",
    tag:      "Personal Brand",
    year:     "2024",
    desc:     "A personal medical practice website featuring doctor profile, areas of specialisation, patient testimonials, and an online consultation booking system.",
    services: ["Website Design", "Personal Branding", "SEO"],
    accent:   PINK,
    gradient: "linear-gradient(135deg,#cc006620,#cc006605)",
  },
  {
    name:     "Lot Mobiles",
    url:      "https://www.lotmobiles.com/",
    domain:   "lotmobiles.com",
    category: "E-commerce",
    tag:      "Retail Platform",
    year:     "2023",
    desc:     "A large-scale mobile retail platform with an extensive product catalogue, device comparison tools, EMI calculators, and a store locator — built for scale and conversions.",
    services: ["E-commerce", "App Development", "Digital Marketing"],
    accent:   BLUE,
    gradient: "linear-gradient(135deg,#0977a820,#0977a805)",
  },
  {
    name:     "St. Paul's School VJA",
    url:      "https://www.stpaulsschoolvja.com",
    domain:   "stpaulsschoolvja.com",
    category: "Education",
    tag:      "Institution Site",
    year:     "2024",
    desc:     "A comprehensive school website with an admissions portal, academic calendar, faculty directory, event gallery, and an online fee payment module.",
    services: ["Website Design", "Portal Development", "SEO"],
    accent:   PINK,
    gradient: "linear-gradient(135deg,#cc006620,#cc006605)",
  },
];

const FILTERS = ["All", "Healthcare", "E-commerce", "Jewellery & Luxury", "Non-profit", "Education"];

/* ── Intersection-observer hook ─────────────────────────────────── */
function useInView(ref, threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* ── Project card ───────────────────────────────────────────────── */
function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        opacity:         visible ? 1 : 0,
        transform:       visible ? "translateY(0)" : "translateY(36px)",
        transition:      `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
        display:         "flex",
        flexDirection:   "column",
        borderRadius:    "16px",
        overflow:        "hidden",
        border:          `1px solid ${hovered ? project.accent + "55" : "rgba(0,0,0,0.07)"}`,
        background:      "#fff",
        boxShadow:       hovered
          ? `0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px ${project.accent}22`
          : "0 2px 16px rgba(0,0,0,0.06)",
        transition:      `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.3s ease, border 0.3s ease`,
        cursor:          "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview area */}
      <div
        style={{
          height:         "180px",
          background:     project.gradient,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        "24px",
          position:       "relative",
          overflow:       "hidden",
        }}
      >
        {/* Large faded domain text */}
        <span
          aria-hidden
          style={{
            position:      "absolute",
            bottom:        "-8px",
            right:         "16px",
            fontSize:      "clamp(2rem, 5vw, 3.5rem)",
            fontWeight:    900,
            letterSpacing: "-0.04em",
            color:         project.accent + "12",
            whiteSpace:    "nowrap",
            userSelect:    "none",
            lineHeight:    1,
          }}
        >
          {project.name}
        </span>

        {/* Favicon + year */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", zIndex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://www.google.com/s2/favicons?domain=${project.domain}&sz=64`}
            alt=""
            width={44}
            height={44}
            style={{ borderRadius: "10px", background: "#fff", padding: "6px", boxShadow: "0 2px 12px rgba(0,0,0,0.12)" }}
          />
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: project.accent, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>
              {project.tag}
            </p>
            <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.38)", margin: "2px 0 0" }}>{project.year}</p>
          </div>
        </div>

        {/* Visit button — shown on hover */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            zIndex:         1,
            display:        "flex",
            alignItems:     "center",
            gap:            "6px",
            padding:        "8px 16px",
            borderRadius:   "999px",
            background:     project.accent,
            color:          "#fff",
            fontSize:       "12px",
            fontWeight:     600,
            textDecoration: "none",
            opacity:        hovered ? 1 : 0,
            transform:      hovered ? "scale(1) translateY(0)" : "scale(0.9) translateY(4px)",
            transition:     "opacity 0.25s ease, transform 0.25s ease",
            whiteSpace:     "nowrap",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          Visit Site <ExternalLink size={12} />
        </a>
      </div>

      {/* Card body */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
        {/* Category pill */}
        <span style={{
          alignSelf:     "flex-start",
          fontSize:      "9px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight:    600,
          padding:       "3px 10px",
          borderRadius:  "999px",
          border:        `1px solid ${project.accent}44`,
          color:         project.accent,
          background:    project.accent + "0e",
        }}>
          {project.category}
        </span>

        {/* Title */}
        <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: DARK, margin: 0, lineHeight: 1.2 }}>
          {project.name}
        </h3>

        {/* Description */}
        <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#64748b", margin: 0, flexGrow: 1 }}>
          {project.desc}
        </p>

        {/* Services tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {project.services.map((s) => (
            <span key={s} style={{
              fontSize:      "10px",
              fontWeight:    500,
              padding:       "3px 9px",
              borderRadius:  "6px",
              background:    "#f1f5f9",
              color:         "#475569",
              letterSpacing: "0.02em",
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* Bottom link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:        "flex",
            alignItems:     "center",
            gap:            "6px",
            marginTop:      "8px",
            fontSize:       "12px",
            fontWeight:     600,
            color:          hovered ? project.accent : "#94a3b8",
            textDecoration: "none",
            transition:     "color 0.25s ease",
            letterSpacing:  "0.04em",
          }}
        >
          {project.domain}
          <ArrowUpRight
            size={13}
            style={{
              transform:  hovered ? "translate(2px,-2px)" : "translate(0,0)",
              transition: "transform 0.25s ease",
            }}
          />
        </a>
      </div>
    </div>
  );
}

/* ── Main page ──────────────────────────────────────────────────── */
export default function WorkPage() {
  const heroRef    = useRef(null);
  const gridRef    = useRef(null);
  const ctaRef     = useRef(null);
  const heroVis    = useInView(heroRef,  0.1);
  const gridVis    = useInView(gridRef,  0.05);
  const ctaVis     = useInView(ctaRef,   0.2);
  const [filter, setFilter] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          background:     DARK,
          minHeight:      "480px",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          textAlign:      "center",
          padding:        "100px 24px 80px",
          position:       "relative",
          overflow:       "hidden",
        }}
      >
        {/* grid overlay */}
        <div aria-hidden style={{
          position:        "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize:  "48px 48px",
        }} />

        {/* Pink glow blob */}
        <div aria-hidden style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translateX(-50%)",
          width: "600px", height: "300px",
          background: `radial-gradient(ellipse at center, ${PINK}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
          <p
            style={{
              fontSize:    "10px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              fontWeight:  600,
              color:       PINK,
              marginBottom: "16px",
              opacity:     heroVis ? 1 : 0,
              transform:   heroVis ? "translateY(0)" : "translateY(16px)",
              transition:  "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            Our Portfolio
          </p>

          <h1
            style={{
              fontSize:    "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight:  900,
              color:       "#fff",
              lineHeight:  0.92,
              letterSpacing: "-0.02em",
              margin:      0,
              opacity:     heroVis ? 1 : 0,
              transform:   heroVis ? "translateY(0)" : "translateY(24px)",
              transition:  "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            Work We&apos;re<br />
            <span style={{ color: PINK }}>Proud Of</span>
          </h1>

          <p
            style={{
              marginTop:  "24px",
              fontSize:   "16px",
              lineHeight: 1.7,
              color:      "rgba(255,255,255,0.5)",
              maxWidth:   "520px",
              marginInline: "auto",
              opacity:    heroVis ? 1 : 0,
              transform:  heroVis ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            Real websites, live on the web — built and launched by the Creators Touch team for clients across India.
          </p>

          {/* Stats row */}
          <div
            style={{
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              gap:             "40px",
              marginTop:       "44px",
              flexWrap:        "wrap",
              opacity:         heroVis ? 1 : 0,
              transform:       heroVis ? "translateY(0)" : "translateY(20px)",
              transition:      "opacity 0.6s ease 0.32s, transform 0.6s ease 0.32s",
            }}
          >
            {[
              { value: "6+",   label: "Live Sites" },
              { value: "12+",  label: "Years Building" },
              { value: "100+", label: "Happy Clients" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1 }}>
                  {value}
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters + Grid ──────────────────────────────────────── */}
      <section
        ref={gridRef}
        style={{ background: "#f8f9fc", padding: "72px 24px 80px" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Filter tabs */}
          <div
            style={{
              display:         "flex",
              flexWrap:        "wrap",
              gap:             "8px",
              marginBottom:    "48px",
              opacity:         gridVis ? 1 : 0,
              transform:       gridVis ? "translateY(0)" : "translateY(20px)",
              transition:      "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding:        "8px 18px",
                    borderRadius:   "999px",
                    border:         `1px solid ${active ? BLUE : "rgba(0,0,0,0.1)"}`,
                    background:     active ? BLUE : "#fff",
                    color:          active ? "#fff" : "#475569",
                    fontSize:       "12px",
                    fontWeight:     600,
                    cursor:         "pointer",
                    transition:     "all 0.2s ease",
                    letterSpacing:  "0.04em",
                  }}
                >
                  {f}
                  {f === "All" && (
                    <span style={{
                      marginLeft: "6px",
                      background: active ? "rgba(255,255,255,0.25)" : "#e2e8f0",
                      color:      active ? "#fff" : "#64748b",
                      fontSize:   "10px",
                      fontWeight: 700,
                      padding:    "1px 6px",
                      borderRadius: "999px",
                    }}>
                      {PROJECTS.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div
            style={{
              display:               "grid",
              gridTemplateColumns:   "repeat(auto-fill, minmax(340px, 1fr))",
              gap:                   "24px",
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.domain}
                project={project}
                index={i}
                visible={gridVis && mounted}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "#94a3b8", padding: "60px 0", fontSize: "15px" }}>
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        style={{
          background: DARK,
          padding:    "80px 24px",
          textAlign:  "center",
        }}
      >
        <div
          style={{
            maxWidth:   "600px",
            margin:     "0 auto",
            opacity:    ctaVis ? 1 : 0,
            transform:  ctaVis ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p style={{ fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase", fontWeight: 600, color: PINK, marginBottom: "14px" }}>
            Start a Project
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
            Want a site like these?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "36px" }}>
            We design and build websites that look great, load fast, and turn visitors into customers. Let&apos;s talk about your project.
          </p>
          <Link
            href="/contact"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              background:     PINK,
              color:          "#fff",
              padding:        "14px 32px",
              borderRadius:   "999px",
              fontSize:       "14px",
              fontWeight:     700,
              textDecoration: "none",
              letterSpacing:  "0.04em",
              transition:     "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get a Proposal <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
