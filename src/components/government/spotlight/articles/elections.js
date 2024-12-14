// src/components/spotlight/articles/bergeron-closed.js
"use client";

import React from "react";
import Link from "next/link";

const PageContent = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded shadow mb-6">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          LSC Upcoming General Election
        </h2>
        <p className="text-gray-600 mb-2">13 December 2024</p>
        <div class="flex justify-center items-center">
          <img
            class="w-96 h-96 object-cover mb-4 rounded"
            src="../../logos/logo-black.png"
            alt="image"
          />
        </div>
        <p className="mb-4 text-gray-700">
          Find more about elections in your student government by joining the
          discord!
        </p>
        <p className="mb-4 text-gray-700">
          Stay alert for ministeral, directorate, and congress positions!
        </p>
      </div>
    </div>
  );
};

export default PageContent;
