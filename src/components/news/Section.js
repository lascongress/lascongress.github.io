// src/components/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = ({ title, description, buttonLabel, cards, news }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
      <div>
        {cards &&
          cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          ))}
        {news &&
          news.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              date={item.date}
              link={item.link}
            />
          ))}
      </div>
    </div>
  );
};

export default Section;
