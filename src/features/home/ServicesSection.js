"use client";

import { useEffect, useRef, useState } from "react";

const PINK   = "#cc0066";
const BLUE   = "#0977a8";
const DARK   = "#0d1b2e";
const ROW_H  = 60; // px — height of each pinned title row
const NAV_H  = 88; // px — navbar height offset

const services = [
  {
    number: "01",
    title: "Strategy",
    tag: "Business Planning",
    description:
      "We help you make the right plan for your brand and business growth.",
    bullets: ["Research", "Competitor Check", "Growth Plan"],
    accent: PINK,
  },
  {
    number: "02",
    title: "Branding",
    tag: "Brand Identity",
    description:
      "We create a brand look and style that makes your business stand out.",
    bullets: ["Logo", "Brand Style", "Brand Voice"],
    accent: BLUE,
  },
  {
    number: "03",
    title: "Content",
    tag: "Words & Design",
    description:
      "We create clear and engaging content for your brand.",
    bullets: ["Writing", "Visual Design", "Motion Graphics"],
    accent: PINK,
  },
  {
    number: "04",
    title: "Website Design",
    tag: "Easy User Experience",
    description:
      "We design websites and apps that look great and are easy to use.",
    bullets: ["Design", "User Research", "Prototype"],
    accent: BLUE,
  },
  {
    number: "05",
    title: "Development",
    tag: "Website Building",
    description:
      "We build modern websites that are fast, smooth, and reliable.",
    bullets: ["Frontend", "CMS Setup", "Performance"],
    accent: PINK,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [scrolled, setScrolled]   = useState(0);
  const [vh, setVh]               = useState(800);

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

  const n          = services.length;
  const rawIndex   = scrolled / vh;
  const activeIdx  = Math.min(n - 1, Math.floor(rawIndex));
  // Stop transitioning after last card so it stays expanded
  const transP     = activeIdx < n - 1
    ? Math.max(0, Math.min(1, rawIndex - activeIdx))
    : 0;

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ height: `${n * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">

        {services.map((svc, i) => {
          /*
           * Each card's "base" top is always (i * ROW_H).
           * When pinned:   height = ROW_H        (only title row visible)
           * When expanded: height = vh - i*ROW_H (full content visible)
           *
           * Active card shrinks → next card slides up from below.
           * The bottom of the active card and top of the next card
           * are mathematically equal throughout the transition.
           */
          const pinnedTop  = NAV_H + i * ROW_H;
          const expandedH  = vh - pinnedTop;

          let cardH, cardTY, contentOp;

          if (i < activeIdx) {
            // Fully pinned — only title row shown
            cardH       = ROW_H;
            cardTY      = 0;
            contentOp   = 0;
          } else if (i === activeIdx) {
            // Active — shrinks to ROW_H as transP → 1
            cardH       = expandedH - (expandedH - ROW_H) * transP;
            cardTY      = 0;
            contentOp   = Math.max(0, 1 - transP * 2.8);
          } else if (i === activeIdx + 1) {
            // Next — slides up from bottom of viewport
            cardH       = expandedH;
            cardTY      = expandedH * (1 - transP);
            contentOp   = Math.max(0, (transP - 0.35) / 0.65);
          } else {
            // Not yet visible
            cardH       = expandedH;
            cardTY      = vh;
            contentOp   = 0;
          }

          const pinned = i < activeIdx;

          return (
            <div
              key={svc.number}
              style={{
                position:        "absolute",
                left:            0,
                right:           0,
                top:             pinnedTop,
                height:          cardH,
                zIndex:          i + 1,
                overflow:        "hidden",
                transform:       `translateY(${cardTY}px)`,
                willChange:      "height, transform",
                backgroundColor: "#ffffff",
                borderTop:       "1px solid #f1f5f9",
              }}
            >
              {/* ── Title row (always visible) ──────────────────── */}
              <div
                className="flex items-center justify-between px-6 sm:px-14 lg:px-24"
                style={{ height: ROW_H, flexShrink: 0 }}
              >
                <div className="flex items-center gap-4">
                  {/* Accent dot */}
                  <span
                    className="rounded-full shrink-0 transition-all duration-300"
                    style={{
                      width:           pinned ? 5 : 7,
                      height:          pinned ? 5 : 7,
                      backgroundColor: pinned ? "#d1d5db" : svc.accent,
                    }}
                  />
                  <span
                    className="font-mono text-[10px] tracking-widest"
                    style={{ color: pinned ? "#d1d5db" : svc.accent }}
                  >
                    {svc.number}
                  </span>
                  <span
                    className="font-semibold transition-colors duration-300"
                    style={{
                      fontSize: pinned ? "0.78rem" : "0.9rem",
                      color:    pinned ? "#b0b7c3" : DARK,
                    }}
                  >
                    {svc.title}
                  </span>
                </div>

                {!pinned && (
                  <span
                    className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] font-medium"
                    style={{ color: svc.accent }}
                  >
                    {svc.tag}
                  </span>
                )}
              </div>

              {/* ── Expanded content ────────────────────────────── */}
              <div
                className="flex gap-8 lg:gap-16 px-6 sm:px-14 lg:px-24 pt-2 pb-10"
                style={{
                  height:   `calc(100% - ${ROW_H}px)`,
                  opacity:  contentOp,
                  overflow: "hidden",
                }}
              >
                {/* Left: ghost number + progress */}
                <div className="hidden sm:flex flex-col justify-between w-24 lg:w-36 shrink-0 py-4">
                  {/* Ghost number */}
                  <span
                    className="font-extrabold leading-none select-none"
                    style={{
                      fontSize:   "clamp(4rem, 7vw, 6.5rem)",
                      lineHeight: 1,
                      color:      svc.accent === PINK
                        ? "rgba(204,0,102,0.07)"
                        : "rgba(9,119,168,0.07)",
                    }}
                  >
                    {svc.number}
                  </span>

                  {/* Step pills */}
                  <div className="flex flex-col gap-1.5">
                    {services.map((_, di) => (
                      <div
                        key={di}
                        className="rounded-full transition-all duration-500"
                        style={{
                          height:          3,
                          width:           di === i ? 26 : 5,
                          backgroundColor: di === i
                            ? svc.accent
                            : di < i
                              ? `${svc.accent}28`
                              : "#e5e7eb",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: main content */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h3
                    className="font-extrabold tracking-tight leading-[0.88]"
                    style={{
                      fontSize: "clamp(2.2rem, 6vw, 5rem)",
                      color:    DARK,
                    }}
                  >
                    {svc.title}
                  </h3>

                  <div
                    className="mt-5 mb-5 w-8 h-px rounded-full"
                    style={{ backgroundColor: svc.accent }}
                  />

                  <p
                    className="text-sm sm:text-base leading-relaxed max-w-md"
                    style={{ color: "#6b7280" }}
                  >
                    {svc.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {svc.bullets.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] font-medium tracking-wide px-4 py-1.5 rounded-full"
                        style={{
                          border:          `1px solid ${svc.accent}22`,
                          color:           svc.accent,
                          backgroundColor: `${svc.accent}07`,
                        }}
                      >
                        {b}
                      </span>
                    ))}
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
