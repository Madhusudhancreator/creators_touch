"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const DEFAULT_CLIENTS = [
  { name: "Cream Stone",                 src: "/assets/clients/cream_stone.png"                 },
  { name: "Suzuki",                       src: "/assets/clients/suzuki.png"                       },
  { name: "Reliance",                     src: "/assets/clients/reliance.png"                     },
  { name: "Radha Madhav Toyota",          src: "/assets/clients/radha_madhav_toyota.png"          },
  { name: "KL University",               src: "/assets/clients/kl_university.png"                },
  { name: "LEPL",                         src: "/assets/clients/lepl.png"                         },
  { name: "MVR Mall",                     src: "/assets/clients/mvr_mall.png"                     },
  { name: "APCRDA",                       src: "/assets/clients/apcrda.png"                       },
  { name: "Convention Centre",           src: "/assets/clients/convention_centre.png"            },
  { name: "Cherrys",                      src: "/assets/clients/cherrys.png"                      },
  { name: "The Gateway Hotels",          src: "/assets/clients/the_gateway_hotels_resorts.png"   },
  { name: "Durga Ghee",                   src: "/assets/clients/durga_ghee.png"                   },
  { name: "Acharya Nagarjuna University", src: "/assets/clients/acharya_nagarjuna_university.png" },
  { name: "Krishna University",          src: "/assets/clients/krishna_university.png"           },
  { name: "Trendset Mall",               src: "/assets/clients/trendset_mall.png"                },
  { name: "Rolex Media Tech",            src: "/assets/clients/rolex_media_tech.png"             },
  { name: "Mohammed Khan Jewellers",     src: "/assets/clients/mohammed_khan_sons_jewellers.png" },
];

const GRAVITY         = 0.45;
const RESTITUTION     = 0.42;
const WALL_BOUNCE     = 0.38;
const FRICTION        = 0.988;
const COLLISION_ITERS = 4;

