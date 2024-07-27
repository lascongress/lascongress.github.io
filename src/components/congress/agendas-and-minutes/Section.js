// src/components/congress/agendas-and-minutes/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = ({ title, imgSrc, description, cards, links }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <p className="mb-4">{description}</p>
      <div className="mb-4 border-b-2 border-gray-200">
        {cards.map((card, index) => (
          <Card
            key={index}
            date={card.date}
            month={card.month}
            year={card.year}
            day={card.day}
            description={card.description}
          />
        ))}
      </div>
      <p className="mb-4 ">{cards[0]?.note}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200"
          >
            <a href={link.href} className="block p-4 rounded">
              <div className="flex items-center">
                {/* <img
                  src={link.icon}
                  alt=""
                  className="h-12 w-12 mr-4 object-contain" // Ensure consistent size and prevent scaling issues
                /> */}
                <div>
                  <p className="text-lg font-bold">{link.title}</p>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
