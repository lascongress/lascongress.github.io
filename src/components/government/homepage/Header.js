// src/components/government/homepage/Header.js
"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-lassonde-grey text-slate-100 p-4 border-t-2 border-neutral-700">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold mb-2">Government</h1>
        <p className="text-2xl mb-2">
          The best place to find government services and information
        </p>
        {/* <nav className="text-green-600">
          <a href="#" className="hover:underline">
            1
          </a>{" "}
          &gt;
          <a href="#" className="hover:underline">
            2
          </a>{" "}
          &gt;
          <a href="#" className="hover:underline">
            3
          </a>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
