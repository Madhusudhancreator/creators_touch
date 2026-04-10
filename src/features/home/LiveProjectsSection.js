"use client";

import { useRef, useState, useEffect } from "react";

const PINK = "#cc0066";
const BLUE = "#0977a8";
const DARK = "#0d1b2e";

const PROJECTS = [
  {
    name:     "Trust Hospital",
    url:      "https://www.trusthospital.com/",
    domain:   "trusthospital.com",
    category: "Healthcare",
    desc:     "Full hospital website with patient information, specialist listings, and appointment booking.",
    accent:   BLUE,     
  },
  {
    name:     "Anjaneya Jewellery",
    url:      "https://www.anjaneyajewellery.com/",
    domain:   "anjaneyajewellery.com",
    category: "Jewellery & Luxury",
    desc:     "High-end jewellery showcase with collection pages, custom order enquiry, and lookbook.",
    accent:   PINK,
  },
  {
    name:     "Change NGO",
    url:      "https://change.ngo/",
    domain:   "change.ngo",
    category: "Non-profit",
    desc:     "Impact-driven NGO website with donation flows, volunteer portal, and campaign microsites.",
    accent:   BLUE,
  },
  {
    name:     "Dr. Matla",
    url:      "https://drmatla.com",
    domain:   "drmatla.com",
    category: "Healthcare",
    desc:     "Personal medical practice site featuring doctor profile, specialisations, and online consultation.",
    accent:   PINK,
  },
  {
    name:     "Lot Mobiles",
    url:      "https://www.lotmobiles.com/",
    domain:   "lotmobiles.com",
    category: "E-commerce & Retail",
    desc:     "Large-scale mobile retail platform with product catalogue, comparison tools, and store locator.",
    accent:   BLUE,
  },
  {
    name:     "St. Paul's School VJA",
    url:      "https://www.stpaulsschoolvja.com",
    domain:   "stpaulsschoolvja.com",
    category: "Education",
    desc:     "School website with admissions portal, academic calendar, faculty pages, and event gallery.",
    accent:   PINK,
  },
];

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

export default function LiveProjectsSection() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, 0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="live-projects"
      ref={sectionRef}
      style={{ backgroundColor: DARK }}
      className="relative overflow-hidden py-20 px-6 sm:px-12 lg:px-20"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-14"
          style={{
            opacity:   inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.38em] font-semibold mb-3"
            style={{ color: PINK }}
          >
            Live Websites
          </p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              className="font-extrabold tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#ffffff" }}
            >
              Websites We&apos;ve<br />Built &amp; Launched
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              Real projects, live on the web — click any card to visit the site.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => {
            const isHovered = hovered === i;
            const delay     = `${0.1 + i * 0.09}s`;
            return (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display:         "flex",
                  flexDirection:   "column",
                  gap:             "14px",
                  padding:         "24px",
                  borderRadius:    "12px",
                  border:          `1px solid ${isHovered ? p.accent : "rgba(255,255,255,0.08)"}`,
                  background:      isHovered
                    ? `linear-gradient(135deg, rgba(${p.accent === PINK ? "204,0,102" : "9,119,168"},0.12) 0%, rgba(13,27,46,0.6) 100%)`
                    : "rgba(255,255,255,0.03)",
                  transition:      "border 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                  transform:       isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow:       isHovered ? `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${p.accent}33` : "none",
                  textDecoration:  "none",
                  cursor:          "pointer",
                  opacity:         inView ? 1 : 0,
                  translate:       inView ? "none" : "0 32px",
                  transitionDelay: inView ? delay : "0s",
                }}
              >
                {/* Top row: favicon + category badge */}
                <div className="flex items-center justify-between">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=64`}
                    alt={`${p.name} favicon`}
                    width={32}
                    height={32}
                    style={{ borderRadius: "6px" }}
                  />
                  <span
                    style={{
                      fontSize:        "9px",
                      letterSpacing:   "0.2em",
                      textTransform:   "uppercase",
                      fontWeight:      600,
                      padding:         "3px 10px",
                      borderRadius:    "999px",
                      border:          `1px solid ${p.accent}55`,
                      color:           p.accent,
                      background:      `${p.accent}11`,
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Site name */}
                <h3
                  style={{
                    fontSize:   "clamp(1rem, 2vw, 1.2rem)",
                    fontWeight: 700,
                    color:      "#ffffff",
                    lineHeight: 1.2,
                    margin:     0,
                  }}
                >
                  {p.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize:   "13px",
                    lineHeight: 1.65,
                    color:      "rgba(255,255,255,0.45)",
                    margin:     0,
                    flexGrow:   1,
                  }}
                >
                  {p.desc}
                </p>

                {/* URL + arrow */}
                <div
                  className="flex items-center gap-2"
                  style={{
                    fontSize:    "11px",
                    fontWeight:  500,
                    color:       isHovered ? p.accent : "rgba(255,255,255,0.3)",
                    transition:  "color 0.25s ease",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span>{p.domain}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform:  isHovered ? "translate(2px,-2px)" : "translate(0,0)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom note */}
        <p
          className="mt-10 text-center text-[11px] tracking-widest uppercase"
          style={{
            color:      "rgba(255,255,255,0.18)",
            opacity:    inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.7s",
          }}
        >
          All sites designed &amp; developed by Creators Touch
        </p>
      </div>
    </section>
  );
}
