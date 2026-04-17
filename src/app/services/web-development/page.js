import WebDevelopmentPage from "@/src/features/services/WebDevelopmentPage";

export const metadata = {
  title:       "Web Development — Creators Touch Global",
  description: "We design and build websites that look exceptional, load fast, and convert visitors into customers. UI/UX, Next.js, CMS, e-commerce and more.",
  openGraph: {
    title:       "Web Development — Creators Touch Global",
    description: "Beautiful websites built to perform, engage, and convert.",
    type:        "website",
  },
};

export default function Page() {
  return <WebDevelopmentPage />;
}
