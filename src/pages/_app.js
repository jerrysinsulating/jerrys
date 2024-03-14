import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "../components/shared/Nav/nav.scss";
import Navigation from "@/components/shared/Nav/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
