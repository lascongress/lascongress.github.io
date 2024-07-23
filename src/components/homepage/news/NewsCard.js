// src/components/NewsCard.js
"use client";

import React from "react";

const NewsCard = ({ imageSrc, title, description, date, link }) => {
  return (
    <a
      href={link}
      className="block bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200"
    >
      <img
        src={imageSrc}
        alt={title}
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
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
      <p className="mb-2">{description}</p>
      <p className="text-gray-600 text-sm">{date}</p>
    </a>
  );
};

export default NewsCard;
