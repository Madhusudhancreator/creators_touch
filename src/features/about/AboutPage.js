"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Lightbulb, Heart, Zap, Shield,
  Users, Award, Globe, TrendingUp, ArrowDown, User,
} from "lucide-react";

/* ── Brand tokens ──────────────────────────────────────────────── */
const BLUE       = "#0977a8";
const PINK       = "#cc0066";
const DARK       = "#0d1b2e";
const LIGHT_CARD = "#f8fafc";

/* ── Values data ───────────────────────────────────────────────── */
const VALUES = [
  {
    id: "01",
    title: "Creative Thinking",
    tag: "Innovation",
    desc: "We never settle for the obvious. Every brief is an opportunity to think differently and create something that genuinely stands out in a crowded world.",
    icon: Lightbulb,
    color: BLUE,
    featured: true,
  },
  {
    id: "02",
    title: "Client First",
    tag: "Partnership",
    desc: "Your goals drive everything we do. We listen deeply, communicate clearly, and measure our success by the results we deliver for you.",
    icon: Heart,
    color: PINK,
  },
  {
    id: "03",
    title: "Speed & Quality",
    tag: "Execution",
    desc: "Fast doesn't mean sloppy. We've built systems that let us move quickly without ever compromising on the quality that defines our work.",
    icon: Zap,
    color: BLUE,
  },
  {
    id: "04",
    title: "Integrity Always",
    tag: "Trust",
    desc: "We say what we mean and do what we say. Honest timelines, honest pricing, and honest feedback — always.",
    icon: Shield,
    color: PINK,
  },
];

/* ── Team data ─────────────────────────────────────────────────── */
const TEAM = [
  {
    name: "SriHarikrishna",
    role: "Founder",
    initials: "SH",
    accent: BLUE,
    bio: "The visionary who built Creators Touch Global from the ground up — leading creative direction, client relationships, and the long-term growth of the brand since 2010.",
    img: null,   // replace with photo path when ready
  },
  {
    name: "Chandu",
    role: "Chief Executive Officer",
    initials: "CH",
    accent: PINK,
    bio: "Drives business strategy and day-to-day operations, ensuring every project is delivered with excellence and every client partnership keeps growing stronger.",
    img: null,
  },
  {
    name: "Deepika",
    role: "Marketing",
    initials: "DK",
    accent: BLUE,
    bio: "Builds and executes data-driven campaigns that grow audiences, generate qualified leads, and deliver measurable ROI across every channel.",
    img: null,
  },
  {
    name: "Sabi",
    role: "Website Developer",
    initials: "SB",
    accent: PINK,
    bio: "Crafts fast, responsive, and visually stunning websites — turning design concepts into real-world digital experiences that truly perform.",
    img: null,
  },
  {
    name: "Madhsudhan",
    role: "Sr. Full Stack Developer",
    initials: "MS",
    accent: BLUE,
    bio: "Architects and builds complex full-stack applications — from scalable backend systems and APIs to polished frontends that grow with the business.",
    img: null,
  },
];

/* ── Journey milestones ────────────────────────────────────────── */
const JOURNEY = [
  {
    year: "2010",
    title: "Where It All Started",
    desc: "Founded in Vijayawada with a single mission: to give every business access to world-class creative work. What started as a bold idea quickly grew into a studio built on craft, care, and zero compromises.",
    accent: BLUE,
  },
  {
    year: "2013",
    title: "First Landmark Clients",
    desc: "Word spread fast. Brands across education, healthcare, and retail came to us because they wanted something different — and we delivered. Our first major milestone, built entirely on referrals.",
    accent: PINK,
  },
  {
    year: "2016",
    title: "Full-Service Studio",
    desc: "We expanded into video production, app development, and SEO — becoming a true one-stop creative studio. Our team grew, our capabilities deepened, and our ambition grew even faster.",
    accent: BLUE,
  },
  {
    year: "2020",
    title: "Going Digital-First",
    desc: "As the world shifted online, we were ready. We doubled down on digital services, helping brands adapt and emerge stronger — turning disruption into their biggest growth opportunity.",
    accent: PINK,
  },
  {
    year: "2023",
    title: "Going National",
    desc: "Projects started coming in from across India. From Vijayawada to Delhi, Mumbai to Bangalore — the Creators Touch name was building real momentum on a national scale.",
    accent: BLUE,
  },
  {
    year: "Today",
    title: "1000+ Stories & Still Building",
    desc: "A landmark number and a humbling reminder of the trust thousands of businesses placed in us. We're not slowing down — new services, new markets, and new possibilities lie ahead.",
    accent: PINK,
  },
];

