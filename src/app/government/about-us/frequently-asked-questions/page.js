// src/app/government/resources/lassonde-school/page.js
import Navbar from "../../../../components/global/Navbar";
import Header from "../../../../components/global/Header";
import Announcement from "../../../../components/landing/Announcement";
import MainContent from "../../../../components/government/about-us/frequently-asked-questions/FAQ";
import BreadCrumb from "../../../../components/government/about-us/frequently-asked-questions/Breadcrumb";
import Footer from "../../../../components/global/Footer";

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