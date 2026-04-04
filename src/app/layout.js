import Footer   from "@/components/footer";
import Navbar   from "@/components/navbar";
import PageBlur from "@/src/components/PageBlur";
import "./global.css";

export const metadata = {
  title: "Creators Touch Global",
  description: "Creators Touch Global — Full-Stack Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageBlur>
          <Navbar />
          {children}
          <Footer />
        </PageBlur>
      </body>
    </html>
  );
}
