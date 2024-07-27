// src/components/congress/committees/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = ({ title, description, buttonLabel, cards, events }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {description && <p className="mb-4">{description}</p>}
        {buttonLabel && (
          <div className="flex justify-center mb-4">
            <button className="bg-lassonde-blue text-white px-4 py-2 rounded w-full">
              {buttonLabel}
            </button>
          </div>
        )}
      </div>
      <div>
        {cards &&
          cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
            />
          ))}
        {events &&
          events.map((event, index) => (
            <Card
              key={index}
              time={event.time}
              title={event.title}
              date={event.date}
              committees={event.committees}
              location={event.location}
            />
          ))}
      </div>
    </div>
  );
};

export default Section;
