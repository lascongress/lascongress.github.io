// src/components/landing/Header.js
"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#0b1c3d] text-white border-b border-yellow-500 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title shifted left under logo */}
        <div className="flex flex-col items-start ">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Lassonde Student Congress
          </h1>
          <p className="text-sm md:text-base text-yellow-400">
            Your voice in undergraduate student government
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link href="/government#about-us">
            <span className="hover:text-yellow-400 transition cursor-pointer font-semibold">
              About Us
            </span>
          </Link>
          <Link href="/government/resources/services">
            <span className="hover:text-yellow-400 transition cursor-pointer font-semibold">
              Services
            </span>
          </Link>
          <Link href="/government/resources/community">
            <span className="hover:text-yellow-400 transition cursor-pointer font-semibold">
              Community
            </span>
          </Link>
          <Link href="/government/spotlight">
            <span className="hover:text-yellow-400 transition cursor-pointer font-semibold">
              Spotlight
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
