// src/components/global/BreadcrumbNavBar.js
"use client";

import React from "react";
import Link from "next/link";

const BreadcrumbNavBar = ({ breadcrumbs }) => {
  return (
    <nav className="bg-lassonde-teal text-white p-1">
      <div className="container mx-auto max-w-screen px-4">
        <ol className="flex flex-wrap space-x-0  text-sm md:text-base">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center">
              <Link href={breadcrumb.href} className="hover:underline truncate">
                {breadcrumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-1 md:mx-2">{" > "}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNavBar;
