// src/components/congress/homepage/Homepage.js
"use client";

import React from "react";
import Link from "next/link";
import Announcement from "./Announcement";
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from 'react';


const QuickLinkCards = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="grid grid-cols-2 gap-6">
        {quickLinks.map((link, index) => {
          const CardContent = (
            <div className="group flex flex-col relative overflow-hidden w-full min-h-60">
              <img
                src={link.imageSrc}
                alt={link.title}
                className="w-full aspect-[4/3] object-cover mb-4"
              />
              <div className="flex justify-between items-center py-2">
                <h3 className="font-semibold text-lg text-lassonde-grey">
                  {link.title}
                </h3>
                <ArrowRight className="ml-2 h-8 w-8 text-lassonde-grey" />
              </div>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-0 h-1 w-0 bg-lassonde-teal transition-all duration-300 group-hover:w-full"></span>
            </div>
          );

          return link.external ? (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardContent}
            </a>
          ) : (
            <Link key={index} href={link.link}>
              {CardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const quickLinks = [
  {
    imageSrc: "/images/congress/house-of-delegates.png",
    title: "House of Delegates",
    link: "/congress/house-of-delegates",
    external: false,
  },
  {
    imageSrc: "/images/congress/senate.png",
    title: "Senate",
    link: "/congress/senate",
    external: false,
  },
  {
    imageSrc: "/images/congress/committee.png",
    title: "Committees",
    link: "/congress/committees",
    external: false,
  },
  {
    imageSrc: "/images/congress/bills-and-resolutions.png",
    title: "Bills & Resolutions",
    link: "https://docs.google.com/spreadsheets/d/1G4J-osCqip0KijyExAd2JaJjEH1Fa5bZCdDGx7oTSrQ/edit?gid=0#gid=0",
    external: true,
  },
];

const Links = () => {
  return (
    <section>
      <h2 className="text-lg md:text-xl text-lassonde-grey font-bold mb-4">Quick Links</h2>
      <QuickLinkCards />
    </section>
  );
};

const linksByDate = {
  "August 3, 2025": {
    house: [
      { title: "Agenda & minutes", url: "/house/agenda-aug3-2025" },
      { title: "Documents", url: "/house/docs-aug3-2025" },
    ],
    senate: [
      { title: "Agenda & minutes", url: "/senate/agenda-aug3-2025" },
      { title: "Documents", url: "/senate/docs-aug3-2025" },
    ],
  },
  "August 2, 2025": {
    house: [
      { title: "Agenda & minutes", url: "/house/agenda-aug2-2025" },
      { title: "Documents", url: "/house/docs-aug2-2025" },
    ],
    senate: [
      { title: "Agenda & minutes", url: "/senate/agenda-aug2-2025" },
      { title: "Documents", url: "/senate/docs-aug2-2025" },
    ],
  },
  "July 31, 2024": {
    house: [
      { title: "Agenda & minutes", url: "/house/agenda-july31-2024" },
      { title: "Documents", url: "/house/summary-july31-2024" },
    ],
    senate: [
      { title: "Agenda & minutes", url: "/senate/agenda-july31-2024" },
      { title: "Documents", url: "/senate/summary-july31-2024" },
    ],
  },
};

const dates = [
    "August 3, 2025",
    "August 2, 2025",
    "July 31, 2024",
  ];

const PreviousMeetings = () => {
  const [selectedDate, setSelectedDate] = useState("August 3, 2025");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <section className="relative py-11 text-lassonde-grey px-5 lg:px-0">
      <div className="grid lg:grid-cols-10 gap-9">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-3 mb-5 relative">
          <h4 className="text-2xl mb-3">Previous sittings</h4>

          {/* Dropdown Button */}
          <button
            className="button button--link  text-xl flex items-center justify-between w-full border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedDate}</span>
            <ChevronDown
              className={`ml-2 h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute w-full mt-2 bg-white border border-gray-200 rounded-md z-10">
              {/* Year Selector with Arrows */}
              <li className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-gray-50">
                <button
                  onClick={() => setSelectedYear((prev) => String(Number(prev) - 1))}
                  className="p-1 rounded-md hover:bg-gray-200 transition"
                >
                  ←
                </button>

                <span className="font-semibold text-gray-700">{selectedYear}</span>

                <button
                  onClick={() => setSelectedYear((prev) => String(Number(prev) + 1))}
                  className="p-1 rounded-md hover:bg-gray-200 transition"
                >
                  →
                </button>
              </li>

              {/* Filtered date list */}
              {dates
                .filter((date) => date.includes(selectedYear))
                .map((date) => (
                  <li key={date}>
                    <button
                      className={`w-full text-left px-4 py-2 hover:bg-lassonde-yellow/10 ${selectedDate === date ? "font-semibold text-lassonde-blue" : ""
                        }`}
                      onClick={() => {
                        setSelectedDate(date);
                        setIsOpen(false);
                      }}
                    >
                      {date}
                    </button>
                  </li>
                ))}

            </ul>
          )}
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col mb-12">
            {selectedDate && linksByDate[selectedDate] ? (
              <>
                <h3 className="text-xl mb-3">House of Delegates</h3>
                <ul className="divide-y divide-gray-200">
                  {linksByDate[selectedDate].house.map((item, i) => (
                    <li key={i} className="py-4">
                      <a
                        href={item.url}
                        className="flex justify-between items-center hover:text-lassonde-blue hover:underline"
                      >
                        <span>{item.title}</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl my-3">Senate</h3>
                <ul className="divide-y divide-gray-200">
                  {linksByDate[selectedDate].senate.map((item, i) => (
                    <li key={i} className="py-4">
                      <a
                        href={item.url}
                        className="flex justify-between items-center hover:text-lassonde-blue hover:underline"
                      >
                        <span>{item.title}</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-500 italic">Select a date to view resources</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

const UpcomingActivity = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-9">
        {/* Header */}
        <div className="relative col-span-auto lg:col-span-3 mb-5">
          <h2 className="mb-3 text-3xl font-bold text-lassonde-grey">
            Upcoming activity
          </h2>
        </div>

        {/* Activity Cards */}
        <div className="col-span-10 lg:col-span-7">
          {upcomingActivities.map((activity, index) => (
            <a
              key={index}
              href={activity.link}
              className={`group flex flex-row relative overflow-hidden mb-5 bg-white`}
            >
              {/* Left: Image + Date Overlay */}
              <div
                className={`w-1/5 md:w-2/5 relative flex flex-shrink-0 items-center justify-center text-white py-10 border-r border-gray-200 bg-${activity.color} `}
              >
                <div className={`flex flex-col items-center justify-center w-full`}>
                  <span className="text-xs md:text-base uppercase">
                    {activity.month}
                  </span>
                  <span className="text-3xl md:text-4xl">
                    {activity.date}
                  </span>
                </div>
              </div>

              {/* Right: Text Content */}
              <div className="flex flex-col flex-grow relative py-5 p-5 md:w-3/5 text-lassonde-grey">
                <h3 className="order-2 mb-3 font-semibold">{activity.chamber}</h3>

                <p className="order-1 text-sm mb-3">
                  <span className={`font-semibold inline-flex items-center text-${activity.color}`}>
                    {activity.type}
                  </span>
                  <span> | All day</span>
                </p>

                <p className="order-3 mb-3 hidden md:block">{activity.description}</p>

                {/* See Details */}
                <div className="order-4 hidden md:flex justify-end mt-auto">
                  <span className="flex items-center text-lassonde-blue hover:underline">
                    <span className="m-0">See details</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </div>

                {/* Hover underline animation */}
                <hr className="absolute bottom-0 left-0 w-0 h-1 border-0 block bg-lassonde-blue group-hover:w-full transition-all duration-150 ease-out" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const upcomingActivities = [
  {
    date: "11",
    month: "October",
    chamber: "Delegates delegate",
    description: "Details of the Legislative Assembly sitting day on 11 October 2025.",
    type: "Sitting",
    color: "delegate-green",
    link: "/events/la-sittings/2025/14-october",
  },
  {
    date: "11",
    month: "October",
    chamber: "Senators senate",
    description: "Details of the Legislative Council sitting day on 11 October 2025.",
    type: "Sitting",
    color: "senate-red",
    link: "/events/lc-sittings/2025/14-october",
  },
];


const ParliamentaryActivity = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const tabs = [
    { id: "upcoming", label: "Upcoming activity" },
    { id: "past", label: "Previous meetings" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-lassonde-grey mb-6">

        <button
          className={` 
            relative px-4 py-2 text-lassonde-grey font-medium 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-lassonde-blue after:transition-all after:duration-300
            ${activeTab === "upcoming"
              ? "border-b-2 border-lassonde-blue font-bold"
              : "after:w-0 hover:after:w-full"
            }`}
          onClick={() =>
            setActiveTab("upcoming")

          }
        >
          Upcoming activity
        </button>

        <button
          className={` 
            relative px-4 py-2 text-lassonde-grey font-medium
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-lassonde-blue after:transition-all after:duration-300
            ${activeTab === "past"
              ? "border-b-2 border-lassonde-blue font-bold"
              : "after:w-0 hover:after:w-full"
            }`}
          onClick={() => setActiveTab("past")}
        >
          Previous meetings
        </button>

      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "upcoming" && (
          <div>
            <UpcomingActivity />
          </div>
        )}

        {activeTab === "past" && (
          <div>
            {/* Replace this with your real past meetings content */}
            <PreviousMeetings />
          </div>
        )}
      </div>
    </div>
  );
}

const resources = [
  {
    title: "Agenda & Minutes",
    link: "/congress/house-of-delegates",
    external: false,
  },
  {
    title: "Order Paper",
    link: "/congress/senate",
    external: false,
  },
  {
    title: "Questions & Responses",
    link: "/congress/committees",
    external: false,
  },
  {
    title: "Rules of Order",
    link: "/congress/committees",
    external: false,
  },
  {
    title: "Statistics",
    link: "/congress/committees",
    external: false,
  },
  {
    title: "Meeting Guide For Visitors",
    link: "/congress/committees",
    external: false,
  },
];

const Resources = () => {
  return (
    <div>
      <h2 className="text-lg md:text-xl text-lassonde-grey font-bold mb-4">Resources</h2>

      <div className="max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-3 gap-6">
          {resources.map((link, index) => {
            const CardContent = (
              <div className="group flex flex-col relative overflow-hidden w-full min-h-60 bg-neutral-100 p-4">
                <div className="flex justify-between items-center py-2">
                  <h3 className="font-semibold text-lg text-lassonde-grey">
                    {link.title}
                  </h3>
                  <ArrowRight className="absolute bottom-4 right-4 ml-2 h-8 w-8 text-lassonde-grey" />
                </div>
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-0 h-1 w-0 bg-lassonde-maroon transition-all duration-300 group-hover:w-full"></span>
              </div>
            );

            return link.external ? (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <Link key={index} href={link.link}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const MainContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <ParliamentaryActivity />
      <Links />
      <Resources />
    </div>
  );
};

export default MainContent;
