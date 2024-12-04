// src/components/congress/meetings/Meetings.js
"use client";

import React from "react";

const Card = ({ date, title, time, committees, location, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white p-4 rounded shadow mb-4 hover:bg-gray-100 transition duration-200">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xl font-bold text-gray-800">{date}</div>
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
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{time}</p>
        <p className="text-gray-600">{committees}</p>
        <p className="text-gray-600">{location}</p>
      </div>
    </a>
  );
};

const Section = ({ title, description, buttonLabel, cards, events }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {description && <p className="mb-4">{description}</p>}
        {buttonLabel && (
          <div className="flex justify-center mb-4">
            <button className="bg-lassonde-blue text-white px-4 py-2 rounded w-full">
              {buttonLabel}
            </button>
          </div>
        )}
      </div>
      <div>
        {cards &&
          cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              link={card.link}
            />
          ))}
        {events &&
          events.map((event, index) => (
            <Card
              key={index}
              date={event.date}
              title={event.title}
              time={event.time}
              committees={event.committees}
              location={event.location}
              link={event.link}
            />
          ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  const leftSideCards = [
    {
      title: "Find Our Discord",
      link: "https://discord.gg/ntN69q9HfK",
    },
    {
      title: "Find Agendas & Minutes",
      link: "/congress/agendas-and-minutes",
    },
    {
      title: "Find Votes",
      link: "/congress/votes",
    },
  ];

  const rightSideEvents = [
    {
      date: "Dec 10th 2024",
      title: "Bi-weekly: Cabinet Meeting",
      time: "6:00pm",
      committees: "Executive Cabinet",
      location: "Location: Discord",
      link: "https://discord.com/events/1205712080385351710/1301302258696458240",
    },
    {
      date: "Dec 11th 2024",
      title: "Bi-weekly: Senate Meetings",
      time: "8:15pm",
      committees: "Members: Advocacy Committee",
      location: "Location: Discord",
      link: "https://discord.com/events/1205712080385351710/1306388075634753536",
    },
    {
      date: "Dec 24th 2024",
      title: "Bi-weekly: Cabinet Meeting",
      time: "6:00pm",
      committees: "Executive Cabinet",
      location: "Location: Discord",
      link: "https://discord.com/events/1205712080385351710/1301302258696458240",
    },
    {
      date: "Dec 25th 2024",
      title: "Bi-weekly: Senate Meetings",
      time: "8:15pm",
      committees: "Members: Advocacy Committee",
      location: "Location: Discord",
      link: "https://discord.com/events/1205712080385351710/1306388075634753536",
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4">
        <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Meetings</h2>
          <p className="text-lg text-gray-700">
            Find all our meetings here! If you want to learn more, join our
            discord!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <Section title="Learn More" cards={leftSideCards} />
        </div>
        <div className="md:col-span-2">
          <Section title="Upcoming Events" events={rightSideEvents} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
