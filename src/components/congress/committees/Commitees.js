// src/components/congress/committees/Committees.js
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
  const advocacy = [
    {
      imageSrc: "/images/congress/house-of-delegates/businessman.png",
      title: "LSC Faculty Council",
      description: "Find our collection of our experiences in Faculty Council.",
      link: "https://drive.google.com/drive/folders/1sseAx2GBJHKuEjzukrmoOv0PVI-UsJ45",
      external: true,
    },
    {
      imageSrc: "/images/congress/committees/advocacy.png",
      title: "Advocacy Committee Minutes",
      description: "Find our discussions for student advocacy.",
      link: "https://drive.google.com/drive/folders/13TFNrO5Ud7tV89ZHU8YzfcbpTYJtIS4W",
      external: true,
    },
  ];

  const classA = [
    {
      imageSrc: "/images/congress/committees/executive.png",
      title: "Executive Committee (EC)",
      description: "",
      link: "https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/executive-committee",
      external: true,
    },
    {
      imageSrc: "/images/congress/committees/lcs.png",
      title: "Learning, Curriculum & Students Committee (LCS)",
      description: "",
      link: "https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/learning-curriculum-students-committee",
      external: true,
    },
    {
      imageSrc: "/images/congress/committees/parr.png",
      title: "Planning, Academic Resources & Research Committee (PARR)",
      description: "",
      link: "https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/planning-academic-resources-research-parr-committee",
      external: true,
    },
  ];

  const classB = [
    {
      imageSrc: "/images/congress/committees/eval.png",
      title: "Committee On Evaluations & Academic Standards",
      description: "",
      link: "https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/committee-on-evaluations-and-academic-standards",
      external: true,
    },
  ];

  const classC = [
    {
      imageSrc: "/images/congress/committees/awards.png",
      title: "Awards Committee (AC)",
      description: "",
      link: "https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/committee-on-awards",
      external: true,
    },
    {
      imageSrc: "/images/congress/committees/tp.png",
      title: "Tenure & Promotions Committee (TPC)",
      description: "",
      link: "https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/tenure-promotion-committee",
      external: true,
    },
  ];

  const classO = [
    {
      imageSrc: "/images/congress/committees/lassonde.png",
      title: "Faculty Council At-Large",
      description: "",
      link: "https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/tenure-promotion-committee",
      external: true,
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <div className="container mx-auto p-4  border-neutral-200">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Committees</h2>
        <p className="text-lg text-gray-700">
          At Lassonde School of Engineering, we have committees that serve to
          improve our education, address ongoing issues and discuss future
          opportunities. In other words, these standing committees and
          sub-committees of the Council have been established to assist Council
          in carrying out its mandate. They review and make recommendations to
          the Faculty Council on policy matters within their purview. In these
          committees, we have student representatives that were elected by the
          Lassonde Student Congress to act as the voice for students. At the
          meetings, we provide the opinions of students, share our concerns as
          students and highlight important changes for students.
        </p>
        <br />
        <p className="text-lg text-gray-700">
          In the Lassonde Student Congress, we routinely meet to share our
          experiences at the committee meetings. This is done through our own
          internal committee, Advocacy Committee. Overtime, we have created and
          collected documents to showcase our experiences to the Lassonde
          community. It can be found here, as well as our dicussions:
        </p>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advocacy.map((link, index) => (
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
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Class A Committee
        </h2>
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Executive Committee (EC)
        </h2>
        <p className="text-lg text-gray-700">
          The Executive Committee is responsible for coordinating the work of
          Council and its committees, monitoring the organization and structure
          of Council and other bodies, ensuring that equity considerations are
          integrated into the work of Council and its committees, serving as
          Council{"'"}s liaison with external bodies, and overseeing nominations
          and elections processes.
        </p>
        <br />
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Learning, Curriculum & Students Committee (LCS)
        </h2>
        <p className="text-lg text-gray-700">
          The LCS Committee is responsible for the development and oversight of
          curriculum, academic standards and pedagogy for the degrees and
          non-degree programming across the School, including supporting the
          delivery of curriculum and service courses for programs across the
          university in areas where Lassonde has disciplinary expertise.
        </p>

        <br />
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Planning, Academic Resources & Research Committee (PARR)
        </h2>
        <p className="text-lg text-gray-700">
          The PARR Committee is responsible for consultations and
          recommendations on academic plans and major academic processes and
          will advise the Dean on the allocation of academic resources. The
          committee also promotes research and evaluates research resources at
          the Faculty level.
        </p>
        <br />
        <p className="text-lg text-gray-700">
          For more information check the official lassonde pages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {classA.map((link, index) => (
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
        <br />

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Class B Committee
        </h2>
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Committee On Evaluations & Academic Standards
        </h2>
        <p className="text-lg text-gray-700">
          The Committee on Evaluations and Academic Standards oversees academic
          policy, academic standards and policies and practices related to
          graded evaluations, as well as the development and oversight of the
          academic petitions process, including review and decisions of academic
          petitions and appeals. It will monitor and provide Faculty-level
          academic oversight of grades exercises undertaken by academic units.
          The Committee shall conduct hearings and make decisions in cases of
          suspected breach of the Senate Policy on Academic Honesty in
          accordance with Senate Policy, and oversee a panel system for the
          hearing of petitions and appeals. The Committee embodies appropriate
          standards of fairness and natural justice in all its proceedings.
        </p>
        <br />
        <p className="text-lg text-gray-700">
          For more information check the official lassonde pages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {classB.map((link, index) => (
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
        <br />

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Class C Committee
        </h2>
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Awards Committee (AC)
        </h2>
        <p className="text-lg text-gray-700">
          The Committee on Awards shall make recommendations and provide advice
          to Council on policy matters related to awards and scholarship. It
          will promote and celebrate outstanding performance and creative
          scholarship across the School. It will adjudicate student, faculty and
          staff awards as applicable. This committee will propose policy for
          student, staff and faculty awards (creation, advertisement,
          nominations and selections) in the Lassonde School of Engineering;
          additionally, this committee will adjudicate School-wide awards. On
          behalf of the Lassonde School of Engineering, and in the context of
          promoting, recognizing and celebrating outstanding achievements in
          teaching, learning, service and research, the Committee shall be
          responsible for those aspects of awards, prizes and medals under the
          School{"'"}s jurisdiction.
        </p>

        <br />
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Tenure & Promotions Committee (TPC)
        </h2>
        <p className="text-lg text-gray-700">
          The Committee on Tenure and Promotions (T&P) makes recommendations, as
          required, on Faculty and University policy concerning tenure and
          promotions. It deliberates on Faculty tenure and promotions policy and
          makes recommendations on such policy to Faculty Council and the Dean.
        </p>
        <br />
        <p className="text-lg text-gray-700">
          For more information check the official lassonde pages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {classC.map((link, index) => (
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
        <br />

        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Class O Committee
        </h2>
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Faculty Council At-Large
        </h2>
        <p className="text-lg text-gray-700">
          The Lassonde Faculty Council is a forum where members of the Lassonde
          School of Engineering approve academic planning, curricular and
          research items, and discuss matters relating to the development of the
          School. Faculty Council is open to everyone in the Lassonde community,
          although voting rights are reserved for full members. Members of the
          Dean{"'"}s executive team and support staff attend and participate in
          meetings, and provide updates on activities taking place within the
          School. Lassonde students are also members of the Council, and
          representatives of the student clubs and associations affiliated with
          Lassonde regularly present their latest plans and achievements.
        </p>
        <br />
        <p className="text-lg text-gray-700">
          For more information check the official lassonde pages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {classO.map((link, index) => (
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
        <p className="text-lg text-gray-700">
          For further clarification on the committees, please join our discord
          that can be found at the bottom of the page.
        </p>
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
