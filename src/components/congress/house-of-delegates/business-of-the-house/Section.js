// src/components/congress/house-of-delegates/business-of-the-house/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = () => {
  const section = [
    {
      imageSrc: "/images/batman.png",
      title: "Agendas & Minutes",
      description: "Read transcripts of debates.",
      link: "/congress/agendas-and-minutes",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Votes",
      description: "Find vote results from the house.",
      link: "/congress/votes",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          House of Commons
        </h2>
        <p className="text-lg text-gray-700">
          The UK public elects 650 Members of Parliament (MPs) to represent
          their interests and concerns in the House of Commons. MPs consider and
          propose new laws, and can scrutinise government policies by asking
          ministers questions about current issues either in the Commons Chamber
          or in Committees.
        </p>
        <br />
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Other information
        </h2>
        <p className="text-lg text-gray-700">
          The UK public elects 650 Members of Parliament (MPs) to represent
          their interests and concerns in the House of Commons. MPs consider and
          propose new laws, and can scrutinise government policies by asking
          ministers questions about current issues either in the Commons Chamber
          or in Committees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.map((link, index) => (
          <Card
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
            link={link.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
