"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

/* ── Phone configs ───────────────────────────────────────────── */
const PHONES = [
  { left: "3%",  duration: 14, delay:  0,   rotate: "-4deg", w: 155, h: 320 },
  { left: "17%", duration: 18, delay: -5,   rotate:  "2deg", w: 178, h: 365 },
  { left: "33%", duration: 13, delay: -9,   rotate: "-2deg", w: 162, h: 335 },
  { left: "49%", duration: 16, delay: -3,   rotate:  "3deg", w: 172, h: 355 },
  { left: "64%", duration: 15, delay: -7,   rotate: "-3deg", w: 158, h: 328 },
  { left: "78%", duration: 17, delay: -1,   rotate:  "1deg", w: 175, h: 360 },
  { left: "90%", duration: 12, delay: -11,  rotate: "-2deg", w: 160, h: 330 },
];

/* ── Client bubbles ──────────────────────────────────────────── */
const CLIENTS = [
  { name: "Cream Stone",                  src: "/assets/clients/cream_stone.png"                },
  { name: "Suzuki",                        src: "/assets/clients/suzuki.png"                      },
  { name: "Reliance",                      src: "/assets/clients/reliance.png"                    },
  { name: "Radha Madhav Toyota",           src: "/assets/clients/radha_madhav_toyota.png"         },
  { name: "KL University",                 src: "/assets/clients/kl_university.png"               },
  { name: "LEPL",                          src: "/assets/clients/lepl.png"                        },
  { name: "MVR Mall",                      src: "/assets/clients/mvr_mall.png"                    },
  { name: "APCRDA",                        src: "/assets/clients/apcrda.png"                      },
  { name: "Convention Centre",             src: "/assets/clients/convention_centre.png"           },
  { name: "Cherrys",                       src: "/assets/clients/cherrys.png"                     },
  { name: "The Gateway Hotels",            src: "/assets/clients/the_gateway_hotels_resorts.png"  },
  { name: "Durga Ghee",                    src: "/assets/clients/durga_ghee.png"                  },
  { name: "Acharya Nagarjuna University",  src: "/assets/clients/acharya_nagarjuna_university.png"},
  { name: "Krishna University",            src: "/assets/clients/krishna_university.png"          },
  { name: "Trendset Mall",                 src: "/assets/clients/trendset_mall.png"               },
  { name: "Rolex Media Tech",              src: "/assets/clients/rolex_media_tech.png"            },
  { name: "Mohammed Khan Jewellers",       src: "/assets/clients/mohammed_khan_sons_jewellers.png"},
  { name: "Indian National Congress",      src: "/assets/clients/indian_national_congress.png"    },
  { name: "YSRCP",                         src: "/assets/clients/ysrcp.png"                       },
  { name: "Construction",                  src: "/assets/clients/client_construction.png"         },
];

/* Radius & entry offset per bubble */
const BUBBLE_META = CLIENTS.map((c, i) => ({
  ...c,
  r:           35 + (i % 5) * 8,   /* radius 35–67 px */
  entryDelay:  i * 60,              /* staggered drop (px above top) */
}));

/* ── Physics constants ───────────────────────────────────────── */
const GRAVITY      = 0.45;
const RESTITUTION  = 0.42;   /* ball-ball bounciness */
const WALL_BOUNCE  = 0.38;   /* wall bounciness */
const FRICTION     = 0.988;  /* horizontal drag per frame */
const COLLISION_ITERS = 4;   /* solver iterations for stable stacking */

