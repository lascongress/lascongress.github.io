// src/components/congress/meetings/Meetings.js
"use client";

import React from "react";

const Card = ({ time, title, date, committees, location, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white p-4 rounded shadow mb-4 hover:bg-gray-100 transition duration-200">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xl font-bold text-gray-800">{time}</div>
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
        <p className="text-gray-600">{date}</p>
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
              time={event.time}
              title={event.title}
              date={event.date}
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
      time: "Aug 13th 2024",
      title: "Advocacy Commitee Meeting",
      date: "Time: 5:30pm",
      committees: "Members: Advocacy Committee",
      location: "Location: Discord",
      link: "https://discord.gg/ZrVqTKhDHr?event=1271654755000913970",
    },
    {
      time: "Aug 16th 2024",
      title: "LSC Government Working Session",
      date: "Time: 2:00pm",
      committees: "Members: Government",
      location: "Location: Discord",
      link: "https://discord.gg/ntN69q9HfK?event=1268024577745748159",
    },
    {
      time: "Aug 18th 2024",
      title: "Biweekly Senate Meetings",
      date: "Time: 6:30pm",
      committees: "Members: Senate",
      location: "Location: Discord",
      link: "https://discord.gg/ZrVqTKhDHr?event=1265801755250130944",
    },
    {
      time: "Aug 30th 2024",
      title: "House of Delegates Meeting #3",
      date: "Time: 6:00pm",
      committees: "Members: House",
      location: "Location: Discord",
      link: "https://discord.gg/ZrVqTKhDHr?event=1271329331066703934",
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4">
        <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Meetings</h2>
          <p className="text-lg text-gray-700">
            The UK public elects 650 Members of Parliament (MPs) to represent
            their interests and concerns in the House of Commons. MPs consider
            and propose new laws, and can scrutinise government policies by
            asking ministers questions about current issues either in the
            Commons Chamber or in Committees.
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
