const BLOGS = [
  {
    tag:     "UI / UX Design",
    date:    "March 18, 2026",
    title:   "Why First Impressions Online Are Worth More Than a Billboard",
    excerpt: "Your website is your hardest-working salesperson — available 24/7, never late, never tired. Here's how to make it count.",
    img:     "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    read:    "4 min read",
  },
  {
    tag:     "Brand Strategy",
    date:    "February 28, 2026",
    title:   "From Logo to Legacy: Building a Brand That People Remember",
    excerpt: "A logo is just the beginning. Discover how cohesive brand systems create trust, loyalty and long-term recognition.",
    img:     "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&q=80",
    read:    "5 min read",
  },
];

/* ── Star SVG ─────────────────────────────────────────────── */
function Stars({ filled = 5 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < filled ? "#f59e0b" : "#e5e7eb"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Google G SVG ─────────────────────────────────────────── */
function GoogleG() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white">

      {/* ── Blog cards ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 pt-20 pb-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.38em] font-semibold mb-2"
              style={{ color: "#cc0066" }}>
              Latest Insights
            </p>
            <h2 className="font-extrabold tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0d1b2e" }}>
              From the Blog
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.25em] font-semibold pb-0.5"
            style={{
              color:         "#0977a8",
              borderBottom:  "1px solid #0977a8",
            }}
          >
            View all posts →
          </a>
        </div>

        {/* 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {BLOGS.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-400 bg-white"
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ height: 220 }}>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(204,0,102,0.07)", color: "#cc0066" }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-gray-400">{post.date}</span>
                </div>

                <h3
                  className="font-bold leading-snug mb-3 group-hover:text-[#0977a8] transition-colors duration-300"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#0d1b2e" }}
                >
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 tracking-wide">{post.read}</span>
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] group-hover:gap-2 transition-all"
                    style={{ color: "#cc0066" }}
                  >
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── CTA + Google Review banner ───────────────────────── */}
      <div style={{ backgroundColor: "#eef2fb" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

            {/* Left: headline */}
            <div className="flex-1">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-4"
                style={{ color: "#0977a8" }}
              >
                Creative Touch Global
              </p>
              <h2
                className="font-extrabold tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", color: "#0d1b2e" }}
              >
                Creating Powerful,
                <br />
                Results-Driven Digital
                <br />
                Experiences
              </h2>
            </div>

            {/* Right: description + CTA + Google badge */}
            <div className="flex-1 flex flex-col gap-7">
              <p className="text-base text-gray-600 leading-relaxed max-w-md">
                Since 2018, Creative Touch has been designing and developing
                high-impact digital experiences for brands across India and
                beyond. Ready to become our next success story?
              </p>

              {/* CTA + Google badge row */}
              <div className="flex flex-wrap items-center gap-5">

                {/* CTA button */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#0977a8" }}
                >
                  Start a Project
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                {/* Google review badge */}
                <div className="flex items-center gap-3">
                  <GoogleG />
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-extrabold text-sm" style={{ color: "#0d1b2e" }}>4.9/5</span>
                      <Stars filled={5} />
                    </div>
                    <p className="text-[11px] text-gray-500 leading-none">Based on 80+ Reviews</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
