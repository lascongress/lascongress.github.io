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
  const pm = [
    {
      imageSrc: "/images/government/ministry/noah.jpg",
      title: "Office Of The Secretariat",
      description: "Elected to lead the government.",
      link: "/government/about-us/ministry/secretariat",
    },
  ];

  const oa = [
    {
      imageSrc: "/images/government/ministry/office-of-the-accountability.png",
      title: "Office Of Accountability",
      description: "Elected to hold members accountable.",
      link: "/government/about-us/ministry/accountability",
    },
  ];

  const aa = [
    {
      imageSrc:
        "/images/government/ministry/judy.jpg",
      title: "Department Of Academic Services",
      description: "Elected to serve students.",
      link: "/government/about-us/ministry/academic-services",
    },
  ];

  const ca = [
    {
      imageSrc:
        "/images/government/ministry/micheal.jpg",
      title: "Department Of Community Affairs",
      description: "Elected to engage with the student body.",
      link: "/government/about-us/ministry/community-affairs",
    },
  ];
  const fa = [
    {
      imageSrc:
        "/images/government/ministry/hanifa.png",
      title: "Department Of Finance and Admin",
      description: "Elected to monitor financial responsibilites.",
      link: "/government/about-us/ministry/finance-and-admin",
    },
  ];
  const ia = [
    {
      imageSrc:
        "/images/government/ministry/josh.jpg",
      title: "Department Of Internal Affairs",
      description: "Elected to resolve internal concerns.",
      link: "/government/about-us/ministry/internal-affairs",
    },
  ];

  return (
    <div>
      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-2xl font-bold mb-4">
          Prime Minister - Noah Mathi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {pm.map((link, index) => (
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

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-2xl font-bold mb-4">
          Minister of Finance & Admin - Hanifah Lameed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {fa.map((link, index) => (
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

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-2xl font-bold mb-4">
          Minister of Internal Affairs - Joshua Little
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {ia.map((link, index) => (
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

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-2xl font-bold mb-4">
          Minister of Academic Affairs -  Judy El Ghargomi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {aa.map((link, index) => (
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

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-2xl font-bold mb-4">
          Minister of Community Affairs - Micheal Danfulani
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {ca.map((link, index) => (
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

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-2xl font-bold mb-4">
          Minister of Accountability - Janae Grant
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {oa.map((link, index) => (
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
