// src/components/QuickLinks.js
"use client";

import React from "react";
import QuickLinkCard from "./QuickLinkCard";

const QuickLinks = () => {
  const quickLinks = [
    {
      imageSrc: "/images/batman.png",
      title: "House of Delegates",
      description:
        "Elected to make laws and check the work of the Secretariat.",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Senate",
      description:
        "Elected to check draft laws and challenge the work of the Congress.",
    },
    {
      imageSrc: "/images/deadpool.png",
      title: "Delegates & Senators ",
      description: "Find your Delegates and Senators.",
    },
    {
      imageSrc: "/images/flash.png",
      title: "Votes",
      description: "Find vote results from the House and Senate.",
    },
    {
      imageSrc: "/images/punisher.png",
      title: "Agendas & Minutes",
      description:
        "Read transcripts of debates and find communications from both Chambers.",
    },
    {
      imageSrc: "/images/spidey.png",
      title: "Bills & Resolutions",
      description:
        "Keep up to date with the progress of current and draft bills and resolutions before Congress.",
    },
    {
      imageSrc: "/images/sups.png",
      title: "Committees",
      description:
        "Latest news, inquiries and reports from Parliamentary select committees.",
    },
    {
      imageSrc: "/images/tony.png",
      title: "Secretariat",
      description:
        "Access services, research and analysis from the Departments.",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {quickLinks.map((link, index) => (
          <QuickLinkCard
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
          />
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
