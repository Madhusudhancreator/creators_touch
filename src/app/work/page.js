import WorkPage from "@/src/features/work/WorkPage";

export const metadata = {
  title:       "Our Work — Creators Touch Global",
  description: "Live websites designed and built by Creators Touch Global — real projects for clients across healthcare, education, e-commerce, and more.",
  openGraph: {
    title:       "Our Work — Creators Touch Global",
    description: "Real projects, live on the web. See what we've built for our clients.",
    type:        "website",
  },
};

export default function Page() {
  return <WorkPage />;
}
