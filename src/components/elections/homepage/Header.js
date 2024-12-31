// src/components/government/homepage/Header.js
"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-lassonde-grey text-slate-100 p-4 border-t-2 border-neutral-700">
      <div className="container mx-auto max-w-screen px-4">
        <h1 className="text-4xl font-bold mb-2">Elections</h1>
        <p className="mb-2">
          This will be the first General Election for your reformed Faculty
          Student Government, that represents undergraduate students in Faculty
          Council and the YU Senate as well as developing student-led services
          for the community.{" "}
        </p>
      </div>
    </header>
  );
};

export default Header;
