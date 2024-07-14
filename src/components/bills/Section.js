// src/components/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Section;
