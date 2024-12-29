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
          Office of The Secretariat
        </h2>
        <p className="text-lg text-gray-700"></p>
        {/* <br /> */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Prime Minister{" "}
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Prime Minister or the Chair of the Cabinet is the head of the
          Cabinet and the head of government, or chief executive. They are
          ultimately responsible for the policy and decisions of the LSC
          Government.
          <br />
          <br />
          2. The Prime Minister has the overall responsibility for the Office of
          the Secretariat and exercises control and supervision over the whole
          Secretariat and relevant agencies.
          <br />
          <br />
          3. The responsibilities of the Prime Minister include, but are not
          limited to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. Signing Cabinet correspondence and orders.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. Representing the LSC to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. The Faculty
          leadership.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. The Student
          Representative Roundtable (SRR).
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. Other York
          University committees or officials as appropriate or relevant to the
          Prime Minister’s portfolio.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. Providing leadership, support, and
          oversight for LSC and congressional goals and initiatives.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. Developing an understanding of, and
          working to advance Lassonde student interests in, issues pertaining
          to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. Academics.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. Student
          life and wellbeing.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. Financial
          needs.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; e. Acting as the primary spokesperson for the
          LSC.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; f. Coordinating efforts to communicate with
          the Lassonde Community and the public.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; g. Developing the engagement of Members with
          the LSC.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; h. Organizing meetings with other student
          organization executives as needed or upon request of Cabinet or
          Congress.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; i. Other roles and responsibilities as may be
          assigned to the Prime Minister by the Charter, Bylaws, Acts of
          Congress, or Policy.
          <br />
        </p>
        <br />
        <br />

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Secretary General{" "}
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Secretary General is the chief administrative officer of the
          LSC, and the head of the Secretariat.
          <br />
          <br />
          2. The Secretary General is responsible for the operations of the
          Office of the Secretariat, responsible for elections and overseeing
          all aspects of the Secretariat and its programs.
          <br />
          <br />
          3. The Secretary General directly reports to the Prime Minister.
          <br />
          <br />
          4. The responsibilities of the Secretary General include:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. assist the Cabinet in program delivery;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. ensure that all forms required by the
          University and Faculty for ratification, registration, office-space,
          and funding are completed and submitted on time;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. bring to the attention of the Congress any
          matter which in their opinion may affect the Lassonde Community and
          its members;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. responsible for the collection of year-end
          reports from all outgoing Directors and Secretaries; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; e. Create an annual report to the General
          Assembly on the work of the Congress and Secretariat.
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
