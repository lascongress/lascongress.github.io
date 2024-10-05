// src/components/congress/agendas-and-minutes/AgendasAndMinutes.js
"use client";

import React from "react";
import Link from "next/link";

// Card Component (from Section.js)
const Card = ({ date, year, day, description, link }) => {
  return (
    <Link href={link}>
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
    </Link>
  );
};

// Section Component (from Section.js)
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
            <Link href={linkItem.link} className="block p-4 rounded">
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

// MainContent Component (from MainContent.js)
const MainContent = () => {
  const commonsCards = [
    {
      date: "11",
      year: "2024",
      day: "Thursday 11 July 2024",
      description: "Latest House of Commons sitting",
      note: "You can also browse/find House of Commons Hansard content using the links below:",
      link: "https://drive.google.com/drive/folders/1VgvnvDOZpS7iLkC_fYC92Qqrw06gTIW6",
    },
  ];

  const lordsCards = [
    {
      date: "10",
      year: "2024",
      day: "Wednesday 10 July 2024",
      description: "Latest House of Lords sitting",
      note: "You can also browse/find House of Lords Hansard content using the links below:",
      link: "https://drive.google.com/drive/folders/1WOPS6BVzuCGRZntvDAzwxHJKAuyxRmJ5",
    },
  ];

  const commonsLinks = [
    {
      title: "Find All Minutes",
      description:
        "Browse the Commons sittings that have been recorded in Hansard.",
      link: "https://drive.google.com/drive/folders/1VgvnvDOZpS7iLkC_fYC92Qqrw06gTIW6",
    },
    {
      title: "Find Vote",
      description: "Find House of Commons debates by keyword and date.",
      link: "votes/house",
    },
  ];

  const lordsLinks = [
    {
      title: "Find All Minutes",
      description:
        "Browse the Commons sittings that have been recorded in Hansard.",
      link: "https://drive.google.com/drive/folders/1WOPS6BVzuCGRZntvDAzwxHJKAuyxRmJ5",
    },
    {
      title: "Find Vote",
      description: "Find House of Commons debates by keyword and date.",
      link: "votes/senate",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section
          title="House Agendas & Minutes"
          imgSrc="/images/congress/agendas-and-minutes/house-of-delegates.png"
          description="The latest House sitting recorded in Hansard is:"
          cards={commonsCards}
          links={commonsLinks}
        />
        <Section
          title="Senate Agendas & Minutes"
          imgSrc="/images/congress/agendas-and-minutes/senate.png"
          description="The latest House sitting recorded in Hansard is:"
          cards={lordsCards}
          links={lordsLinks}
        />
      </div>
    </div>
  );
};

export default MainContent;
