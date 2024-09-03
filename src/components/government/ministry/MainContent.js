// src/components/government/ministry/MainContent.js
import React from "react";
import Section from "./Section";

const MainContent = () => {
  const departments = [
    {
      iconSrc: "/images/office-of-the-secretariat.png",
      name: "Office Of The Secretariat",
      linkText: "Works with 4 agencies and public bodies",
      linkHref: "#",
      dropdownItems: [
        { text: "Agency 1", href: "#agency1" },
        { text: "Agency 2", href: "#agency2" },
        { text: "Agency 3", href: "#agency3" },
      ],
    },
  ];

  const departments1 = [
    {
      iconSrc: "/images/department-of-community-affairs.png",
      name: "Department of Community Affairs",
      linkText: "Works with 4 agencies and public bodies",
      linkHref: "#",
      dropdownItems: [
        { text: "Agency 1", href: "#agency1" },
        { text: "Agency 2", href: "#agency2" },
        { text: "Agency 3", href: "#agency3" },
      ],
    },
    {
      iconSrc: "/images/department-of-finance-and-admin.png",
      name: "Department of Finance And Admin",
      linkText: "Works with 4 agencies and public bodies",
      linkHref: "#",
      dropdownItems: [
        { text: "Agency 1", href: "#agency1" },
        { text: "Agency 2", href: "#agency2" },
        { text: "Agency 3", href: "#agency3" },
      ],
    },
    {
      iconSrc: "/images/department-of-internal-affairs.png",
      name: "Department of Internal Affairs",
      linkText: "Works with 4 agencies and public bodies",
      linkHref: "#",
      dropdownItems: [
        { text: "Agency 1", href: "#agency1" },
        { text: "Agency 2", href: "#agency2" },
        { text: "Agency 3", href: "#agency3" },
      ],
    },
    {
      iconSrc: "/images/office-of-the-accountability.png",
      name: "Office of Accountablity",
      linkText: "Works with 4 agencies and public bodies",
      linkHref: "#",
      dropdownItems: [
        { text: "Agency 1", href: "#agency1" },
        { text: "Agency 2", href: "#agency2" },
        { text: "Agency 3", href: "#agency3" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded shadow mb-6">
        <div className="mx-auto p-4 mb-4 border-b-2 border-neutral-200">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Ministry</h2>
          <p className="text-lg text-gray-700">
            The UK public elects 650 Members of Parliament (MPs) to represent
            their interests and concerns in the House of Commons. MPs consider
            and propose new laws, and can scrutinise government policies by
            asking ministers questions about current issues either in the
            Commons Chamber or in Committees.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <Section title="" count="" departments={departments} />
            <Section
              title="Ministerial departments"
              count="4"
              departments={departments1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
