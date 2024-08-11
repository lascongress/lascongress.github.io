// src/components/congress/house-of-delegates/composition-of-the-house/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = () => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">House Visualization</h2>
        <p className="mb-4">
          Explore the current state of the house through this interactive
          visualization.
        </p>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Section;
