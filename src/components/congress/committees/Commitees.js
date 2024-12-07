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
          community. It can be found{" "}
          <Link
            href="https://drive.google.com/drive/folders/1sseAx2GBJHKuEjzukrmoOv0PVI-UsJ45"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </Link>{" "}
          To read about our discussions, find the minutes{" "}
          <Link
            href="https://drive.google.com/drive/folders/13TFNrO5Ud7tV89ZHU8YzfcbpTYJtIS4W"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </Link>{" "}
        </p>
        <br />
        <p className="text-lg text-gray-700">
          To learn more about the committees and their responsibilities, we
          created this webpage for students! For further clarification, please
          join our discord that can be found at the bottom of the page.
        </p>
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
          and elections processes. For more information, check the{" "}
          <Link
            href="https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/executive-committee"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            lassonde page.
          </Link>
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
          university in areas where Lassonde has disciplinary expertise. For
          more information, check the{" "}
          <Link
            href="https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/learning-curriculum-students-committee"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            lassonde page.
          </Link>
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
          the Faculty level. For more information, check the{" "}
          <Link
            href="https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/planning-academic-resources-research-parr-committee"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            lassonde page.
          </Link>
        </p>
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
          standards of fairness and natural justice in all its proceedings. For
          more information, check the{" "}
          <Link
            href="https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/committee-on-evaluations-and-academic-standards"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            lassonde page.
          </Link>
        </p>
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
          School{"'"}s jurisdiction.For more information, check the{" "}
          <Link
            href="https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/committee-on-awards"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            lassonde page.
          </Link>
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
          For more information, check the{" "}
          <Link
            href="https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/tenure-promotion-committee"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            lassonde page.
          </Link>
        </p>
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
          Lassonde regularly present their latest plans and achievements. For
          more information, check the{" "}
          <Link
            href="https://lassonde.yorku.ca/about/lassonde-faculty-council/committees/tenure-promotion-committee"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            lassonde page.
          </Link>
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
