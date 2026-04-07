import AboutPage from "@/src/features/about/AboutPage";

export const metadata = {
  title:       "About Us — Creators Touch Global",
  description: "Learn about Creators Touch Global — a full-service creative agency based in Vijayawada, India, helping brands grow through strategy, design, and digital marketing.",
  openGraph: {
    title:       "About Us — Creators Touch Global",
    description: "Strategy. Design. Growth. One creative team, fully invested in your success.",
    type:        "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
