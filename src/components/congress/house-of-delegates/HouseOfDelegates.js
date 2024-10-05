// src/components/congress/house-of-delegates/HouseOfDelegates.js
import React from "react";
import Link from "next/link";

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200 flex flex-col h-80">
        {/* adjust the height in increments of +/- 8 */}
        <img
          src={imageSrc}
          alt={title}
          className="mb-4 w-full h-32 object-cover rounded"
        />
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <p className="flex-grow">{description}</p>
      </div>
    </Link>
  );
};

const Section = () => {
  const section = [
    {
      imageSrc: "/images/congress/house-of-delegates/business.png",
      title: "Business of the House",
      description:
        "Keep up to date with the business of the House by referring to our Agenda & Minutes, Votes and other communications.",
      link: "/congress/house-of-delegates/business-of-the-house",
    },
    {
      imageSrc: "/images/congress/house-of-delegates/composition.png",
      title: "Composition of the House",
      description:
        "The House of Commons is governed by a group of Delegates who make up the Steering Committee.",
      link: "/congress/house-of-delegates/composition-of-the-house",
    },
    {
      imageSrc: "/images/congress/house-of-delegates/committee.png",
      title: "Standing Committees",
      description:
        "A lot of the work and discussions of the House takes place in committees. The committee examines issues in detail, from proposed bills  to wider topics of community concern.",
      link: "/congress/committees",
    },
    {
      imageSrc: "/images/congress/house-of-delegates/meeting.png",
      title: "Meeting Links",
      description:
        "Watch all House meetings online and find archived coverage.",
      link: "/congress/meeting-links",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          House of Delegates
        </h2>
        <p className="text-lg text-gray-700">
          The UK public elects 650 Members of Parliament (MPs) to represent
          their interests and concerns in the House of Commons. MPs consider and
          propose new laws, and can scrutinise government policies by asking
          ministers questions about current issues either in the Commons Chamber
          or in Committees.
        </p>
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

const MainContent = () => {
  return (
    <main className="container mx-auto p-4">
      <Section />
    </main>
  );
};

export default MainContent;
