// src/components/congress/senate/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = () => {
  const section = [
    {
      imageSrc: "/images/batman.png",
      title: "Business of the Senate",
      description:
        "Keep up to date with the business of the Senate by referring to our Agenda & Minutes, Votes and other communications.",
      link: "/congress/senate/business-of-the-senate",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Composition of the Senate",
      description:
        "The Senate may establish ad-hoc (select) committees to study issues, bills & resolutions or any other matters of interest.",
      link: "/congress/senate/composition-of-the-senate",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Committees",
      description:
        "The Senate may establish ad-hoc (select) committees to study issues, bills & resolutions or any other matters of interest.",
      link: "/congress/committees",
    },
    {
      imageSrc: "/images/deadpool.png",
      title: "Meeting Links",
      description:
        "Watch all Senate meetings online and find archived coverage.",
      link: "/congress/meeting-links",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Senate</h2>
        <p className="text-lg text-gray-700">
          The Lassonde undergraduate students elect 10 Senators to represent
          their interests and concerns in the upper chamber of Congress as well
          as the York University Senate. It plays a crucial role in examining
          bills and resolutions, questioning House and Secretariat actions and
          investigating community issues.
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
