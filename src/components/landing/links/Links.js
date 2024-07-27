// src/components/landing/links/Links.js
"use client";

import React from "react";
import LinkCard from "./LinkCard";

const Links = () => {
  const Links = [
    {
      imageSrc: "/images/batman.png",
      title: "Congress",
      description:
        "Elected to make laws and check the work of the Secretariat.",
      link: "congress",
    },
    {
      imageSrc: "/images/sups.png",
      title: "Government",
      description: "Elected to check draft laws and challenge the.",
      link: "government",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="grid grid-cols-1 gap-4">
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
