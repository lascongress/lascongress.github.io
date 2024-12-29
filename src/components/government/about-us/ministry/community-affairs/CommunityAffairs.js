// src/components/congress/committees/Committees.js
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
  const section = [];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Community Affairs
        </h2>
        <p className="text-lg text-gray-700"></p>
        {/* <br /> */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Minister of Community Affairs{" "}
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Minister of Community Affairs is responsible for overseeing the
          communications with the Lassonde and wider York community as well as
          developing and maintaining LSC social media and publications.
          <br />
          <br />
          2. The Minister of Community Affairs has the overall responsibility
          for overseeing the Department of Community Affairs.
          <br />
          <br />
          3. The responsibilities of the Minister of Community Affairs include,
          but are not limited to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. acting as the secondary spokesperson for
          the LSC, in the Prime Minister’s absence;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. overseeing the communication of the
          activities of the LSC to Representatives, affiliated student
          organizations and the Lassonde Community;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. drive participation of LSC events and
          activities;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. promote the use of LSC services and
          initiatives; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; e. oversee the social media presence of the
          LSC, including but not limited to content on the Website, Instagram,
          and Reddit.
          <br />
        </p>
        <br />
        <br />

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Secretary of Community Affairs
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Secretary of Community Affairs is responsible for the
          operations of all LSC publications and media.
          <br />
          <br />
          2. The Secretary of Community Affairs is responsible for the
          operations of the Department of Community Affairs
          <br />
          <br />
          3. The responsibilities of the Secretary of Internal Affairs include:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. the maintenance of the website and social
          media presence;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. to develop LSC publications for
          dissemination.
          <br />
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
