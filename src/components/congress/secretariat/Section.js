// src/components/congress/secretariat/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = () => {
  const section = [
    {
      imageSrc: "/images/batman.png",
      title: "Business of the Secretariat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      link: "/",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Lorem ipsu",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      link: "/",
    },
    {
      imageSrc: "/images/deadpool.png",
      title: "Lorem ipsu",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      link: "/",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Secretariat</h2>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
