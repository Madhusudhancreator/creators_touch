import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { POSTS } from "@/src/features/blog/posts";

/* ── Static params for all slugs ──────────────────────────────── */
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

/* ── Per-post SEO metadata ─────────────────────────────────────── */
export function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title:       `${post.title} — Creators Touch Blog`,
    description: post.excerpt,
    openGraph: {
      title:       post.title,
      description: post.excerpt,
      images:      [{ url: post.img, width: 1200, height: 630, alt: post.title }],
      type:        "article",
      publishedTime: post.date,
    },
    twitter: {
      card:        "summary_large_image",
      title:       post.title,
      description: post.excerpt,
      images:      [post.img],
    },
  };
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function BlogPostPage({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Prev / next navigation
  const currentIndex = POSTS.findIndex((p) => p.slug === params.slug);
  const prev = POSTS[currentIndex - 1] ?? null;
  const next = POSTS[currentIndex + 1] ?? null;

  return (
    <main style={{ backgroundColor: "#0d1b2e" }}>

      {/* ── Hero image + title ───────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(360px, 55vh, 620px)" }}>
        <img
          src={post.img}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "scale(1.04)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e] via-[#0d1b2e]/50 to-transparent" />

        {/* Back link */}
        <div className="absolute top-24 left-6 sm:left-10 z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-white transition-colors tracking-widest uppercase"
          >
            <ArrowLeft size={13} />
            All Posts
          </Link>
        </div>

        {/* Title block at bottom of hero */}
        <div className="absolute inset-x-0 bottom-0 px-6 sm:px-10 pb-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(9,119,168,0.85)", color: "#fff" }}
            >
              {post.tag}
            </span>
            <span className="text-white/40 text-xs">{post.date}&ensp;·&ensp;{post.read}</span>
          </div>
          <h1
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.6rem)" }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────── */}
      <article className="max-w-2xl mx-auto px-6 sm:px-8 py-14">

        {/* Lead / excerpt */}
        <p
          className="text-lg text-white/70 leading-relaxed border-l-2 pl-5 mb-10"
          style={{ borderColor: "#0977a8" }}
        >
          {post.excerpt}
        </p>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-6">
          {post.body.map((para, i) => (
            <p key={i} className="text-white/60 leading-[1.85] text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 mb-10" />

        {/* Tags + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(9,119,168,0.15)", color: "#0977a8" }}
          >
            {post.tag}
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0977a8" }}
          >
            Start a Project <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>
      </article>

      {/* ── Prev / Next navigation ───────────────────────────────── */}
      {(prev || next) && (
        <nav
          className="max-w-4xl mx-auto px-6 sm:px-8 pb-16 grid grid-cols-1 sm:grid-cols-2 gap-4"
          aria-label="Post navigation"
        >
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group relative overflow-hidden rounded-2xl flex flex-col justify-end p-5 h-36"
            >
              <img
                src={prev.img}
                alt={prev.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/65" />
              <div className="relative z-10">
                <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">← Previous</p>
                <p className="text-white text-sm font-semibold leading-snug line-clamp-2">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group relative overflow-hidden rounded-2xl flex flex-col justify-end p-5 h-36"
            >
              <img
                src={next.img}
                alt={next.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/65" />
              <div className="relative z-10 text-right">
                <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Next →</p>
                <p className="text-white text-sm font-semibold leading-snug line-clamp-2">{next.title}</p>
              </div>
            </Link>
          ) : <div />}
        </nav>
      )}

    </main>
  );
}
