// src/components/congress/house-of-delegates/composition-of-the-house/CompositionOfTheHouse.js
import React from "react";
import Script from "next/script";

const Card = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 max-w-xlg w-full">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="border-t border-gray-200 pt-4">
          <div
            className="flourish-embed flourish-parliament"
            data-src="visualisation/15345786"
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

const Card1 = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 max-w-xlg w-full">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="border-t border-gray-200 pt-4">
          <div
            className="flourish-embed flourish-parliament"
            data-src="visualisation/20938126"
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

const Section = () => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">House Visualization</h2>
        <p className="mb-4">
          Explore the current state of the house through this interactive
          visualization. If nothing appears, please refresh the page!
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <Card />
        <Card1 />
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <main className="container mx-auto p-4">
      <Section />
    </main>
  );
};

export default MainContent;