export default function WorkSection({ block = null }) {
  const data       = block?.data ?? {};
  const clientList = data.clients ?? DEFAULT_CLIENTS;
  const heading    = data.heading ?? "Brands we've\nworked with";

  /* Compute bubble metadata from the (possibly dynamic) client list */
  const bubbleMeta = clientList.map((c, i) => ({
    ...c,
    r:          35 + (i % 5) * 8,
    entryDelay: i * 60,
  }));

  const sectionRef   = useRef(null);
  const bubbleRefs   = useRef([]);
  const ballsRef     = useRef([]);
  const animIdRef    = useRef(null);
  const triggeredRef = useRef(false);
  /* Store bubbleMeta in a ref so startPhysics always reads the latest value
     without needing to be recreated. */
  const metaRef      = useRef(bubbleMeta);
  metaRef.current    = bubbleMeta;

  const startPhysics = useCallback((section) => {
    const meta = metaRef.current;
    const W    = section.offsetWidth;
    const H    = section.offsetHeight;

    ballsRef.current = meta.map((b, i) => ({
      id:    i,
      x:     W * (0.04 + (i * 0.049) % 0.92),
      y:     -(b.r + b.entryDelay),
      vx:    (Math.random() - 0.5) * 2,
      vy:    0,
      r:     b.r,
      mass:  b.r * b.r,
      scale: 1,
    }));

    function frame() {
      const balls = ballsRef.current;

      balls.forEach((b) => {
        b.vy += GRAVITY;
        b.vx *= FRICTION;
        b.x  += b.vx;
        b.y  += b.vy;

        if (b.scale !== 1) {
          b.scale += (1 - b.scale) * 0.18;
          if (Math.abs(b.scale - 1) < 0.005) b.scale = 1;
        }

        if (b.x - b.r < 0) { b.x = b.r;     b.vx =  Math.abs(b.vx) * WALL_BOUNCE; }
        if (b.x + b.r > W) { b.x = W - b.r;  b.vx = -Math.abs(b.vx) * WALL_BOUNCE; }
        if (b.y + b.r > H) {
          b.y  = H - b.r;
          b.vy = -Math.abs(b.vy) * WALL_BOUNCE;
          b.vx *= 0.82;
          if (Math.abs(b.vy) < 0.4) b.vy = 0;
        }
      });

      for (let iter = 0; iter < COLLISION_ITERS; iter++) {
        for (let i = 0; i < balls.length; i++) {
          for (let j = i + 1; j < balls.length; j++) {
            const a  = balls[i];
            const b  = balls[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const d2 = dx * dx + dy * dy;
            const md = a.r + b.r;

            if (d2 >= md * md) continue;

            const dist   = Math.sqrt(d2) || 0.001;
            const nx     = dx / dist;
            const ny     = dy / dist;
            const overlap = (md - dist) * 0.5;
            const totalM  = a.mass + b.mass;

            a.x -= nx * overlap * (b.mass / totalM);
            a.y -= ny * overlap * (b.mass / totalM);
            b.x += nx * overlap * (a.mass / totalM);
            b.y += ny * overlap * (a.mass / totalM);

            const dvx     = b.vx - a.vx;
            const dvy     = b.vy - a.vy;
            const dot     = dvx * nx + dvy * ny;
            if (dot >= 0) continue;

            const impulse = -(1 + RESTITUTION) * dot / (1 / a.mass + 1 / b.mass);
            a.vx -= impulse * nx / a.mass;
            a.vy -= impulse * ny / a.mass;
            b.vx += impulse * nx / b.mass;
            b.vy += impulse * ny / b.mass;
          }
        }
      }

      balls.forEach((b, i) => {
        const el = bubbleRefs.current[i];
        if (!el) return;
        const diameter   = b.r * 2;
        el.style.opacity  = b.y + b.r > 0 ? "1" : "0";
        el.style.transform = `translate(${b.x - b.r}px, ${b.y - b.r}px) scale(${b.scale})`;
        el.style.width    = `${diameter}px`;
        el.style.height   = `${diameter}px`;
      });

      animIdRef.current = requestAnimationFrame(frame);
    }

    animIdRef.current = requestAnimationFrame(frame);
  }, []); // metaRef is stable — no dep needed

  const handleClick = useCallback((idx, e) => {
    const ball    = ballsRef.current[idx];
    const section = sectionRef.current;
    if (!ball || !section) return;
    const rect = section.getBoundingClientRect();
    const cx   = e.clientX - rect.left;
    const cy   = e.clientY - rect.top;
    const dx   = ball.x - cx;
    const dy   = ball.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    ball.vx   += (dx / dist) * 6;
    ball.vy    = -20;
    ball.scale = 0.72;
  }, []);

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

  const headingLines = heading.split("\n");

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#f8f6f3" }}
    >
      <style>{`
        .bubble-ball {
          position: absolute; top: 0; left: 0;
          border-radius: 50%; overflow: hidden;
          cursor: pointer; opacity: 0;
          will-change: transform, opacity;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 6px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06);
          transition: filter 0.2s ease;
        }
        .bubble-ball:hover  { filter: brightness(0.96) drop-shadow(0 4px 12px rgba(0,0,0,0.18)); }
        .bubble-ball:active { filter: brightness(0.9); }
      `}</style>

      {/* Center label */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 10 }}
      >
        <h2
          className="font-extrabold tracking-tight text-center leading-[0.9]"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
        >
          {headingLines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>
      </div>

      {/* Physics bubbles */}
      {bubbleMeta.map((b, i) => (
        <div
          key={i}
          ref={(el) => { bubbleRefs.current[i] = el; }}
          className="bubble-ball"
          title={b.name}
          style={{ zIndex: 3, padding: b.r * 0.18 }}
          onClick={(e) => handleClick(i, e)}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image src={b.src} alt={b.name} fill sizes={`${b.r * 2}px`} className="object-contain" />
          </div>
        </div>
      ))}
    </section>
  );
}
