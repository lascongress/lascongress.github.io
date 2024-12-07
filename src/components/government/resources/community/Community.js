// src/components/government/resources/student-run/StudentRun.js
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
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Community</h2>
        <p className="text-lg text-gray-700">
          York University students are very talented and have produced many
          applications to improve the life of students. To commerate and
          showcase their work, this webpage is a collection of resources made by
          York University students for York University students. Please note
          that the following applications are owned by their respective
          creators, and NOT Lassonde Student Congress. Therefore, all credit
          should be given rigthfully to the creators.
        </p>
        <br />
        <h2 className="text-xl font-bold text-gray-800">
          <Link
            href="https://coursedelta.yorku.dev/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CourseDelta
          </Link>
        </h2>
        <p className="text-lg text-gray-700">
          Atlas of Course Skill Trees/Prerequisite Graphs
        </p>
        <p className="text-lg text-gray-700">By Kevin Y. H. Hui</p>
        <br />
        <h2 className="text-xl font-bold text-gray-800">
          <Link
            href="https://study.yorku.dev/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YUStudyBuddies
          </Link>
        </h2>
        <p className="text-lg text-gray-700">
          Find group chats. Connect with classmates. Ace your courses.
        </p>
        <p className="text-lg text-gray-700">By Jerry Chen</p>
        <br />
        <h2 className="text-xl font-bold text-gray-800">
          <Link
            href="https://rooms.yorku.dev/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Empty Rooms at YorkU
          </Link>
        </h2>
        <p className="text-lg text-gray-700">Room Usage Schedule Finder</p>
        <p className="text-lg text-gray-700">By Kevin Y. H. Hui</p>
        <br />
        <h2 className="text-xl font-bold text-gray-800">
          <Link
            href="https://find.yorku.dev/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Class Find Tool
          </Link>
        </h2>
        <p className="text-lg text-gray-700">
          A site to help students find their way around York University{"'"}s
          campus.
        </p>
        <p className="text-lg text-gray-700">Issac Kogen</p>
        <br />
        <h2 className="text-xl font-bold text-gray-800">
          <Link
            href="https://www.ratemycourses.io/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rate My Courses
          </Link>
        </h2>
        <p className="text-lg text-gray-700">
          See reviews, get advice and find resources for university courses
        </p>
        <p className="text-lg text-gray-700">By Oopsidaisy (discord)</p>
        <br />
        <h2 className="text-xl font-bold text-gray-800">
          <Link
            href="https://github.com/mahfoozm/YorkURMP/releases"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            RateMyProf Extension
          </Link>
        </h2>
        <p className="text-lg text-gray-700">
          VSB Overlay Plug-in to provide Professor ratings on course entires
        </p>
        <p className="text-lg text-gray-700">By Mohammed Mahfooz</p>
        <br />
        <h2 className="text-xl font-bold text-gray-800">
          <Link
            href="https://chrisnguyn.github.io/york-cs-primer/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            York CS Primer
          </Link>
        </h2>
        <p className="text-lg text-gray-700">
          Alumni Lassonde Computer Science (unofficial) guide
        </p>
        <p className="text-lg text-gray-700">By Chris Nguyen</p>
        <br />
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
