// src/components/congress/committees/Committees.js
import React from "react";
import Link from "next/link";

const Card = ({ imageSrc, title, description, link, external }) => {
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

const Section = () => {
  const cards = [
    {
      imageSrc: "/images/congress/committees/executive.png",
      title: "Ministry",
      description: "Learn more about your ministry",
      link: "https://drive.google.com/drive/folders/1HplzqVtSK9l9DeV29YQqIXld1qclfa0s",
      external: true,
    },
    {
      imageSrc: "/images/congress/committees/lcs.png",
      title: "Meetings",
      description: "Find the minutes of the cabinet meetings",
      link: "https://drive.google.com/drive/folders/184DqC2v7sLkN0dAIJm9l43aQjJhbHalV",
      external: true,
    },
    {
      imageSrc: "/images/congress/committees/parr.png",
      title: "Finances",
      description: "Look into our finacial records",
      link: "https://drive.google.com/drive/folders/1uIT-cG-GEwCK0sz0RpeKRp17UpHOaNOn",
      external: true,
    },
    {
      imageSrc: "/images/congress/committees/awards.png",
      title: "General Reports",
      description: "Check here for more reports",
      link: "https://drive.google.com/drive/folders/12FgvORrXppmp76y-uyrWTfKvJ9tFB_gv",
      external: true,
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4  border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Reports and Documents
        </h2>
        <p className="text-lg text-gray-700">
          Find the reports and documents compiled by your undergraduate student
          government that discuss degree changes, student opportunities and
          future plans.
        </p>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((link, index) => (
            <Card
              key={index}
              imageSrc={link.imageSrc}
              title={link.title}
              description={link.description}
              link={link.link}
              external={link.external} // external prop
            />
          ))}
        </div>
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
