// src/components/congress/homepage/Homepage.js
import React from "react";
import Link from "next/link";
import Announcement from "./Announcement";

const LinkCard = ({ imageSrc, title, description, link, external }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200 flex flex-col h-80">
      {/* adjust the height in increments of +/- 8 */}
      <Link
        href={link}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
      >
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
      </Link>
    </div>
  );
};

const linkData = [
  {
    imageSrc: "/images/congress/house-of-delegates.png",
    title: "House of Delegates",
    description: "Elected to serve and protect the student body.",
    link: "/congress/house-of-delegates",
    external: false,
  },
  {
    imageSrc: "/images/congress/senate.png",
    title: "Senate",
    description: "Elected to oversee the decisions of the House.",
    link: "/congress/senate",
    external: false,
  },
  {
    imageSrc: "/images/congress/committee.png",
    title: "Committees",
    description:
      "Latest news, inquiries and reports from Lassonde select committees.",
    link: "/congress/committees",
    external: false,
  },
  {
    imageSrc: "/images/congress/votes.png",
    title: "Votes",
    description: "Find vote results from the House and Senate.",
    link: "/congress/votes",
    external: false,
  },
  {
    imageSrc: "/images/congress/agendas-and-minutes.png",
    title: "Agendas & Minutes",
    description:
      "Read transcripts of debates and find communications from both Chambers.",
    link: "/congress/agendas-and-minutes",
    external: false,
  },
  {
    imageSrc: "/images/congress/bills-and-resolutions.png",
    title: "Bills & Resolutions",
    description:
      "Keep up to date with the progress of current and draft bills and resolutions before Congress.",
    link: "https://docs.google.com/spreadsheets/d/1G4J-osCqip0KijyExAd2JaJjEH1Fa5bZCdDGx7oTSrQ/edit?gid=0#gid=0",
    external: true,
  },
];

const Links = () => {
  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Congress Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {linkData.map((link, index) => (
          <LinkCard
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
            link={link.link}
            external={link.external} // external prop
          />
        ))}
      </div>
    </section>
  );
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      <Announcement />
      <Links />
    </div>
  );
};

export default MainContent;
