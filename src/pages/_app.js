import "@/styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyFooter from "../../components/StickyFooter";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/webp" href="/fav.webp" />
        <title>
          iTpreneur &#8211; IT Classes in Pune, IT Course in Pune, IT Training
          Institute In Pune
        </title>
      </Head>

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