export default function WorkSection() {
  const sectionRef   = useRef(null);
  const bubbleRefs   = useRef([]);
  const ballsRef     = useRef([]);   /* physics state array */
  const animIdRef    = useRef(null);
  const triggeredRef = useRef(false);

  /* ── Physics initialiser ─────────────────────────────────── */
  const startPhysics = useCallback((section) => {
    const W = section.offsetWidth;
    const H = section.offsetHeight;

    ballsRef.current = BUBBLE_META.map((b, i) => ({
      id:    i,
      x:     W * (0.04 + (i * 0.049) % 0.92),   /* spread across width  */
      y:     -(b.r + b.entryDelay),               /* staggered above top  */
      vx:    (Math.random() - 0.5) * 2,
      vy:    0,
      r:     b.r,
      mass:  b.r * b.r,                           /* heavier = bigger     */
      scale: 1,                                   /* driven by squish anim */
    }));

    function frame() {
      const balls = ballsRef.current;

      /* 1. Integrate ───────────────────────────────────────── */
      balls.forEach((b) => {
        b.vy  += GRAVITY;
        b.vx  *= FRICTION;
        b.x   += b.vx;
        b.y   += b.vy;

        /* Animate scale back to 1 (squish recovery) */
        if (b.scale !== 1) {
          b.scale += (1 - b.scale) * 0.18;
          if (Math.abs(b.scale - 1) < 0.005) b.scale = 1;
        }

        /* Wall collisions */
        if (b.x - b.r < 0) {
          b.x  = b.r;
          b.vx = Math.abs(b.vx) * WALL_BOUNCE;
        }
        if (b.x + b.r > W) {
          b.x  = W - b.r;
          b.vx = -Math.abs(b.vx) * WALL_BOUNCE;
        }
        if (b.y + b.r > H) {
          b.y  = H - b.r;
          b.vy = -Math.abs(b.vy) * WALL_BOUNCE;
          b.vx *= 0.82;                          /* extra floor friction  */
          if (Math.abs(b.vy) < 0.4) b.vy = 0;
        }
      });

      /* 2. Collision solver (multiple iterations) ──────────── */
      for (let iter = 0; iter < COLLISION_ITERS; iter++) {
        for (let i = 0; i < balls.length; i++) {
          for (let j = i + 1; j < balls.length; j++) {
            const a  = balls[i];
            const b  = balls[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const d2 = dx * dx + dy * dy;
            const md = a.r + b.r;

            if (d2 >= md * md) continue;        /* not overlapping */

            const dist = Math.sqrt(d2) || 0.001;
            const nx   = dx / dist;
            const ny   = dy / dist;

            /* Positional correction (push apart) */
            const overlap  = (md - dist) * 0.5;
            const totalM   = a.mass + b.mass;
            a.x -= nx * overlap * (b.mass / totalM);
            a.y -= ny * overlap * (b.mass / totalM);
            b.x += nx * overlap * (a.mass / totalM);
            b.y += ny * overlap * (a.mass / totalM);

            /* Velocity response */
            const dvx = b.vx - a.vx;
            const dvy = b.vy - a.vy;
            const dot = dvx * nx + dvy * ny;
            if (dot >= 0) continue;             /* already separating */

            const impulse = -(1 + RESTITUTION) * dot / (1 / a.mass + 1 / b.mass);
            a.vx -= impulse * nx / a.mass;
            a.vy -= impulse * ny / a.mass;
            b.vx += impulse * nx / b.mass;
            b.vy += impulse * ny / b.mass;
          }
        }
      }

      /* 3. Render ──────────────────────────────────────────── */
      balls.forEach((b, i) => {
        const el = bubbleRefs.current[i];
        if (!el) return;
        const diameter = b.r * 2;
        el.style.opacity   = b.y + b.r > 0 ? "1" : "0";
        el.style.transform = `translate(${b.x - b.r}px, ${b.y - b.r}px) scale(${b.scale})`;
        el.style.width     = `${diameter}px`;
        el.style.height    = `${diameter}px`;
      });

      animIdRef.current = requestAnimationFrame(frame);
    }

    animIdRef.current = requestAnimationFrame(frame);
  }, []);

  /* ── Click → squish + upward kick ───────────────────────── */
  const handleClick = useCallback((idx, e) => {
    const ball = ballsRef.current[idx];
    const section = sectionRef.current;
    if (!ball || !section) return;

    const rect = section.getBoundingClientRect();
    const cx   = e.clientX - rect.left;
    const cy   = e.clientY - rect.top;

    /* Kick direction: mostly up, slightly away from click point */
    const dx   = ball.x - cx;
    const dy   = ball.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;

    ball.vx   += (dx / dist) * 6;
    ball.vy    = -20;
    ball.scale = 0.72;               /* squish — physics loop springs back */
  }, []);

  /* ── Trigger physics on scroll into view ────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggeredRef.current) {
          triggeredRef.current = true;
          startPhysics(section);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, [startPhysics]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#f8f6f3" }}
    >
      <style>{`
        @keyframes phoneDrift {
          0%   { transform: translateY(-420px) rotate(var(--tilt)); opacity: 0; }
          7%   { opacity: 1; }
          87%  { opacity: 1; }
          100% { transform: translateY(115vh)  rotate(var(--tilt)); opacity: 0; }
        }
        .bubble-ball {
          position: absolute;
          top: 0; left: 0;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          will-change: transform, opacity;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 6px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06);
          transition: filter 0.2s ease;
        }
        .bubble-ball:hover {
          filter: brightness(0.96) drop-shadow(0 4px 12px rgba(0,0,0,0.18));
        }
        .bubble-ball:active { filter: brightness(0.9); }
      `}</style>

      {/* ── Center label (z-index 2 — behind phones & bubbles) ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 10 }}
      >
        <h2
          className="font-extrabold tracking-tight text-center leading-[0.9]"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
        >
          Brands we’ve<br />worked with
        </h2>
      </div>

      {/* ── Physics bubbles (z-index 3) ─────────────────────── */}
      {BUBBLE_META.map((b, i) => (
        <div
          key={i}
          ref={(el) => { bubbleRefs.current[i] = el; }}
          className="bubble-ball"
          title={b.name}
          style={{ zIndex: 3, padding: b.r * 0.18 }}
          onClick={(e) => handleClick(i, e)}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={b.src}
              alt={b.name}
              fill
              sizes={`${b.r * 2}px`}
              className="object-contain"
            />
          </div>
        </div>
      ))}

      {/* ── Falling phones (z-index 4 — on top of everything) ── */}
      {/* {PHONES.map((p, i) => (
        <div
          key={i}
          style={{
            position:        "absolute",
            left:            p.left,
            top:             0,
            width:           p.w,
            height:          p.h,
            "--tilt":        p.rotate,
            animation:       `phoneDrift ${p.duration}s ${p.delay}s linear infinite`,
            borderRadius:    30,
            border:          "1px solid rgba(0,0,0,0.08)",
            backgroundColor: "rgba(13,27,46,0.06)",
            backdropFilter:  "blur(12px)",
            boxShadow:       "0 16px 48px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.7)",
            display:         "flex",
            flexDirection:   "column",
            overflow:        "hidden",
            zIndex:          4,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 13 }}>
            <div style={{ width: 66, height: 5, borderRadius: 3, backgroundColor: "rgba(13,27,46,0.15)" }} />
          </div>
          <div style={{
            flex: 1, margin: "9px 7px 7px", borderRadius: 18,
            backgroundColor: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(0,0,0,0.05)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "rgba(13,27,46,0.25)", fontSize: 9, textAlign: "center", padding: "0 10px", lineHeight: 1.7 }}>
              Client website<br />coming soon
            </span>
          </div>
        </div>
      ))} */}
    </section>
  );
}
