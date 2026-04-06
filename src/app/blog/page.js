import BlogListing from "@/src/features/blog/BlogListing";

export const metadata = {
  title:       "Blog — Creators Touch Global",
  description: "Strategies, stories, and perspectives on branding, digital marketing, video production, and web design from the Creators Touch team in Vijayawada.",
  openGraph: {
    title:       "Blog — Creators Touch Global",
    description: "Insights on branding, digital marketing, and creative strategy.",
    type:        "website",
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
