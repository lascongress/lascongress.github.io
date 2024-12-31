import React from "react";
import Link from "next/link";
import Script from "next/script";

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

const FlourishCard = () => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="border-t border-gray-200 pt-4">
          <div
            className="flourish-embed flourish-parliament w-full h-auto"
            data-src="visualisation/20939085"
          ></div>
        </div>
      </div>
      {/* Load the Flourish script asynchronously */}
      <Script
        src="https://public.flourish.studio/resources/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

const Section = () => {
  const section = [];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4 mb-4 border-b-2 border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Frequently Asked Questions
        </h2>
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          What is the Congress?{" "}
        </h2>
        <div className="text-lg text-gray-700">
          Congress is central to the democratic representation of the Lassonde
          community. Furthermore, it is through Congress that the government and
          its ministers are accountable to the community. In other words, it is
          of paramount importance that ministers and secretaries give accurate
          and truthful information to the Congress. It has two Chambers that
          work on behalf of the Lassonde Community to provide services,
          challenge decisions of the Faculty Council, and advocate on key
          issues. Check out this{" "}
          <Link
            href="/congress"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            page
          </Link>{" "}
          on the website to learn more!
        </div>
        <div className="text-lg text-gray-700">
          Here is a diagram, with facts, of the congress:
          <div className="flex justify-center my-4">
            <img
              src="/images/government/faq/congress.png"
              alt="Visual Representation"
              className="w-full max-w-screen-xl sm:max-w-lg md:max-w-2xl h-auto border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <div className="text-lg text-gray-700">
          Here is a diagram of the{" "}
          <Link
            href="/congress/house-of-delegates"
            className="text-blue-500 hover:underline"
          >
            House of Delegates
          </Link>
          :
          <div className="flex justify-center my-4">
            <img
              src="/images/government/faq/delegates.png"
              alt="Visual Representation"
              className="w-full max-w-screen-xl sm:max-w-lg md:max-w-2xl h-auto border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <div className="text-lg text-gray-700">
          Here is a diagram of the{" "}
          <Link
            href="/congress/senate"
            className="text-blue-500 hover:underline"
          >
            Senate
          </Link>
          :
          <div className="flex justify-center my-4">
            <img
              src="/images/government/faq/senate.png"
              alt="Visual Representation"
              className="w-full max-w-screen-xl sm:max-w-lg md:max-w-2xl h-auto border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <br />

        <h2 className="text-xl font-bold mb-2 text-gray-800">
          What is the role of the Government in LSC?{" "}
        </h2>
        <div className="text-lg text-gray-700">
          The executive government of the Lassonde Student Congress (LSC), more
          formerly known as the Cabinet, are responsible for administering the
          Charter, Bylaws, Acts of Congress and Polices faithfully, working
          towards the goals prescribed in the annual{" "}
          <Link
            href="https://docs.google.com/document/d/1Ad3lCF_3NXCpI9nbtCOBV-vDhA70P-Lc3Ta33kreFiE"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            manifesto
          </Link>{" "}
          throughout the duration of their term of office and maintaining an
          awareness of current issues and developments relevant to the Lassonde
          Community.
        </div>
        <div className="text-lg text-gray-700">
          Here is a diagram, with facts, of the congress:
          <div className="flex justify-center my-4">
            <img
              src="/images/government/faq/government.png"
              alt="Visual Representation"
              className="w-full max-w-screen-xl sm:max-w-lg md:max-w-2xl h-auto border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <div className="text-lg text-gray-700">
          Here is another diagram:
          <div className="flex justify-center my-4">
            <img
              src="/images/government/faq/LSC_Government_Structure.png"
              alt="Visual Representation"
              className="w-full max-w-screen-xl sm:max-w-lg md:max-w-2xl h-auto border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <br />

        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Is there a visual representation of the Lassonde Student Congress?
        </h2>
        <div className="text-lg text-gray-700">
          Yes, there is! In fact, you can find a lot more guides at our{" "}
          <Link
            href="https://drive.google.com/drive/folders/1NYiHYQ9xTAqwOrCSJvGmYdbxnD3GbbN1"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Drive
          </Link>
          , alongside all our other information!
          <div className="flex justify-center my-4">
            <img
              src="/images/government/faq/LSC_Structure.png"
              alt="Visual Representation"
              className="w-full max-w-screen-xl sm:max-w-lg md:max-w-2xl h-auto border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <div className="text-lg text-gray-700">
          Here is the same diagram but expanded further:
          <div className="flex justify-center my-4">
            <img
              src="/images/government/faq/LSC_Structure_Expanded.png"
              alt="Visual Representation"
              className="w-full max-w-screen-xl sm:max-w-lg md:max-w-2xl h-auto border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <br />

        <h2 className="text-xl font-bold mb-2 text-gray-800">
          What does the Lassonde Population look like?{" "}
        </h2>
        <div className="text-lg text-gray-700">
          Here is a chart based on the numbers from the Office of Institutional
          Planning & Analysis YorkU (if nothing appears, please refresh the
          page!):
          <div className="flex justify-center my-4">
            <FlourishCard />
          </div>
        </div>
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
