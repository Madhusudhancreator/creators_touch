"use client";

import { useState, useEffect, useRef } from "react";

const INDUSTRIES = [
  {
    title: "E-commerce & Retail",
    tags: ["Product Listings", "Conversion Funnels", "Cart Abandonment", "SEO Catalogues"],
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
  },
  {
    title: "Real Estate",
    tags: ["Property Portals", "Virtual Tours", "Lead Generation", "Local SEO"],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  },
  {
    title: "Healthcare & Medical",
    tags: ["Patient Portals", "Appointment Booking", "Health Content", "Trust Signals"],
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
  },
  {
    title: "Education & EdTech",
    tags: ["Course Platforms", "Student Funnels", "Content Marketing", "LMS Design"],
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
  },
  {
    title: "Hospitality & Tourism",
    tags: ["Booking Engines", "Review Management", "Destination Campaigns", "OTA Listings"],
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
  },
  {
    title: "Food & Beverage",
    tags: ["Menu Design", "Online Ordering", "Social Campaigns", "Local Discovery"],
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  },
  {
    title: "Fashion & Apparel",
    tags: ["Lookbooks", "Influencer Campaigns", "Size Guides", "Visual Commerce"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },
  {
    title: "Automotive",
    tags: ["Model Showcases", "Test Drive Funnels", "Dealer Locators", "Video Ads"],
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
  },
  {
    title: "Financial Services",
    tags: ["Trust Content", "Calculator Tools", "Compliance Pages", "Lead Capture"],
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  },
  {
    title: "Legal Services",
    tags: ["Case Studies", "Consultation Funnels", "Practice Area SEO", "Authority Blogs"],
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80",
  },
  {
    title: "Fitness & Wellness",
    tags: ["Class Booking", "Transformation Stories", "App Promotion", "Nutrition Content"],
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
  },
  {
    title: "Entertainment & Media",
    tags: ["Streaming Promos", "Ticket Sales", "Fan Engagement", "Press Kits"],
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
  },
  {
    title: "Technology & SaaS",
    tags: ["Product Demos", "Free Trial Funnels", "Developer Docs", "Growth Loops"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  },
  {
    title: "Travel & Airlines",
    tags: ["Fare Comparators", "Destination Guides", "Loyalty Programmes", "Retargeting"],
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
  },
  {
    title: "Beauty & Cosmetics",
    tags: ["Before & After", "Shade Finders", "UGC Campaigns", "Routine Guides"],
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80",
  },
  {
    title: "Home Services",
    tags: ["Quote Calculators", "Before & After", "Local SEO", "Review Funnels"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  },
  {
    title: "Logistics & Supply Chain",
    tags: ["Shipment Trackers", "B2B Portals", "Rate Calculators", "Partner Portals"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  },
  {
    title: "Non-profit & NGO",
    tags: ["Donation Pages", "Impact Reports", "Volunteer Portals", "Campaign Sites"],
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
  },
  {
    title: "Political Campaigns",
    tags: ["Voter Outreach", "Donation Funnels", "Issue Microsites", "Event Pages"],
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&q=80",
  },
  {
    title: "Sports & Athletics",
    tags: ["Match Schedules", "Merchandise", "Fan Apps", "Sponsorship Decks"],
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
  },
  {
    title: "Music & Live Events",
    tags: ["Artist Pages", "Ticket Funnels", "Streaming Links", "Tour Promotions"],
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
  },
  {
    title: "Architecture & Interior",
    tags: ["Portfolio Sites", "3D Walkthroughs", "Project Case Studies", "Client Portals"],
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
  },
  {
    title: "Photography & Film",
    tags: ["Gallery Sites", "Booking Calendars", "Package Pages", "Client Galleries"],
    img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80",
  },
  {
    title: "Wedding & Events",
    tags: ["Vendor Showcases", "RSVP Pages", "Mood Boards", "Inquiry Funnels"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },
  {
    title: "Agriculture & Agritech",
    tags: ["Crop Marketplaces", "IoT Dashboards", "B2B Portals", "Farmer Education"],
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80",
  },
  {
    title: "Insurance",
    tags: ["Quote Engines", "Claims Portals", "Policy Explainers", "Trust Signals"],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  },
  {
    title: "Pharmaceuticals",
    tags: ["Drug Info Pages", "HCP Portals", "Clinical Trial Sites", "Compliance Content"],
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80",
  },
  {
    title: "Jewellery & Luxury",
    tags: ["High-end Lookbooks", "Custom Orders", "Certification Pages", "Gifting Guides"],
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
  },
  {
    title: "Government & Civic",
    tags: ["Service Portals", "Public Notices", "Citizen Forms", "Accessibility Compliance"],
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&q=80",
  },
  {
    title: "Media & Publishing",
    tags: ["Subscription Walls", "Newsletter Funnels", "Ad-supported Content", "SEO Articles"],
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
  },
];

export default function IndustriesSection() {
  const [hovered, setHovered]   = useState(null);
  const [imgA, setImgA]         = useState(null);
  const [imgB, setImgB]         = useState(null);
  const [activeSlot, setActive] = useState("a");
  const [panelIn, setPanelIn]   = useState(false);
  const [isTouch, setIsTouch]   = useState(false);
  const panelTimer              = useRef(null);

  /* Detect touch device once on mount */
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const isActive = hovered !== null;
  const current  = hovered !== null ? INDUSTRIES[hovered] : null;

  /* ── Double-buffer background swap ─────────────────────── */
  useEffect(() => {
    if (hovered === null) return;
    const img = INDUSTRIES[hovered].img;
    if (activeSlot === "a") {
      setImgB(img);
      setActive("b");
    } else {
      setImgA(img);
      setActive("a");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  /* ── Tag panel: slight delay so it doesn't flash ────────── */
  useEffect(() => {
    clearTimeout(panelTimer.current);
    if (hovered !== null) {
      panelTimer.current = setTimeout(() => setPanelIn(true), 60);
    } else {
      setPanelIn(false);
    }
    return () => clearTimeout(panelTimer.current);
  }, [hovered]);

  return (
    <section
      id="industries"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <style>{`
        /* ── Card CSS — no React re-render per card ─────────── */
        .ind-grid { --bc: #f1f5f9; }
        .ind-grid.dark { --bc: rgba(255,255,255,0.08); }

        .ind-card {
          position: relative;
          text-align: left;
          padding: 20px 16px;
          border-right:  1px solid var(--bc);
          border-bottom: 1px solid var(--bc);
          background: transparent;
          cursor: default;
          transition: background 0.25s ease;
        }
        .ind-card:focus { outline: none; }

        .ind-card .num {
          display: block;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          margin-bottom: 8px;
          color: #d1d5db;
          transition: color 0.25s ease;
        }
        .ind-card .label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.35;
          color: #0d1b2e;
          transition: color 0.25s ease;
        }
        .ind-card .bar {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          width: 0%;
          background: #cc0066;
          transition: width 0.28s ease;
        }

        /* When section is in dark mode (something hovered) */
        .ind-grid.dark .ind-card .label { color: rgba(255,255,255,0.38); }
        .ind-grid.dark .ind-card .num   { color: rgba(255,255,255,0.18); }

        /* Active card */
        .ind-card.active          { background: rgba(204,0,102,0.14) !important; }
        .ind-card.active .num     { color: rgba(204,0,102,0.85) !important; }
        .ind-card.active .label   { color: #ffffff !important; }
        .ind-card.active .bar     { width: 100%; }
      `}</style>

      {/* ── Double-buffer background ─────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Slot A */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: imgA ? `url('${imgA}')` : "none",
            opacity:    activeSlot === "a" && isActive ? 1 : 0,
            transition: "opacity 0.55s ease",
          }}
        />
        {/* Slot B */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: imgB ? `url('${imgB}')` : "none",
            opacity:    activeSlot === "b" && isActive ? 1 : 0,
            transition: "opacity 0.55s ease",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg,rgba(13,27,46,0.84) 0%,rgba(13,27,46,0.68) 100%)",
            opacity:    isActive ? 1 : 0,
            transition: "opacity 0.55s ease",
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-20">

        {/* Header row */}
        <div className="mb-14">
          <p
            className="text-[10px] uppercase tracking-[0.38em] font-semibold mb-3"
            style={{ color: "#cc0066" }}
          >
            Sectors We Serve
          </p>

          <div className="flex items-start justify-between flex-wrap gap-6">
            <h2
              className="font-extrabold tracking-tight leading-[0.9]"
              style={{
                fontSize:   "clamp(2.5rem, 6vw, 5rem)",
                color:      isActive ? "#ffffff" : "#0d1b2e",
                transition: "color 0.4s ease",
              }}
            >
              Industries
            </h2>

            {/* Tag panel — opacity + translateY (no maxWidth) */}
            <div
              style={{
                opacity:    panelIn ? 1 : 0,
                transform:  panelIn ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                minWidth:   260,
                pointerEvents: panelIn ? "auto" : "none",
              }}
            >
              {current && (
                <>
                  <p className="text-white font-semibold text-sm mb-3 leading-snug">
                    {current.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(204,0,102,0.16)",
                          border:          "1px solid rgba(204,0,102,0.32)",
                          color:           "#fda4af",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Grid — CSS handles per-card states, not React */}
        <div
          className={`ind-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`}
          style={{ border: `1px solid ${isActive ? "rgba(255,255,255,0.08)" : "#f1f5f9"}` }}
          data-dark={isActive}
          ref={(el) => { if (el) el.classList.toggle("dark", isActive); }}
        >
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className={`ind-card${hovered === i ? " active" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="label">{ind.title}</span>
              <span className="bar" />
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-[11px] tracking-widest uppercase"
          style={{
            color:      isActive ? "rgba(255,255,255,0.22)" : "#9ca3af",
            transition: "color 0.4s ease",
          }}
        >
          Hover any industry to explore →
        </p>
      </div>
    </section>
  );
}
