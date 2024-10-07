// src/components/congress/senate/Senate.js
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
      imageSrc: "/images/congress/senate/business.png",
      title: "Business of the Senate",
      description:
        "Keep up to date with the business of the Senate by referring to our Agenda & Minutes, Votes and other communications.",
      link: "/congress/senate/business-of-the-senate",
    },
    {
      imageSrc: "/images/congress/senate/composition.png",
      title: "Composition of the Senate",
      description:
        "The Senate may establish ad-hoc (select) committees to study issues, bills & resolutions or any other matters of interest.",
      link: "/congress/senate/composition-of-the-senate",
    },
    {
      imageSrc: "/images/congress/senate/committee.png",
      title: "Committees",
      description:
        "The Senate may establish ad-hoc (select) committees to study issues, bills & resolutions or any other matters of interest.",
      link: "/congress/committees",
    },
    {
      imageSrc: "/images/congress/senate/meeting.png",
      title: "Meeting Links",
      description: "Join our discord.",
      link: "https://discord.gg/ntN69q9HfK",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Senate</h2>
        <p className="text-lg text-gray-700">
          The Senate consist students from Engineering, Computer Science &
          Security, Digital Media, Earth and Atmoshperic Science, Digital
          Techologies and Lassonde/Bethune Representative that come together to
          pursue change, discuss opportunies and argue new laws
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
