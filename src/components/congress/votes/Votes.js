// src/components/congress/votes/Votes.js
"use client";

import React from "react";
import Link from "next/link";

const Card = ({
  primaryInfo,
  number,
  singleText,
  date,
  ayeVotes,
  noeVotes,
  abstainVotes,
  link,
  minuteslink,
}) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="text-xl font-bold mb-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-500"
          >
            {primaryInfo}
          </a>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex text-center flex-col">
              <div className="text-3xl font-bold">{number}</div>
              <div className="text-gray-600">Total Votes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-center">{singleText}</div>
              <div className="text-gray-600 text-center">{date}</div>
              <a
                href={minuteslink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                Access Meeting Minutes
              </a>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-2">
                <div className="text-gray-600 mr-2">Ayes</div>
                <div className="text-xl font-bold">{ayeVotes}</div>
              </div>
              <div className="flex items-center mb-2">
                <div className="text-gray-600 mr-2">Noes</div>
                <div className="text-xl font-bold">{noeVotes}</div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-600 mr-2">Abstain</div>
                <div className="text-xl font-bold">{abstainVotes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({
  title,
  imgSrc,
  description,
  buttonLabel,
  buttonLink = "/",
  cards,
}) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <p className="mb-4">{description}</p>
        <div className="flex justify-center mb-4">
          <Link href={buttonLink} className="w-full" passHref>
            <button className="bg-lassonde-blue text-white px-2 py-2 rounded w-full">
              {buttonLabel}
            </button>
          </Link>
        </div>
      </div>
      <div>
        {cards.map((card, index) => (
          <Card
            key={index}
            primaryInfo={card.primaryInfo}
            number={card.number}
            singleText={card.singleText}
            date={card.date}
            ayeVotes={card.ayeVotes}
            noeVotes={card.noeVotes}
            abstainVotes={card.abstainVotes}
            link={card.link}
            minuteslink={card.minuteslink}
          />
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  const houseCards = [
    {
      primaryInfo: "S. 001 - 1: OATH OF OFFICE ACT",
      number: "15",
      singleText: "Passed",
      date: "6th Meeting: held on 14 Nov 2024 at 6:00PM",
      ayeVotes: "15",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/102k81VwGFFMhZK0g53vkKysgEAQy5wnB/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0",
    },
  ];

  const senateCards = [
    {
      primaryInfo: "H.D 012 – 1: ACCESSIBILITY, COMPLAINTS AND INTERESTS ACT",
      number: "3",
      singleText: "Passed",
      date: "10th Meeting: held on 27 Nov 2024 at 8:15PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1IMpGSZoqNfkvr2fSgoiqsBmLo2ki26cw/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1UPL-aUgPxgsniX_e_OLk0iELypT2kvxydwv6ZQrTKBo/edit?tab=t.0",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section
          title="House Votes"
          imgSrc="/images/congress/votes/house-of-delegates.png"
          description="When a vote is held in the House of Delegates, the Speaker calls the members individually to vote on the topic being considered by walking through the Aye or No lobbies where they are counted and their names are recorded."
          buttonLabel="Find All House Votes"
          buttonLink="/congress/votes/house"
          cards={houseCards}
        />
        <Section
          title="Senate Votes"
          imgSrc="/images/congress/votes/senate.png"
          description="When a vote is held in the Senate, the Speaker calls the members individually to vote on the topic being considered by walking through the Aye or No lobbies where they are counted and their names are recorded."
          buttonLabel="Find All Senate Votes"
          buttonLink="/congress/votes/senate"
          cards={senateCards}
        />
      </div>
    </div>
  );
};

export default MainContent;
