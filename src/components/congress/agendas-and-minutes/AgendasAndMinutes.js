// src/components/congress/agendas-and-minutes/AgendasAndMinutes.js
"use client";

import React from "react";
import Link from "next/link";

const Card = ({ date, year, day, description, link, external }) => {
  return (
    <a
      href={link}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <div className="bg-white p-6 rounded shadow mb-6">
        <div className="border-l-4 border-neutral-600 pl-4">
          <div className="flex items-center mb-4">
            <div className="bg-white p-4 rounded-r flex-grow">
              <p className="text-lg font-bold">{day}</p>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const Section = ({ title, imgSrc, description, cards, links }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <p className="mb-4">{description}</p>
      <div className="mb-4 border-b-2 border-gray-200">
        {cards.map((card, index) => (
          <Card
            key={index}
            date={card.date}
            year={card.year}
            day={card.day}
            description={card.description}
            link={card.link}
            external={card.external} // external prop
          />
        ))}
      </div>
      <p className="mb-4">{cards[0]?.note}</p>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {links.map((linkItem, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200"
          >
            <Link
              href={linkItem.link}
              target={linkItem.external ? "_blank" : "_self"} //added target prop
              rel={linkItem.external ? "noopener noreferrer" : undefined} //added rel prop
              className="block p-4 rounded"
            >
              <div className="flex items-center">
                <div>
                  <p className="text-lg font-bold">{linkItem.title}</p>
                  <p className="text-gray-600">{linkItem.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  const commonsCards = [
    {
      date: "11",
      year: "2024",
      day: "Thursday 14 November 2024",
      description: "Latest House of Delegates Meeting",
      note: "You can search for previous House Agendas and Minutes using the links below:",
      link: "https://drive.google.com/drive/folders/1o8VT8qwHS69hPNA0aegkMtk_uQ-BRXHa",
      external: true, // Mark as external link
    },
  ];

  const lordsCards = [
    {
      date: "10",
      year: "2024",
      day: "Wednesday 27 November 2024",
      description: "Latest Senate Meeting",
      note: "You can search for previous Senate Agendas and Minutes using the links below:",
      link: "https://drive.google.com/drive/folders/14IR2JsP8qkqXaqsPTSMRhjD20y8kuo5Y",
      external: true, // Mark as external link
    },
  ];

  const commonsLinks = [
    {
      title: "Find All Minutes",
      description:
        "Browse the House meetings that have been recorded in Congress.",
      link: "https://drive.google.com/drive/folders/1-Iz9kwWyA4k-letRkeuL0v9TU7p8DJ-z",
      external: true, // Mark as external link
    },
    {
      title: "Find Vote",
      description: "Find all the House votes.",
      link: "votes/house",
    },
  ];

  const lordsLinks = [
    {
      title: "Find All Minutes",
      description:
        "Browse the Senate meetings that have been recorded in Congress.",
      link: "https://drive.google.com/drive/folders/1H8vFdyr4hOvWbEDJ7s01hxItQqKoayfR",
      external: true, // Mark as external link
    },
    {
      title: "Find Vote",
      description: "Find all the Senate votes.",
      link: "votes/senate",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section
          title="House Agendas & Minutes"
          imgSrc="/images/congress/agendas-and-minutes/house-of-delegates.png"
          description="The latest House of Delegates meeting recorded in Congress is:"
          cards={commonsCards}
          links={commonsLinks}
        />
        <Section
          title="Senate Agendas & Minutes"
          imgSrc="/images/congress/agendas-and-minutes/senate.png"
          description="The latest Senate meeting recorded in Congress is:"
          cards={lordsCards}
          links={lordsLinks}
        />
      </div>
    </div>
  );
};

export default MainContent;
