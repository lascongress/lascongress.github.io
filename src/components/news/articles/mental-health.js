// src/components/PageContent.js
"use client";

import React from "react";
import Link from "next/link";

const PageContent = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded shadow mb-6">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Mental Health</h2>
        <p className="text-gray-600 mb-2">31 January 2024</p>
        <img
          src="../news/news3.png"
          alt="Commons"
          className="w-full h-auto object-cover mb-4 rounded"
        />
        <p className="mb-4 text-gray-700">Taking care of your mental health!</p>
        <p className="mb-4 text-gray-700">
          Non totam dignissimos quia. Sunt fugit rem beatae velit aliquid fugit.
          Sed ipsa earum doloremque architecto provident explicabo veniam vel.
          Ut reiciendis saepe vitae provident rem eos et. Nobis et praesentium
          amet et doloribus in qui. Omnis ad ducimus ratione modi sed
          cupiditate.{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Mickey Mouse
          </Link>{" "}
          Non totam dignissimos quia. Sunt fugit rem beatae velit aliquid fugit.
          Sed ipsa
        </p>
      </div>
    </div>
  );
};

export default PageContent;
