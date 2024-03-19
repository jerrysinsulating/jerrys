import "bootstrap/dist/css/bootstrap.min.css";
import "../components/shared/Nav/nav.scss";
import "../components/Hero/hero.scss";
import Navigation from "@/components/shared/Nav/Nav";
import CTA from "@/components/shared/CTA/CTA";
import Footer from "@/components/shared/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <CTA />
      <Footer />
    </>
  );
}
