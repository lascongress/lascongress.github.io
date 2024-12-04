// src/app/government/ministry/page.js
import Navbar from "../../../../../components/global/Navbar";
import Header from "../../../../../components/global/Header";
// import Announcement from "../../../../components/landing/Announcement";
import MainContent from "../../../../../components/government/about-us/ministry/internal-affairs/InternalAffairs";
import BreadCrumb from "../../../../../components/government/about-us/ministry/internal-affairs/Breadcrumb";
import Footer from "../../../../../components/global/Footer";

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
