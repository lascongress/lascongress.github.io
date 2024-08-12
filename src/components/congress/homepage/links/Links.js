// src/components/congress/homepage/links/Links.js
"use client";

import React from "react";
import LinkCard from "./LinkCard";

const Links = () => {
  const Links = [
    {
      imageSrc: "/images/batman.png",
      title: "House of Delegates",
      description:
        "Elected to make laws and check the work of the Secretariat.",
      link: "/congress/house-of-delegates",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Senate",
      description:
        "Elected to check draft laws and challenge the work of the Congress.",
      link: "congress/senate",
    },
    {
      imageSrc: "/images/sups.png",
      title: "Committees",
      description:
        "Latest news, inquiries and reports from Parliamentary select committees.",
      link: "congress/committees",
    },
    {
      imageSrc: "/images/flash.png",
      title: "Votes",
      description: "Find vote results from the House and Senate.",
      link: "congress/votes",
    },
    {
      imageSrc: "/images/punisher.png",
      title: "Agendas & Minutes",
      description:
        "Read transcripts of debates and find communications from both Chambers.",
      link: "congress/agendas-and-minutes",
    },
    {
      imageSrc: "/images/spidey.png",
      title: "Bills & Resolutions",
      description:
        "Keep up to date with the progress of current and draft bills and resolutions before Congress.",
      link: "https://docs.google.com/spreadsheets/d/1G4J-osCqip0KijyExAd2JaJjEH1Fa5bZCdDGx7oTSrQ/edit?gid=0#gid=0",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Links.map((link, index) => (
          <LinkCard
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
            link={link.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Links;
