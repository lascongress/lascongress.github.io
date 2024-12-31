// src/components/congress/house-of-delegates/HouseOfDelegates.js
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
  const realsht = [
    {
      imageSrc: "/images/congress/house-of-delegates/businessman.png",
      title: "House Standing Orders",
      description: "Learn about the dynamics of the House.",
      link: "https://drive.google.com/file/d/1SCFX4aTx3x6_1qzhtSDxpOTx5KS4ciqx/view?usp=sharing",
      external: true,
    },
    {
      imageSrc: "/images/congress/house-of-delegates/file_cabinet.png",
      title: "Public Drive",
      description: "Find resources in our House repository.",
      link: "https://drive.google.com/drive/folders/1VgvnvDOZpS7iLkC_fYC92Qqrw06gTIW6",
      external: true,
    },
  ];

  const section = [
    {
      imageSrc: "/images/congress/house-of-delegates/composition.png",
      title: "House Diagram",
      description:
        "Visually witness the composition of the House of Delegates.",
      link: "/congress/house-of-delegates/composition-of-the-house",
      external: false,
    },
  ];

  const typsht = [
    {
      imageSrc: "/images/congress/house-of-delegates/agendas-and-minutes.png",
      title: "Agendas & Minutes",
      description: "Read transcripts of debates.",
      link: "/congress/agendas-and-minutes",
      external: false,
    },
    {
      imageSrc: "/images/congress/house-of-delegates/votes.png",
      title: "Votes",
      description: "Find vote results from the house.",
      link: "/congress/votes",
      external: false,
    },
    {
      imageSrc: "/images/congress/house-of-delegates/meeting.png",
      title: "Meeting Links",
      description: "Join our discord.",
      link: "https://discord.gg/ntN69q9HfK",
      external: false,
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4  border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Responsiblities of the Delegate
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. Delegates are elected on 1 year terms.
          <br />
          <br />
          2. A Delegate has the following additional responsibilities:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. representing the LSC in the Lassonde
          School of Engineering Faculty Council, its committees, panels and
          working groups;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. by recommendation of Cabinet, holding
          seats in at least:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. one Faculty
          Council Standing Committee, Panel or At-Large and one House Standing
          or Select Committee; or
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. two House
          Standing or Select Committees.
          <br />
          <br />
          3. Delegates that do not make the Cabinet have the option to join the
          following caucuses (groups) within the House:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. Opposition, tasked with keeping the
          government to account. The following roles are elected amongst the
          Delegates minus Cabinet:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. Opposition
          Leader;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. a critic
          for each ministerial portfolio; or
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. by default the Independent Caucus.
          <br />
          <br />
          4. An example of a typical month for a Delegate:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. one House meeting;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. one House Standing or Select Committee
          meeting;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. one Faculty Council Committee meeting; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. one Faculty Council meeting.
          <br />
        </p>
        <br />
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
          To learn more about the House of Delegates and find updates from us,
          please refer to the cards below.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {realsht.map((link, index) => (
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
      <br />
      <div className="container mx-auto p-4 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Composition of the House{" "}
        </h2>
        <p className="text-lg text-gray-700">
          The House of Delegates consist of students from Engineering, Computer
          Science & Security, Digital Media, Earth and Atmoshperic Science,
          Digital Techologies and Lassonde/Bethune Representative that come
          together to pursue change, discuss opportunies and argue Faculty
          council decisions. Click the card below to find a visual
          representation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {section.map((link, index) => (
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
      <br />
      <div className="container mx-auto p-4 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Other Information{" "}
        </h2>
        <p className="text-lg text-gray-700">
          If you want to learn more about our meetings. Please refer to our
          agendas & Minutes and Votes to see what happened so far. If you want
          to attend any future meetings, join our discord!
        </p>{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {typsht.map((link, index) => (
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
