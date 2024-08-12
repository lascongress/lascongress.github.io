// src/components/government/homepage/resources/links/Links.js
"use client";

import React from "react";
import LinkCard from "./LinkCard";

const Links = () => {
  const Links = [
    {
      imageSrc: "/images/batman.png",
      title: "Student-Run",
      description:
        "Elected to make laws and check the work of the Secretariat.",
      link: "/government/resources/student-run",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Lassonde School",
      description:
        "Elected to check draft laws and challenge the work of the Congress.",
      link: "/government/resources/lassonde-school",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
