// src/components/congress/homepage/Header.js
"use client";

import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-lassonde-grey text-slate-100 border-t-2 border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Congress activity
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-lg md:text-xl text-lassonde-grey max-w-3xl">
          <b>Meeting dates</b>
        </h2>
        <p className="text-lg md:text-xl text-lassonde-grey max-w-3xl py-6">
          On meeting days, public galleries and participation in the Question Period are open for all Lassonde students during the proceedings of the House of Delegates or Senate. Come and watch Congress in action!
        </p>
        <p className="text-lg md:text-xl text-lassonde-grey max-w-3xl">
          Capacity in the meeting rooms is limited and on a first-come, first-served basis. All visitors must adhere to the public gallery guidelines.
        </p>
      </div>
    </div>

  );
};

export default Header;
