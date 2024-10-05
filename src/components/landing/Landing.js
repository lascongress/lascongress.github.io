// src/components/landing/Landing.js
import React from "react";
// import Announcement from "./Announcement";
import Link from "next/link";

const LinkCard = ({ imageSrc, title, description, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200 flex flex-col h-auto">
        {/* adjust the height in increments of +/- 8 */}
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
      description: "Elected to check draft laws and challenge the.",
      link: "government",
    },
    {
      imageSrc: "/images/landing/empty_congress.png",
      title: "Congress",
      description:
        "Elected to make laws and check the work of the Secretariat.",
      link: "congress",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
