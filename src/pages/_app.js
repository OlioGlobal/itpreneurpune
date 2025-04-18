import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyFooter from "../../components/StickyFooter";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
}
