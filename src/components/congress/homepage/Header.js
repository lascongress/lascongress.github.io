// src/components/congress/homepage/Header.js
"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-lassonde-grey text-slate-100 p-4 border-t-2 border-neutral-700">
      <div className="container mx-auto max-w-screen px-4">
        <h1 className="text-4xl font-bold mb-2">Congress</h1>
        <p className="mb-2">
          The Congress has two Chambers and a Secretariat that work on behalf of
          the Lassonde Community to provide services, challenge decisions of the
          Faculty Council, make and shape policies/laws, and advocate on key
          issues of the day.
        </p>
      </div>
    </header>
  );
};

export default Header;
