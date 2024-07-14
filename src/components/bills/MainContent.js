// src/components/MainContent.js
"use client";

import React from "react";
import Section from "./Section";
import Card from "./Card";

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      <Section title="Find a Bill">
        <Card>
          <div className="bg-purple-100 p-4 rounded mb-4">
            <p>
              If you have any queries about Bills, you can contact us using the
              details below:
            </p>
            <p>
              For the House: email{" "}
              <a href="mailto:hlinfo@parliament.uk" className="text-blue-600">
                tmnt@gmail.com
              </a>{" "}
              or call{" "}
              <a href="tel:02072193107" className="text-blue-600">
                123 456 7890
              </a>
            </p>
            <p>
              For the Senate: email{" "}
              <a
                href="mailto:hcenquiries@parliament.uk"
                className="text-blue-600"
              >
                legoninjago@gmail.com
              </a>{" "}
              or call{" "}
              <a href="tel:02072194272" className="text-blue-600">
                012 345 6789
              </a>
            </p>
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2 font-bold" htmlFor="bill-title">
                  Bill title
                </label>
                <input
                  type="text"
                  id="bill-title"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold" htmlFor="session">
                  Session
                </label>
                <select
                  id="session"
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option>2024-25 (Current)</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-bold" htmlFor="sort-by">
                  Sort by
                </label>
                <select
                  id="sort-by"
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option>Title (A-Z)</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-bold" htmlFor="bill-type">
                  Bill type (for example, Government)
                </label>
                <input
                  type="text"
                  id="bill-type"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold" htmlFor="stage">
                  Stage
                </label>
                <select
                  id="stage"
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option>All</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-bold" htmlFor="current-house">
                  Current House
                </label>
                <select
                  id="current-house"
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option>All</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Search
              </button>
            </div>
          </form>
        </Card>
      </Section>
    </div>
  );
};

export default MainContent;
