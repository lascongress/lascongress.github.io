// src/components/congress/votes/senate/MainContent.js
"use client";

import React from "react";
import Section from "./Section";

const MainContent = () => {
  const senateCards = [
    {
      primaryInfo: "Is Lassy a Zebra?",
      number: "789",
      singleText: "Rejected",
      date: "Division 1: held on 23 May 2024",
      valueA: "101",
      valueB: "112",
    },
    {
      primaryInfo: "Is Lassy a Zebra?",
      number: "789",
      singleText: "Rejected",
      date: "Division 1: held on 23 May 2024",
      valueA: "101",
      valueB: "112",
    },
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
      <div className="grid grid-cols-1 gap-4">
        <Section
          title="Senate Votes"
          imgSrc="/votes/ironwar.png"
          description="When a vote is held in the Commons the Speaker calls a division by announcing 'division, clear the lobbies'. MPs then vote on the topic being considered by walking through the Aye or No lobbies where they are counted by the tellers and their names are recorded."
          buttonLink="/congress"
          cards={senateCards}
        />
      </div>
    </div>
  );
};

export default MainContent;
