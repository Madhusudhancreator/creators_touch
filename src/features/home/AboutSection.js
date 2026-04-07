"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_DATA = {
  tagline: "We make websites simple, smart, and attractive.",
  words:   ["We create beautiful", "websites worldwide"],
  body:    "We help your brand look better and connect with people.",
  stats: [
    { label: "Live Touch", sub: "Real-time creative impact" },
    { label: "1000+",      sub: "Clients worldwide"         },
  ],
};

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function AboutSection({ block = null }) {
  const data       = block?.data ?? DEFAULT_DATA;
  const words      = data.words  ?? DEFAULT_DATA.words;
  const stats      = data.stats  ?? DEFAULT_DATA.stats;
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">

      {/* ── TOP-RIGHT: blinking tagline ── */}
      <div className="absolute top-10 right-11 sm:right-12 max-w-xs text-right z-10">
        <p
          className="text-sm sm:text-base font-bold leading-snug"
          style={{ color: "var(--brand-pink)", animation: "blink 2.4s ease-in-out infinite" }}
        >
          {data.tagline ?? DEFAULT_DATA.tagline}
        </p>
      </div>

      {/* ── CENTRE: large animated headline ── */}
      <div className="flex flex-col items-start justify-center min-h-screen px-6 sm:px-14 lg:px-24 pt-24 pb-40">
        <h2 className="text-left">
          {words.map((word, i) => (
            <span
              key={word}
              className="block text-[13vw] sm:text-[10vw] lg:text-[8vw] font-extrabold leading-[0.95] tracking-tight transition-all duration-700"
              style={{
                color: "var(--brand-navy-dark)",
                opacity:   inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        <p
          className="mt-10 max-w-md text-gray-400 text-sm sm:text-base leading-relaxed transition-all duration-700"
          style={{
            opacity:   inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "550ms",
          }}
        >
          {data.body ?? DEFAULT_DATA.body}
        </p>
      </div>

      {/* ── BOTTOM: stats bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t border-gray-100 px-6 sm:px-14 lg:px-24 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16 transition-all duration-700"
        style={{
          opacity:   inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transitionDelay: "700ms",
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-8 sm:gap-16">
            {i > 0 && <div className="hidden sm:block w-px h-10 bg-gray-200" />}
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: "var(--brand-navy-dark)" }}>
                {stat.label.includes("+") ? (
                  <>{stat.label.replace("+", "")}<span style={{ color: "var(--brand-pink)" }}>+</span></>
                ) : stat.label}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-1">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          45%       { opacity: 0.15; }
          55%       { opacity: 0.15; }
        }
      `}</style>
    </section>
  );
}
