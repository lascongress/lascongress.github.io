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
          Internal Affairs
        </h2>
        <p className="text-lg text-gray-700"></p>
        {/* <br /> */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Minister of Internal Affairs{" "}
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Minister of Internal Affairs is responsible for overseeing
          wider LSC and Lassonde Community policy directions and governance,
          internal government operations, as well as the management of LSC owned
          and managed spaces.
          <br />
          <br />
          2. The Minister of Internal Affairs has the overall responsibility for
          overseeing the Department of Internal Affairs.
          <br />
          <br />
          3. The responsibilities of the Minister of Internal Affairs include,
          but are not limited to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. overseeing the structural development of
          LSC governance and policies;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. student life and engagement services,
          including:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. leadership
          development;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii.
          volunteering and community service learning;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii.
          development of Lassonde student organizations;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. providing strategic policy leadership for
          the Lassonde Community through data and factual driven research;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. conduct an annual census on the
          undergraduate student experience; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; e. overseeing the maintenance of all records
          of LSC activities.
          <br />
        </p>
        <br />
        <br />

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Secretary of Internal Affairs
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Secretary of Internal Affairs is responsible for the internal
          operational policy of the LSC as well as the maintenance of all
          non-financial records. They also oversee the development of academic
          services.
          <br />
          <br />
          2. The Secretary of Internal Affairs is responsible for the operations
          of the Department of Internal Affairs and the Department of Academic
          Services.
          <br />
          <br />
          3. The Secretary of Internal Affairs directly reports to the Minister
          of Internal Affairs and the Minister of Academic Affairs.
          <br />
          <br />
          4. The responsibilities of the Secretary of Internal Affairs include:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. the maintenance of the Charter, bylaws,
          acts, policies, resolutions, minutes and all other documentation of
          the LSC in the public drive;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. advising on the structural development of
          the LSC;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. disseminating relevant information on the
          regulations and procedures of the Faculty and University;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. deliver key internal and academic
          programming such as:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. club policy
          support;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. student-led
          academic services; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. cost of
          living support programs.
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
