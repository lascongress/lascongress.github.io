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
      imageSrc: "/images/congress/house-of-delegates/file_cabinet.png",
      title: "Public Drive",
      description: "Find resources in our House repository.",
      link: "https://drive.google.com/drive/folders/1WOPS6BVzuCGRZntvDAzwxHJKAuyxRmJ5",
      external: true,
    },
  ];

  const section = [
    {
      imageSrc: "/images/congress/senate/composition.png",
      title: "Composition of the Senate",
      description: "Visually witness the composition of the Senate.",
      link: "/congress/senate/composition-of-the-senate",
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
          Responsiblities of the Senator
        </h2>
        <p className="text-lg ml-2 text-gray-700">
          1. Senators are elected to 2 year terms, with half of the Senate being
          up for election each year.
          <br />
          <br />
          2. Two Senators from Class 1 (elected in an odd numbered year, for
          example 2025) are to be appointed to the York University Senate (YUS)
          for the duration of their term, and are responsible for representing
          the Lassonde Community at YUS.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. The two Senators appointed to YUS are
          required to attend Faculty Council as an ex-officio member.
          <br />
          <br />
          3. One Senator, by recommendation of Cabinet , will serve as the
          government representative in the Senate.
          <br />
          <br />
          4. An example of a typical month of a Senator:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. two Senate meetings; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. if established and appointed, one Senate
          Select Committee meeting.
          <br />
          <br />
          5. An example of a typical month of a Senator holding a YUS seat:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; a. two Senate meetings;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; b. one YUS meeting;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; c. one Faculty Council meeting; and
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; d. if established and appointed, one Senate
          Select Committee meeting.
          <br />
        </p>
        <br />
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Business of the Senate
        </h2>
        <p className="text-lg text-gray-700">
          Every two weeks, the senate come together to provide updates and news
          on any recent changes. During the meeting, the Speaker reports to the
          Senate about changes from the house. After, the Speaker allows them to
          speak on the matter and voice any ideas. Once all this is complete,
          the Speaker moves onto the consent iteams and bills & resolut. At this
          stage, a democratic vote is done for every item. Finally, the speaker
          adjourns the Senate to conclude the session.
        </p>
        <br />
        <p className="text-lg text-gray-700">
          To learn more about the Senate and find updates from us, please refer
          to the card below.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
          Composition of the Senate
        </h2>
        <p className="text-lg text-gray-700">
          The Senate consist of students from Engineering, Computer Science &
          Security, Digital Media, Earth and Atmoshperic Science, Digital
          Techologies and Lassonde/Bethune Representative that come together to
          pursue change, discuss opportunies and argue Faculty council
          decisions.
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
