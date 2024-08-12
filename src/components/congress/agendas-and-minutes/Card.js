// src/components/congress/agendas-and-minutes/Card.js
"use client";

import React from "react";
import Link from "next/link";

const Card = ({ date, year, day, description, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white p-6 rounded shadow mb-6">
        <div className="border-l-4 border-neutral-600 pl-4">
          <div className="flex items-center mb-4">
            <div className="bg-white p-4 rounded-r flex-grow">
              <p className="text-lg font-bold">{day}</p>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
