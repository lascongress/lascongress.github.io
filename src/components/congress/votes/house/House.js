// src/components/congress/votes/house/House.js
"use client";

import React from "react";

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
        <div className="flex justify-center mb-4"></div>
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
    {
      primaryInfo: "Pineapple on Pizza",
      number: "123",
      singleText: "Passed",
      date: "Division 160: held on 24 May 2024 at 12:27",
      valueA: "455",
      valueB: "789",
    },
    {
      primaryInfo: "Pineapple on Pizza",
      number: "123",
      singleText: "Passed",
      date: "Division 160: held on 24 May 2024 at 12:27",
      valueA: "455",
      valueB: "789",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <Section
          title="House Votes"
          imgSrc="/votes/ironwar.png"
          description="When a vote is held in the Commons the Speaker calls a division by announcing 'division, clear the lobbies'. MPs then vote on the topic being considered by walking through the Aye or No lobbies where they are counted by the tellers and their names are recorded."
          buttonLink="/congress"
          cards={houseCards}
        />
      </div>
    </div>
  );
};

export default MainContent;
