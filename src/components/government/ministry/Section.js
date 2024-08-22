// src/components/government/ministry/Section.js
"use client";

import React from "react";
import Card from "./Card";

const Section = () => {
  const special = [
    {
      imageSrc: "/images/office-of-the-secretariat.png",
      title: "Office Of The Secretariat",
      description:
        "Keep up to date with the business of the House by referring to our Agenda & Minutes, Votes and other communications.",
      link: "/government/resources/student-run",
    },
  ];
  const section = [
    {
      imageSrc: "/images/department-of-internal-affairs.png",
      title: "Department of Internal Affairs",
      description:
        "Keep up to date with the business of the House by referring to our Agenda & Minutes, Votes and other communications.",
      link: "/government/resources/student-run",
    },
    {
      imageSrc: "/images/department-of-community-affairs.png",
      title: "Department of Community Affairs",
      description:
        "The House of Commons is governed by a group of Delegates who make up the Steering Committee.",
      link: "/government/resources/student-run",
    },
    {
      imageSrc: "/images/department-of-finance-and-admin.png",
      title: "Department of Finance And Admin",
      description:
        "A lot of the work and discussions of the House takes place in committees. The committee examines issues in detail, from proposed bills  to wider topics of community concern.",
      link: "/government/resources/student-run",
    },
    {
      imageSrc: "/images/office-of-the-accountability.png",
      title: "Office of Accountability",
      description:
        "Watch all House meetings online and find archived coverage.",
      link: "/government/resources/student-run",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Services</h2>
        <p className="text-lg text-gray-700">
          The UK public elects 650 Members of Parliament (MPs) to represent
          their interests and concerns in the House of Commons. MPs consider and
          propose new laws, and can scrutinise government policies by asking
          ministers questions about current issues either in the Commons Chamber
          or in Committees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pb-4">
        {special.map((link, index) => (
          <Card
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
            link={link.link}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.map((link, index) => (
          <Card
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

export default Section;
