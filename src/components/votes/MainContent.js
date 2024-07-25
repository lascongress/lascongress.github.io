// src/components/votes/MainContent.js
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
          imgSrc="/votes/ironwar.png"
          description="When a vote is held in the Commons the Speaker calls a division by announcing 'division, clear the lobbies'. MPs then vote on the topic being considered by walking through the Aye or No lobbies where they are counted by the tellers and their names are recorded."
          buttonLabel="Find House of Commons votes"
          cards={houseCards}
        />
        <Section
          title="Senate Votes"
          imgSrc="/votes/carwar.png"
          description="Any member of the House of Lords can ask to 'test the opinion of the House' by pushing a question to a vote. When this happens, the Lord Speaker announces a division and members vote either Content or Not Content to determine the result."
          buttonLabel="Find House of Lords votes"
          cards={senateCards}
        />
      </div>
    </div>
  );
};

export default MainContent;
