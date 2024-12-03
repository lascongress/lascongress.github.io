// src/components/government/homepage/Homepage.js
import React from "react";
import Link from "next/link";
import Announcement from "./Announcement";

const LinkCard = ({ imageSrc, title, description, link, external }) => {
  return (
    // change the target to _blank if the link is external
    <a
      href={link}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200 flex flex-col h-80">
        {/* adjust the height in increments of +/- 8 */}
        <img
          src={imageSrc}
          alt={title}
          className="mb-4 w-full h-32 object-cover rounded"
        />
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <p className="flex-grow">{description}</p>
      </div>
    </a>
  );
};

const Resources = () => {
  const Resources = [
    {
      imageSrc: "/images/government/services.png",
      title: "Services",
      description:
        "Find our services that promote student accesibility, opportunity and experience",
      link: "/government/resources/services",
    },
    {
      imageSrc: "/images/government/student-run.png",
      title: "Community",
      description: "Search for resources made by the Lassonde community",
      link: "/government/resources/community",
    },

    {
      imageSrc: "/images/government/reports-and-documents.png",
      title: "Reports and Documents",
      description:
        "See our reports and documents concerning the future of student life and success",
      //link: "/government/reports-and-documents", - previous link to the page
      link: "https://drive.google.com/drive/folders/1R5QQI-FC_tQOVcOZm-cGnHWHNM_dVEWf",
      external: true, //Marking link as external
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Resources.map((link, index) => (
          <LinkCard
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
            link={link.link}
            external={link.external} //Passing the external prop
          />
        ))}
      </div>
    </section>
  );
};

const ResourceCard = ({ imageSrc, title, description, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200 flex flex-col h-80">
        {/* adjust the height in increments of +/- 8 */}
        <img
          src={imageSrc}
          alt={title}
          className="mb-4 w-full h-32 object-cover rounded"
        />
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <p className="flex-grow">{description}</p>
      </div>
    </Link>
  );
};

const AboutUs = () => {
  const AboutUs = [
    {
      imageSrc: "/images/government/ministry.png",
      title: "Ministry",
      description: "Learn more about the 2024-2025 ministers",
      link: "/government/about-us/ministry",
    },
    {
      imageSrc: "/images/government/lassonde-school.png",
      title: "Frequently Asked Questions",
      description:
        "Find answered questions about your undergraduate engineering student government",
      link: "/government/about-us/frequently-asked-questions",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AboutUs.map((link, index) => (
          <ResourceCard
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
            link={link.link}
          />
        ))}
      </div>
    </section>
  );
};

const NewsCard = ({ imageSrc, title, description, date, link }) => {
  return (
    <a
      href={link}
      className="block bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200"
    >
      <img
        src={imageSrc}
        alt={title}
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <p className="mb-2">{description}</p>
      <p className="text-gray-600 text-sm">{date}</p>
    </a>
  );
};

const News = () => {
  const newsItems = [
    {
      imageSrc: "/news/news1.png",
      title: "Bergeron Closed???",
      description: "Has the lack of funding eventually led to its closure?",
      date: "4 July 2024",
      link: "government/spotlight/bergeron-closed",
    },
    {
      imageSrc: "/news/news2.png",
      title: "Strike on Lassonde",
      description: "How has the strike affected Lassonde students?",
      date: "24 May 2024",
      link: "government/spotlight/strike-on-lassonde",
    },
    {
      imageSrc: "/news/news3.png",
      title: "Mental Health",
      description: "Taking care of your mental health!",
      date: "31 January 2024",
      link: "government/spotlight/mental-health",
    },
  ];

  return (
    <section className="bg-white p-4 mb-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Spotlight</h2>
        <a
          href="government/spotlight"
          className="text-blue-600 hover:underline"
        >
          View all news
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            date={item.date}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      <Announcement />
      <Resources />
      <br />
      <AboutUs />
      <br />
      <News />
    </div>
  );
};

export default MainContent;
