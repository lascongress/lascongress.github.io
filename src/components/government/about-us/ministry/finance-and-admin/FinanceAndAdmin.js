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
          Finance and Administration Portfolio
        </h2>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Services </h2>
        <p className="text-lg ml-6 text-gray-700">
          <li>Buy Back Program </li>
        </p>
        <p className="text-lg text-gray-700"></p>
        <br />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Minister of Finance & Administration{" "}
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Minister of Finance & Administration is overall responsible for
          the fiscal and monetary policy of the LSC, being the budget and supply
          of the government as well as procurement.
          <br />
          <br />
          2. The Minister of Finance & Administration has the overall
          responsibility for overseeing the Department of Finance &
          Administration.
          <br />
          <br />
          3. The responsibilities of the Minister of Finance & Administration
          include, but are not limited to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. Chairing the Treasury Board;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. monetary policy, including levies and
          other taxation instruments.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. public expenditure including:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. spending
          reviews and strategic planning;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. Tin-year
          spending control;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii.
          procurement;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iv. capital
          investment;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; v.
          infrastructure spending;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. financial services policy, including clubs
          and design team funding, ensuring the sustainability of student-led
          initiatives;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; e. the delivery of any capital or
          infrastructure projects funded by LSC; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; f. ensuring the Lassonde Community is growing
          sustainability.
          <br />
        </p>
        <br />
        <br />

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Secretary of Finance & Administration
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. The Secretary of Finance & Administration is responsible for
          overseeing the operating budget of the LSC and relevant financial
          legislation.
          <br />
          <br />
          2. The Secretary of Finance & Administration is responsible for the
          operations of the Department of Finance & Administration.
          <br />
          <br />
          3. The Secretary of Finance & Administration directly reports to the
          Minister of Finance & Administration. .
          <br />
          <br />
          4. The responsibilities of the Secretary of Finance & Administration
          include:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. reporting, at all regular Meetings of the
          House, the financial position of the LSC, including but not limited
          to:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. a comparison
          of actual income and expenses pertaining to the budget;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. a breakdown
          of fund disbursement;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. a
          statement of expected income and expenses;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. the maintenance of records of:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. all the sums
          of money received and disbursed by the LSC and the matters with
          respect to which receipt and disbursement took place;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. all sales
          and purchases;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. the assets
          and liabilities;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iv. call other
          transactions affecting the financial position of the LSC;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; v. trademarks,
          copyrights, and other intellectual property;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. annual auditing activities;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. cheque requisition and approval; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; e. presenting the auditor’s report at a
          General Assembly during their term of office.
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
