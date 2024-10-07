// src/components/government/homepage/Header.js
"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-lassonde-grey text-slate-100 p-4 border-t-2 border-neutral-700">
      <div className="container mx-auto max-w-screen px-4">
        <h1 className="text-4xl font-bold mb-2">Government</h1>
        <p className="mb-2">
          Find information about our services, resources and news!
        </p>
      </div>
    </header>
  );
};

export default Header;
