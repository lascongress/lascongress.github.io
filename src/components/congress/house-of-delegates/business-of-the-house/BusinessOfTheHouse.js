// src/components/congress/house-of-delegates/business-of-the-house/BusinessOfTheHouse.js
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
  const section = [
    {
      imageSrc:
        "/images/congress/house-of-delegates/business-of-the-house/agendas-and-minutes.png",
      title: "Agendas & Minutes",
      description: "Read transcripts of debates.",
      link: "/congress/agendas-and-minutes",
    },
    {
      imageSrc:
        "/images/congress/house-of-delegates/business-of-the-house/votes.png",
      title: "Votes",
      description: "Find vote results from the house.",
      link: "/congress/votes",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Business of the House
        </h2>
        <p className="text-lg text-gray-700">
          Every month, the delegates come together to provide updates and news
          on any recent changes. During the meeting, the government reports on
          anything that is of importance to the house. Following this, the
          Speaker begins a question period for anyone to question the government
          members. After, we share updates from committees and discuess any
          topics of key interest. Once the government and committee members
          finish sharing, the Speaker allows the delegate to speak and present
          any new ideas or points of discussion. Once all this is complete, the
          Speaker moves onto the consent iteams, bills & resolutuons from the
          senate and member bills & resolutions. At this stage, we do a
          democratic vote to pass any new changes. Finally, the speaker adjourns
          the House to conclude the session.
        </p>
        <br />
        <p className="text-lg text-gray-700">
          To learn more about the House of Delegates, please refer to this{" "}
          <Link
            href="https://drive.google.com/drive/folders/1Xjpy4Es5EkNqTptFC8FJcrH6tn1Q1LBG"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            document.
          </Link>
        </p>
        <p className="text-lg text-gray-700">
          To find more updates from us, please refer to this{" "}
          <Link
            href="https://drive.google.com/drive/folders/1VgvnvDOZpS7iLkC_fYC92Qqrw06gTIW6"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            drive.
          </Link>
        </p>
        <br />
        <p className="text-lg text-gray-700">
          For any more questions or concerns, join our discord that can be found
          at the bottom of the page!
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
