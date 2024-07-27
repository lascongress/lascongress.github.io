// src/app/news/mental-health/page.js
import Head from "next/head";
import Navbar from "../../../../components/Navbar";
import Header from "../../../../components/Header";
import MainContent from "../../../../components/congress/redacted-news/articles/mental-health";
// import Announcement from "../components/homepage/Announcement";
import Footer from "../../../../components/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-200 flex flex-col min-h-screen">
      <Head>
        <title>Lassonde Student Congress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <div className="container mx-auto p-4 px-8 flex-grow">
        {/* <Announcement /> */}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}