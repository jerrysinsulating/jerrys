import "bootstrap/dist/css/bootstrap.min.css";
import "../components/shared/Nav/nav.scss";
import "../components/Hero/hero.scss";
import Navigation from "@/components/shared/Nav/Nav";
import CTA from "@/components/shared/CTA/CTA";
import Footer from "@/components/shared/Footer/Footer";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={mont.className}>
        <Navigation />
        <Component {...pageProps} />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
