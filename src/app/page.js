// src/app/page.js
import Navbar from "../components/Navbar";
import Header from "../components/landing/Header";
import Announcement from "../components/landing/Announcement";
import MainContent from "../components/landing/MainContent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-200 flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <div className="container mx-auto p-4 flex-grow">
        {/* <Announcement /> */}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
