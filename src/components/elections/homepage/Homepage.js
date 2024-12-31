// src/components/government/resources/lassonde-school/LassondeSchool.js
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
        <h2 className="text-3xl font-bold mb-1 text-gray-800">Preamble</h2>
        <div className="ml-2">
          <h2 className="text-xl font-bold text-gray-800">
            Hey Lassonde Students!{" "}
          </h2>
          <p className="text-lg text-gray-700">
            The Lassonde Student Congress is opening up elections for students
            to serve the community in the upcoming 2025/2026 term.
          </p>
        </div>
        <br />

        <h2 className="text-3xl font-bold mb-1 text-gray-800">
          Election Timeline
        </h2>
        <div className="ml-2">
          <p className="text-lg mb-2 text-gray-700">
            All of these positions are elected positions. There will be four
            stages to the election:
          </p>
          <h2 className="text-xl font-bold text-gray-800">
            1. Nomination Period (Jan. 13 - Jan. 24)
          </h2>
          <p className="text-lg mb-2 text-gray-700">
            A candidate must collect signatures (amount in specific sections)
            from students in their respective program* using a copy of the
            nomination package and submit it by the end of the campaigning
            period to the application form.
          </p>
          <h2 className="text-xl font-bold text-gray-800">
            2. All-Candidates Meeting (Jan. 25 or Jan. 26)
          </h2>
          <p className="text-lg mb-2 text-gray-700">
            CEAO will go over the rules and procedures of campaigning/voting
            period and any other relevant discussion topics.
          </p>
          <h2 className="text-xl font-bold text-gray-800">
            3. Campaigning Period (Jan. 27 - Feb. 1)
          </h2>
          <p className="text-lg mb-2 text-gray-700">
            Candidates will campaign to the student body.
          </p>
          <h2 className="text-xl font-bold text-gray-800">
            4. Voting Period (Feb. 3 - Feb. 5)
          </h2>
          <p className="text-lg text-gray-700">
            The student body will vote on their Delegates and Senators.
          </p>
        </div>
        <br />

        <h2 className="text-3xl font-bold mb-1 text-gray-800">
          Important Information
        </h2>
        <div className="ml-2">
          <h2 className="text-xl font-bold text-gray-800">
            On the Subject of Secretary Nominations
          </h2>
          <p className="text-lg mb-2 text-gray-700">
            Candidates for Secretary positions may collect signatures from ANY
            student from Lassonde (not program specific).
          </p>
          <h2 className="text-xl font-bold  text-gray-800">
            On the Subject of the Class One Senator Election
          </h2>
          <p className="text-lg text-gray-700">
            The Senator position is for Class One, meaning that the term will
            run until May of 2027 instead of the regular two-year term and is
            direct entry to run for the one of the two (2) York University
            Student Senator roles.
          </p>
        </div>
        <br />

        <h2 className="text-3xl font-bold mb-1 text-gray-800">
          Important Links
        </h2>
        <div className="ml-2">
          <h2 className="text-l font-bold mb-2 text-gray-800">
            <Link
              href="https://docs.google.com/document/d/11mMOw3zVdN8aynh4endaRkh_yliD865eMLa4Glm0PJc"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              THE CONGRESS ROLE MANUAL
            </Link>
          </h2>

          <h2 className="text-l font-bold mb-2 text-gray-800">
            <Link
              href="https://docs.google.com/spreadsheets/d/1WV-X04uxdvC6aQWLf8fro1NYCHn1whjiIR2_WM43d_Y"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LSC POSITION TRACKER
            </Link>
          </h2>

          <h2 className="text-l font-bold text-gray-800">
            <Link
              href="https://docs.google.com/document/d/12kzciJ65d_XMRbA8pikhrEK-1EJ-b80rWI1j8dTSWXI"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ELECTION RULES
            </Link>
          </h2>
        </div>
        <br />

        <h2 className="text-3xl font-bold mb-1 text-gray-800">
          Elected Positions
        </h2>
        <div className="ml-2">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">
            House of Delegates{" "}
          </h2>
          <div className="ml-2">
            <h2 className="text-xl font-bold text-gray-800">
              10x Engineering/BSc Delegate (any Engineering and General Science
              Student)
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/house-of-delegates"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              10x Computer Science and Security Delegate (any Computer Science
              and Security Student)
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/house-of-delegates"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              1x Earth & Atmospheric Science Delegate (any Earth & Atmospheric
              Science Student)
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/house-of-delegates"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              1x Digital Media Delegate (any Digital Media Student)
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/house-of-delegates"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              Digital Technologies Delegate (any Digital Technologies Student)
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/house-of-delegates"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-1 text-gray-800">
            Class One Senators (2025-2027){" "}
          </h2>
          <div className="ml-2">
            <h2 className="text-xl font-bold text-gray-800">
              1x Engineering/BSc Senator (any Engineering and General Science
              Student)
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/senate"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              1x Computer Science and Security Senator (any Computer Science and
              Security Student)
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/senate"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              1x Earth & Atmospheric Science Senator (any Earth & Atmospheric
              Science Student)
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/senate"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              1x Digital Media Senator (any Digital Media Student)
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/senate"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              1x Digital Technologies Senator (any Digital Technologies Student)
            </h2>
            <p className="text-lg text-gray-700">
              To learn more about this position, visit this{" "}
              <Link
                href="/congress/senate"
                className="text-blue-500 hover:underline"
              >
                page{" "}
              </Link>
            </p>
          </div>

          <br />
          <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center mx-auto">
            {" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9fsqjQ7Dk5rV9vcnYmUu-iOVk1yGYcXRnrf_qeulIBYqq8g/closedform"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINK TO APPLY{" "}
            </Link>
          </h2>
          <br />
          <p className="text-lg text-gray-700">
            If you have any questions or concerns, please contact
            info@lascongress.ca
          </p>
        </div>
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
