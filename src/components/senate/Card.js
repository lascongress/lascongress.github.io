// src/components/QuickLinkCard.js
"use client";

import React from "react";
import Link from "next/link";

const QuickLinkCard = ({ imageSrc, title, description, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200">
        <img
          src={imageSrc}
          alt={title}
          className="mb-4 w-full h-48 object-cover rounded"
        />
        <div className="flex justify-between items-center">
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
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default QuickLinkCard;
