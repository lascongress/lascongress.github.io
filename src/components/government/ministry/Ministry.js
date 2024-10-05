// src/components/government/ministry/Ministry.js
import React from "react";
import Link from "next/link";

const Card = ({
  iconSrc,
  departmentName,
  linkText,
  linkHref,
  dropdownItems,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col items-start">
      <img src={iconSrc} alt={departmentName} />
      <h3 className="text-2xl font-bold mb-1">
        <Link href={linkHref} className="hover:underline">
          {departmentName}
        </Link>
      </h3>
      Dropdown Link
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-blue-600 hover:underline flex items-center"
        >
          <span className="mr-2">{linkText}</span>
          <svg
            className={`h-4 w-4 text-blue-600 transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7-7l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dropdown menu this aint working lmao im gonna cry*/}
        {isDropdownOpen && (
          <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg">
            <ul>
              {dropdownItems.map((item, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link href={item.href}>
                    <a className="text-blue-600 hover:underline">{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, departments, count }) => {
  return (
    <div className="bg-white p-6 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start min-h-[300px]">
        <div className="flex-shrink-0 mb-4 md:mb-0 mr-4 min-w-[250px]">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-5xl font-bold">{count}</p>
        </div>
        <div className="flex-grow md:pl-12 border-t-2 md:border-t-0 md:border-l-2 border-gray-200">
          {departments.map((department, index) => (
            <div
              key={index}
              className="mb-4 pb-4 border-b last:border-b-0 flex flex-col items-center md:items-start"
            >
              <div className="flex-shrink-0 mb-2 md:mb-0">
                <img
                  src={department.iconSrc}
                  alt={department.name}
                  className="h-64 w-64"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <p className="text-lg font-bold">
                  <a href={department.linkHref} className="hover:underline">
                    {department.name}
                  </a>
                </p>
                <a
                  href={department.linkHref}
                  className="text-blue-600 hover:underline flex items-center justify-center md:justify-start mt-1"
                >
                  <span className="mr-2">{department.linkText}</span>
                  <svg
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
