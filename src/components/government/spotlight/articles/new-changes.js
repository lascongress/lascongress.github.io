// src/components/spotlight/articles/strike-on-lassonde.js
"use client";

import React from "react";
import Link from "next/link";

const PageContent = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded shadow mb-6">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          New Changes in Lassonde Student Congress{" "}
        </h2>
        <p className="text-gray-600 mb-2">31 December 2024</p>
        <img
          src="../../news/news.png"
          alt="Commons"
          className="w-full h-auto object-cover mb-4 rounded"
        />
        <p className="mb-4 text-gray-700">
          In this article, we will share some upcoming changes to the Congress
          that will impact the entire orgnization!
        </p>
        <p className="mb-4 text-gray-700">
          Over the winter break, Vincent (Alumni Senator) and Behrouz (Prime
          Minister) have been working hard at making significant additions to
          the Congress Charter and Bylaws and are looking to introduce the
          changes in the upcoming January meeting of the House. As elections are
          fast approaching, they are looking to solidify these changes that will
          improve the way LSC operate as an organization, as well as promote
          healthy debate and more opportunities for development for all active
          members!
        </p>
        <p className="mb-2 text-gray-700">
          Here is a summary of the significant additions and changes:
        </p>
        <p className="mb-1 ml-2 font-bold text-gray-700">Charter </p>
        <p className="mb-1 ml-3 text-gray-700">
          • Created the House Administration Committee, to appoint Delegates to
          Faculty Council and House Committees, independent from the Cabinet
        </p>
        <p className="mb-1 ml-3 text-gray-700">
          • Clarified the vote of no confidence, as a {'"negative"'} procedure
          by absolute majority
        </p>
        <p className="mb-1 ml-3 text-gray-700">
          • Set a maximum cap of 26 Delegates for the House, and implemented the
          use of the Huntington-Hill method of distribution to determine
          composition of constituencies when that cap is hit
        </p>
        <p className="mb-1 ml-3 text-gray-700">
          • Defined the procedure to fill a vacant YU Senate seat to include
          Class Two Senators as a last resort.
        </p>
        <p className="mb-1 ml-3 mb-2 text-gray-700">
          • Allow Secretaries to be appointed 4 months after their election
          period, in line with the procedures set for filling vacancies in
          Congress late into a term
        </p>
        <p className="mb-1 ml-2 font-bold text-gray-700">Bylaw 1 - Congress</p>
        <p className="mb-1 ml-3 text-gray-700">
          • Created the Opposition Caucus, to be the leading critic of the
          Cabinet, with an election procedure
        </p>
        <p className="mb-1 ml-3 text-gray-700">
          • Created the Independent Caucus
        </p>
        <p className="mb-1 ml-3 mb-2 text-gray-700">
          • Created the Faculty Council Convener (to be held by the Delegate
          appointed to the Executive Committee), to assist with ensuring the
          House is informed of all Faculty Council matters, independent from the
          Cabinet
        </p>
        <p className="mb-1 ml-2 font-bold text-gray-700">
          Bylaw 2 - Secretariat
        </p>
        <p className="mb-1 ml-3 text-gray-700">
          • Renamed the {'"Department of Student Success"'} to the{" "}
          {'"Department of Academic Services"'}
        </p>
        <p className="mb-1 ml-3 mb-2 text-gray-700">
          • Added the Cabinet Secretary as a directorship under the Office of
          the Secretariat
        </p>
        <p className="mb-1 ml-2 font-bold text-gray-700">General</p>
        <p className="mb-1 ml-3 mb-4 text-gray-700">
          • Various grammatical improvements and clarifications to existing
          conventions
        </p>
        <p className="mb-4 text-gray-700">
          Join our discord to always stay up to date with the latest news! Big
          things are coming!
        </p>
      </div>
    </div>
  );
};

export default PageContent;
