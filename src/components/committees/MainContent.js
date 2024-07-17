// src/components/MainContent.js
"use client";

import React from "react";
import Section from "./Section";

const MainContent = () => {
  const leftSideCards = [
    {
      title: "Find a committee",
      description: "A to Z list of all current committees by name.",
      buttonLabel: "Find a committee",
    },
    {
      title: "Find an inquiry",
      description:
        "List of all current inquiries by date opened or submission deadline.",
      buttonLabel: "Find an inquiry",
    },
  ];

  const rightSideEvents = [
    {
      time: "16:00",
      title: "Formal meeting (private meeting)",
      date: "24 July 2024 - 4pm to 5:30pm",
      committees: "Committees › Audit and Risk Assurance Committee (Lords)",
      location: "Room 1, Palace of Westminster",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <Section title="" cards={leftSideCards} />
          <Section
            title=""
            cards={[
              {
                title: "Accepting written evidence",
                buttonLabel: "Accepting written evidence",
              },
              {
                title: "Accepting petitions",
                buttonLabel: "Accepting petitions",
              },
            ]}
          />
        </div>
        <div className="md:col-span-2">
          <Section
            title="Upcoming events - Wednesday 24 July 2024"
            events={rightSideEvents}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
