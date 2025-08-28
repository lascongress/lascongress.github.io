// src/components/global/Navbar.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollYRef = useRef(0);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      // Save current scroll position
      scrollYRef.current = window.scrollY;

      // Prevent background scroll
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";

      // Also prevent iOS rubber banding on html element
      html.style.overflow = "hidden";
    } else {
      // Restore scroll
      const y = scrollYRef.current;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      document.documentElement.style.overflow = "";

      window.scrollTo(0, y);
    }

    return () => {
      // Cleanup if component unmounts while open
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const MobileMenu = () => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={toggleMenu}
          aria-hidden="true"
        />
        {/* Right-side drawer */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 sm:w-1/2 lg:w-1/3 min-w-[280px] max-w-[520px] bg-[#12254d] text-white shadow-xl flex flex-col transition-transform duration-300 ease-out overflow-y-auto overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          <div className="flex justify-between items-center p-2 border-b-2 border-yellow-500">
            <Link href="/" onClick={toggleMenu}>
              <img
                src="/logos/logo-banner.png"
                alt="LSC logo"
                className="h-12 cursor-pointer"
              />
            </Link>
            <button onClick={toggleMenu} className="text-yellow-500" aria-label="Close menu">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 flex-grow">
            <h2 className="text-3xl font-bold mb-4 text-yellow-500">Main Menu</h2>

            <h2 className="text-xl font-bold mb-4 text-yellow-500">Government</h2>

            <Link href="/government/" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Homepage
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/government/resources/services" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Services
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/government/resources/community" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Community Resources
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/government/resources/reports-and-documents" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Reports and Documents
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/government/about-us/ministry" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Ministry
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/government/about-us/frequently-asked-questions" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Frequently Asked Questions
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/government/about-us/join-us" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Join Us
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/government/spotlight" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Spotlight
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <br />
            <h2 className="text-xl font-bold mb-4 text-yellow-500">Congress</h2>

            <Link href="/congress/" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Homepage
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/congress/house-of-delegates" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                House of Delegates
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/congress/senate" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Senate
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/congress/committees" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Committees
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/congress/votes" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Votes
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/congress/agendas-and-minutes" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Agendas & Minutes
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/congress/bills-and-resolutions" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Bills & Resolutions
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <br />
            <h2 className="text-xl font-bold mb-4 text-yellow-500">Elections</h2>

            <Link href="/elections/" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Homepage
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <br />
            <h2 className="text-xl font-bold mb-4 text-yellow-500">General</h2>

            <a
              href="#contact-us"
              onClick={() => {
                toggleMenu();
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
              }}
              className="block mb-4"
            >
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Contact Us
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <Link href="/congress/meeting-links" onClick={toggleMenu} className="block mb-4">
              <div className="p-4 bg-[#0b1c3d] rounded flex justify-between items-center hover:bg-[#1a2f57] transition">
                Meeting Links
                <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-[#0b1c3d] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 ">
          <Link href="/">
            <img src="/logos/logo-banner.png" alt="LSC logo" className="h-20 cursor-pointer" />
          </Link>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-yellow-500" aria-label="Open menu">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`max-w-screen px-2 md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="text-sm md:flex-grow">
            <div
              className="block mt-4 p-2 md:inline-block md:mt-0 hover:underline cursor-pointer text-yellow-500"
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
