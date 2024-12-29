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
          Academic Services
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Services </h2>
        <p className="text-lg ml-6 text-gray-700">
          <li>Club Funding</li>
        </p>
        <p className="text-lg text-gray-700"></p>
        <br />
        <p className="text-lg text-gray-700"></p>
        {/* <br /> */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Minister of Academic Affairs{" "}
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Minister of Academic Affairs is responsible for overseeing the
          development of academic and professional development services as well
          as to advance student interests within the academic space.
          <br />
          <br />
          2. The Minister of Academic Affairs has the overall responsibility for
          overseeing the Department of Academic Services.
          <br />
          <br />
          3. The responsibilities of the Minister of Academic Affairs include,
          but are not limited to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. providing strategic leadership in all
          Faculty Council affairs through the appointed Delegates on the Council
          and its various committees, working groups and panels;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. collecting feedback from the Lassonde
          Community regarding academic matters;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. developing expertise, and working to
          advance student interests in, issues pertaining to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. Tteaching
          and learning;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. the costs
          of education
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. academic
          curriculum and program quality;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iv. academic
          advising, accommodations, and academic barriers related to equity,
          diversity, inclusion and accessibility;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; v. Admissions,
          enrolment, and registration;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; vi.
          experiential learning and career development;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; vii. library
          and educational resources, copyright, and open educational resources;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; viii. student
          academic misconduct and related appeals processes;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ix.
          undergraduate research;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x. student
          rights; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xi. faculty
          tenure & promotions.
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
