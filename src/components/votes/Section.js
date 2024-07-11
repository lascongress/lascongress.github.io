// src/components/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = ({ title, imgSrc, description, buttonLabel, cards }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <p className="mb-4">{description}</p>
        <div className="flex justify-center mb-4">
          <button className="bg-lassonde-blue text-white px-4 py-2 rounded w-full">
            {buttonLabel}
          </button>
        </div>
      </div>
      <div>
        {cards.map((card, index) => (
          <Card
            key={index}
            primaryInfo={card.primaryInfo}
            number={card.number}
            singleText={card.singleText}
            date={card.date}
            valueA={card.valueA}
            valueB={card.valueB}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
