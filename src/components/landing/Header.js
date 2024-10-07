// src/components/landing/Header.js
"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-lassonde-grey text-slate-100 p-4 border-t-2 border-neutral-700">
      <div className="container mx-auto max-w-screen px-4">
        <h1 className="text-4xl font-bold mb-2">Lassonde Student Congress</h1>
        <p className="mb-2">
          Welcome to the official website of your undergraduate student
          government
        </p>
      </div>
    </header>
  );
};

export default Header;
