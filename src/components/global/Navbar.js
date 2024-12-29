// src/components/global/Navbar.js
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MobileMenu = () => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-neutral-300 text-black">
        <div className="flex justify-between items-center p-2 border-b-2 border-gray-400">
          <Link href="/">
            <img
              src="/logos/inv-logo-banner.png"
              alt="LSC logo"
              className="h-12 cursor-pointer"
            />
          </Link>
          <button onClick={toggleMenu} className="text-gray-800">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 flex-grow overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">Main Menu</h2>
          {/* <p className="mb-4">Select an area to explore</p> */}
          {/* <Link href="/news" onClick={toggleMenu} className="block mb-4">
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Recent News
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link> */}

          <h2 className="text-xl font-bold mb-4">Government</h2>

          <Link href="/government/" onClick={toggleMenu} className="block mb-4">
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Homepage
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/government/resources/services"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Services
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/government/resources/community"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Community Resources
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/government/reports-and-documents"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Reports and Documents
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/government/about-us/ministry"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Ministry
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/government/about-us/frequently-asked-questions"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Frequently Asked Questions
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/government/spotlight"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Spotlight
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <br />
          <h2 className="text-xl font-bold mb-4">Congress</h2>

          <Link href="/congress/" onClick={toggleMenu} className="block mb-4">
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Homepage
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/congress/house-of-delegates"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              House of Delegates
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/congress/senate"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Senate
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/congress/committees"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Committees
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/congress/votes"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Votes
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/congress/agendas-and-minutes"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Agendas & Minutes
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <Link
            href="/congress/bills-and-resolutions"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Bills & Resolutions
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>
          <br />

          <h2 className="text-xl font-bold mb-4">Elections</h2>

          <Link href="/elections/" onClick={toggleMenu} className="block mb-4">
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Homepage
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>

          <br />
          <h2 className="text-xl font-bold mb-4">General</h2>

          <a
            href="#contact-us"
            onClick={() => {
              toggleMenu();
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Contact Us
              <svg
                className="h-6 w-6 text-gray-600"
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

          <Link
            href="/congress/meeting-links"
            onClick={toggleMenu}
            className="block mb-4"
          >
            <div className="p-4 bg-gray-100 rounded flex justify-between items-center">
              Meeting Links
              <svg
                className="h-6 w-6 text-gray-600"
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
          </Link>
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-lassonde-grey text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 ">
          <Link href="/">
            <img
              src="/logos/logo-banner.png"
              alt="LSC logo"
              className="h-20 cursor-pointer"
            />
          </Link>
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
          className={`max-w-screen px-2 md:flex md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm md:flex-grow">
            {/* <a
              href="/news"
              className="block mt-4 md:inline-block md:mt-0 hover:underline md:mr-4"
            >
              Recent News
            </a> */}
            {/* <a
              href="#contact-us"
              className="block mt-4 md:inline-block md:mt-0 hover:underline md:mr-4"
              onClick={() =>
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Contact Us
            </a> */}
            <div
              className="block mt-4 p-2 md:inline-block md:mt-0 hover:underline cursor-pointer"
              onClick={toggleMenu}
            >
              Menu
            </div>
          </div>
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
