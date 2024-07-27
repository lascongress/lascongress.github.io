// src/components/news/NewsCard.js
"use client";

import React from "react";

const NewsCard = ({ title, description, imageSrc, date, link }) => {
  return (
    <a
      href={link}
      className="block bg-white p-4 rounded shadow mb-4 hover:bg-gray-100 transition duration-200"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">{date}</p>
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
    </a>
  );
};

export default NewsCard;
