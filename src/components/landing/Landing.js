// src/components/landing/Landing.js
import React from "react";
import Link from "next/link";

const LinkCard = ({ imageSrc, title, description, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200 flex flex-col h-auto">
        <img
          src={imageSrc}
          alt={title}
          className="mb-4 w-full h-36 object-cover rounded"
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

const Links = () => {
  const Links = [
    {
      imageSrc: "/images/landing/empty_government.png",
      title: "Government",
      description: "Find information about our services, resources and news!",
      link: "government",
    },
    {
      imageSrc: "/images/landing/empty_congress.png",
      title: "Congress",
      description: "Learn more about the laws and rules that govern us!",
      link: "congress",
    },
    {
      imageSrc: "/images/landing/empty_elections.png",
      title: "Elections",
      description: "Interested in joining your engineering student government?",
      link: "elections",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Links.map((link, index) => (
          <LinkCard
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

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <Announcement /> */}
      <Links />
    </div>
  );
};

export default MainContent;
