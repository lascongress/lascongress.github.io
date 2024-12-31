import React from "react";
import Script from "next/script";

const Card = ({ dataSrc }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex-1">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="border-t border-gray-200 pt-4">
          <div
            className="flourish-embed flourish-parliament w-full"
            data-src={dataSrc}
            style={{ minHeight: "500px" }} // Ensures sufficient height for embed
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
      {/* Flex container for responsive behavior */}
      <div className="flex flex-col md:flex-row gap-4">
        <Card dataSrc="visualisation/15345786" />
        <Card dataSrc="visualisation/20938126" />
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
