// src/app/congress/page.js
import Navbar from "../../components/global/Navbar";
import Header from "../../components/elections/homepage/Header";
import Announcement from "../../components/landing/Announcement";
import MainContent from "../../components/elections/homepage/Homepage";
import BreadCrumb from "../../components/elections/homepage/Breadcrumb";
import Footer from "../../components/global/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-200 flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <BreadCrumb />
      <div className="container mx-auto flex-grow">
        {/* <Announcement /> */}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
