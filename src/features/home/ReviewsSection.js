"use client";

import { useEffect, useRef, useState } from "react";

/* ── Brand tokens ──────────────────────────────────────────────── */
const BLUE = "#0977a8";
const DARK = "#0d1b2e";

/* ── Default data (fallback when backend is unavailable) ────────── */
const DEFAULT_DATA = {
  eyebrow:       "Client Reviews",
  heading:       "What Our Clients Are Saying",
  overallRating: "5.0",
  totalReviews:  7,
  items: [
    {
      name: "Sudheer Kumar", company: "AP Yellow Pages", initials: "SK", date: "Apr 2018", rating: 5,
      text: "When it comes to creating professional, attractive, and effective websites, there is no company that can beat Creators Touch Vijayawada. Thanks to their talent, our site has taken off in the search engines like a rocket.",
    },
    {
      name: "Karthika", company: "APGEA", initials: "KA", date: "Apr 2018", rating: 5,
      text: "Highly innovative in their work. Creators Touch is a wonderful place to get all my requirements fulfilled. They have the best team on-board that is bubbling with talent. I would highly recommend their services.",
    },
    {
      name: "Kiran Kumar", company: "AP Tourism", initials: "KK", date: "Apr 2018", rating: 5,
      text: "Excellent services provided by Creators Touch. Awesome service within time. Thank you for providing such a wonderful service to me.",
    },
    {
      name: "Sanjana", company: "Anu Hospitals", initials: "SA", date: "Apr 2018", rating: 5,
      text: "They are very sharp and have a high-quality team. The project management was really fantastic — specific timelines for all the bits and pieces. They know how to design and build things in a nice, elegant way.",
    },
    {
      name: "Akruthi", company: "Website Design", initials: "AK", date: "Apr 2018", rating: 5,
      text: "The team at Creators Touch has worked tirelessly to develop our business. They built us a solid platform to take our business forward. Professional, helpful, understanding and very considerate.",
    },
    {
      name: "Ramya Vamsi", company: "Herbals", initials: "RV", date: "Apr 2018", rating: 5,
      text: "Great quality work and on-time delivery. Good company with reasonable cost to build websites. Outstanding customer support. Quick and easy changes to my website.",
    },
    {
      name: "Pavan Kumar", company: "Sankara Netra Chikitsalaya", initials: "PK", date: "Apr 2018", rating: 5,
      text: "I am very satisfied with the way they designed both my personal and business websites. Trustable and very easy to work with. Very good quality designing work and good support.",
    },
  ],
};

/* ── Star renderer ─────────────────────────────────────────────── */
function Stars({ count = 5, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#FBBC04">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Google "G" logo ───────────────────────────────────────────── */
function GoogleLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

/* ── Single review card ────────────────────────────────────────── */
function ReviewCard({ review }) {
  return (
    <div
      className="shrink-0 flex flex-col gap-4 rounded-2xl p-6 w-[320px]"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e8edf2",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
            style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #05567a 100%)` }}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-sm font-bold leading-tight" style={{ color: DARK }}>{review.name}</p>
            <p className="text-[11px] leading-tight" style={{ color: "#94a3b8" }}>{review.company}</p>
          </div>
        </div>
        <GoogleLogo size={18} />
      </div>

      {/* Stars + date */}
      <div className="flex items-center gap-3">
        <Stars count={review.rating} size={13} />
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#cbd5e1" }}>
          {review.date}
        </span>
      </div>

      {/* Text */}
      <p className="text-[13px] leading-[1.75] flex-1" style={{ color: "#475569" }}>
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Verified badge */}
      <div className="flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[10px] font-medium" style={{ color: "#16a34a" }}>Verified Customer</span>
      </div>
    </div>
  );
}

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

/* ── Main section ──────────────────────────────────────────────── */
export default function ReviewsSection({ block = null }) {
  /* Merge backend data with defaults — backend wins on every field */
  const data = block?.data ?? DEFAULT_DATA;

  const loopItems = [...data.items, ...data.items]; // duplicate for seamless scroll

  const headerRef = useRef(null);
  const inView    = useInView(headerRef, 0.15);

  return (
    <section id="reviews" className="py-24 overflow-hidden" style={{ backgroundColor: "#f0f8fc" }}>

      {/* ── Header ── */}
      <div
        ref={headerRef}
        className="max-w-6xl mx-auto px-6 sm:px-14 lg:px-24 mb-14"
        style={{
          opacity:    inView ? 1 : 0,
          transform:  inView ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* Left: heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: BLUE }}>
              {data.eyebrow}
            </p>
            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}>
              {data.heading}
            </h2>
          </div>

          {/* Right: Google rating panel */}
          <div
            className="flex items-center gap-6 rounded-2xl px-8 py-6 shrink-0"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <GoogleLogo size={28} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#94a3b8" }}>
                Google
              </span>
            </div>
            <div className="w-px h-14 bg-gray-100" />
            <div className="flex flex-col items-center gap-1">
              <p className="font-extrabold leading-none" style={{ fontSize: "3rem", color: DARK }}>
                {data.overallRating}
              </p>
              <Stars count={5} size={16} />
              <p className="text-[11px] mt-1" style={{ color: "#94a3b8" }}>
                Based on {data.totalReviews} reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scrolling carousel ── */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f0f8fc, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f0f8fc, transparent)" }} />
        <div className="flex gap-5 px-6" style={{ animation: "reviewScroll 38s linear infinite" }}>
          {loopItems.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes reviewScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-50% - 10px)); }
        }
      `}</style>
    </section>
  );
}
