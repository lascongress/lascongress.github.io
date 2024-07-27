// src/components/congress/votes/Card.js
"use client";

import React from "react";

const Card = ({ primaryInfo, number, singleText, date, valueA, valueB }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="text-xl font-bold mb-2">{primaryInfo}</div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-3xl font-bold">{number}</div>
              <div className="text-gray-600">Total Votes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">{singleText}</div>
              <div className="text-gray-600">{date}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-2">
                <div className="text-gray-600 mr-2">Ayes</div>
                <div className="text-xl font-bold">{valueA}</div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-600 mr-2">Noes</div>
                <div className="text-xl font-bold">{valueB}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
