// src/components/congress/house-of-delegates/business-of-the-house/BusinessOfTheHouse.js
import React from "react";
import Link from "next/link";

const Card = ({ imageSrc, title, description, link }) => {
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

const Section = () => {
  const section = [
    {
      imageSrc:
        "/images/congress/house-of-delegates/business-of-the-house/agendas-and-minutes.png",
      title: "Agendas & Minutes",
      description: "Read transcripts of debates.",
      link: "/congress/agendas-and-minutes",
    },
    {
      imageSrc:
        "/images/congress/house-of-delegates/business-of-the-house/votes.png",
      title: "Votes",
      description: "Find vote results from the house.",
      link: "/congress/votes",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          House of Commons
        </h2>
        <p className="text-lg text-gray-700">
          Students from different programs in Lassonde come together to argue,
          decide and vote on policies/laws the dictact student life and growth.
        </p>
        <br />
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Other information
        </h2>
        <p className="text-lg text-gray-700">
          We have seats availible for Digital Media, Digital Technologies and
          Lassonde/Bethune Representative!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.map((link, index) => (
          <Card
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
    <main className="container mx-auto p-4">
      <Section />
    </main>
  );
};

export default MainContent;
