// src/components/congress/committees/Card.js
"use client";

import React from "react";

const Card = ({ time, title, date, committees, location }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 hover:bg-gray-100 transition duration-200">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xl font-bold text-gray-800">{time}</div>
        <svg
          className="h-5 w-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-600">{committees}</p>
      <p className="text-gray-600">{location}</p>
    </div>
  );
};

export default Card;
