// src/components/QuickLinks.js
"use client";

import React from "react";
import QuickLinkCard from "./Card";

const QuickLinks = () => {
  const quickLinks = [
    {
      imageSrc: "/images/batman.png",
      title: "Business of the House",
      description:
        "Keep up to date with the business of the House by referring to our Agenda & Minutes, Votes and other communications.",
      link: "/",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Governance of the House",
      description:
        "The House of Commons is governed by a group of Delegates who make up the Steering Committee.",
      link: "/",
    },
    {
      imageSrc: "/images/deadpool.png",
      title: "Standing Committees",
      description:
        "A lot of the work and discussions of the House takes place in committees, made up of around 6 Delegates. The committee examines issues in detail, from proposed bills and resolutions, to wider topics of community concern.",
      link: "/",
    },
    {
      imageSrc: "/images/flash.png",
      title: "Faculty Council",
      description:
        "A forum where Delegates represent the students to the School’s Leadership and Faculty, debating matters such as academic planning, curricular and research items, and the overall development of the School.",
      link: "/",
    },
    {
      imageSrc: "/images/punisher.png",
      title: "The Speaker",
      description:
        "Also known as the House traffic cop, they preside over all meetings including General Assemblies.",
      link: "/",
    },
    {
      imageSrc: "/images/spidey.png",
      title: "Meeting Links",
      description:
        "Watch all House meetings online and find archived coverage.",
      link: "/",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          House of Commons
        </h2>
        <p className="text-lg text-gray-700">
          The UK public elects 650 Members of Parliament (MPs) to represent
          their interests and concerns in the House of Commons. MPs consider and
          propose new laws, and can scrutinise government policies by asking
          ministers questions about current issues either in the Commons Chamber
          or in Committees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickLinks.map((link, index) => (
          <QuickLinkCard
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

export default QuickLinks;
