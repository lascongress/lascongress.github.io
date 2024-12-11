// src/components/congress/homepage/Header.js
"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-lassonde-grey text-slate-100 p-4 border-t-2 border-neutral-700">
      <div className="container mx-auto max-w-screen px-4">
        <h1 className="text-4xl font-bold mb-2">Congress</h1>
        <p className="mb-2">
          Congress is central to the democratic representation of the Lassonde
          community. Furthermore, it is through Congress that the government and
          its ministers are accountable to the community. In other words, it is
          of paramount importance that ministers and secretaries give accurate
          and truthful information to the Congress. It has two Chambers that
          work on behalf of the Lassonde Community to provide services,
          challenge decisions of the Faculty Council, and advocate on key
          issues.
        </p>
      </div>
    </header>
  );
};

export default Header;
