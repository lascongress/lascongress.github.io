// src/components/congress/homepage/Homepage.js
import React from "react";
import Link from "next/link";

// import Announcement from "./Announcement";

const LinkCard = ({ imageSrc, title, description, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition duration-200 flex flex-col h-80">
        {/* Center the image horizontally */}
        <img
          src={imageSrc}
          alt={title}
          className="mb-4 w-72 h-48 object-cover rounded mx-auto" // mx-auto centers the image
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

const Links = () => {
  const Links = [
    {
      imageSrc: "/images/government/ministry/office-of-the-secretariat.png",
      title: "Office Of The Secretariat",
      description: "Elected to lead the government.",
      link: "/congress/house-of-delegates",
    },
  ];

  const Links2 = [
    {
      imageSrc: "/images/government/ministry/office-of-the-accountability.png",
      title: "Office Of Accountability",
      description: "Elected to hold members accountable.",
      link: "/congress/house-of-delegates",
    },
    {
      imageSrc:
        "/images/government/ministry/department-of-community-affairs.png",
      title: "Department Of Community Affair",
      description: "Elected to engage with the student body.",
      link: "/congress/house-of-delegates",
    },
    {
      imageSrc:
        "/images/government/ministry/department-of-finance-and-admin.png",
      title: "Department Of Finance and Admin",
      description: "Elected to monitor financial responsibilites.",
      link: "/congress/house-of-delegates",
    },
    {
      imageSrc:
        "/images/government/ministry/department-of-internal-affairs.png",
      title: "Department Of Internal Affairs",
      description: "Elected to resolve internal concerns.",
      link: "/congress/house-of-delegates",
    },
    {
      imageSrc: "/images/government/ministry/department-of-student-success.png",
      title: "Department Of Student Success",
      description: "Elected to serve students.",
      link: "/congress/house-of-delegates",
    },
  ];

  return (
    <div>
      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-2xl font-bold mb-4">Prime Minister</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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

      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">
          Other Ministerial Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {Links2.map((link, index) => (
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
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <Announcement /> */}
      <Links />
    </div>
  );
};

export default MainContent;
