import Link from "next/link";

export const metadata = {
  title: "Blog — Creators Touch Global",
  description: "Insights, tips and stories from the Creators Touch team.",
};

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
  {
    tag:     "Digital Marketing",
    date:    "February 10, 2026",
    title:   "How Small Businesses in Vijayawada Are Winning Online",
    excerpt: "Local businesses are seeing real results with targeted digital campaigns. Here's what's working right now.",
    img:     "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    read:    "3 min read",
  },
  {
    tag:     "Video Production",
    date:    "January 25, 2026",
    title:   "Why Video Content Drives 3x More Engagement Than Static Posts",
    excerpt: "Video isn't just a trend — it's the dominant format across every platform. Here's how to use it strategically.",
    img:     "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    read:    "6 min read",
  },
  {
    tag:     "App Development",
    date:    "January 12, 2026",
    title:   "5 Signs Your Business Needs a Mobile App Right Now",
    excerpt: "If your customers are on mobile and your business isn't, you're leaving money on the table. Let's fix that.",
    img:     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    read:    "4 min read",
  },
  {
    tag:     "SEO",
    date:    "December 20, 2025",
    title:   "Local SEO in 2026: How to Rank #1 in Your City",
    excerpt: "Google Maps, local keywords, reviews — here's the complete playbook for dominating local search.",
    img:     "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
    read:    "5 min read",
  },
];

const CATEGORIES = ["All", "UI / UX Design", "Brand Strategy", "Digital Marketing", "Video Production", "App Development", "SEO"];

export default function BlogPage() {
  const [featured, ...rest] = BLOGS;

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-20 pb-14 px-4 text-center" style={{ backgroundColor: "#0d1b2e" }}>
        <p className="text-xs uppercase tracking-[0.35em] font-semibold mb-3" style={{ color: "#0977a8" }}>
          Our Blog
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Insights &amp; Ideas
        </h1>
        <p className="mt-4 text-white/50 text-base max-w-lg mx-auto">
          Tips, strategies and stories from the Creators Touch team — helping your brand grow.
        </p>
      </section>

      {/* ── Categories ── */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full cursor-pointer transition-colors"
              style={
                cat === "All"
                  ? { backgroundColor: "#0977a8", color: "#fff" }
                  : { backgroundColor: "#f3f4f6", color: "#374151" }
              }
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* ── Featured post ── */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: "#cc0066" }}>
            Featured
          </p>
          <article className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <div className="overflow-hidden h-64 lg:h-auto">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.22em] px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(204,0,102,0.08)", color: "#cc0066" }}
                >
                  {featured.tag}
                </span>
                <span className="text-xs text-gray-400">{featured.date}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0d1b2e] leading-snug mb-4 group-hover:text-[#0977a8] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{featured.read}</span>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#0977a8" }}>
                  Read More →
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* ── All posts grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rest.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-400 bg-white"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(204,0,102,0.07)", color: "#cc0066" }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-[#0d1b2e] leading-snug mb-3 text-base group-hover:text-[#0977a8] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">{post.read}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#cc0066" }}>
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Load more ── */}
        <div className="text-center mt-12">
          <button className="text-sm font-semibold px-8 py-3 rounded-full border-2 border-[#0977a8] text-[#0977a8] hover:bg-[#0977a8] hover:text-white transition-all duration-300">
            Load More Posts
          </button>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="py-16 px-4 text-center" style={{ backgroundColor: "#eef2fb" }}>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#0d1b2e]">
          Ready to Grow Your Brand?
        </h2>
        <p className="mt-3 text-[#0d1b2e]/60 max-w-md mx-auto text-base">
          Let&apos;s create something remarkable together.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-7 text-sm font-bold text-white px-8 py-3.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#0977a8" }}
        >
          Start a Project →
        </Link>
      </div>

    </main>
  );
}
