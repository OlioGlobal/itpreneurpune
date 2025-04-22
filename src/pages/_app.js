import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyFooter from "../../components/StickyFooter";
import Head from "next/head";
export default function App({ Component, pageProps }) {
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
        <StickyFooter />
      </div>
    </>
  );
}
