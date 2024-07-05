// src/components/Navbar.js
"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lassonde-grey text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 px-1">
          <img src="/logo-banner.png" alt="LSC logo" className="h-20" />
          {/* <span className="text-2xl font-bold">Lassonde Student Congress</span> */}
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`w-full px-8 md:flex md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm md:flex-grow">
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 hover:underline md:mr-4"
            >
              Recent News
            </a>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 hover:underline md:mr-4"
            >
              Links
            </a>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 hover:underline md:mr-4"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 hover:underline"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
