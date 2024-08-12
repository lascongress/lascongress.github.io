// src/components/congress/agendas-and-minutes/MainContent.js
"use client";

import React from "react";
import Section from "./Section";

const MainContent = () => {
  const commonsCards = [
    {
      date: "11",
      year: "2024",
      day: "Thursday 11 July 2024",
      description: "Latest House of Commons sitting",
      note: "You can also browse/find House of Commons Hansard content using the links below:",
      link: "https://drive.google.com/drive/folders/1VgvnvDOZpS7iLkC_fYC92Qqrw06gTIW6",
    },
  ];

  const lordsCards = [
    {
      date: "10",
      year: "2024",
      day: "Wednesday 10 July 2024",
      description: "Latest House of Lords sitting",
      note: "You can also browse/find House of Lords Hansard content using the links below:",
      link: "https://drive.google.com/drive/folders/1WOPS6BVzuCGRZntvDAzwxHJKAuyxRmJ5",
    },
  ];

  const commonsLinks = [
    {
      title: "Find All Minutes",
      description:
        "Browse the Commons sittings that have been recorded in Hansard.",
      link: "https://drive.google.com/drive/folders/1VgvnvDOZpS7iLkC_fYC92Qqrw06gTIW6",
    },
    {
      title: "Find Vote",
      description: "Find House of Commons debates by keyword and date.",
      link: "votes/house",
    },
  ];

  const lordsLinks = [
    {
      title: "Find All Minutes",
      description:
        "Browse the Commons sittings that have been recorded in Hansard.",
      link: "https://drive.google.com/drive/folders/1WOPS6BVzuCGRZntvDAzwxHJKAuyxRmJ5",
    },
    {
      title: "Find Vote",
      description: "Find House of Commons debates by keyword and date.",
      link: "votes/senate",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section
          title="House Agendas & Minutes"
          imgSrc="/votes/ironwar.png"
          description="The latest House sitting recorded in Hansard is:"
          cards={commonsCards}
          links={commonsLinks}
        />
        <Section
          title="Senate Agendas & Minutes"
          imgSrc="/votes/carwar.png"
          description="The latest House sitting recorded in Hansard is:"
          cards={lordsCards}
          links={lordsLinks}
        />
      </div>
    </div>
  );
};

export default MainContent;
