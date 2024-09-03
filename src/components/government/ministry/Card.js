// src/components/government/ministry/Card.js
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Card = ({
  iconSrc,
  departmentName,
  linkText,
  linkHref,
  dropdownItems,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col items-start">
      <img src={iconSrc} alt={departmentName} />
      <h3 className="text-2xl font-bold mb-1">
        <Link href={linkHref} className="hover:underline">
          {departmentName}
        </Link>
      </h3>
      Dropdown Link
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-blue-600 hover:underline flex items-center"
        >
          <span className="mr-2">{linkText}</span>
          <svg
            className={`h-4 w-4 text-blue-600 transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7-7l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dropdown menu this aint working lmao im gonna cry*/}
        {isDropdownOpen && (
          <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg">
            <ul>
              {dropdownItems.map((item, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link href={item.href}>
                    <a className="text-blue-600 hover:underline">{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
