// src/components/delegates-and-senators/Card.js
"use client";

import React from "react";

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 hover:bg-gray-100 transition duration-200">
      <div className="flex items-center mb-4">
        {/* <img
          src={imgSrc}
          alt={title}
          className="h-16 w-16 object-contain mr-4"
        /> */}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="mb-4 text-gray-700">{description}</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-blue-600 hover:underline"></a>
        <svg
          className="h-5 w-5"
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
    </div>
  );
};

export default Card;
