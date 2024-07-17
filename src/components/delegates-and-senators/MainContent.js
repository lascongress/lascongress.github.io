// src/components/MainContent.js
"use client";

import React from "react";
import Section from "./Section";

const MainContent = () => {
  const houseCards = [
    {
      title: "Find MPs",
      description: "View the make up of House of Commons parties.",

      imgSrc: "/images/sups.png",
    },
    {
      title: "State of the parties",
      description: "View the make up of House of Commons parties.",
      imgSrc: "/images/sups.png",
    },
    {
      title: "Find constituencies",
      description:
        "View constituencies, and filter by name, location, and postcode.",
      imgSrc: "/images/sups.png",
    },
    {
      title: "Explore UK regions",
      description:
        "View constituencies, and filter by name, location, and postcode.",
      imgSrc: "/images/sups.png",
    },
  ];

  const senateCards = [
    {
      title: "Find Lords",
      description: "View the make up of House of Lords parties.",
      imgSrc: "/images/spidey.png",
    },
    {
      title: "State of the parties",
      description: "View the make up of House of Lords parties.",
      imgSrc: "/images/spidey.png",
    },
    {
      title: "Find constituencies",
      description:
        "View constituencies, and filter by name, location, and postcode.",
      imgSrc: "/images/spidey.png",
    },
    {
      title: "Explore UK regions",
      description:
        "View constituencies, and filter by name, location, and postcode.",
      imgSrc: "/images/spidey.png",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section
          title="House of Commons"
          imgSrc="/votes/carwar.png"
          description="View current and former House of Commons MPs, and filter based on name, location, party and gender."
          buttonLabel="Find more Commons info"
          cards={houseCards}
        />
        <Section
          title="House of Lords"
          imgSrc="/votes/ironwar.png"
          description="View current and former House of Lords Members, and filter based on name, location, party and gender."
          buttonLabel="Find more Lords info"
          cards={senateCards}
        />
      </div>
    </div>
  );
};

export default MainContent;
