import Link from "next/link";
import { POSTS } from "@/src/features/blog/posts";

const BLOGS = POSTS.slice(0, 2);


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
          <Link
            href="/blog"
            className="text-[11px] uppercase tracking-[0.25em] font-semibold pb-0.5"
            style={{
              color:         "#0977a8",
              borderBottom:  "1px solid #0977a8",
            }}
          >
            View all posts →
          </Link>
        </div>

        {/* 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {BLOGS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-400 bg-white block"
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
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
