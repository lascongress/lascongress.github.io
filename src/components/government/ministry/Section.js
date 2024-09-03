// src/components/government/ministry/Section.js
"use client";

import React from "react";

const Section = ({ title, departments, count }) => {
  return (
    <div className="bg-white p-6 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start min-h-[300px]">
        <div className="flex-shrink-0 mb-4 md:mb-0 mr-4 min-w-[250px]">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-5xl font-bold">{count}</p>
        </div>
        <div className="flex-grow md:pl-12 border-t-2 md:border-t-0 md:border-l-2 border-gray-200">
          {departments.map((department, index) => (
            <div
              key={index}
              className="mb-4 pb-4 border-b last:border-b-0 flex flex-col items-center md:items-start"
            >
              <div className="flex-shrink-0 mb-2 md:mb-0">
                <img
                  src={department.iconSrc}
                  alt={department.name}
                  className="h-64 w-64"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <p className="text-lg font-bold">
                  <a href={department.linkHref} className="hover:underline">
                    {department.name}
                  </a>
                </p>
                <a
                  href={department.linkHref}
                  className="text-blue-600 hover:underline flex items-center justify-center md:justify-start mt-1"
                >
                  <span className="mr-2">{department.linkText}</span>
                  <svg
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
