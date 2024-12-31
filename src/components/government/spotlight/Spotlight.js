// src/components/spotlight/Spotlight.js
"use client";

import React from "react";

const Card = ({ title, description, imageSrc, date, link }) => {
  return (
    <a
      href={link}
      className="block bg-white p-4 rounded shadow mb-4 hover:bg-gray-100 transition duration-200"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">{date}</p>
        <svg
          className="h-5 w-5 text-gray-800"
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
    </a>
  );
};

const Section = ({ title, description, buttonLabel, cards, news }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
      <div>
        {cards &&
          cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          ))}
        {news &&
          news.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              date={item.date}
              link={item.link}
            />
          ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  const latestNews = [
    {
      imageSrc: "/news/news.png",
      title: "New Changes",
      description: "Learn what LSC has done over the winter break!",
      date: "31 December 2024",
      link: "/government/spotlight/new-changes",
    },
    {
      imageSrc: "/logos/logo-black.png",
      title: "LSC Upcoming General Election",
      description: "Find more about elections in your student government",
      date: "13 December 2024",
      link: "/government/spotlight/elections",
    },
    // {
    //   imageSrc: "/news/news3.png",
    //   title: "Mental Health",
    //   description: "Taking care of your mental health!",
    //   date: "31 January 2024",
    //   link: "/government/spotlight/mental-health",
    // },
  ];

  return (
    <div className="container mx-auto p-4">
      <Section
        title="Spotlight"
        description="The latest news across Lassonde."
        news={latestNews}
      />
    </div>
  );
};

export default MainContent;
