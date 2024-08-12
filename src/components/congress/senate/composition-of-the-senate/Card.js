// src/components/congress/senate/composition-of-the-senate/Card.js
"use client";

import React from "react";
import Script from "next/script"; // Add this import statement

const Card = () => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="border-t border-gray-200 pt-4">
          <div
            className="flourish-embed flourish-parliament"
            data-src="visualisation/18305090"
          ></div>
        </div>
      </div>
      {/* Load the Flourish script asynchronously */}
      <Script
        src="https://public.flourish.studio/resources/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default Card;
