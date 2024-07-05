import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MainContent from "../components/futureUse/MainContent";
import Announcement from "../components/homepage/Announcement";
import FeaturedNews from "../components/homepage/news/FeaturedNews";
import QuickLinks from "../components/homepage/quicklinks/QuickLinks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-200">
      <Head>
        <title>Lassonde Student Congress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <div className="container mx-auto p-4">
        {/* <Announcement /> */}
        <FeaturedNews />
        <QuickLinks />
        {/* <MainContent /> */}
      </div>
      <Footer />
    </div>
  );
}
