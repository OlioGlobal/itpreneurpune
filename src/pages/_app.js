import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyFooter from "../../components/StickyFooter";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <StickyFooter />
    </>
  );
}
