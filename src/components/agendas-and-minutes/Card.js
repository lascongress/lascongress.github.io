// src/components/Card.js
"use client";

import React from "react";

const Card = ({ date, year, day, description }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="flex items-center mb-4">
          {/* <div className="bg-purple-600 text-white p-4 rounded-l flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{date}</span>
            <span className="text-xl">{year}</span>
          </div> */}
          <div className="bg-white p-4 rounded-r flex-grow">
            <p className="text-lg font-bold">{day}</p>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
