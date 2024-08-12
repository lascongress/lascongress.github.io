// src/components/congress/votes/house/MainContent.js
"use client";

import React from "react";
import Section from "./Section";

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
