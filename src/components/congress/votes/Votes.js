// src/components/congress/votes/Votes.js
"use client";

import React from "react";
import Link from "next/link";

const Card = ({ primaryInfo, number, singleText, date, valueA, valueB }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="text-xl font-bold mb-2">{primaryInfo}</div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex text-center flex-col">
              <div className="text-3xl font-bold">{number}</div>
              <div className="text-gray-600">Total Votes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-center">{singleText}</div>
              <div className="text-gray-600 text-center">{date}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-2">
                <div className="text-gray-600 mr-2">Ayes</div>
                <div className="text-xl font-bold">{valueA}</div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-600 mr-2">Noes</div>
                <div className="text-xl font-bold">{valueB}</div>
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
            valueA={card.valueA}
            valueB={card.valueB}
          />
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  const houseCards = [
    {
      primaryInfo: "Pineapple on Pizza",
      number: "123",
      singleText: "Passed",
      date: "Division 160: held on 24 May 2024 at 12:27",
      valueA: "455",
      valueB: "789",
    },
  ];

  const senateCards = [
    {
      primaryInfo: "Is Lassy a Zebra?",
      number: "789",
      singleText: "Rejected",
      date: "Division 1: held on 23 May 2024",
      valueA: "101",
      valueB: "112",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section
          title="House Votes"
          imgSrc="/images/congress/votes/house-of-delegates.png"
          description="When a vote is held in the Commons the Speaker calls a division by announcing 'division, clear the lobbies'. MPs then vote on the topic being considered by walking through the Aye or No lobbies where they are counted by the tellers and their names are recorded."
          buttonLabel="Find All House Votes"
          buttonLink="/congress/votes/house"
          cards={houseCards}
        />
        <Section
          title="Senate Votes"
          imgSrc="/images/congress/votes/senate.png"
          description="Any member of the House of Lords can ask to 'test the opinion of the House' by pushing a question to a vote. When this happens, the Lord Speaker announces a division and members vote either Content or Not Content to determine the result."
          buttonLabel="Find All Senate Votes"
          buttonLink="/congress/votes/senate"
          cards={senateCards}
        />
      </div>
    </div>
  );
};

export default MainContent;