/* ── Ticker items ──────────────────────────────────────────────── */
const TICKER = [
  "Creative Studio", "Brand Identity", "Video Production",
  "Digital Marketing", "1000+ Clients", "Website Design",
  "Vijayawada", "App Development", "Photography", "SEO & Content",
];

/* ── useInView hook ────────────────────────────────────────────── */
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
  const words = [
    { text: "We Are", delay: "0s" },
    { text: "Creators", delay: "0.18s" },
    { text: "Touch.", delay: "0.36s" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-14 lg:px-24 pt-20 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(9,119,168,0.1) 0%, transparent 65%), #f0f8fc`,
      }}
    >
      {/* Grid pattern */}
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
          background: `radial-gradient(circle, rgba(204,0,102,0.06) 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Top-right blinking tag */}
      <div className="absolute top-10 right-11 sm:right-12 max-w-xs text-right z-10">
        <p
          className="text-sm sm:text-base font-bold leading-snug"
          style={{ color: PINK, animation: "blink 2.4s ease-in-out infinite" }}
        >
          Creative agency based in<br />Vijayawada, India.
        </p>
      </div>

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
          About Us
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
          A full-service creative agency helping brands grow through bold strategy,
          beautiful design, and digital marketing that delivers real results.
        </p>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-10 sm:gap-16 mb-16"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.85s",
          }}
        >
          {[
            ["1000+", "Clients Served"],
            ["9+",    "Core Services"],
            ["15+",   "Years Growing"],
          ].map(([num, label]) => (
            <div key={label}>
              <p
                className="font-extrabold"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: DARK }}
              >
                {num.includes("+")
                  ? <>{num.replace("+", "")}<span style={{ color: PINK }}>+</span></>
                  : num}
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.3em] mt-1"
                style={{ color: "#94a3b8" }}
              >
                {label}
              </p>
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
            Work With Us
          </Link>
          <span
            className="flex items-center gap-2 text-xs tracking-widest uppercase"
            style={{ color: "#94a3b8" }}
          >
            <ArrowDown size={13} style={{ animation: "nudge 2.2s ease infinite" }} />
            Our story
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
        style={{ animation: "ticker 28s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 shrink-0">
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.35em] px-6"
              style={{ color: "#94a3b8" }}
            >
              {item}
            </span>
            <span style={{ color: BLUE, fontSize: "0.35rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Mission / Who We Are ──────────────────────────────────────── */
function MissionSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-6 sm:px-14 lg:px-24 py-28"
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <p
            className="text-xs uppercase tracking-[0.45em] font-semibold mb-4"
            style={{ color: BLUE }}
          >
            Who We Are
          </p>
          <h2
            className="font-extrabold tracking-tight leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
          >
            A studio built for brands that want to grow.
          </h2>
          <p className="text-base leading-[1.85] mb-5" style={{ color: "#64748b" }}>
            Creators Touch Global is a full-service creative agency based in Vijayawada, India.
            We partner with businesses across every stage — from ambitious startups to established
            enterprises — helping them build brands that connect, convert, and last.
          </p>
          <p className="text-base leading-[1.85]" style={{ color: "#64748b" }}>
            We bring together strategy, design, development, and marketing under one roof so that
            every touchpoint your customers see tells the same compelling story. No hand-offs.
            No gaps. Just one team, fully invested in your success.
          </p>
        </div>

        {/* Right: Statement card */}
        <div className="relative">
          {/* Background square */}
          <div
            className="absolute -top-6 -right-6 w-full h-full rounded-3xl"
            style={{ backgroundColor: `${BLUE}0a`, border: `1px solid ${BLUE}20` }}
          />
          <div
            className="relative rounded-3xl p-10"
            style={{
              backgroundColor: DARK,
              boxShadow: "0 24px 60px rgba(13,27,46,0.25)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${PINK})` }}
            />

            <p
              className="text-xs uppercase tracking-[0.42em] font-semibold mb-6"
              style={{ color: BLUE }}
            >
              Our Mission
            </p>
            <p
              className="font-extrabold tracking-tight leading-[1.15] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", color: "#ffffff" }}
            >
              &ldquo;To make world-class creative work accessible to every business that dares to grow.&rdquo;
            </p>

            <div className="flex flex-wrap gap-3">
              {["Strategy", "Design", "Development", "Marketing"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-3 py-1.5 rounded-full"
                  style={{
                    color: BLUE,
                    backgroundColor: "rgba(9,119,168,0.15)",
                    border: "1px solid rgba(9,119,168,0.25)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Values card ───────────────────────────────────────────────── */
function ValueCard({ value, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref);
  const Icon   = value.icon;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl flex flex-col gap-5 cursor-default ${value.featured ? "sm:col-span-2" : ""}`}
      style={{
        backgroundColor: LIGHT_CARD,
        border: "1px solid #e2e8f0",
        borderTop: `2px solid ${value.color}`,
        padding: value.featured ? "2.25rem" : "1.75rem",
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(52px)",
        transition: `opacity 0.65s ease ${index * 0.08}s, transform 0.65s ease ${index * 0.08}s`,
        minHeight:  value.featured ? "240px" : "200px",
      }}
    >
      {/* Ghost number */}
      <span
        className="absolute bottom-3 right-5 font-extrabold leading-none select-none pointer-events-none"
        style={{
          fontSize: "7rem",
          lineHeight: 1,
          color: value.color === BLUE ? "rgba(9,119,168,0.06)" : "rgba(204,0,102,0.06)",
        }}
      >
        {value.id}
      </span>

      {/* Header */}
      <div className="flex items-start justify-between relative z-10">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${value.color}18` }}
        >
          <Icon size={19} style={{ color: value.color }} />
        </div>
        <span
          className="text-[9px] font-semibold uppercase tracking-[0.3em] px-3 py-1 rounded-full"
          style={{ color: value.color, backgroundColor: `${value.color}12` }}
        >
          {value.tag}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="font-extrabold tracking-tight leading-snug"
          style={{
            color: DARK,
            fontSize: value.featured ? "clamp(1.4rem, 2.6vw, 1.9rem)" : "clamp(1rem, 1.8vw, 1.25rem)",
          }}
        >
          {value.title}
        </h3>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: "#64748b", maxWidth: value.featured ? "520px" : "none" }}
        >
          {value.desc}
        </p>
      </div>

      {/* Hover bottom line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 pointer-events-none"
        style={{ backgroundColor: value.color }}
      />
    </div>
  );
}

/* ── Values section ────────────────────────────────────────────── */
function ValuesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
      <div
        ref={ref}
        className="mb-14"
        style={{
          opacity:    inView ? 1 : 0,
          transform:  inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p
          className="text-xs uppercase tracking-[0.45em] font-semibold mb-3"
          style={{ color: BLUE }}
        >
          What We Stand For
        </p>
        <h2
          className="font-extrabold tracking-tight leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
        >
          Values That Guide<br />Every Decision
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {VALUES.map((v, i) => (
          <ValueCard key={v.id} value={v} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ── Journey / Timeline ────────────────────────────────────────── */
function JourneySection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      className="py-28 px-6 sm:px-14 lg:px-24"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div
        ref={ref}
        className="max-w-6xl mx-auto"
        style={{
          opacity:    inView ? 1 : 0,
          transform:  inView ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p
          className="text-xs uppercase tracking-[0.45em] font-semibold mb-3"
          style={{ color: BLUE }}
        >
          Our Journey
        </p>
        <h2
          className="font-extrabold tracking-tight mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
        >
          15 Years.<br />1000+ Stories.
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ backgroundColor: "#e2e8f0", transform: "translateX(-50%)" }}
          />

          <div className="flex flex-col gap-0">
            {JOURNEY.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <MilestoneRow
                  key={milestone.year}
                  milestone={milestone}
                  index={i}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneRow({ milestone, index, isLeft }) {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative"
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.65s ease ${index * 0.07}s, transform 0.65s ease ${index * 0.07}s`,
      }}
    >
      {/* Center dot */}
      <div
        className="absolute left-0 lg:left-1/2 top-10 w-3 h-3 rounded-full hidden sm:block"
        style={{
          backgroundColor: milestone.accent,
          transform: "translateX(-50%)",
          boxShadow: `0 0 10px ${milestone.accent}60`,
          zIndex: 2,
        }}
      />

      {/* Left side (content for even, empty for odd) */}
      <div className={`px-6 sm:px-10 py-10 ${isLeft ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
        {isLeft ? (
          <MilestoneContent milestone={milestone} />
        ) : (
          <div className="hidden lg:block" />
        )}
      </div>

      {/* Right side (empty for even, content for odd) */}
      <div className={`px-6 sm:px-10 py-10 ${isLeft ? "lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
        {!isLeft ? (
          <MilestoneContent milestone={milestone} />
        ) : (
          <div className="hidden lg:block" />
        )}
      </div>
    </div>
  );
}

function MilestoneContent({ milestone }) {
  return (
    <>
      <span
        className="inline-block text-xs font-bold uppercase tracking-[0.35em] px-3 py-1.5 rounded-full mb-3"
        style={{
          color: milestone.accent,
          backgroundColor: `${milestone.accent}12`,
          border: `1px solid ${milestone.accent}28`,
        }}
      >
        {milestone.year}
      </span>
      <h3
        className="font-extrabold tracking-tight mb-3"
        style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: DARK }}
      >
        {milestone.title}
      </h3>
      <p className="text-sm leading-[1.8]" style={{ color: "#64748b" }}>
        {milestone.desc}
      </p>
    </>
  );
}

/* ── Team section ──────────────────────────────────────────────── */
function TeamSection() {
  const ref     = useRef(null);
  const inView  = useInView(ref);
  const leaders = TEAM.slice(0, 2);   // Founder + CEO
  const members = TEAM.slice(2);      // rest of team

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-14 lg:px-24 py-28">
      {/* Heading */}
      <div
        ref={ref}
        className="mb-14"
        style={{
          opacity:    inView ? 1 : 0,
          transform:  inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p
          className="text-xs uppercase tracking-[0.45em] font-semibold mb-3"
          style={{ color: BLUE }}
        >
          The Team
        </p>
        <h2
          className="font-extrabold tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
        >
          People Who Make<br />It Happen
        </h2>
        <p className="mt-3 text-sm max-w-md leading-relaxed" style={{ color: "#94a3b8" }}>
          A small, dedicated team of specialists — big enough to handle scale, small enough to genuinely care.
        </p>
      </div>

      {/* Row 1 — Founder & CEO (large featured cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {leaders.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} featured />
        ))}
      </div>

      {/* Row 2 — Rest of the team */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {members.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i + 2} />
        ))}
      </div>
    </section>
  );
}

function TeamCard({ member, index, featured = false }) {
  const ref    = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl flex flex-col"
      style={{
        backgroundColor: LIGHT_CARD,
        border: "1px solid #e2e8f0",
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.65s ease ${index * 0.1}s, transform 0.65s ease ${index * 0.1}s`,
      }}
    >
      {/* ── Photo area ── */}
      <div
        className="relative overflow-hidden w-full"
        style={{ height: featured ? "260px" : "200px" }}
      >
        {member.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          /* Styled placeholder — swap with real photo anytime */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{
              background: `linear-gradient(160deg, ${member.accent}14 0%, ${member.accent}06 100%)`,
            }}
          >
            {/* Silhouette circle */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width:  featured ? 88 : 72,
                height: featured ? 88 : 72,
                backgroundColor: `${member.accent}18`,
                border: `2px dashed ${member.accent}35`,
              }}
            >
              <User
                style={{
                  color: `${member.accent}70`,
                  width:  featured ? 38 : 30,
                  height: featured ? 38 : 30,
                }}
              />
            </div>
            <span
              className="text-[10px] font-medium tracking-wider uppercase"
              style={{ color: `${member.accent}60` }}
            >
              Photo coming soon
            </span>
          </div>
        )}

        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ backgroundColor: member.accent }}
        />

        {/* Bottom gradient fade into card body */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${LIGHT_CARD}, transparent)` }}
        />
      </div>

      {/* ── Content ── */}
      <div className="px-6 pb-6 pt-3 flex flex-col flex-1">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.32em] mb-1"
          style={{ color: member.accent }}
        >
          {member.role}
        </p>
        <h3
          className="font-extrabold tracking-tight leading-snug mb-3"
          style={{
            fontSize: featured ? "clamp(1.15rem, 2vw, 1.4rem)" : "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: DARK,
          }}
        >
          {member.name}
        </h3>
        <p className="text-xs leading-relaxed flex-1" style={{ color: "#94a3b8" }}>
          {member.bio}
        </p>
      </div>

      {/* Hover bottom line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: member.accent }}
      />
    </div>
  );
}

/* ── Stats bar ─────────────────────────────────────────────────── */
function StatsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref);

  const stats = [
    { icon: Users,      num: "1000+", label: "Clients Served"    },
    { icon: Award,      num: "200+",  label: "Projects Delivered" },
    { icon: Globe,      num: "9+",    label: "Services Offered"   },
    { icon: TrendingUp, num: "15+",   label: "Years of Growth"    },
  ];

  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${DARK} 0%, #0f2744 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        ref={ref}
        className="relative max-w-6xl mx-auto px-6 sm:px-14 lg:px-24 py-20 grid grid-cols-2 lg:grid-cols-4 gap-10"
        style={{
          opacity:    inView ? 1 : 0,
          transform:  inView ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {stats.map(({ icon: Icon, num, label }, i) => (
          <div key={label} className="flex flex-col gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(9,119,168,0.2)" }}
            >
              <Icon size={18} style={{ color: BLUE }} />
            </div>
            <p
              className="font-extrabold"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff" }}
            >
              {num.replace("+", "")}<span style={{ color: PINK }}>+</span>
            </p>
            <p
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
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
        Let&apos;s Create Together
      </p>

      <h2
        className="font-extrabold tracking-tight mb-5"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: DARK }}
      >
        Ready to build<br />something great?
      </h2>

      <p
        className="text-base leading-relaxed max-w-md mx-auto mb-10"
        style={{ color: "#64748b" }}
      >
        Whether you&apos;re starting from scratch or scaling an existing brand, we&apos;re here to
        make it happen. Let&apos;s talk about your vision.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-white px-9 py-4 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: BLUE }}
        >
          Start a Project <ArrowRight size={15} />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-bold px-9 py-4 rounded-full transition-colors"
          style={{
            color: DARK,
            backgroundColor: "transparent",
            border: `1.5px solid ${DARK}20`,
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = BLUE}
          onMouseLeave={e => e.currentTarget.style.borderColor = `${DARK}20`}
        >
          View Services
        </Link>
      </div>
    </section>
  );
}

/* ── Main page ─────────────────────────────────────────────────── */
export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main style={{ backgroundColor: "#ffffff" }}>

      <Hero mounted={mounted} />
      <Ticker />        
      {/* <MissionSection /> */}
      <ValuesSection />
      <StatsSection />
      <JourneySection />
      <TeamSection />
      <CtaSection />

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
        @keyframes blink {
          0%, 100% { opacity: 1; }
          45%       { opacity: 0.15; }
          55%       { opacity: 0.15; }
        }
      `}</style>
    </main>
  );
}
