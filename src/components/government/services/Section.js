// src/components/government/services/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = () => {
  const section = [
    {
      imageSrc: "/images/batman.png",
      title: "Business of the House",
      description:
        "Keep up to date with the business of the House by referring to our Agenda & Minutes, Votes and other communications.",
      link: "/congress/house/business-of-the-house",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Composition of the House",
      description:
        "The House of Commons is governed by a group of Delegates who make up the Steering Committee.",
      link: "/congress/house/composition-of-the-house",
    },
    {
      imageSrc: "/images/deadpool.png",
      title: "Standing Committees",
      description:
        "A lot of the work and discussions of the House takes place in committees. The committee examines issues in detail, from proposed bills  to wider topics of community concern.",
      link: "/congress/committees",
    },
    {
      imageSrc: "/images/spidey.png",
      title: "Meeting Links",
      description:
        "Watch all House meetings online and find archived coverage.",
      link: "/congress/meeting-links",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Services</h2>
        <p className="text-lg text-gray-700">UNDER CONSTRUCTION</p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.map((link, index) => (
          <Card
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
            link={link.link}
          />
        ))}
      </div> */}
    </section>
  );
};

export default Section;
